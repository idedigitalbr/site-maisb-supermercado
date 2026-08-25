# Changelog

## 2026-08-25

- **Padronização Universal de Tipografia & Hierarquia Visual (`src/css/main.css`, `src/css/sections.css`, `index.html`)**:
  - **Headlines (H2)**: Unificados para `38px`, `font-weight: 700` (Bold), `line-height: 1.15`, `letter-spacing: -0.02em` em todas as seções do site, preservando com precisão a distinção entre seções **Serifadas** (`Sobre`, `Depoimentos`, `Clube+ Fidelidade`, `WhatsApp`, `Nossas Unidades`) e seções **Sem Serifa** (`Ofertas da Semana`, `FAQ`).
  - **Destaque Cromático de Palavras-Chave nos Headlines**:
    - **Seções em Fundo Claro**: Destaque com span em **Vermelho** (`#BB2E2C` / `.txt-red`) nas seções `Sobre`, `Ofertas da Semana`, `Clube+ Fidelidade` e `FAQ`.
    - **Seções em Fundo Dark**: Destaque com span em **Amarelo Queimado / Dourado** (`#DDA712` / `.txt-gold`) nas seções `Depoimentos`, `WhatsApp` e `Nossas Unidades`.
  - **Tagzinhas (Kickers / Eyebrows)**: Padronizadas universalmente com a classe `.sub-gold` para `13px`, `font-weight: 700` (Bold), `line-height: 20px`, `letter-spacing: 2px`, `text-transform: uppercase` na cor dourada da marca (`#DDA712`).
  - **Textos de Apoio / Parágrafos**: Calibrados para `15px`, `font-weight: 400` (Regular), `line-height: 25px` em `DM Sans`, com cores de alto contraste para fundos claros (`#555` / `#666`) e fundos escuros (`rgba(255,255,255,0.75)` / `#aaa`).
  - **Responsividade**: Variáveis CSS dinâmicas (`--h2-size`, `--tag-size`, `--p-size`, `--p-lh`) ajustadas de forma fluida para telas menores que 768px (`28px` H2, `12px` tag, `14px` texto) e 480px (`26px` H2, `11.5px` tag, `13.5px` texto).

- **Substituição da Seção Encarte Digital pela Seção Clube+ Fidelidade (`index.html`, `src/css/main.css`)**:
  - Seção antiga de Encarte Digital (ANEXO 1) substituída completamente pela nova seção **Clube+ Fidelidade** fiel ao layout visual do ANEXO 2.
  - **Coluna Esquerda**: Tag `CLUBE+ FIDELIDADE`, título em tipografia serifada de alto contraste com destaque em vermelho (*"Mais vantagens para você, todos os dias."*), texto descritivo com destaque no `+B`, lista com 4 benefícios em divisórias sutis e ícones dourados (`Descontos especiais`, `Cashback`, `Eventos exclusivos`, `Prêmios incríveis`), botões de download do app para **Android** (Google Play) e **iOS** (App Store) com badges coloridos e microcopy inferior (*"✦ Baixe. Cadastre-se. Ative. Aproveite."*).
  - **Coluna Direita**: Utilização da imagem oficial `assets/Page/APP CLUBE +B FIDELIDADE (1)-optimized.webp` estendendo-se em 100% da altura do card e colada na extremidade direita com cantos arredondados contidos.
  - **Responsividade**: Adaptação para Desktop (2 colunas lado a lado), Tablet e Mobile com botões touch-friendly e enquadramento equilibrado.
- **Cantos Arredondados em Seções Dark (`src/css/sections.css`, `src/css/main.css`, `depoimentos.html`)**: Aplicado `border-radius: 40px` (e `24px` no mobile) nos cantos superiores e inferiores da seção de Depoimentos Premium (`.testimonials-section-premium`) e nos cantos superiores da seção Nossas Unidades (`.s-unidades`), criando transições suaves com o fundo claro das seções adjacentes.
- **Remoção da Seção Banners Promocionais (`index.html`)**: Removida a seção de carrossel de banners promocionais/ofertas (S7 - `s-banners` / `#clube`) contendo os banners horizontais de vinhos e ofertas da marca.
- **Atualização do FAQ (`index.html`)**: Substituição completa dos textos de perguntas e respostas da seção de dúvidas frequentes (formas de pagamento com cartão crediário próprio, adesão e cadastro do Clube +Fidelidade, horários detalhados por unidade Alcindo Cacela/Plaza/Tapanã e link do Grupo de Ofertas WhatsApp). Ajuste do `max-height` no CSS (`src/css/main.css`) para garantir expansão suave em todas as resoluções.
- **Identidade Visual & Depoimentos (`depoimentos.html`, `index.html`, `src/css/sections.css`)**: Inclusão do logotipo monocromático branco (`LOGO-MAISB-SUPERMERCADO-MONO-WHITE.png`) acima da tag de Depoimentos, substituição dos acentos e destaques vermelhos pelo tom amarelo ouro oficial (`#dda712`), e ajuste da altura da seção para `95vh`.


## 2026-08-11

- **Atualização do Texto da Seção "Depoimentos" (`index.html` & `depoimentos.html`)**: Subtítulo atualizado conforme solicitação ("Clientes que compartilham com os nossos valores. Honestidade, qualidade e cuidado todos os dias.").
- **Atualização do Texto da Seção "Sobre Nós" (`index.html`)**: Texto reduzido e ajustado conforme orientação do cliente ("Desde 2015, o Supermercado Mais Barato nasceu com o propósito de transformar a sua rotina...").

- **Ajustes na Seção Depoimentos Premium (`src/css/sections.css` & `depoimentos.html`)**: Expandida a largura do container para 1280px e os cards 9:16 para 270x480px, aperfeiçoando o alinhamento da grade e enquadramento em tela cheia (100vh).
- **Alinhamento de Tipografia e Justificação**: Ajustado o alinhamento do texto institucional (`.testimonials-subheading` e `.sobre-text p`) com justificativo e calibração de tamanhos/pesos de fonte entre títulos serifados (`Playfair Display`) e fontes da interface (`DM Sans`).


- **Atualização da Imagem de Fundo da Seção WhatsApp (`src/css/main.css`)**: Alterada a imagem de fundo do card da seção WhatsApp (`.wpp-card`) para utilizar a imagem escuro oficial [`bg-depo-dark.webp`](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/assets/Page/S5-depoimentos/bg-depo-dark.webp).

- **Correção da Integração Visual na Home (`index.html`)**: Identificada e eliminada a colisão de CSS provocada por um bloco antigo duplicado no arquivo `src/css/sections.css` que sobrescrevia a disposição das colunas (forçando 1440px de container e carrossel na coluna 1). Com a limpeza e aplicação estrita das regras oficiais de `depoimentos.html`, o layout em `index.html` passou a exibir perfeitamente o fundo escuro oficial `bg-depo-dark.webp`, o texto institucional à esquerda e o carrossel 9:16 alinhado à direita.

- **Integração da Seção Premium na Home (`index.html`)**: Removida a seção antiga de depoimentos (`s-depoimentos`) e aplicada a nova versão oficial otimizada (`testimonials-section-premium`) com carrossel 9:16, vídeos WebM, suporte a modal em fullscreen no celular, imagem de fundo `bg-depo-dark.webp` e colunas invertidas (Texto na esquerda, Carrossel na direita).

- **Correção de Corte no Carrossel (`depoimentos.html`)**: Resolvido o travamento da borda lateral do 2º card de vídeo no carrossel. Ajustada a largura do wrapper para `584px` e aplicados respiros laterais flexíveis (`padding: 16px 12px; margin: -16px -12px`) na área de *overflow*, garantindo que as bordas douradas arredondadas e sombras fiquem 100% visíveis e íntegras.

- **Atualização da Imagem de Fundo (`depoimentos.html`)**: Atualizado o plano de fundo da página para o novo arquivo WebP de alta eficiência [`bg-depo-dark.webp`](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/assets/Page/S5-depoimentos/bg-depo-dark.webp) localizado em `assets/Page/S5-depoimentos/`.

- **Inversão de Colunas (`depoimentos.html`)**: Reorganizada a disposição das colunas no grid principal: o bloco de texto institucional foi posicionado na **esquerda** (Coluna 1) e o carrossel de cards de vídeo 9:16 na **direita** (Coluna 2).

- **Imagem de Fundo Oficial Integrada (`depoimentos.html`)**: Aplicada a imagem de fundo oficial da marca [`bg-depoimentos-dark.webp`](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/assets/Page/S5-depoimentos/bg-depoimentos-dark.webp) localizada em `assets/Page/S5-depoimentos/`, substituindo o fundo preto sólido por uma textura escura de iluminação premium.

- **Ajuste Fino de Fidelidade Visual ao Figma (`depoimentos.html`)**: Alinhamento estrito com o print do Figma: carrossel posicionado à esquerda e texto à direita, botão play de vidro escuro com triângulo branco, pill limpo para a tag `DEPOIMENTOS`, vetores decorativos sutilmente traçados em formato de cruz "+B" no fundo, e indicador de paginação (dots) com a primeira bolinha em vermelho.

- **Seção Isolada & Otimizada 16:9 (`depoimentos.html`)**: Remoção de header/footer e calibração fina da altura para enquadramento perfeito no formato de tela 16:9 (Notebooks 1366x768, 1920x1080 e telas 4K) sem necessidade de rolagem vertical. Efeitos de glow neon foram suavizados para um acabamento escuro de luxo discreto, mantendo total responsividade mobile e suporte a swipe por toque.

- **Integração de Vídeos Reais & Otimização WebM (`depoimentos.html`)**: Processados e comprimidos os 4 vídeos reais de depoimentos (`depo-miki-nogani-cliente`, `depo-karina-santos-cliente`, `depo-fabio-cardoso-cliente` e `depo-joao-marcos-cliente`) para formato WebM leve via VP9, reduzindo o tamanho de arquivo em até 85%. Foram extraídas e integradas as capas originais em formato WebP (`thumb-miki-nogani.webp`, `thumb-karina-santos.webp`, `thumb-fabio-cardoso.webp`, `thumb-joao-marcos.webp`) para carregamento instantâneo.

- **Restauração da Seção de Depoimentos Premium (`depoimentos.html`)**: Resgatada e empacotada a versão original e completa da seção de depoimentos premium em um arquivo HTML independente [`depoimentos.html`](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/depoimentos.html). A página conta com topo/rodapé dedicados, grade responsiva com visualização em carrossel de cards verticais (9:16), tags em glassmorphism, player com linha do tempo e volume customizados, navegação por setas/bolinhas e o modal interativo em formato de smartphone.

- **Otimização de Grade & Ajuste Responsivo para Notebooks (S3 SOBRE)**: Reajustado o layout da seção Sobre o Grupo +B em `src/css/main.css` com dimensões inteligentes em pixels/minmax (`minmax(0, 460px) minmax(0, 1fr)`) e compactação proporcional da barra de métricas (`.metrics-bar`). Resolução definitiva do estouro lateral na resolução 1366x768 e garantia de centralização perfeita em telas 1920px Full HD e 4K.

- **Reescrita Focada no Supermercado +B & Cliente Final**:
  - **Seção Sobre (S3 SOBRE)**: Reestruturada totalmente alinhada à tagline oficial (*"Cada dia melhor pra você. O supermercado com a melhor experiência de compra."*). Remoção de clichês como "frescor/fresquinho" e foco na evolução constante das lojas, atendimento de qualidade, praticidade, ambiente acolhedor e ofertas reais.
  - **Seção Depoimentos (S5)**: Texto descritivo ajustado para enfatizar a satisfação dos clientes do supermercado no seu dia a dia.
  - **Seção Dúvidas Frequentes (S8 FAQ)**: Perguntas e respostas reestruturadas para responder diretamente a dúvidas de clientes finais (Formas de pagamento aceitas, Clube +Fidelidade, Horários de funcionamento e Recebimento de ofertas no WhatsApp), substituindo os itens corporativos/fornecedores/ouvidoria.
  - **Rodapé (S11 FOOTER)**: Copyright atualizado para **"Supermercado +B"**.

- **Grupo de Ofertas (Âncora WhatsApp)**: Ajustado o link **"Grupo de Ofertas"** da barra superior (topbar) em [`index.html`](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/index.html) para rolar diretamente até a seção **CTA WhatsApp** (`#grupo-wpp` - "Receba Ofertas no WhatsApp").
- **Redes Sociais**: Atualização dos links oficiais do Instagram (`https://www.instagram.com/maisbsupermercados/`), Facebook (`https://www.facebook.com/MaisBsupermercados/`) e YouTube (`https://www.youtube.com/channel/UC_5InPLuERhTQ5wnIeS480g`) no topo (topbar) e rodapé (footer) do site ([`index.html`](file:///g:/Meu%20Drive/.PROJETOS/Sites%20Institucionais/site-maisb-supermercados/index.html)), configurando abertura em nova aba com `target="_blank"` e inclusão do ícone do YouTube no rodapé.
- **Trabalhe Conosco**: Atualização do link **"Trabalhe Conosco"** no subheader (topbar) para o portal de vagas oficial: `https://grupomaisbarato.portaldetalentos.senior.com.br/` com abertura em nova aba (`target="_blank"`).

- **Proporção das Colunas (S3 SOBRE)**: Ajustada a proporção do grid da seção Sobre o Grupo +B em `src/css/main.css` (`grid-template-columns: 590fr 1350fr`) para respeitar com precisão cirúrgica a medição de referência de **590px (Texto ~30%) vs 1350px (Visual ~70%)**, expandindo o mosaico de fotos e a barra de métricas.
- **Clube +Fidelidade & Google Play**: Atualização dos links e botões referentes ao **Clube +Fidelidade** (Header, Banner Hero 1, Card de Categoria S2 e ícone Google Play no Rodapé) para direcionar diretamente para o aplicativo oficial na Google Play Store (`https://play.google.com/store/apps/details?id=com.intellisys.grupomaisbarato&hl=pt_BR`) em nova aba (`target="_blank"`).
- **Subheader (Topbar Links)**: Adição dos links **"Vendas no Atacado"**, **"Crediário"** e **"+B Run"** na barra superior após **"Encarte Digital"**, direcionando para o Linktree oficial `https://linktr.ee/maisbsupermercado` com abertura em nova aba (`target="_blank"`).
- **Links Oficiais**: Atualização dos destinos dos botões **"Contatos"** (Header) e **"Ver encarte digital"** (Seção Encarte Digital) para o Linktree oficial: `https://linktr.ee/maisbsupermercado` com abertura em nova aba (`target="_blank"`).
- **Seção Sobre o Grupo +B (S3 SOBRE)**: Restaurada a barra de métricas (`.metrics-bar`) idêntica à imagem de referência visual (`S3 SOBRE.png`).
- **Métricas e Textos**: Ajustada a primeira métrica para `+10 MIL M²` / `Área operacional` e alinhadas as demais (`+500 Colaboradores`, `+20 MIL Itens no sortimento`, `+100 MIL Clientes atendidos/mês`).
- **Ícones Vetoriais Dourados**: Restaurados os 4 ícones em linhas douradas `#E5C158` (Fachada de loja, Selo de colaborador, Cesto de compras e Selo de clientes).
- **Estilização Visual**: Aplicado fundo escuro `#121214`, borda dourada `2px solid #E5C158`, cantos arredondados `24px` e divisores verticais nítidos.

## 2026-08-10

- **Seção de Categorias (S2-cards)**: Substituição do card "Adega & Bebidas" pela nova categoria **"Lanchonete"**, utilizando a fotografia `lanchonet.webp` (`./assets/Fotografias/09_Lanchonete/lanchonet.webp`) e ícone correspondente.
- **Seção 4 (Campanhas & Ofertas da Semana)**: Centralização perfeita da tipografia do título (`Ofertas que rendem mais pra você.`) e subtítulo (`CAMPANHAS DA SEMANA`), com o link `Ver todas as campanhas →` alinhado à direita no desktop e responsivo no mobile.
- Reordenação estrita dos 4 cards verticais de acordo com a imagem oficial de referência (`card-semana (2).webp` [Gold], `card-semana (1).webp` [Salada], `card-semana (3).webp` [Açougue], `card-semana (4).webp` [Peixaria]).
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

