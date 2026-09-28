/* ============================================================================
   Pee Poo Bark: the bespoke movement.
   The scroll-craft engine publishes each act's scroll progress as --sc-p
   (0 at the start of the act, 1 at the end). This file reads it and moves
   two things the engine does not know about:

     1. The hero: Pee, Poo and Bark drift apart at three different rates, so
        the lettering has depth. On a desktop they also lean with the mouse.
     2. The rewrite: each word of the hallway sign is struck through with a
        brush stroke, then the dog's word lands on top of it.
   ========================================================================== */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

  function progress(act) {
    var v = parseFloat(act.style.getPropertyValue('--sc-p'));
    return isNaN(v) ? 0 : v;
  }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function ramp(p, from, to) { return clamp01((p - from) / (to - from)); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function onScreen(el) {
    var r = el.getBoundingClientRect();
    return r.bottom > -50 && r.top < innerHeight + 50;
  }

  /* ---------------------------------------------------------------- hero */
  var hero = document.querySelector('.hero');
  var heroWords = hero ? Array.prototype.slice.call(hero.querySelectorAll('.hero__w')) : [];
  // Where each word travels by the end of the hero (vw, vh, scale), and how
  // strongly it follows the pointer. Pee recedes, Bark comes towards you.
  var heroMoves = {
    pee:  { x: -3, y: -7, s: 0.94, lean: 0.35 },
    poo:  { x:  0, y: -2, s: 1.00, lean: 0.6 },
    bark: { x:  4, y:  6, s: 1.12, lean: 1 }
  };
  var pointer = { x: 0, y: 0 }, lean = { x: 0, y: 0 };
  if (finePointer && !reduce) {
    addEventListener('pointermove', function (e) {
      pointer.x = e.clientX / innerWidth - 0.5;
      pointer.y = e.clientY / innerHeight - 0.5;
    }, { passive: true });
  }

  function drawHero() {
    if (!hero || reduce || !onScreen(hero)) return;
    var t = easeOut(progress(hero));
    lean.x += (pointer.x - lean.x) * 0.08;
    lean.y += (pointer.y - lean.y) * 0.08;
    heroWords.forEach(function (w) {
      var key = w.classList.contains('hero__w--pee') ? 'pee'
              : w.classList.contains('hero__w--poo') ? 'poo' : 'bark';
      var m = heroMoves[key];
      var px = -lean.x * 36 * m.lean, py = -lean.y * 24 * m.lean;
      w.style.transform =
        'translate3d(calc(' + (m.x * t).toFixed(3) + 'vw + ' + px.toFixed(1) + 'px), calc(' +
        (m.y * t).toFixed(3) + 'vh + ' + py.toFixed(1) + 'px), 0) scale(' +
        (1 + (m.s - 1) * t).toFixed(4) + ')';
    });
  }

  /* ------------------------------------------------------------- rewrite */
  var rewrite = document.querySelector('.rewrite');
  var rows = rewrite ? Array.prototype.slice.call(rewrite.querySelectorAll('.sign__row')) : [];
  var flip = rewrite ? rewrite.querySelector('.rewrite__flip') : null;
  // Where in the act each word's turn starts. The first tenth is quiet so
  // the sign is read whole before anything happens to it.
  var starts = [0.10, 0.35, 0.60];

  function drawRewrite() {
    if (!rewrite || !onScreen(rewrite)) return;
    var p = progress(rewrite);
    rows.forEach(function (row, i) {
      var s = starts[i];
      var strike = easeOut(ramp(p, s, s + 0.09));
      var land = easeOut(ramp(p, s + 0.08, s + 0.15));
      row.querySelector('.sign__strike').style.clipPath = 'inset(-50% ' + ((1 - strike) * 102).toFixed(2) + '% -50% -2%)';
      row.querySelector('.sign__word').style.opacity = (1 - 0.62 * ramp(p, s + 0.07, s + 0.14)).toFixed(3);
      var dog = row.querySelector('.sign__dog');
      dog.style.opacity = land.toFixed(3);
      dog.style.transform = reduce ? '' : 'scale(' + (1.35 - 0.35 * land).toFixed(4) + ')';
    });
    if (flip) flip.style.opacity = easeOut(ramp(p, 0.76, 0.86)).toFixed(3);
  }

  function frame() {
    drawHero();
    drawRewrite();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
