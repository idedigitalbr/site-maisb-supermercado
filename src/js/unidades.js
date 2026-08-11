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
    subbrands: ["SUPERMERCADOS +B", "THE WINE EXPERIENCE", "+B FARMA"],
    thumbLocal: "./assets/Fotografias/01_Fachadas/unid-alcindo-foto-de-fachada-da-loja.webp",
    thumbOnline: "./assets/Fotografias/01_Fachadas/unid-alcindo-foto-de-fachada-da-loja.webp"
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
    thumbOnline: "./assets/Fotografias/01_Fachadas/unid-tapana-foto-de-fachada-frontal-da-loja.webp"
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
    thumbOnline: "./assets/Fotografias/01_Fachadas/unid-plaza-foto-de-fachada-vila-plaza.webp"
  }
];

let map = null;
const markersMap = {};

// Criar Pin SVG Customizado do +B (Fundo Preto com Gradiente Ouro)
function createCustomPinIcon(unit) {
  return L.divIcon({
    className: `custom-map-pin-container pin-${unit.id}`,
    html: `
      <div class="custom-pin-wrapper" id="pin-wrapper-${unit.id}" style="cursor:pointer;">
        <svg class="custom-pin-svg" width="36" height="48" viewBox="0 0 40 54" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gold-grad-${unit.id}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFF099"/>
              <stop offset="50%" stop-color="#F5C400"/>
              <stop offset="100%" stop-color="#C59B27"/>
            </linearGradient>
          </defs>
          <path class="pin-base-path" d="M20 0C8.95 0 0 8.95 0 20c0 14.5 18.2 32.2 19.1 33.1a1.4 1.4 0 0 0 1.8 0C21.8 52.2 40 34.5 40 20 40 8.95 31.05 0 20 0z" fill="#0C0C0D" stroke="#DDA712" stroke-width="1.5" />
          <circle cx="20" cy="20" r="13" fill="#050505" />
          <text x="20" y="25" font-family="'DM Sans', sans-serif" font-size="14" font-weight="900" font-style="italic" fill="url(#gold-grad-${unit.id})" text-anchor="middle">+B</text>
        </svg>
      </div>
    `,
    iconSize: [36, 48],
    iconAnchor: [18, 48]
  });
}

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

    const cardHTML = `
      <div class="unit-card" id="card-${unit.id}" onclick="selectUnit('${unit.id}')">
        <div class="unit-card-thumb">
          <img src="${unit.thumbLocal}" alt="${unit.name}" onerror="this.onerror=null; this.src='${unit.thumbOnline}';">
        </div>
        <div class="unit-card-info">
          <div class="unit-card-title">
            <h3>${unit.name}</h3>
            <span class="unit-rating">★ ${unit.rating.toString().replace('.', ',')}</span>
          </div>
          <div class="unit-tags">${subbrandsHTML}</div>
          <p class="unit-address">&map; ${unit.address}</p>
          <a href="${unit.googleMapsUrl}" target="_blank" rel="noopener" class="btn-maps" onclick="event.stopPropagation();">VER NO GOOGLE MAPS</a>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Inicializar Mapa Leaflet
function initMap() {
  const mapContainer = document.getElementById('map') || document.getElementById('teaser-unidades-map');
  if (!mapContainer || typeof L === 'undefined') return;

  map = L.map(mapContainer.id, {
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

  if (map) {
    map.flyTo(unit.coords, 15, { duration: 1.2 });
  }

  document.querySelectorAll('.unit-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById(`card-${unitId}`);
  if (activeCard) {
    activeCard.classList.add('active');
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
