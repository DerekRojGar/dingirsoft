/* ============================================================
   modal.js — Modal data, open/close logic, keyboard & overlay
   ============================================================ */

const modalData = {

  /* ── Services ──────────────────────────────────────────── */
  'svc-1': {
    tag:   'Servicio',
    title: 'Automatización de Procesos',
    body: `
      <p>Convertimos tus flujos manuales en procesos automáticos que funcionan solos.
         Si lo haces a mano más de tres veces a la semana, hay una automatización esperando hacerse.</p>
      <ul>
        <li>Reportes y resúmenes automáticos programados</li>
        <li>Notificaciones y alertas por email y WhatsApp</li>
        <li>Sincronización entre plataformas (ERP, CRM, Sheets)</li>
        <li>Flujos de trabajo con n8n, Make o código propio</li>
        <li>Integración entre sistemas vía API o webhooks</li>
      </ul>
      <div class="modal-tags">
        <span>n8n</span><span>Python</span><span>REST APIs</span><span>Webhooks</span><span>WhatsApp API</span>
      </div>`
  },
  'svc-2': {
    tag:   'Servicio',
    title: 'Agentes Inteligentes',
    body: `
      <p>Diseñamos y desplegamos agentes con inteligencia artificial que atienden clientes,
         procesan información y ejecutan tareas complejas en tiempo real, las 24 horas del día.</p>
      <ul>
        <li>Agentes conversacionales para WhatsApp, web y más</li>
        <li>Procesamiento de documentos e información no estructurada</li>
        <li>RAG sobre tus datos internos (catálogos, FAQs, manuales)</li>
        <li>Escalado inteligente a agente humano cuando se requiere</li>
        <li>Integración con tus sistemas actuales vía API</li>
      </ul>
      <div class="modal-tags">
        <span>OpenAI</span><span>LangChain</span><span>n8n</span><span>Supabase</span><span>WhatsApp API</span>
      </div>`
  },
  'svc-3': {
    tag:   'Servicio',
    title: 'Desarrollo Web',
    body: `
      <p>Sistemas web hechos exactamente para tu operación. No plantillas genéricas —
         cada proyecto parte de entender cómo funciona tu negocio.</p>
      <ul>
        <li>ERPs ligeros y sistemas de gestión interna</li>
        <li>Portales de clientes y paneles administrativos</li>
        <li>Dashboards con métricas en tiempo real</li>
        <li>Landing pages y sitios corporativos de alto impacto</li>
        <li>Integraciones con APIs, pagos y servicios externos</li>
      </ul>
      <div class="modal-tags">
        <span>React</span><span>ASP.NET Core</span><span>Node.js</span><span>PostgreSQL</span><span>Docker</span>
      </div>`
  },
  'svc-4': {
    tag:   'Servicio',
    title: 'Desarrollo Móvil',
    body: `
      <p>Apps iOS y Android que se integran a tus procesos y que tus usuarios realmente quieren usar.
         Nativas, híbridas o PWA según tu presupuesto y necesidad.</p>
      <ul>
        <li>Apps híbridas con React Native y .NET MAUI</li>
        <li>PWA — funciona como app sin necesidad de instalar</li>
        <li>Notificaciones push y modo offline</li>
        <li>Publicación en App Store y Google Play</li>
        <li>Integración con backend y servicios de la empresa</li>
      </ul>
      <div class="modal-tags">
        <span>React Native</span><span>.NET MAUI</span><span>PWA</span><span>Firebase</span>
      </div>`
  },

  /* ── Solutions ─────────────────────────────────────────── */
  'proj-1': {
    tag:   'Solución',
    title: 'Control de Inventario',
    body: `
      <p>Sistema web para gestión de stock en tiempo real. Pensado para negocios con múltiples
         productos o sucursales que necesitan visibilidad y control sin complicaciones.</p>
      <ul>
        <li>Entradas y salidas de mercancía con historial</li>
        <li>Alertas automáticas de stock mínimo</li>
        <li>Reportes de movimientos y auditorías</li>
        <li>Multi-sucursal con sincronización en tiempo real</li>
        <li>Acceso desde cualquier navegador</li>
      </ul>
      <div class="modal-tags">
        <span>ASP.NET Core</span><span>React</span><span>PostgreSQL</span><span>Docker</span>
      </div>`
  },
  'proj-2': {
    tag:   'Solución',
    title: 'Punto de Venta POS',
    body: `
      <p>Sistema POS ligero para registrar ventas rápidamente, controlar caja y emitir tickets
         desde cualquier dispositivo — tablet, laptop o smartphone.</p>
      <ul>
        <li>Registro de ventas con búsqueda de productos</li>
        <li>Control de caja: apertura, corte y arqueo</li>
        <li>Emisión de tickets y facturas en PDF</li>
        <li>Integración con módulo de inventario</li>
        <li>Reportes de ventas por día, semana o mes</li>
      </ul>
      <div class="modal-tags">
        <span>React</span><span>Node.js</span><span>MySQL</span><span>PWA</span>
      </div>`
  },
  'proj-3': {
    tag:   'Solución',
    title: 'Agente Inteligente con n8n',
    body: `
      <p>Flujo automatizado con IA que atiende consultas de clientes, agenda citas y deriva
         casos complejos a un humano, sin escribir código adicional cada vez que cambias el proceso.</p>
      <ul>
        <li>Respuestas automáticas a preguntas frecuentes</li>
        <li>Agendamiento de citas con Google Calendar</li>
        <li>Captura de leads y registro en CRM</li>
        <li>Escalado a agente humano con historial de conversación</li>
        <li>Panel de métricas y conversaciones activas</li>
      </ul>
      <div class="modal-tags">
        <span>n8n</span><span>OpenAI</span><span>WhatsApp API</span><span>Supabase</span>
      </div>`
  },
  'proj-4': {
    tag:   'Solución',
    title: 'HRMS — Control de Personal',
    body: `
      <p>Plataforma web centralizada para gestión de recursos humanos. Ideal para empresas en
         crecimiento que necesitan orden en la administración de su equipo.</p>
      <ul>
        <li>Alta y baja de empleados con expediente digital</li>
        <li>Control de asistencias y horarios</li>
        <li>Gestión de vacaciones y permisos con aprobaciones</li>
        <li>Cálculo y registro de nómina</li>
        <li>Reportes de rotación y métricas de RR.HH.</li>
      </ul>
      <div class="modal-tags">
        <span>ASP.NET Core</span><span>React</span><span>PostgreSQL</span><span>Docker</span>
      </div>`
  }
};

/* ── Helpers ───────────────────────────────────────────────── */
const overlay   = document.getElementById('modal-overlay');
const modalBox  = document.getElementById('modal-box');
const modalTag  = document.getElementById('modal-tag');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(key) {
  const data = modalData[key];
  if (!data) return;
  modalTag.textContent   = data.tag;
  modalTitle.textContent = data.title;
  modalBody.innerHTML    = data.body;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Event listeners ───────────────────────────────────────── */
document.querySelectorAll('.card-click').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
});

modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
