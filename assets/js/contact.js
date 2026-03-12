/* ============================================================
   contact.js — Contact form submission
   Supports: n8n webhook, Resend, Formspree, or any REST endpoint.

   Configure WEBHOOK_URL with your actual endpoint before going live.
   ============================================================ */

/* ── Configure your endpoint here ─────────────────────────── */
const WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_OR_EMAIL_ENDPOINT';
/* ─────────────────────────────────────────────────────────── */

const form       = document.getElementById('contact-form');
const statusEl   = document.getElementById('form-status');
const submitBtn  = form ? form.querySelector('.form-submit') : null;

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    /* Collect fields */
    const payload = {
      name:      form.name.value.trim(),
      email:     form.email.value.trim(),
      service:   form.service.value,
      message:   form.message.value.trim(),
      timestamp: new Date().toISOString(),
      source:    window.location.hostname,
    };

    /* Disable button while sending */
    submitBtn.disabled    = true;
    submitBtn.textContent = 'enviando...';
    statusEl.className    = '';
    statusEl.textContent  = '';

    try {
      const res = await fetch(WEBHOOK_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      statusEl.textContent = '// mensaje enviado. te contactamos pronto.';
      statusEl.className   = 'ok';
      form.reset();

    } catch (err) {
      console.error('[contact.js] Error:', err);
      statusEl.textContent = '// error al enviar. intenta de nuevo o escríbenos directo.';
      statusEl.className   = 'err';

    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'enviar mensaje';
    }
  });
}
