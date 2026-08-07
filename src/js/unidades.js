// Localizador de Unidades Gold — Grupo +B (Exatamente conforme mapinha.html)

const unitsData = [
  {
    id: "alcindo",
    name: "+B SUPERMERCADOS (ALCINDO CACELA)",
    shortName: "Alcindo Cacela",
    coords: [-1.4516, -48.4779],
    address: "Av. Alcindo Cacela, 1848",
    googleMapsUrl: "https://maps.app.goo.gl/BUbRXApXKgTSYXKG8",
    rating: 4.8,
    subbrands: ["SUPERMERCADOS +B", "THE WINE EXPERIENCE", "+B FARMA"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-alcindo-foto-de-fachada-da-loja.webp",
    thumbOnline: "https://grupomaisb.suporteide.digital/assets/Fotografias/Supermercado%20+B/00_CardHome/1-foto-supermercado.webp"
  },
  {
    id: "tapana",
    name: "+B SUPERMERCADOS (TAPANÃ)",
    shortName: "Tapanã",
    coords: [-1.353381, -48.468711],
    address: "Rod. Tapanã, 597",
    googleMapsUrl: "https://maps.app.goo.gl/aKm2MGrDTNMum9nk7",
    rating: 4.5,
    subbrands: ["SUPERMERCADOS +B", "+B FARMA"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-tapana-foto-de-fachada-frontal-da-loja.webp",
    thumbOnline: "https://grupomaisb.suporteide.digital/assets/Fotografias/Supermercado%20+B/00_CardHome/2-foto-supermercado.webp"
  },
  {
    id: "plaza",
    name: "+B SUPERMERCADOS (PLAZA)",
    shortName: "Plaza",
    coords: [-1.448574, -48.473539],
    address: "Av. Gov. José Malcher, 2388",
    googleMapsUrl: "https://maps.app.goo.gl/wHYfn9JPun4pZ28Z8",
    rating: 4.7,
    subbrands: ["SUPERMERCADOS +B", "VILLA PLAZA", "VILLA PLAZA PARK", "+B FARMA"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-plaza-foto-de-fachada-vila-plaza.webp",
    thumbOnline: "https://grupomaisb.suporteide.digital/assets/Fotografias/Supermercado%20+B/00_CardHome/3-foto-supermercado.webp"
  }
];

let map = null;
const markersMap = {};

// Criar Pin SVG Customizado do +B (Fundo Preto com Gradiente Ouro)
function createCustomPinIcon(unit) {
  return L.divIcon({
    className: `custom-map-pin-container pin-${unit.id}`,
    html: `
      <div class="custom-pin-wrapper" id="pin-wrapper-${unit.id}">
        <svg class="custom-pin-svg" viewBox="0 0 40 54" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gold-grad-${unit.id}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFF099"/>
              <stop offset="50%" stop-color="#F5C400"/>
              <stop offset="100%" stop-color="#C59B27"/>
            </linearGradient>
          </defs>
          <path class="pin-base-path" d="M20 0C8.95 0 0 8.95 0 20c0 14.5 18.2 32.2 19.1 33.1a1.4 1.4 0 0 0 1.8 0C21.8 52.2 40 34.5 40 20 40 8.95 31.05 0 20 0z" fill="#0C0C0D" stroke="#333333" stroke-width="1.2" />
          <circle cx="20" cy="20" r="13" fill="#050505" />
          <text x="20" y="25" font-family="'DM Sans', sans-serif" font-size="14" font-weight="900" font-style="italic" fill="url(#gold-grad-${unit.id})" text-anchor="middle">+B</text>
        </svg>
      </div>
    `,
    iconSize: [40, 54],
    iconAnchor: [20, 54]
  });
}

// Renderizar Lista de Cards Gold
function renderCards(units) {
  const container = document.getElementById('teaser-stores-list-container');
  if (!container) return;
  container.innerHTML = '';

  if (units.length === 0) {
    container.innerHTML = `<p style="color: rgba(255,255,255,0.5); font-size: 0.85rem; padding: 10px;">Nenhuma unidade encontrada.</p>`;
    return;
  }

  units.forEach(unit => {
    const subbrandsHTML = unit.subbrands.join(' <span class="tag-divider">|</span> ');

    const cardHTML = `
      <div class="gold-unit-card" id="card-${unit.id}" onclick="selectUnit('${unit.id}')">
        <div class="unit-card-thumb">
          <img src="${unit.thumbLocal}" alt="${unit.name}" onerror="this.onerror=null; this.src='${unit.thumbOnline}';">
        </div>
        <div class="unit-card-info">
          <div class="unit-card-header">
            <h4 class="unit-card-title">${unit.name}</h4>
            <span class="unit-card-rating">★ ${unit.rating.toString().replace('.', ',')}</span>
          </div>
          <div class="unit-subbrands-inline-row">
            ${subbrandsHTML}
          </div>
          <p class="unit-card-addr">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${unit.address}
          </p>
          <div class="store-card-footer">
            <a href="${unit.googleMapsUrl}" target="_blank" rel="noopener" class="btn-unit-ver-mais" onclick="event.stopPropagation();">VER NO GOOGLE MAPS</a>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Inicializar Mapa Leaflet
function initMap() {
  const mapContainer = document.getElementById('teaser-unidades-map');
  if (!mapContainer || typeof L === 'undefined') return;

  map = L.map('teaser-unidades-map', {
    center: [-1.448, -48.472],
    zoom: 12.5,
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: false
  });

  // Camada de Tiles Suave CartoDB Light
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Ativar zoom por scroll ao interagir
  mapContainer.addEventListener('click', () => map.scrollWheelZoom.enable());
  mapContainer.addEventListener('mouseleave', () => map.scrollWheelZoom.disable());

  // Adicionar Marcadores no Mapa
  unitsData.forEach(unit => {
    const marker = L.marker(unit.coords, {
      icon: createCustomPinIcon(unit)
    }).addTo(map);

    markersMap[unit.id] = marker;

    marker.on('click', () => {
      selectUnit(unit.id);
    });
  });
}

// Selecionar Unidade (Card + Pin no Mapa)
function selectUnit(unitId) {
  const unit = unitsData.find(u => u.id === unitId);
  if (!unit) return;

  // Centralizar Mapa na Loja
  if (map) {
    map.flyTo(unit.coords, 15, { duration: 1.2 });
  }

  // Atualizar classe ativa nos Cards
  document.querySelectorAll('.gold-unit-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById(`card-${unitId}`);
  if (activeCard) {
    activeCard.classList.add('active');
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Atualizar classe ativa nos Pins
  document.querySelectorAll('.custom-pin-wrapper').forEach(pin => pin.classList.remove('active'));
  const activePin = document.getElementById(`pin-wrapper-${unitId}`);
  if (activePin) {
    activePin.classList.add('active');
  }
}

// Lógica da Busca em Tempo Real
function initSearch() {
  const searchInput = document.getElementById('teaser-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    const filtered = unitsData.filter(u => 
      u.name.toLowerCase().includes(query) ||
      u.address.toLowerCase().includes(query) ||
      u.subbrands.some(sb => sb.toLowerCase().includes(query))
    );

    renderCards(filtered);

    // Atualizar visibilidade dos marcadores no mapa
    unitsData.forEach(u => {
      const isMatch = filtered.some(f => f.id === u.id);
      if (markersMap[u.id]) {
        if (isMatch) {
          if (!map.hasLayer(markersMap[u.id])) markersMap[u.id].addTo(map);
        } else {
          if (map.hasLayer(markersMap[u.id])) map.removeLayer(markersMap[u.id]);
        }
      }
    });
  });
}

// Executar ao Carregar a Página
document.addEventListener('DOMContentLoaded', () => {
  renderCards(unitsData);
  initMap();
  initSearch();
});
