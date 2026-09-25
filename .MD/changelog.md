# Changelog

## [2.2.0] - 2026-09-25
- **Implementação do Pacote Oficial de Ajustes Solicitados pelo Cliente (Setembro/2026)**:
  - **Ajuste 01 — Seção Sobre Nós (`#sobre`)**:
    - Sobretítulo atualizado para `SOBRE O +B SUPERMERCADOS`.
    - Título principal reescrito e calibrado sem ponto final: `O supermercado com a melhor experiência de compra`.
    - Texto institucional atualizado conforme nova redação: *"Em 2015, o +B Supermercados nasceu com o propósito de transformar a sua rotina. O compromisso diário é oferecer uma estrutura acolhedora, ofertas especiais e cuidado no que faz. Tudo pensado para entregar a melhor experiência aos clientes."*
    - Removida a barra de métricas (`.metrics-bar`) que ficava abaixo da foto.
    - Imagem principal atualizada para a fotografia oficial da fachada da Unidade Plaza (`assets/Fotografias/01_Fachadas/unid-plaza-foto-de-fachada-vila-plaza.webp`).
  - **Ajuste 02 — Seção Depoimentos (`#depoimentos` e `depoimentos.html`)**:
    - Substituição do vídeo do operador de caixa pelo novo depoimento em vídeo de Bob Menezes (`depo-bob-menezes-cliente.mp4` e `depo-bob-menezes-cliente.webm`).
    - Geração de poster/thumbnail oficial em alta definição 9:16 (`thumb-bob-menezes.webp`).
    - Metadados do Card 4 calibrados: Nome *"Bob Menezes"*, Função *"Fotógrafo"*, Duração *"02:12"*.
    - Remoção do ponto final no título da seção em `index.html` e `depoimentos.html`: `A confiança de quem faz parte da nossa história`.
  - **Diretriz de Títulos — Remoção Geral de Ponto Final**:
    - Todos os títulos (`h2`) do site foram auditados e tiveram seus pontos finais removidos (Sobre Nós, Dias da Semana, Depoimentos, Clube Fidelidade e WhatsApp), garantindo conformidade rigorosa com a identidade visual da agência.
  - **Seção Clube +Fidelidade (`#clube`) — Remoção dos Itens Marcados em Vermelho**:
    - Removida a tag superior dourada `CLUBE+ FIDELIDADE`.
    - Título atualizado sem ponto final: `Mais vantagens para você, todos os dias`.
    - Removido o trecho *"no +B"* da descrição (*"Faça parte do Clube+ Fidelidade e aproveite benefícios exclusivos nas suas compras."*).
    - Removida a microcopy/tagline inferior abaixo dos botões (*"Baixe. Cadastre-se. Ative. Aproveite."*).
  - **Seção FAQ (`#faq`) — Resposta do Clube +Fidelidade**:
    - Pergunta 2 atualizada com o texto exato solicitado pelo cliente (*"Você pode baixar gratuitamente o aplicativo do Clube +Fidelidade nas lojas de download, fazer seu cadastro informar para garantir descontos especiais nas suas compras."*).
    - Bloco de alerta mantido com destaque: *"Importante: conclua seu cadastro para garantir todos os benefícios"*.

## [2.1.44] - 2026-09-03
- **Refinamento da Seção WhatsApp S9 (Altura 500px, 100% Contido, Celular no Topo & Mobile Fluido)**:
  - **Dimensão e Altura do Card Contido (`.wpp-card`)**: O card preto agora possui altura exata e elegante de **`500px`** no desktop (`height: 500px; min-height: 500px;`), com `padding: 20px 56px` e `overflow: hidden`, garantindo que **absolutamente nada vaze ou corte fora da seção**.
  - **Eliminação do Vazamento Inferior**: Removida a margem negativa inferior (`margin-bottom: 0`) que empurrava a base do smartphone para fora do card sobre o fundo claro da página.
  - **Celular Encostado no Topo da Seção (`.wpp-right`)**: Posicionado com `align-self: flex-start; margin-top: 10px`, aproximando o smartphone da borda superior com respiro milimétrico, conferindo postura de destaque e equilíbrio harmônico com os textos e o botão da esquerda.
  - **Chassi 3D Completo com 4 Cantos Arredondados (`wpp-animation.css`)**: O smartphone agora possui cantos arredondados contínuos nos 4 lados (`border-radius: 40px` no desktop, `38px` no mobile), com dimensões calibradas em **`290px x 460px`** e sombra realista sem cortes retos na base.
  - **Mobile 100% Responsivo e Fluido**: No mobile (`@media (max-width: 900px)`), o card adapta-se com `height: auto`, `padding: 36px 24px 28px` e smartphone em `height: 480px`, preservando a margem lateral segura e zero overflow horizontal.
  - **Cache-Busters**: Atualizados `main.css?v=39.5` e `wpp-animation.css?v=1.7` em `index.html`.

## [2.1.43] - 2026-09-03
- **Pacote de Ajustes Mobile Refinados (37px Lateral, Carrossel Netflix, Clube Reordenado & WhatsApp Sem Imagem Traseira)**:
  - **Margens das Paredes em 37px**: Padronizado o recuo lateral dos containers mobile (`.container`, `.container-full`, `.testimonials-section-premium > .container`) para exatamente **`37px`**, conferindo respiro generoso e acabamento visual de revista.
  - **Carrossel Netflix de Ofertas da Semana (Anexo 1)**: A seção `#ofertas` foi transformada em um carrossel horizontal de linha única (`display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto; scroll-snap-type: x mandatory`), permitindo deslizar os 4 cards suavemente para o lado com o dedo, eliminando as 2 linhas verticais.
  - **Reordenação do Clube+ Fidelidade (Anexo 2)**: Na versão mobile, a imagem institucional do app e cliente (`.clube-media-mobile`) foi posicionada logo abaixo dos benefícios, fazendo com que os botões de download (Android/iOS) e a tagline fiquem posicionados **DEPOIS** da imagem, preservando a diagramação em 2 colunas no desktop.
  - **Smartphone do WhatsApp Robusto e Sem Imagem Traseira (Anexo 3)**:
    - Eliminada a imagem estática `mockup-whatsapp-metade.webp` que vazava atrás do display.
    - Construído um chassi CSS realista e autônomo com proporções ideais de smartphone (310px x 530px no mobile, 320px x 570px no desktop), bordas com acabamento escuro sofisticado e cantos arredondados, eliminando a tela "fininha" e as sobras visuais.
  - **Tipografia Justificada nas Seções**: Aplicado `text-align: justify; text-justify: inter-word; hyphens: auto;` nos blocos de parágrafos não centralizados (Sobre Nós, descrição do Clube e respostas do FAQ).
  - **Zero Overflow Lateral**: 100% dos testes Playwright aprovados em iPhone SE, iPhone 14 e Android Galaxy (`hasHorizontalScroll: False`).

## [2.1.42] - 2026-09-03
- **Remoção do Badge Slogan e Centralização das Redes Sociais na Topbar Mobile (`index.html`, `termos-e-privacidade.html`, `src/css/main.css`)**:
  - **Remoção do Badge Institucional Mobile**: Eliminado o elemento `.topbar-badge-mobile` (*"⭐ Belém • Cada dia melhor pra você"*) da barra dourada superior nas visualizações mobile.
  - **Centralização Simétrica dos Ícones Sociais**: Os ícones de Instagram, Facebook e YouTube (`.topbar-social`) foram perfeitamente centralizados no eixo horizontal (`margin: 0 auto; justify-content: center`) com espaçamento harmônico de 16px.
  - **Layout Desktop Preservado**: Na versão desktop, as redes sociais permanecem à esquerda e os links institucionais à direita.
  - **Cache-Buster**: Atualizado `main.css?v=39.3` em `index.html` e `termos-e-privacidade.html`.

## [2.1.41] - 2026-09-03
- **Inclusão do Card Oficial de Convite de Grupo com Link Clicável (`src/css/wpp-animation.css`, `src/js/wpp-animation.js`, `index.html`)**:
  - **Mensagem de Convite Oficial do +B (`appendInviteMessage`)**: Após a confirmação dos ticks azuis na resposta do usuário (*"Quero as ofertas! 😍"*), o +B Supermercados envia como última mensagem o card oficial de convite do grupo do WhatsApp (`wpp-msg-invite`).
  - **Fidelidade Visual ao WhatsApp**: Card com thumbnail circular oficial do +B, título em caixa alta (*"OFERTAS +B SUPERMERCADOS"*), subtítulo (*"WhatsApp Group Invite"*), URL exibida, horário `09:41` e botão verde de ação com chevron (*"Entrar no Grupo de Ofertas"*).
  - **Link 100% Clicável**: Toda a mensagem e botão são links nativos apontando diretamente para `https://chat.whatsapp.com/IQe461Q5z0h1SSVDjKETh3` com `target="_blank" rel="noopener noreferrer"`, permitindo que o visitante clique no smartphone na página e entre diretamente no grupo.
  - **Rolagem Suave & Hold Estendido (16s)**: O chat rola suavemente para o final exibindo o convite com destaque e segura a tela por **16 segundos** para visualização e clique confortável antes do reinício do ciclo.
  - **Cache-Busters**: Atualizados `wpp-animation.css?v=1.5` e `wpp-animation.js?v=1.5`.

## [2.1.40] - 2026-09-03
- **Centralização Vertical dos Textos da Esquerda & Autonomia Total da Animação na Seção S9**:
  - **Centralização Vertical da Headline e Conteúdo (`.wpp-left`)**: Configurado `align-self: center` em `.wpp-left` e `align-items: center` no `.wpp-card`, posicionando o selo dourado, a headline (*"Ofertas exclusivas diretamente no seu WhatsApp."*), parágrafo e botão de ação perfeitamente centralizados na metade vertical da seção.
  - **Ancoragem da Base do Smartphone Mantida (`.wpp-right`)**: O smartphone permanece ancorado na base (`align-self: end; margin-bottom: -48px`) com seu topo ultrapassando a área superior.
  - **Remoção da Intervenção de Clique do Mouse**: Eliminado o listener de clique no container do celular (`src/js/wpp-animation.js`), o cursor `pointer` e o tooltip (`title`). A animação agora roda 100% autônoma e contínua sem que cliques do usuário interfiram ou reiniciem o ciclo.
  - **Cache-Busters**: Atualizados `main.css?v=39.2`, `wpp-animation.css?v=1.4` e `wpp-animation.js?v=1.4`.

## [2.1.39] - 2026-09-03
- **Calibração de Respiro Lateral para 30px em Todo o Layout Mobile (`src/css/main.css`, `src/css/sections.css`)**:
  - **Margens das Paredes Definidas em 30px**: Ajustado o padding lateral global de todos os containers mobile (`.container`, `.container-full`, `.testimonials-section-premium > .container`) para **`30px`** (substituindo os 18px/20px anteriores).
  - **Moldura Arejada & Leitura Confortável**: Textos, títulos e parágrafos da seção Sobre Nós, cards de ofertas, depoimentos, card do Clube, WhatsApp, FAQ e Lojas agora possuem um respiro generoso e consistente de 30px em relação às bordas físicas do display do aparelho.
  - **Zero Overflow Horizontal**: Revalidado via Playwright em múltiplos viewports reais (iPhone SE 375px, iPhone 14 390px, Android 412px) com zero scroll lateral (`hasHorizontalScroll: False`).

## [2.1.38] - 2026-09-03
- **Correção da Proporção do Smartphone (Extensão Vertical Real sem Alargamento)**:
  - **Smartphone Esbelto & Proporcional (`assets/Page/S9-whatsapp/mockup-whatsapp-metade.webp`)**: O mockup fotorealista do aparelho foi estendido verticalmente em sua resolução nativa para `1536 x 1680px`, acrescentando a continuação do chassi inferior do smartphone.
  - **Largura Fina Preservada (365px)**: Com o aumento vertical nativo da imagem, o smartphone mantém sua largura elegante e natural de celular (`365px` de largura útil, `max-width: 440px`), eliminando completamente o aspecto esticado ou largo de tablet.
  - **Encaixe Perfeito**: A base física assenta na borda inferior do card (`margin-bottom: -48px`) e o topo arredondado ultrapassa suavemente a borda superior do card escuro (~36px para fora), preenchendo a altura interna com harmonia.
  - **Ajuste de Tela no CSS**: Reposicionado o display animado (`top: 6.96%`) em `src/css/wpp-animation.css` para encaixe subpixel perfeito no chassi estendido.
  - **Cache-Busters**: Atualizados `main.css?v=39.1`, `wpp-animation.css?v=1.3`, `wpp-animation.js?v=1.3` e `mockup-whatsapp-metade.webp?v=2.0`.

## [2.1.37] - 2026-09-03
- **Posicionamento & Altura Dominante do Smartphone na Seção S9 (`src/css/main.css`, `src/css/wpp-animation.css`, `index.html`)**:
  - **Altura Total Dominante (525px)**: Smartphone redimensionado para preencher toda a altura disponível da seção, tornando-se o elemento central e visualmente dominante da composição.
  - **Base Encaixada no Final da Seção**: A parte inferior do aparelho fica perfeitamente alinhada e ancorada na borda inferior do card (`align-self: end`, `margin-bottom: -48px`), crescendo a partir desse ponto.
  - **Topo Ultrapassando Suavemente a Seção**: Habilitado `overflow: visible` no `.wpp-card` e calibrado `padding: 48px 0 72px` na `.s-wpp`, permitindo que o topo do smartphone e sua moldura fotorealista ultrapassem elegantemente a borda superior do card escuro (~45px para fora), eliminando espaços vazios acima e abaixo do aparelho.
  - **Barra de Digitação Ativa & Fluxo Completo**: Reintroduzida a barra de digitação inferior animada (`wpp-chat-bottom`) com digitação em tempo real de *"Quero as ofertas! 😍"*, pulso no botão enviar verde `#00A884`, emissão da mensagem enviada à direita e permanência de 14 segundos antes do reinício do loop.
  - **Cache-Busters**: Atualizados `main.css?v=38.2`, `wpp-animation.css?v=1.2` e `wpp-animation.js?v=1.2`.

## [2.1.36] - 2026-09-03
- **Otimização Mobile Completa & Redesign do Menu de Navegação (Mobile Specialist Refactor)**:
  - **Novo Menu Mobile Drawer (Off-Canvas Premium)**:
    - Botão hambúrguer moderno e animado que se transforma suavemente em "X" ao abrir.
    - Gaveta lateral elegante (`#0d0d0f`, borda dourada suave e `backdrop-filter: blur(8px)`) cobrindo toda a altura da tela.
    - Fechamento ao tocar no backdrop escurecido, no botão "X" interno, ao pressionar tecla `Escape` ou ao clicar em qualquer âncora.
    - Bloqueio de scroll do background (`body.drawer-open`) enquanto o menu estiver aberto.
    - Inclusão completa de todos os links que faltavam no mobile: **Navegação Principal** (*Início, Sobre Nós, Ofertas da Semana com tag dourada, Depoimentos, Clube+ Fidelidade com tag vermelha, Nossas Lojas, Dúvidas Frequentes*) e **Serviços & Campanhas** (*Show de Prêmios, Grupo WhatsApp de Ofertas, Trabalhe Conosco, Crediário & Atacado*), além de atalhos diretos para redes sociais e botão verde CTA para receber ofertas.
  - **Topbar e Header Mobile**:
    - Topbar dourada reequilibrada no mobile com badge institucional (*"⭐ Belém • Cada dia melhor pra você"*) e ícones sociais centralizados.
    - Header com alinhamento simétrico: botão hambúrguer à esquerda, logo oficial perfeitamente centralizado e botão atalho `📱 Clube` à direita.
  - **Respiro Lateral & Fim do "Tudo Encostando"**:
    - Padronização de margens de segurança confortáveis em todas as seções (`padding: 0 18px` a `0 20px`), eliminando qualquer elemento encostando na borda do display.
    - **Sobre Nós**: Remoção de texto justificado no mobile (`text-align: left`) eliminando espaçamentos forçados entre palavras, e reformulação da barra de métricas (`.metrics-bar`) para um grid 2x2 compacto e luxuoso no celular.
    - **Ofertas da Semana**: Grid mobile reformulado para 2 colunas proporcionais com cantos arredondados, permitindo visão de catálogo sem rolagem exaustiva.
    - **Depoimentos**: Eliminação de overflow horizontal (`0 horizontal scroll` confirmado via Playwright em iPhone SE, iPhone 14 e Android Galaxy), remoção do trap `min-height: 95vh` e cards 9:16 perfeitamente centralizados entre setas de navegação.
    - **Clube+ Fidelidade**: Margens laterais seguras no card creme, botões App Store e Google Play empilhados com largura total e imagem do app sem cortes bruscos.
    - **CTA WhatsApp**: Centralização do selo dourado WhatsApp no topo do card mobile, título e texto legíveis sem estrangulamento lateral e botão de ação full-width.
    - **Dúvidas Frequentes**: Padding interno calibrado (`14px 16px`) para leitura natural das perguntas e respostas.
    - **Nossas Unidades**: Altura do mapa ajustada para `320px` no mobile para evitar scroll-trapping durante a rolagem da página.
  - **Validação Automatizada via Playwright**: Testes executados nos viewports 375px (iPhone SE), 390px (iPhone 14) e 412px (Android) com `hasHorizontalScroll: false` em 100% dos testes.

## [2.1.35] - 2026-09-03
- **Refinamento Visual da Interface do WhatsApp (Estilo S23 & Legibilidade Aumentada)**:
  - **Identidade S23 & Câmera Frontal Punch-Hole**: Substituída a Dynamic Island por um orifício circular discreto e realista de câmera frontal (`.wpp-s23-camera`) no topo central.
  - **Faixa Superior Verde Contínua**: O cabeçalho verde oficial do WhatsApp (`#005C4B`) agora se estende até a borda física superior do display (`top: 0`), integrando perfeitamente a barra de status com horário e ícones em branco puro sobre o fundo verde.
  - **Ampliação e Destaque da Tipografia**: Fontes substancialmente aumentadas para alta legibilidade:
    - Balão 1: Título em destaque com quebra harmônica em duas linhas (*"Entre no nosso grupo<br>WhatsApp"*, `clamp(14px, 4.6cqi, 18.5px)`, negrito 700).
    - Balão 2: Texto nítido (*"Você irá começar a receber ofertas."*, `clamp(12.5px, 4cqi, 16px)`).
    - Balão 3: Resposta destacada com emoji e double check azul (*"Quero as ofertas! 😍"*, `clamp(13.5px, 4.3cqi, 17px)`).
    - Cabeçalho do chat: Nome "+B Supermercados" e avatar ampliados para leitura clara.
  - **Remoção da Barra de Entrada Inferior**: Eliminada a barra de input para proporcionar respiro e amplitude vertical total aos 3 balões de mensagens, espelhando fielmente a proporção da foto de referência.
  - **Tempo de Leitura Estendido**: Aumentado o intervalo de exibição com a conversa finalizada de 4.8s para **14 segundos**, permitindo leitura serena antes de qualquer reinício de loop.
  - **Replay Instantâneo por Toque**: Clique no aparelho a qualquer instante reinicia a animação imediatamente.

## [2.1.34] - 2026-09-03
- **Recriação da Interface Animada do WhatsApp dentro do Smartphone (`src/css/wpp-animation.css`, `src/js/wpp-animation.js`, `index.html`)**:
  - **Encaixe Preciso na Moldura do Aparelho**: Mapeamento milimétrico subpixel da área do display (`left: 12.5%`, `width: 74.61%`, `top: 11.43%`) sobrepondo a arte original `mockup-whatsapp-metade.webp`, preservando 100% da moldura fotorealista em titânio, Dynamic Island e barra de status do iPhone.
  - **Fluxo Narrativo em 5 Cenas**:
    1. *Cena 1 (Gaveta de Aplicativos)*: Tela inicial moderna com app Clube +B, Câmera, Fotos e o ícone do WhatsApp com badge vermelho de notificação.
    2. *Cena 2 (Toque no WhatsApp)*: Microinteração de feedback de pressão (`scale down`).
    3. *Cena 3 (Abertura do Aplicativo)*: Expansão orgânica e suave para a interface do WhatsApp.
    4. *Cena 4 (Lista de Conversas)*: Interface oficial com abas e conversa do **+B Supermercados** no topo com avatar oficial e selo verde de verificação.
    5. *Cena 5 (A Conversa em Questão)*: Header oficial verde WhatsApp (`#075E54`), status alternando entre `online` e `digitando...`, balão com 3 pontos pulsantes (`● ● ●`), 1ª mensagem recebida (*"Entre no nosso grupo WhatsApp"*), 2ª mensagem recebida (*"Você irá começar a receber ofertas."*), simulação de digitação no campo de texto e envio da 3ª mensagem do usuário (*"Quero as ofertas! 😍"*) com double check azul (`✓✓`).
  - **Orquestração & Performance**:
    - Centralização via máquina de estados com cancelamento e cleanup rigoroso de timers.
    - Inicialização automática ao entrar na viewport com `IntersectionObserver` (threshold `0.3`).
    - Método de reinício `window.restartWppAnimation()` e suporte a clique no celular para replay após o término da conversa.
    - Suporte a `@media (prefers-reduced-motion: reduce)` exibindo o estado final diretamente.

## [2.1.33] - 2026-09-03
- **Apontamento e Ativação do Domínio Oficial (`docker-compose.yml`, Traefik, VPS)**:
  - Configurada regra de roteamento no Traefik para aceitar simultaneamente o domínio próprio `maisbsupermercados.com.br` e o subdomínio da IDE `maisbsupermercados.suporteide.digital`: `Host(\`maisbsupermercados.suporteide.digital\`) || Host(\`maisbsupermercados.com.br\`)`.
  - Aplicada a configuração no servidor de produção VPS (`161.97.108.92`), recriando o container e ativando o roteador Traefik com certificado SSL/TLS automático via Let's Encrypt.
  - Testada e confirmada a resposta `HTTP 200 OK` e entrega íntegra do site em `https://maisbsupermercados.com.br`.

## [2.1.32] - 2026-09-02
- **Criação da Página Oficial de Política de Privacidade & Termos de Uso (`termos-e-privacidade.html`, `src/css/legal.css`, `index.html`)**:
  - **Página Institucional Dedicada**: Desenvolvida a página `termos-e-privacidade.html` exclusivamente para o **Supermercado Mais B**, adaptando a estrutura visual de alta fidelidade e elegância da campanha Show de Prêmios para as diretrizes institucionais do supermercado (lojas físicas, Clube+ Fidelidade, encartes e canais digitais).
  - **Estilização & Design System (`src/css/legal.css`)**: Folha de estilos dedicada com as cores e tokens oficiais (`#DDA712`, `#BB2E2C`), container central em card branco `#FFFFFF` de alto contraste e legibilidade, listas de compromissos do usuário com badges, callout boxes para cookies e dados, botões de ação e estilos de impressão clean print (`@media print`).
  - **Hero Legal & Metadados Oficiais**: Breadcrumbs de navegação, badge oficial de diretrizes, data de vigência, tempo estimado de leitura (~5 min), selo de conformidade com a LGPD (Lei Federal nº 13.709/2018) e botão nativo para impressão/PDF.
  - **Estruturação Jurídica Conforme LGPD & CDC**: Redação completa com 8 cláusulas para a Política de Privacidade (coleta consciente, direitos dos titulares art. 18 LGPD, canal de DPO/Encarregado) e 8 cláusulas para os Termos de Uso (isenção de estoque/vigência de ofertas, regras de propriedade intelectual e foro de Belém/PA).
  - **Conexão Global no Rodapé**: Atualizado o link de rodapé institucional em `index.html` de `href="#"` para `href="termos-e-privacidade.html"`, com marcação ativa na página legal e botão flutuante para retorno suave ao topo.

## [2.1.31] - 2026-09-02
- **Sistema Inteligente de Horários em Tempo Real Minimalista & Atualização de Notas do Google (`src/js/unidades.js`, `src/css/main.css`, `src/data/units.js`, `index.html`)**:
  - **Layout Minimalista & Alinhamento Perfeito**: Reformulada a linha de horário para seguir exatamente o padrão visual do endereço (`.unit-address`), com ícone de relógio dourado, tipografia limpa em tom neutro (`#aaa`), sem blocos/bordas pesadas e sem cor verde estridente.
  - **Dropdown Expansível de Horários Semanais**: Accordion compacto integrado com clique no horário/chevron, expandindo com indentação alinhada a grade de horários de segunda a domingo com marcação do dia atual (`• hoje`).
  - **Atualização das Avaliações Oficiais**: Sincronizada a nota do **Plaza** para `★ 4,2` com exibição de volume real de `(6.740)` avaliações, além das contagens e notas oficiais para **Alcindo Cacela** (`★ 4,8 (1.240)`) e **Tapanã** (`★ 4,5 (850)`).
  - Atualizados cache-busters para `main.css?v=38.1`, `sections.css?v=37.3` e `unidades.js?v=11.4`. Corrigida sobreposição de margem legada em `.unit-address`.

## [2.1.30] - 2026-09-02
- **Atualização Visual do Rodapé Institucional (`index.html`, `src/css/main.css`, `assets/Logos/logo-idedigital.png`)**:
  - Implementado layout simétrico em 3 colunas (`grid-template-columns: 1fr auto 1fr`) para a barra inferior do rodapé (`.footer-bottom`):
    - **Esquerda**: `Copyright © 2026 Grupo +B – Todos os direitos reservados` alinhado à esquerda.
    - **Centro**: Link `Termos & Privacidade` perfeitamente centralizado com hover suave.
    - **Direita**: Bloco `Desenvolvido por:` acompanhado pelo logotipo oficial nítido em imagem (`assets/Logos/logo-idedigital.png`) com link para `https://ide.digital`.
  - Refinado o divisor superior (`.footer-line`) e a barra de destaque central dourada radiante (`.glow-dot`) com gradiente e efeito glow (`box-shadow: 0 0 10px rgba(221, 167, 18, 0.75)`).
  - Configurada responsividade mobile (`@media(max-width:768px)`) com empilhamento vertical limpo e centralizado.
  - Atualizado o cache-buster para `main.css?v=37.7`.

## [2.1.29] - 2026-09-02
- **Reformulação e Estruturação Visual do FAQ com Redação Oficial (`src/css/main.css`, `index.html`)**:
  - Reestruturadas todas as 4 respostas do accordion de Dúvidas Frequentes preservando rigorosamente as redações oficiais fornecidas:
    - **Formas de Pagamento**: Organizada a lista em bullet points dourados (*Cartões de crédito e débito das principais bandeiras*, *Pix*, *Vale-alimentação e vale-refeição*, *Cartão Crediário do crediário próprio*).
    - **Clube Fidelidade**: Texto com destaque e bloco de aviso estilizado (*"Importante: conclua seu cadastro para garantir todos os benefícios."*).
    - **Horários de Funcionamento**: Segmentado em 3 cards visuais limpos para as unidades Alcindo Cacela, Plaza e Tapanã, detalhando segunda a sábado e domingos.
    - **WhatsApp**: Organizado em parágrafos claros com destaques em negrito.
  - Cache-buster atualizado para `main.css?v=37.6`.
- **Ajuste de Headline da Seção Depoimentos (`src/css/sections.css`, `index.html`, `depoimentos.html`)**:
  - Calibrada a headline H2 institucional para exatamente **duas linhas**: *"A confiança de quem faz parte"* / *"da nossa história."*.
  - Expandida a largura da coluna de texto (`.testimonials-copy-col`) para `530px` e aplicado `font-size: clamp(30px, 2.35vw, 38px)` para garantir que *"A confiança de quem faz parte"* não quebre a palavra *"parte"*.
  - Cache-buster atualizado para `sections.css?v=37.2`.
- **Ajuste de Espaçamento, Quebra e Justificação na Seção Sobre (`src/css/main.css`, `index.html`)**:
  - Padronizado o alinhamento do texto institucional para **justificado** (`text-align: justify; text-justify: inter-word;`) no bloco de texto (`.sobre-text p`), mantendo a uniformidade visual com a seção de Depoimentos e diretrizes de tipografia da agência.
  - Quebra do título H2 estruturada em exatamente 3 linhas: *"Cada dia melhor pra você."* / *"O supermercado com a melhor"* / *"experiência de compra."*.
  - Calibrada a largura máxima do bloco de texto para `max-width: 540px` e grid com respiro `gap: clamp(48px, 5.5vw, 68px)`.

## [2.1.28] - 2026-09-02
- **Auditoria e Limpeza de Assets Não Utilizados (`assets/` -> `assets-nao-usados/`)**:
  - Executada varredura automatizada em todos os templates HTML, arquivos CSS e scripts JS para mapear o uso de arquivos de mídia.
  - Transferidos 12 arquivos obsoletos e não referenciados para `assets-nao-usados/` (incluindo cards de categorias legados, banners de ofertas descontinuados, logo monocromático preto e backgrounds não utilizados).
  - Removidos diretórios vazios remanescentes em `assets/`, mantendo estritamente os 57 assets 100% ativos em produção.
- **Remoção de Arquivos Legados do Show de Prêmios (`show-de-premios.html`, `src/css/show-de-premios.css`, `src/js/show-de-premios.js`, `assets/show-de-premios/`)**:
  - Excluída a landing page local legada `show-de-premios.html`.
  - Removidos os arquivos de estilização e scripts específicos `src/css/show-de-premios.css` e `src/js/show-de-premios.js`.
  - Removido o diretório completo de fotos e regulamento `assets/show-de-premios/`.
  - Preservado apenas o banner ativo do carrossel no topo hero (`assets/Page/S1 TOPO HERO/TOPO-HERO-HOME-SHOW-PREMIOS.webp`).

## [2.1.27] - 2026-09-02
- **Redesign do Botão Clube +Fidelidade no Header (`src/css/main.css`, `index.html`, `show-de-premios.html`)**:
  - Atualizado o ícone para o smartphone (`data-lucide="smartphone"`).
  - Estado padrão (sem hover): visual limpo e discreto em texto/ícone sem moldura de botão (`background: transparent`).
  - Estado hover / ativo: transição fluida para botão vermelho vibrante (`#cc1424`), cantos arredondados (`border-radius: 8px`), ícone e texto brancos com sombra difusa (`box-shadow: 0 4px 16px rgba(204, 20, 36, 0.45)`).
  - Atualizado o cache-buster do stylesheet para `main.css?v=36.4`.
- **Ajuste de Âncora do Banner Clube Fidelidade (`index.html`)**:
  - Configurado o link do banner rotativo do Clube Fidelidade no Hero (`BANNER-TOPO (3).webp`) para navegar via âncora interna (`#clube`) diretamente para a seção correspondente **S6: CLUBE+ FIDELIDADE**.
- **Redirecionamento Externo do Show de Prêmios (`index.html`, `show-de-premios.html`)**:
  - Atualizados todos os pontos de link da campanha "Show de Prêmios" no site institucional (`index.html` — Menu de Navegação Superior e Banner Hero Principal) para apontarem diretamente para o novo hotsite oficial: `https://showdepremiosmaisb.suporteide.digital`.
  - Configurada a abertura obrigatória em uma nova guia (`target="_blank" rel="noopener noreferrer"`).
  - Atualizado link de navegação em `show-de-premios.html` para manter a coerência global de redirecionamento.

## [2.1.26] - 2026-09-01
- **Criação do Módulo Header Standalone (`HEADER-STANDALONE/`)**:
  - Exportado o conjunto completo de cabeçalho (Topbar Dourada Radiante + Header Sticky Preto com Logo Centralizado + Menu Mobile) para a pasta autocontida `HEADER-STANDALONE/`.
  - Criado `header.css` com variáveis de design tokens `:root`, efeito lens flare na topbar, layout simétrico com 3 colunas, botões CTA dourado/vermelho e menu mobile animado em hambúrguer/X.
  - Criado `header.js` com gerenciamento de toggle mobile, fechamento ao clique externo/ESC/links, efeito dinâmico de scroll na sombra e ScrollSpy via `IntersectionObserver`.
  - Criado `header-snippet.html` (código limpo para copiar e colar em qualquer site) e `index.html` (página de teste/demonstração funcional e interativa).
  - Incluídos os assets de imagem necessários (`assets/logo.png`, `assets/logo.webp`, `assets/favicon.webp`).
  - Adicionado `PROMPT-PARA-IA.md` (prompt pronto formatado para solicitar replicação em outros sites por qualquer IA) e `README.md` com guia de integração técnica.

## [2.1.25] - 2026-09-01
- **Exportação do Pacote Standalone (`site-maisb-show-premio/`)**:
  - Migrado o projeto autônomo da landing page para o diretório independente `G:\Meu Drive\.PROJETOS\Sites Institucionais\site-maisb-show-premio\`.
  - Estrutura pronta para produção isolada com `index.html`, `src/` (CSS modular e JS) e `assets/` completos (sem dependências externas do projeto principal).
- **Inclusão do Rodapé Oficial (`site-maisb-show-premio/index.html`, `assets/Logos/`)**:
  - Adicionado o rodapé institucional completo (`.s-footer`) com aviso legal oficial SPA/ME Nº 06.047964/2026, logotipo oficial Supermercados Mais B (`IMG_5606.PNG`), slogan, redes sociais e créditos.
- **Restauração do Card de Atendimento**:
  - Restabelecido o **Passo 3: "Informe seu CPF no Caixa"** com o ícone de megafone (`megaphone`) e a imagem oficial de atendimento (`atendimento.jpg`), mantendo a grade completa com os 4 passos da seção *Como Participar*.
- **Limpeza de Imagens Obsoletas (`assets/show-de-premios/img/`, `index-show/assets/show-de-premios/img/`)**:
  - Excluídas do diretório: `data.png`, `favicon.png`, `patrocinadores.png` e `patrocinadores-mobile.png`.
  - Mantidas as 7 imagens ativas da campanha, incluindo `atendimento.jpg`, `telas-app.png`, `cada-100-1-cupom.png`, `toten-urna.png`, backgrounds e ícone.
- **Criação do Pacote & Diretório Standalone (`index-show/`, `index-premio.html`)**:
  - Estruturada a pasta independente `index-show/` contendo todos os assets essenciais, CSS modular (`tokens.css`, `main.css`, `sections.css`, `show-de-premios.css`), JS interativo e `index.html` autossuficiente para publicação direta em novo domínio/hotsite.
  - Estrutura 100% sem menu superior (header/topbar) e sem rodapé (footer), focada na conversão solo da campanha.
- **Reformulação da Seção Hero & Premiação (`show-de-premios.html`, `src/css/show-de-premios.css`, `assets/show-de-premios/img/`)**:
  - Limpeza completa dos elementos e imagens da primeira seção (`.sp-hero`).
  - Configuração da seção em tela cheia (`height: 100vh; min-height: 100vh; width: 100%`) com fundo verde (`var(--green)`), posicionamento central e `background-size: cover`, preparada para receber a nova imagem de fundo.
  - Exclusão dos arquivos de imagem obsoletos do diretório local: `hero.png`, `hero-mobile.png`, `hero-under.png` e `premiacao.png`.
  - Remoção da coluna lateral com arte antiga na seção **Premiação Oficial**, centralizando o título e dispondo os 4 cards oficiais de prêmios em grade moderna de 4 colunas responsiva (2 colunas em tablets, 1 coluna em mobile).
  - Atualização da tag `og:image` para `assets/Page/S1 TOPO HERO/TOPO-HERO-HOME-SHOW-PREMIOS.webp`.

## [2.1.24] - 2026-09-01
- **Atualização do Carrossel Hero da Home (`index.html`, `assets/Page/S1 TOPO HERO/`)**:
  - **Banner Oficial Show de Prêmios (1920x640px)**:
    - Atualizado o slide 1 do carrossel Hero para a nova arte oficial `assets/Page/S1 TOPO HERO/TOPO-HERO-HOME-SHOW-PREMIOS.webp` nas dimensões homologadas de 1920 x 640 px.
    - Mantido link de redirecionamento para a página promocional dedicada (`show-de-premios.html`).
    - Removida referência ao arquivo temporário anterior de banners.

## [2.1.23] - 2026-09-01
- **Documentação & Padrão de Check de Ajustes (`Check - Show de Premios (Site Ajustes).docx`, `.MD/`, `GEMINI.md`)**:
  - **Criação do Documento Oficial de Status da Campanha Show de Prêmios**:
    - Estruturação modular por seções (S1 a S6) contemplando Topo Banner, Como Participar & Modal Clube+ Fidelidade, Premiação Oficial (21 prêmios e cronômetro), FAQ, Regulamento em PDF e Rodapé com Autorização SPA/ME Nº 06.047964/2026.
    - Padronização rigorosa das tags visuais: `[100% FINALIZADO NO SITE]` (Verde `#2E7D32`) e `[▶️ Em desenvolvimento pela equipe Tec]` (Azul `#0066CC`).
    - Integração da tabela com o **Guia Técnico de Medidas & Especificações de Artes (Para o Marketing)**.

## [2.1.22] - 2026-09-01
- **Implementação dos Ajustes Oficiais da Reunião de 01/SET/2026 (`index.html`, `src/css/main.css`, `Ajustes - Supermercado +B (01 SET 2026).docx`)**:
  - **Cabeçalho & CTA Clube Fidelidade**:
    - Destaque do botão CTA do Clube +Fidelidade com estilização em gradiente dourado (`.nav-link-cta-clube`) direcionado diretamente para a seção de benefícios e download.
    - Limpeza de contatos redundantes no menu superior.
    - Padronização do alt text oficial da marca com slogan: *"Supermercado Mais B | Cada dia melhor para você"*.
  - **Seção "Dias da Semana" (Substituição de Campanhas)**:
    - Atualização do conceito e headline para: `DIAS DA SEMANA — Com ofertas que rendem mais para você.`
    - Estruturação da grade oficial com os 6 dias temáticos: Segunda da Limpeza, Terça do Infantil, Quarta do Pet, Quinta do Horti, Sexta do Churrasco (card destaque) e Sábado do Pão.
  - **Depoimentos & Contraste Visual**:
    - Fundo Dark puro de alto contraste com acentos dourados e logo monocromática branca de alta legibilidade.
  - **Atualização Oficial do FAQ**:
    - Homologação das 4 perguntas e respostas oficiais: Formas de pagamento, Clube +Fidelidade, Horários das 3 unidades (Alcindo Cacela, Plaza e Tapanã) e Grupo de Ofertas no WhatsApp.
  - **Sincronização com o Google Drive / Docs**:
    - Documento `Ajustes - Supermercado +B (01 SET 2026).docx` atualizado com checklist de status (`[✅ CONCLUÍDO NO SITE]` / `[⏳ AGUARDANDO ARTES DO MARKETING]`) e tabela com o Guia Técnico de Medidas & Resoluções para a equipe de Marketing.

## [2.1.20] - 2026-08-28
- **Sincronização Integral com a Nova Campanha Show de Prêmios 2026.02 (`show-de-premios.html`, `src/js/show-de-premios.js`, `src/css/show-de-premios.css`, `preview-premiacao.html`, `index.html`)**:
  - **Atualização da Premiação Oficial (Total de 21 Prêmios)**:
    - `01 Carro zero km`
    - `04 Motos zero km`
    - `04 TV's de 50"` (Samsung Smart 50")
    - `12 Vales-compras de R$ 2.000,00` cada
  - **Atualização do Período de Vigência e Sorteio**:
    - Período de participação atualizado de `02/09/2026` a `29/01/2027`.
    - Fechamento das urnas às `12:00h do dia 29/01/2027`.
    - Data do sorteio oficial e cronômetro regressivo atualizados para `29 de Janeiro de 2027 às 18:00h` (Fuso de Brasília / UTC-3).
  - **Lojas Participantes**:
    - Inclusão da unidade **Shopping Grão Pará** ao lado das unidades Tapanã, José Malcher Plaza e Alcindo no FAQ 05.
  - **Perguntas Frequentes (FAQ)**:
    - Atualização dos itens 1, 3 e 5 com as novas datas, URL de cadastro oficial (`/show-de-premios`) e discriminação detalhada dos 21 sorteios.
  - **Layout & CSS**:
    - Grid de premiação ajustado para 4 cards harmoniosos (`repeat(2, 1fr)`).
    - Cache-buster atualizado para `show-de-premios.css?v=12.0` e `show-de-premios.js?v=12.0`.

## [2.1.19] - 2026-08-27
- **Sincronização Global e Absoluta do Cronômetro Regressivo (`src/js/show-de-premios.js`, `preview-premiacao.html`, `show-de-premios.html`)**:
  - **Data Alvo Global Unificada (Fuso de Brasília / UTC-3)**: Substituição de inicializações relativas (`now + ...`) por timestamp ISO global absoluto e imutável. Todos os visitantes e computadores no mundo agora calculam exatamente os mesmos dias, horas, minutos e segundos simultaneamente.
  - **Cache-Buster**: Atualização do script `show-de-premios.js?v=11.2`.

## [2.1.18] - 2026-08-27
- **Correção da Execução e Ticking do Cronômetro Regressivo (`src/js/show-de-premios.js`, `preview-premiacao.html`, `show-de-premios.html`)**:
  - **Descongelamento da Contagem**: Corrigido o cálculo do cronômetro em que a data alvo / fallback era recalculada a cada tick dentro do loop de 1s gerando uma diferença estática congelada (`93 DIAS 14 HORAS 22 MINUTOS 00 SEGUNDOS`).
  - **Contagem Regressiva Ativa em Tempo Real**: A data alvo e o fallback persistente agora são inicializados uma única vez (com suporte a `sessionStorage`), garantindo que segundos, minutos, horas e dias diminuam ao vivo segundo a segundo.
  - **Cache-Buster**: Atualização do script `show-de-premios.js?v=11.1`.

## [2.1.17] - 2026-08-27
- **Padronização da Cor de Fundo da Topbar Superior (`src/css/main.css`, `index.html`, `show-de-premios.html`)**:
  - **Amarelo Queimado Oficial / Dourado (`#DDA712` / `var(--gold)`)**: A barra superior (topbar) com os links institucionais e redes sociais teve seu fundo e bordas atualizados de `#FAC577` para o tom amarelo queimado oficial da marca (`#DDA712`), harmonizando 100% com a paleta oficial, tipografia de destaque das seções escuras (*"nossas unidades"*) e ícones institucionais.
  - **Cache-Buster**: Atualização de versão dos assets para `v=36.3`.

## [2.1.16] - 2026-08-26
- **Redesign Minimalista & Premium da Seção de Premiação e Data do Sorteio (`show-de-premios.html`, `src/css/show-de-premios.css`, `src/js/show-de-premios.js`)**:
  - **Disposição em 2 Colunas**: Imagem 3D dos prêmios na coluna esquerda e cabeçalho com os 3 cards horizontais de prêmios na coluna direita.
  - **Cabeçalho com Titulinho & Headline Sem Serifa**: Titulinho `CONFIRA` em texto dourado puro (`#FCBF0C`, `letter-spacing: 2.5px`) e headline `Premiação Oficial` na tipografia padrão `DM Sans` com peso 800.
  - **Cards de Premiação no Padrão do Regulamento**:
    - Superfície em *dark glassmorphism* (`rgba(18, 18, 18, 0.85)` com `backdrop-filter: blur(14px)` e borda fina translúcida).
    - Caixas de números quadradas `52x52px` com borda e dígitos dourados (`3`, `12`, `9`).
    - Títulos limpos e sem duplicidade numérica: `TV'S 85 POLEGADAS`, `KITS OFICIAIS` e `VALES-COMPRAS`.
  - **Fundo com Máscara Gradiente Vertical (*Fade In/Out*)**: Camada de imagem de fundo com opacidade reduzida (`0.18`) e máscara suave nas bordas superior e inferior (`mask-image: linear-gradient`), dissolvendo-se gradualmente no preto absoluto.
  - **Card do Sorteio Centralizado & Relógio em Tempo Real**:
    - Titulinho `NÃO PERCA` em texto dourado.
    - Headline quebrada em 2 linhas com alto impacto: `Sorteio Oficial Dia` (branco) / `05 de Junho 2026` (dourado grande de 48px).
    - Cronômetro regressivo com 4 caixas quadradas (`DIAS : HORAS : MINUTOS : SEGUNDOS`) centralizadas de ponta a ponta e calculando o tempo restante ao vivo segundo a segundo via JavaScript.

## [2.1.15] - 2026-08-26
- **Reposicionamento da Imagem de Fundo (Background) Atrás do Header (`show-de-premios.html`, `src/css/show-de-premios.css`)**:
  - **Ajuste de Posição Vertical**: Atualizado o `background-position` do corpo da página (`body.sp-body`) de `center 120px` para `center top` (0px) no desktop e de `center 110px` para `center top` no mobile.
  - **Efeito Visual Imersivo**: A iluminação dourada e a atmosfera de partículas do fundo agora sobem e se estendem harmoniosamente por trás do cabeçalho de navegação (`header`), eliminando o vão preto superior.

## [2.1.14] - 2026-08-26
- **Padronização Visual do Botão CTA do Passo 1 (`show-de-premios.html`, `src/css/show-de-premios.css`)**:
  - **Identidade Visual Vermelha e Tipografia**: O botão do card Passo 1 (*Cadastre-se no app Clube + Fidelidade*) foi reformulado do estilo pílula dourado para o formato padrão do site (fundo vermelho oficial `#BB2E2C`, cantos arredondados `8px`, tipografia branca em negrito perfeitamente centralizada e sombra suave `rgba(187, 46, 44, 0.35)`).
  - **Texto Minimalista**: Mantido apenas o texto *"Clube + Fidelidade"* sem ícones, preservando a leitura limpa e direta.

## [2.1.13] - 2026-08-26
- **Ajuste de Altura e Respiro da Barra do Cabeçalho (`src/css/main.css`, `index.html`, `show-de-premios.html`)**:
  - **Aumento do Padding Vertical**: Ajustado o padding do `.header-inner` para `15px 32px` com `min-height: 72px`, proporcionando respiro elegante acima e abaixo da logo central e dos links de navegação.
  - **Centralização Precisa da Logo**: A `.header-logo` agora utiliza alinhamento absoluto perfeitamente centralizado com `top: 50%; transform: translate(-50%, -50%)`, com altura proporcional de `46px` para evitar qualquer encosto nas bordas superior e inferior.

## [2.1.12] - 2026-08-26
- **Otimização Responsiva & Mobile do Modal Clube+ Fidelidade (`src/css/show-de-premios.css`, `show-de-premios.html`)**:
  - **Adaptação Completa para Smartphones**: Layout do card e FAQ com empilhamento vertical suave, dimensionamento adaptável de fontes e botões de download com largura total (`width: 100%`) e alinhamento central.
  - **Touch & Acessibilidade**: Botão de fechar fixo redimensionado para `42x42px` no mobile com espaçamento de toque aprimorado (`top: 14px; right: 14px`), padding do backdrop ajustado para `24px 12px 64px 12px`, e suporte nativo a rolagem suave por toque (`-webkit-overflow-scrolling: touch`).

## [2.1.11] - 2026-08-26
- **Padronização Visual do Link "Clube +Fidelidade" no Cabeçalho (`index.html`, `show-de-premios.html`)**:
  - **Ajuste de Estilo no Header**: O CTA *"Clube +Fidelidade"* no canto superior direito do cabeçalho teve a classe `.btn-cta-red` (botão sólido vermelho com sombra) alterada para `.nav-link` (link textual minimalista com ícone).
  - **Harmonização Visual**: O item agora segue a mesma identidade e padrão visual discreto do link *"Show de Prêmios"*, mantendo o ícone correspondente, transições de hover e alinhamento equilibrado no menu.

## [2.1.10] - 2026-08-26
- **Ajuste de Rolagem e Visibilidade Superior do Modal (`show-de-premios.html`, `src/css/show-de-premios.css`, `src/js/show-de-premios.js`)**:
  - **Correção da Rolagem no Topo**: Corrigido o alinhamento do modal no container backdrop (`align-items: center` substituído por fluxo de rolagem no backdrop com `justify-content: flex-start` e padding vertical), permitindo que o usuário role livremente até o topo da seção principal do Clube+ Fidelidade sem qualquer corte ou travamento.
  - **Botão de Fechar Fixo**: Botão de fechar configurado com `position: fixed` no canto superior direito para fácil acesso em qualquer ponto da rolagem.
  - **Reset de Scroll**: O modal agora sempre inicia com `scrollTop = 0` ao ser aberto.

## [2.1.9] - 2026-08-26
- **Substituição da Imagem da Seção e Modal Clube+ Fidelidade (`index.html`, `show-de-premios.html`)**:
  - Atualizada a arte oficial da coluna direita para a versão com recorte e fundo transparente (`assets/Page/APP CLUBE +B FIDELIDADE-fundo-transparente.webp`), integrando perfeitamente a imagem ao novo tom de fundo creme `#fef7e5` do card.

## [2.1.8] - 2026-08-26
- **Atualização do Carrossel Hero do Topo (`index.html`, `src/css/main.css`)**:
  - **Substituição do Banner**: Removido o banner expirado do *Dia dos Pais* e inserido o novo banner oficial da campanha *Show de Prêmios* (`assets/show-de-premios/banner-topo-promo-show-premios.webp`).
  - **Link Interno da Campanha**: Configurado link direto do slide para a página interna da promoção (`show-de-premios.html`).
  - **Ajustes de Estilização CSS**: Adicionada regra `.hero-swiper .swiper-slide a { display: block; width: 100%; }` para garantir área de clique perfeita em todo o slide do carrossel.
  - **Organização de Arquivos**: O banner anterior do Dia dos Pais foi movido para `assets-nao-usados/Page/S1 TOPO HERO/`.

## [2.1.7] - 2026-08-26
- **Ajuste de Cor de Fundo da Seção Clube+ Fidelidade (`src/css/main.css`)**:
  - Atualizada a cor de fundo do container `.clube-card` para `#fef7e5` (substituindo o tom anterior `#FAF7F2`), proporcionando uma tonalidade creme mais quente e perfeitamente integrada à paleta visual da marca.

## [2.1.6] - 2026-08-26
- **Aprimoramento do Modal Clube+ Fidelidade & Correção do FAQ (`show-de-premios.html`, `src/css/show-de-premios.css`, `src/js/show-de-premios.js`)**:
  - **Fundo Deep Black (`rgba(0, 0, 0, 0.98)`) & Ultra Blur**: Fundo escurecido quase preto absoluto com desfoque de 24px para isolar completamente o modal.
  - **Bloqueio Total do Scroll de Fundo (Scroll Lock)**: Implementado travamento via `position: fixed; top: -scrollY` no `body`, `overscroll-behavior: contain` e contenção de toque/scroll, impedindo que a página de trás role enquanto o modal estiver aberto, restaurando a posição exata de scroll ao fechar.
  - **Bloco de FAQ Integrado no Modal**: Adicionado card expansível de FAQ logo abaixo da seção principal com a pergunta *"Como funciona o Clube +Fidelidade e como ter acesso a ofertas exclusivas?"*.
  - **Correção da Abertura do Accordion**: Resolvido conflito de manipuladores de evento (`stopPropagation` e método `toggleClubeModalFaq` dedicado com suporte inline e via captura de evento), assegurando expansão instantânea e suave de todas as respostas do FAQ ao clicar.
  - **Conteúdo Completo & Interativo**: Inclui banner dourado com aviso importante da versão Beta, explicação detalhada das regras, acúmulo de pontos a cada R$ 1,00, validade de 90 dias, consulta e resgate direto no caixa. Ao abrir, o card ganha borda dourada `#FCBF0C` e o ícone alterna suavemente de `+` para `×`.

## [2.1.5] - 2026-08-26
- **Redesign dos Containers do FAQ & Card de Regulamento da Campanha "Show de Prêmios" (`show-de-premios.html`, `src/css/show-de-premios.css`)**:
  - **Containers do FAQ em Fundo Branco (White Mode)**:
    - Cards de cada pergunta convertidos para containers brancos (`#FFFFFF`) com bordas suaves (`rgba(0, 0, 0, 0.08)`), cantos arredondados (`border-radius: 16px`) e sombreamento elegante (`box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08)`).
    - Tipografia de alta legibilidade com títulos em preto escuro (`#1a1a1a`), numeração destacada em dourado queimado (`#C5940E`), texto interno em cinza grafite (`#4B5563`) e links em vermelho institucional (`#BB2E2C`).
    - Botão de expansão `+`/`×` com fundo dinâmico e transições suaves ao abrir e fechar.
  - **Card de Regulamento Minimalista em Dark Mode**:
    - Fundo escuro em glassmorphism translúcido (`rgba(18, 18, 18, 0.85)` com `backdrop-filter: blur(14px)`), borda sutil (`rgba(255, 255, 255, 0.1)`), cantos refinados e padding mais compacto e elegante.
    - Ícone com preenchimento dark/transparente e traços dourados (`#FCBF0C`).
    - Headline em branco puro (`#FFFFFF`) e texto de apoio em cinza claro (`#9CA3AF`), com botão de download vermelho institucional (`#BB2E2C`) refinado.

## [2.1.4] - 2026-08-26
- **Modal Clube+ Fidelidade na Campanha "Show de Prêmios" (`show-de-premios.html`, `src/css/show-de-premios.css`, `src/js/show-de-premios.js`)**:
  - **Integração no Botão do Passo 1**: O botão *"Clube + Fidelidade"* na seção *"Como Participar"* agora abre um modal/popup com a seção completa do Clube+ Fidelidade da Home.
  - **Conteúdo Fiel**: Inclui headline serifada, benefícios com ícones dourados (Descontos, Cashback, Eventos, Prêmios), botões oficiais de download para Android e iOS, tagline e imagem de alta resolução do aplicativo e cliente.
  - **Interatividade & Usabilidade**: Abertura com animação suave, backdrop escurecido com blur, botão de fechar estilizado, suporte a fechamento por clique fora ou pela tecla `ESC`, e bloqueio do scroll de fundo (`modal-open`).

## [2.1.3] - 2026-08-26
- **Consolidação Completa do FAQ - Clube+ Fidelidade (`index.html`, `src/css/main.css`)**:
  - **Texto de Apoio Atualizado**: Subtítulo do FAQ atualizado para *"Esclareça suas principais dúvidas sobre nossas lojas, ofertas, app Clube+ Fidelidade, promoções, formas de pagamento e facilidades para suas compras."*.
  - **Reordenação dos Itens do FAQ**:
    1. *Como funciona o Clube +Fidelidade e como ter acesso a ofertas exclusivas?* (Posicionado em 1º lugar com todas as regras completas, aviso beta e dúvidas detalhadas).
    2. *Quais são as formas de pagamento aceitas no +B?*
    3. *Qual o horário de funcionamento das unidades do +B?*
    4. *Como recebo as ofertas e o encarte da semana pelo WhatsApp?*
  - **Conteúdo Interno do Item 2 (Clube+ Fidelidade)**:
    - Aviso de fase de desenvolvimento e versão Beta temporária.
    - O que é o programa de vantagens Clube Mais.
    - Como acompanhar pontos e datas de expiração (90 dias).
    - Cadastro e acúmulo de pontos (R$ 1,00 = 1 ponto, CPF no caixa).
    - Como consultar saldo e pontuação (prazo de 1 dia).
    - Como resgatar pontos e trocar por descontos/brindes (exigência de RG e CPF originais).
  - **Ajustes de Estilização (`src/css/main.css`)**: Estilos dedicados para `.faq-inner-alert`, subblocos estruturados (`.faq-subblock`), notas (`.faq-note`) e expansão de `max-height` para abertura fluida sem sobreposições.

## [2.1.2] - 2026-08-26
- **Seção Clube+ Fidelidade (`index.html`, `src/css/main.css`)**:
  - **Link Oficial App Store**: Atualizado o link do botão iOS para o app oficial `https://apps.apple.com/br/app/clube-fidelidade/id1554152068`.
  - **Headline em 2 Linhas**: Ajustada a quebra de linha do título H2 para *"Mais vantagens para você,<br>todos os dias."*.
  - **Otimização de Altura e Espaçamento**: Reduzidos os paddings verticais e margens internas da seção (`padding: 36px 0`, padding interno do card, margens da lista e botões) para que a seção ocupe uma altura mais compacta e proporcional na viewport.

## [2.1.1] - 2026-08-26
- **Ajuste na Seção Clube+ Fidelidade (`src/css/main.css`)**:
  - Corrigido o enquadramento da imagem (`object-fit: contain` e proporção `1fr 1fr` no grid) para exibir a arte inteira do app e da cliente sem cortes indesejados nas bordas, mantendo perfeita adaptação em desktop, tablet e mobile.

## 2026-08-26

- **Criação e Clonagem Oficial da Landing Page "Show de Prêmios Mais B" (`show-de-premios.html`, `src/css/show-de-premios.css`, `src/js/show-de-premios.js`)**:
  - **Recriação Fiel e Pixel-Perfect**: Baseada na URL `https://showdepremiosmaisb.com.br/` e no layout da campanha oficial 2026.
  - **Assets Oficiais Integrados**:
    - Download e estruturação de todas as artes em alta resolução em `assets/show-de-premios/img/` (`hero.png`, `hero-mobile.png`, `hero-under.png`, `telas-app.png`, `cada-100-1-cupom.png`, `atendimento.jpg`, `toten-urna.png`, `premiacao.png`, `data.png`, `bg.jpg`, `bg-mobile.jpg`, `favicon.png`).
    - Regulamento completo oficial anexado em PDF (`assets/show-de-premios/regulamento.pdf`).
  - **Design System & Padrões da Marca (+B Supermercados)**:
    - Paleta de cores oficial: Ouro/Amarelo Queimado (`#FCBF0C` / `#DDA712`), Vermelho Bordô (`#BB2E2C`), Superfícies Dark Glassmorphism (`#0e0e0e`, `#161616`) e cards em branco puro `#FFFFFF` com sombras suaves.
    - Tipografia: Integração com Google Fonts (`DM Sans`, `Questrial`, `Fraunces`).
    - Ícones oficiais via **Lucide Icons** com estilização circular em ouro.
  - **Seções Implementadas**:
    - **Header & Navbar**: Barra fixa oficial padronizada com a Home, contendo logo oficial, links de navegação (`Início`, `Sobre`, `Nossas Lojas`) e o item minimalista **Show de Prêmios** (`.nav-link` com ícone de presente) posicionado ao lado do botão vermelho **Clube +Fidelidade** (`.btn-cta-red`).
  - **Topbar Superior**: Mantida a barra padrão sem redundância.
    - **Hero Section**: Banner 3D da premiação com medalha Show de Prêmios, 3 TVs 85", Kits da Seleção e Vales-Compras, com versão responsiva para desktop e celular.
    - **Como Participar**: 4 Cards brancos com o passo a passo completo (App Clube+ Fidelidade com botão CTA, Acumular cupons a cada R$ 100, CPF no Caixa e Totem/Urna).
    - **Premiação**: Destaque lateral 3D + contadores numéricos animados dinamicamente com IntersectionObserver (`3 TVs 85"`, `12 Kits Oficiais`, `9 Vales-Compras`) e banner da data do sorteio (05/06/2026).
    - **Perguntas Frequentes (FAQ)**: Accordion interativo com numeração dourada `01` a `05`, ícones expansíveis `+`/`-` e respostas completas.
    - **Card de Download do Regulamento**: Seção minimalista integrada logo abaixo do FAQ ("*Consulte o regulamento completo - Leia o regulamento e fique por dentro de todas as regras e condições da promoção.*") com ícone dourado de documento/escudo e botão vermelho de download direto do PDF oficial.
    - **Rodapé Legal**: Textos de autorização SPA/ME e botão flutuante para voltar ao topo.
  - **Integração no Site Institucional (`index.html`)**: Inclusão de atalho em destaque para a campanha na topbar superior.

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

