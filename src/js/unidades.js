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
          <p class="unit-address"><i data-lucide="map-pin" width="14" height="14" aria-hidden="true"></i> ${unit.address}</p>
          <a href="${unit.googleMapsUrl}" target="_blank" rel="noopener" class="btn-maps" onclick="event.stopPropagation();">VER NO GOOGLE MAPS</a>
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
