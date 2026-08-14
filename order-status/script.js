const STEPS = ["Order Placed","Order Confirmed / Processing","Shipped","Out for Delivery","Delivered"];

const STEP_COLOR = {
  "Order Placed":"amber",
  "Order Confirmed / Processing":"amber",
  "Shipped":"blue",
  "Out for Delivery":"blue",
  "Delivered":"green"
};

const STEP_ICON = {
  "Order Placed":"package",
  "Order Confirmed / Processing":"check-circle-2",
  "Shipped":"truck",
  "Out for Delivery":"truck",
  "Delivered":"check-check"
};

const ORDERS = {
  "NS12346": {
    orderNumber: "NS12346",
    status: "Delivered",
    dateLabel: "Delivered",
    date: "August 13, 2026",
    carrier: "North Star Shipping",
    trackingNumber: "NS1234567890"
  },
  "NS4GRP84": {
    orderNumber: "NS4GRP84",
    status: "Shipped",
    dateLabel: "Estimated delivery",
    date: "August 26, 2026",
    carrier: "North Star Shipping",
    trackingNumber: "NS123456789104"
  }
};

const orderKeys = Object.keys(ORDERS);
let currentKey = orderKeys[0];

const switcherEl = document.getElementById('switcher');
const orderCardEl = document.getElementById('orderCard');
const trackingCardEl = document.getElementById('trackingCard');
const toastEl = document.getElementById('toast');

function renderSwitcher(){
  switcherEl.innerHTML = orderKeys.map(k =>
    `<button data-key="${k}" class="${k === currentKey ? 'active' : ''}">#${k}</button>`
  ).join('');
  switcherEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      currentKey = btn.dataset.key;
      renderAll();
    });
  });
}

function statusPillMarkup(status){
  const color = STEP_COLOR[status];
  return `<span class="status-pill status-${color}"><i data-lucide="${STEP_ICON[status]}"></i>${status}</span>`;
}

function renderOrderCard(order){
  const currentIndex = STEPS.indexOf(order.status);

  const stepsHtml = STEPS.map((step, i)=>{
    const color = STEP_COLOR[step];
    const state = i < currentIndex ? 'done' : (i === currentIndex ? 'current' : '');
    const iconHtml = i <= currentIndex ? `<i data-lucide="${STEP_ICON[step]}"></i>` : '';
    const isLast = i === STEPS.length - 1;
    return `
      <div class="step ${state} c-${color}">
        <div class="step-rail">
          <div class="step-node">${iconHtml}</div>
          ${!isLast ? '<div class="step-line"></div>' : ''}
        </div>
        <div class="step-body">
          <div class="step-label">${step}</div>
          ${state === 'current' ? `<div class="step-meta">${order.dateLabel} — ${order.date}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  orderCardEl.innerHTML = `
    <div class="order-head">
      <div>
        <div class="order-number">ORDER #${order.orderNumber}</div>
        <div class="order-date">${order.dateLabel}: <strong>${order.date}</strong></div>
      </div>
      ${statusPillMarkup(order.status)}
    </div>
    <div class="stepper">${stepsHtml}</div>
  `;
}

function renderTrackingCard(order){
  trackingCardEl.innerHTML = `
    <div class="tracking-title">Tracking Details</div>
    <div class="tracking-row"><span class="label">Carrier</span><span class="value">${order.carrier}</span></div>
    <div class="tracking-row"><span class="label">Tracking Number</span><span class="value">${order.trackingNumber}</span></div>
    <button class="track-btn" id="trackBtn"><i data-lucide="external-link"></i>Track on Carrier Site</button>
  `;
  document.getElementById('trackBtn').addEventListener('click', ()=>{
    toastEl.classList.add('show');
    setTimeout(()=> toastEl.classList.remove('show'), 2200);
  });
}

function renderAll(){
  renderSwitcher();
  const order = ORDERS[currentKey];
  renderOrderCard(order);
  renderTrackingCard(order);
  if(window.lucide) lucide.createIcons();
}

renderAll();