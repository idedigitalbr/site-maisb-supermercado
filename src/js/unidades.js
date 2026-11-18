// Localizador de Unidades Gold — Supermercado Mais B

const unitsData = [
  {
    id: "alcindo",
    name: "+B SUPERMERCADOS (ALCINDO CACELA)",
    shortName: "Alcindo Cacela",
    coords: [-1.4516, -48.4779],
    address: "Av. Alcindo Cacela, 1848",
    googleMapsUrl: "https://maps.app.goo.gl/BUbRXApXKgTSYXKG8",
    rating: 4.8,
    reviewsCount: "1.240",
    subbrands: ["SUPERMERCADOS +B", "THE WINE EXPERIENCE", "+B FARMA"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-alcindo-foto-de-fachada-da-loja.webp",
    thumbOnline: "./assets/Fotografias/01_Fachadas/unid-alcindo-foto-de-fachada-da-loja.webp",
    schedule: {
      0: { label: "domingo", open: "07:00", close: "20:00", text: "07:00–20:00" },
      1: { label: "segunda-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      2: { label: "terça-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      3: { label: "quarta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      4: { label: "quinta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      5: { label: "sexta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      6: { label: "sábado", open: "07:00", close: "22:00", text: "07:00–22:00" }
    }
  },
  {
    id: "tapana",
    name: "+B SUPERMERCADOS (TAPANÃ)",
    shortName: "Tapanã",
    coords: [-1.353381, -48.468711],
    address: "Rod. Tapanã, 597",
    googleMapsUrl: "https://maps.app.goo.gl/aKm2MGrDTNMum9nk7",
    rating: 4.5,
    reviewsCount: "850",
    subbrands: ["SUPERMERCADOS +B", "+B FARMA"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-tapana-foto-de-fachada-frontal-da-loja.webp",
    thumbOnline: "./assets/Fotografias/01_Fachadas/unid-tapana-foto-de-fachada-frontal-da-loja.webp",
    schedule: {
      0: { label: "domingo", open: "08:00", close: "14:00", text: "08:00–14:00" },
      1: { label: "segunda-feira", open: "07:00", close: "21:00", text: "07:00–21:00" },
      2: { label: "terça-feira", open: "07:00", close: "21:00", text: "07:00–21:00" },
      3: { label: "quarta-feira", open: "07:00", close: "21:00", text: "07:00–21:00" },
      4: { label: "quinta-feira", open: "07:00", close: "21:00", text: "07:00–21:00" },
      5: { label: "sexta-feira", open: "07:00", close: "21:00", text: "07:00–21:00" },
      6: { label: "sábado", open: "07:00", close: "21:00", text: "07:00–21:00" }
    }
  },
  {
    id: "plaza",
    name: "+B SUPERMERCADOS (PLAZA)",
    shortName: "Plaza",
    coords: [-1.448574, -48.473539],
    address: "Av. Gov. José Malcher, 2388",
    googleMapsUrl: "https://maps.app.goo.gl/wHYfn9JPun4pZ28Z8",
    rating: 4.2,
    reviewsCount: "6.740",
    subbrands: ["SUPERMERCADOS +B", "VILLA PLAZA", "VILLA PLAZA PARK", "+B FARMA"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-plaza-foto-de-fachada-vila-plaza.webp",
    thumbOnline: "./assets/Fotografias/01_Fachadas/unid-plaza-foto-de-fachada-vila-plaza.webp",
    schedule: {
      0: { label: "domingo", open: "07:30", close: "21:00", text: "07:30–21:00" },
      1: { label: "segunda-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      2: { label: "terça-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      3: { label: "quarta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      4: { label: "quinta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      5: { label: "sexta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      6: { label: "sábado", open: "07:00", close: "22:00", text: "07:00–22:00" }
    }
  },
  {
    id: "grao-para",
    name: "+B SUPERMERCADOS (GRÃO-PARÁ)",
    shortName: "Grão-Pará",
    coords: [-1.3916927, -48.4655369],
    address: "Av. Centenário, 1052",
    googleMapsUrl: "https://maps.app.goo.gl/nkMdLwc7DPhA7bpV8",
    rating: 4.2,
    reviewsCount: "13",
    subbrands: ["SUPERMERCADOS +B"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-grao-para-foto-de-fachada-da-loja.webp",
    thumbOnline: "./assets/Fotografias/01_Fachadas/unid-grao-para-foto-de-fachada-da-loja.webp",
    schedule: {
      0: { label: "domingo", open: "07:30", close: "21:00", text: "07:30–21:00" },
      1: { label: "segunda-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      2: { label: "terça-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      3: { label: "quarta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      4: { label: "quinta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      5: { label: "sexta-feira", open: "07:00", close: "22:00", text: "07:00–22:00" },
      6: { label: "sábado", open: "07:00", close: "22:00", text: "07:00–22:00" }
    }
  }
];

// Calcular Status em Tempo Real (Aberto / Fechado)
function getStoreStatus(unit) {
  const now = new Date();
  const day = now.getDay(); // 0 = Dom, 1 = Seg, ..., 6 = Sáb
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const todaySched = unit.schedule[day];
  const [openH, openM] = todaySched.open.split(':').map(Number);
  const [closeH, closeM] = todaySched.close.split(':').map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  let isOpen = false;
  let statusText = '';
  let statusClass = '';

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    isOpen = true;
    statusText = `Aberto · Fecha ${todaySched.close}`;
    statusClass = 'status-open';
  } else if (currentMinutes < openMinutes) {
    isOpen = false;
    statusText = `Fechado · Abre hoje às ${todaySched.open}`;
    statusClass = 'status-closed';
  } else {
    const nextDay = (day + 1) % 7;
    const tomorrowSched = unit.schedule[nextDay];
    isOpen = false;
    statusText = `Fechado · Abre amanhã às ${tomorrowSched.open}`;
    statusClass = 'status-closed';
  }

  return { isOpen, statusText, statusClass, day };
}

// Alternar visualização do Dropdown de Horários
window.toggleHours = function(unitId, event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById(`hours-dropdown-${unitId}`);
  if (!dropdown) return;
  dropdown.classList.toggle('is-open');
};

// Renderizar Lista de Cards Gold
function renderCards(units) {
  const container = document.getElementById('units-list-container') || document.getElementById('teaser-stores-list-container');
  if (!container) return;
  container.innerHTML = '';

  if (units.length === 0) {
    container.innerHTML = `<p style="color: rgba(255,255,255,0.5); font-size: 0.85rem; padding: 10px;">Nenhuma unidade encontrada.</p>`;
    return;
  }

  units.forEach(unit => {
    const subbrandsHTML = unit.subbrands.join(' | ');
    const status = getStoreStatus(unit);

    // Ordem da semana: Segunda a Domingo
    const daysOrder = [1, 2, 3, 4, 5, 6, 0];
    const scheduleRowsHTML = daysOrder.map(d => {
      const item = unit.schedule[d];
      const isToday = status.day === d;
      return `
        <div class="schedule-row ${isToday ? 'is-today' : ''}">
          <span class="sched-day">${item.label}</span>
          <span class="sched-time">${item.text}</span>
        </div>
      `;
    }).join('');

    const cardHTML = `
      <div class="unit-card" id="card-${unit.id}" onclick="selectUnit('${unit.id}')">
        <div class="unit-card-thumb">
          <img src="${unit.thumbLocal}" alt="${unit.name}" onerror="this.onerror=null; this.src='${unit.thumbOnline}';">
        </div>
        <div class="unit-card-info">
          <div class="unit-card-title">
            <h3>${unit.name}</h3>
            <span class="unit-rating" title="${unit.reviewsCount} avaliações no Google">
              ★ ${unit.rating.toString().replace('.', ',')} <span class="unit-reviews-count">(${unit.reviewsCount})</span>
            </span>
          </div>
          <div class="unit-tags">${subbrandsHTML}</div>
          <p class="unit-address"><i data-lucide="map-pin" width="13" height="13" aria-hidden="true"></i> ${unit.address}</p>
          
          <div class="unit-hours" id="hours-dropdown-${unit.id}">
            <div class="unit-hours-trigger" onclick="toggleHours('${unit.id}', event)">
              <i data-lucide="clock" width="13" height="13" aria-hidden="true"></i>
              <span class="hours-status">${status.statusText}</span>
              <i data-lucide="chevron-down" width="12" height="12" class="hours-chevron" aria-hidden="true"></i>
            </div>
            <div class="unit-hours-panel">
              <div class="schedule-grid">
                ${scheduleRowsHTML}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });

  if (window.refreshLucideIcons) window.refreshLucideIcons();
}

// Atualizar o mapa do Google ao selecionar uma unidade.
function updateGoogleMap(unit) {
  const mapFrame = document.getElementById('google-map-embed') || document.getElementById('teaser-google-map-embed');
  if (!mapFrame) return;

  const query = encodeURIComponent(`${unit.name} ${unit.address}, Belém - PA`);
  mapFrame.src = `https://www.google.com/maps?q=${query}&output=embed`;
}

// Selecionar Unidade (Card + Pin no Mapa)
function selectUnit(unitId) {
  const unit = unitsData.find(u => u.id === unitId);
  if (!unit) return;

  updateGoogleMap(unit);

  document.querySelectorAll('.unit-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById(`card-${unitId}`);
  if (activeCard) {
    activeCard.classList.add('active');
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Atualizar e exibir botão 'Como chegar' flutuante sobre o mapa
  const directionsBtn = document.getElementById('map-directions-btn');
  const directionsText = document.getElementById('map-directions-text');
  if (directionsBtn && directionsText) {
    directionsBtn.href = unit.googleMapsUrl;
    directionsText.textContent = `Como chegar em +B Supermercados (${unit.shortName})`;
    directionsBtn.classList.add('is-active');
  }
}

// Lógica da Busca em Tempo Real
function initSearch() {
  const searchInput = document.getElementById('unit-search') || document.getElementById('teaser-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    const filtered = unitsData.filter(u => 
      u.name.toLowerCase().includes(query) ||
      u.address.toLowerCase().includes(query) ||
      u.subbrands.some(sb => sb.toLowerCase().includes(query))
    );

    renderCards(filtered);

  });
}

// Executar ao Carregar a Página
document.addEventListener('DOMContentLoaded', () => {
  renderCards(unitsData);
  initSearch();
});
