/* ============================================================
   matrix.js — Animated matrix rain background
   ============================================================ */

(function () {
  const canvas = document.getElementById('matrix-bg');
  const ctx    = canvas.getContext('2d');
  let W, H, drops;

  function init() {
    W     = canvas.width  = window.innerWidth;
    H     = canvas.height = window.innerHeight;
    drops = Array(Math.floor(W / 16)).fill(1);
  }

  function rain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#00ff41';
    ctx.font      = '14px monospace';

    drops.forEach((y, i) => {
      const ch = String.fromCharCode(0x30A0 + Math.random() * 96);
      ctx.fillText(ch, i * 16, y * 16);
      if (y * 16 > H && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  window.addEventListener('resize', init);
  init();
  setInterval(rain, 45);
})();
