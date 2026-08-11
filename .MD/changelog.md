# Changelog

## 2026-08-10

- **Seção de Categorias (S2-cards)**: Substituição do card "Adega & Bebidas" pela nova categoria **"Lanchonete"**, utilizando a fotografia `lanchonet.png` (`./assets/Fotografias/09_Lanchonete/lanchonet.png`) e ícone correspondente.
- **Seção 4 (Campanhas & Ofertas da Semana)**: Centralização perfeita da tipografia do título (`Ofertas que rendem mais pra você.`) e subtítulo (`CAMPANHAS DA SEMANA`), com o link `Ver todas as campanhas →` alinhado à direita no desktop e responsivo no mobile.
- Reordenação estrita dos 4 cards verticais de acordo com a imagem oficial de referência (`card-semana (2).png` [Gold], `card-semana (1).png` [Salada], `card-semana (3).png` [Açougue], `card-semana (4).png` [Peixaria]).
- Aprimoramento visual em `src/css/main.css`: aplicação de `border-radius: 24px`, elevação suave e micro-animação zoom no hover das imagens.
- **Navegação do Carrossel de Banners (S7)**: Botões de navegação anterior/próximo (`swiper-button-prev` / `swiper-button-next`) atualizados para o estilo círculo escuro sólido (`#141414`) com seta vetorial branca (`#ffffff`), exatamente conforme imagem de referência.

## 2026-08-07

- Integração completa da nova seção **Localizador de Unidades Gold** (`#store-locator-teaser`) inspirada em `mapinha.html` na parte inferior do site principal ([`index.html`](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/index.html)).
- Inclusão do mapa interativo Leaflet.js com marcadores customizados em gota escura com logo **+B** em gradiente dourado.
- Adição da busca em tempo real por endereço/unidade e cards responsivos (`.gold-unit-card`) com avaliação, submarcas e link direto para o Google Maps.
- Aplicação do efeito **Gold Lens-Flare Shimmer** dinâmico na barra superior (`.topbar`) com feixe de luz dourada reluzente.
- Ajuste e alinhamento do topo do mapa com o campo de busca e otimização responsiva para celulares.
- Criação e publicação do repositório privado oficial no GitHub: `idedigitalbr/site-maisb-supermercado` na branch `main` (commit `2cb6a88`).

## 2026-08-03

- Remoção das seções "Conheça as marcas do Grupo +B" (`#marcas`) e "Encontre nossas unidades" (`#store-locator-teaser`) no site do Supermercado +B, com ajuste nos menus de navegação.
- Criação e reposicionamento da seção **Nossas Promoções** (`#promocoes-secao`) com carrossel interativo de banners logo após a seção **Sobre o Grupo**.
- Substituição do rodapé anterior pelo modelo minimalista com efeito ambiental Glow Dourado ([footer-standalone.html](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/footer-standalone.html)), configurando os links oficiais do Instagram, Facebook e os aplicativos do **Clube+** (Google Play Store e Apple App Store).
- Remoção completa do botão "LOGS" (`#changelog-trigger`), estilos CSS e modal popup de logs de atualizações (`#changelog-modal`).
- Configuração da logomarca oficial colorida do rodapé (`logo-supermercados-maisb.webp`) com efeito suave de transição para monocromático no hover (`grayscale`).
- Atualização do texto/slogan abaixo da logo do rodapé para: *"Cada dia melhor pra você. O supermercado com a melhor experiência de compra."*
- Remoção completa da seção **Faça parte do Grupo +B** (`#oportunidades`).
- Alteração do fundo da seção **Depoimentos** (`#depoimentos`) para preto (`#060607`), ajustando tipografia, títulos, badges e divisores para contraste em modo escuro.








## 2026-07-08

- Sincronização inicial automática e mapeamento da estrutura do projeto.

