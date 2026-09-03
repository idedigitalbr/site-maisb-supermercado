# Prompt de Implementação — Interface Animada do WhatsApp dentro do Smartphone

## Contexto

Estamos trabalhando em um projeto existente feito em **Next.js + React**.

Existe uma seção da página que já possui uma arte/imagem com um smartphone. Atualmente, dentro da tela desse smartphone existe apenas um **print estático** de uma conversa do WhatsApp.

Quero substituir **somente o conteúdo estático exibido dentro da tela do celular** por uma **interface real, construída em React/Next.js, totalmente animada e funcional visualmente**.

A imagem de referência anexada deve ser usada como referência visual para:

- enquadramento;
- proporção;
- posição do smartphone;
- moldura do aparelho;
- fundo;
- iluminação;
- perspectiva;
- tamanho da tela;
- aparência da conversa;
- textos;
- organização visual.

## Objetivo principal

No lugar onde atualmente aparece o print da tela do celular, crie uma interface animada usando:

- Next.js;
- React;
- TypeScript, se o projeto já estiver usando;
- JSX/TSX;
- CSS, CSS Modules ou Tailwind, seguindo o padrão atual do projeto;
- JavaScript/TypeScript para controlar a timeline;
- CSS animations/transitions ou Framer Motion, somente se Framer Motion já estiver instalado ou fizer sentido no projeto.

**Não quero vídeo, GIF, canvas pré-renderizado, sprite, sequência de imagens ou qualquer animação renderizada previamente.**

A interface precisa existir de verdade no DOM como componentes React.

---

# Regra mais importante

Antes de implementar, analise a seção/componente já existente no projeto.

**Preserve a estrutura, responsividade, estilos, posicionamento e comportamento atual da página.**

Faça somente as alterações necessárias para substituir o print estático da tela do celular pela nova interface React animada.

Não refatore partes não relacionadas.

Não reconstrua a landing page inteira.

Não altere o restante da composição visual.

---

# O que deve permanecer exatamente como está

A parte externa deve continuar igual à arte atual:

- fundo preto;
- moldura do smartphone;
- perspectiva do aparelho;
- posicionamento;
- proporções;
- sombras;
- iluminação;
- bordas arredondadas;
- demais elementos gráficos da seção.

O smartphone inteiro deve permanecer parado.

**Toda a animação deve acontecer exclusivamente dentro da área física da tela do celular.**

Se a moldura do smartphone já fizer parte da imagem/arte atual, **não recrie a moldura em HTML**.

Use a própria arte existente como base e sobreponha somente a tela interativa.

---

# Estrutura esperada

A implementação deve funcionar conceitualmente assim:

```tsx
<div className="phone">
  <Image
    src={...}
    alt="Smartphone"
  />

  <div className="phoneScreen">
    <PhoneAnimation />
  </div>
</div>
```

Com uma estrutura equivalente a:

```css
.phone {
  position: relative;
}

.phoneScreen {
  position: absolute;
  overflow: hidden;

  /*
    Ajustar top, left, width e height
    exatamente para a região física do display
    existente na imagem.
  */
}
```

A área `.phoneScreen` precisa ficar **perfeitamente encaixada no display do smartphone da referência**.

Considere:

- top;
- left;
- width;
- height;
- border-radius;
- escala;
- proporção;
- perspectiva, se necessário;
- clipping/máscara;
- `overflow: hidden`.

Nenhum elemento interno pode escapar para fora da tela.

---

# Responsividade

A implementação precisa continuar funcionando responsivamente.

Se o smartphone diminuir junto com o container da página, todo o conteúdo interno deve escalar proporcionalmente.

Evite posicionamentos que funcionem apenas em uma resolução específica.

Se necessário, utilize:

- unidades relativas;
- `%`;
- `aspect-ratio`;
- wrappers proporcionais;
- `transform`;
- `clamp()`;
- CSS responsivo.

O conteúdo da tela deve permanecer sempre encaixado na moldura.

---

# Next.js

Estamos usando **Next.js**.

A animação é client-side, portanto o componente responsável pela animação deve utilizar:

```tsx
"use client";
```

Use `next/image` para assets estáticos quando fizer sentido.

Evite problemas de hydration.

Toda lógica relacionada a:

- timers;
- animações;
- `IntersectionObserver`;
- interações;
- troca de telas;

deve rodar apenas no client.

---

# Componentização

Organize a implementação de forma limpa.

Uma sugestão de estrutura:

```text
components/
  PhoneAnimation/
    PhoneAnimation.tsx
    AppDrawer.tsx
    WhatsAppHome.tsx
    WhatsAppChat.tsx
    MessageBubble.tsx
    TypingIndicator.tsx
```

Essa estrutura é apenas uma sugestão.

Se o projeto possuir outro padrão de pastas/componentes, **siga o padrão existente**.

Não crie abstrações desnecessárias.

---

# Timeline da animação

A animação deve contar uma pequena história de uso real do smartphone.

Fluxo obrigatório:

```text
gaveta/home de apps
↓
toque no ícone do WhatsApp
↓
animação de abertura do WhatsApp
↓
lista inicial de conversas
↓
abertura da conversa "+B Supermercados"
↓
indicador "digitando..."
↓
primeira mensagem recebida
↓
indicador "digitando..."
↓
segunda mensagem recebida
↓
mensagem enviada pelo usuário
↓
estado final
```

---

# Cena 1 — Tela inicial / gaveta de aplicativos

Quando a animação começar, não mostrar imediatamente o WhatsApp.

Primeiro exibir uma interface de smartphone simulando uma:

- tela inicial; ou
- gaveta de aplicativos.

Ela deve conter alguns ícones de aplicativos para deixar a cena crível.

O ícone do **WhatsApp** precisa estar claramente visível.

Essa tela deve aparecer por aproximadamente:

```text
800ms a 1200ms
```

Não precisa recriar um sistema operacional específico de forma perfeita, mas o resultado deve parecer moderno, limpo e plausível.

---

# Cena 2 — Toque no WhatsApp

Depois da pequena pausa inicial, simule um toque no ícone do WhatsApp.

Pode existir uma microanimação como:

- scale down;
- ripple;
- feedback de pressão;
- pequeno highlight.

O toque deve parecer natural.

Não mostrar cursor de mouse.

A experiência deve parecer o uso de um smartphone.

---

# Cena 3 — Abertura do WhatsApp

Depois do toque, faça uma transição suave para a interface do WhatsApp.

A abertura pode simular o comportamento real de apps mobile:

- o ícone aumenta;
- a interface aparece por scale/fade;
- a tela do aplicativo ocupa progressivamente o display.

Evite transições exageradas.

A animação deve ser rápida e natural.

---

# Cena 4 — Tela inicial do WhatsApp

Antes de entrar diretamente na conversa, mostrar brevemente a tela principal/lista de conversas do WhatsApp.

Essa tela pode permanecer visível por aproximadamente:

```text
500ms a 900ms
```

Deve existir uma conversa visível com o nome:

```text
+B Supermercados
```

Depois, simule a abertura dessa conversa.

Pode haver um pequeno feedback visual equivalente a um toque.

---

# Cena 5 — Conversa "+B Supermercados"

Abra a conversa:

```text
+B Supermercados
```

Recrie a interface da conversa de maneira muito próxima à referência enviada.

O header deve possuir visual semelhante ao WhatsApp, incluindo:

- botão de voltar;
- avatar/logo;
- nome `+B Supermercados`;
- indicador de verificação, se presente na referência;
- ícone de chamada de vídeo;
- ícone de telefone;
- menu de três pontos.

Use SVGs ou uma biblioteca de ícones já existente no projeto.

Se o projeto já usar Lucide, pode utilizá-lo.

**Não use emojis ou caracteres Unicode improvisados como substitutos de ícones de interface.**

---

# Fundo da conversa

Recrie o fundo da conversa de maneira limpa e semelhante à referência.

Não precisa copiar um wallpaper protegido ou externo.

Pode usar:

- fundo neutro claro;
- padrão sutil feito em CSS;
- textura discreta;
- elementos abstratos simples.

O foco deve ser a conversa.

---

# Comportamento das mensagens

Quando a conversa abrir, **não deixe todas as mensagens visíveis desde o começo**.

Elas precisam aparecer progressivamente, como se a conversa estivesse acontecendo naquele momento.

Preferencialmente, as mensagens devem ser **inseridas dinamicamente no estado/DOM**.

Não quero apenas todas as mensagens já renderizadas com:

```css
opacity: 0;
```

e depois reveladas.

Prefira algo como:

```ts
setMessages((current) => [
  ...current,
  newMessage,
]);
```

ou uma estratégia equivalente.

---

# Primeira mensagem

Ao abrir a conversa:

1. aguarde um pequeno momento;
2. mostre um indicador de digitação;
3. mantenha o indicador por aproximadamente `700ms–1000ms`;
4. remova o indicador;
5. adicione a primeira mensagem.

Texto exato:

```text
Entre no nosso grupo WhatsApp
```

Essa mensagem deve ser recebida, portanto deve aparecer no lado esquerdo.

Use um balão semelhante ao WhatsApp.

A entrada pode ter uma animação sutil, por exemplo:

```text
opacity: 0 → 1
translateY: 6px → 0
scale: 0.98 → 1
```

Não exagere.

---

# Indicador de digitação

Crie um componente real de digitação.

Exemplo visual:

```text
● ● ●
```

Os três pontos devem pulsar em tempos ligeiramente diferentes.

Não use GIF.

Faça com CSS/React.

Exemplo conceitual:

```tsx
<TypingIndicator />
```

---

# Segunda mensagem

Após a primeira mensagem:

1. aguarde uma pequena pausa;
2. mostre novamente o indicador de digitação;
3. mantenha o indicador durante aproximadamente `600ms–900ms`;
4. remova o indicador;
5. adicione a segunda mensagem.

Texto exato:

```text
Você irá começar a receber ofertas.
```

Essa mensagem também deve aparecer como recebida, no lado esquerdo.

---

# Mensagem do usuário

Depois da segunda mensagem, aguarde aproximadamente:

```text
700ms a 1200ms
```

Em seguida, insira uma mensagem enviada pelo usuário no lado direito.

Texto exato:

```text
Quero as ofertas! 😍
```

Essa mensagem deve:

- ficar alinhada à direita;
- possuir fundo verde-claro semelhante ao WhatsApp;
- ter horário pequeno;
- mostrar os dois checks azuis;
- entrar com animação suave.

Os checks podem ser implementados com SVG.

Não usar caracteres aleatórios para imitá-los.

---

# Textos obrigatórios

Não alterar os textos.

Usar exatamente:

```text
+B Supermercados
```

```text
Entre no nosso grupo WhatsApp
```

```text
Você irá começar a receber ofertas.
```

```text
Quero as ofertas! 😍
```

Não corrigir, reescrever ou adicionar outras mensagens.

---

# Controle da timeline

Centralize a timeline da animação.

Evite dezenas de `setTimeout` espalhados em vários componentes.

Pode utilizar uma pequena máquina de estados.

Exemplo:

```ts
type AnimationStage =
  | "drawer"
  | "pressing-whatsapp"
  | "opening-whatsapp"
  | "whatsapp-home"
  | "opening-chat"
  | "chat"
  | "typing-1"
  | "message-1"
  | "typing-2"
  | "message-2"
  | "user-message"
  | "finished";
```

Ou crie uma sequência de etapas:

```ts
const timeline = [
  { stage: "drawer", duration: 1000 },
  { stage: "pressing-whatsapp", duration: 250 },
  { stage: "opening-whatsapp", duration: 500 },
  { stage: "whatsapp-home", duration: 700 },
  // ...
];
```

A implementação exata fica a seu critério, desde que seja:

- legível;
- fácil de manter;
- fácil de alterar;
- sem timers desorganizados;
- corretamente limpa no unmount.

Se utilizar timers, faça cleanup.

---

# Início automático ao entrar na viewport

A animação não deve necessariamente começar assim que a página carregar se o smartphone estiver fora da tela.

Use `IntersectionObserver`.

Comportamento esperado:

1. seção está fora da viewport → animação parada;
2. usuário rola até a seção;
3. smartphone entra na viewport;
4. animação começa.

Use um threshold razoável, por exemplo entre:

```text
0.3 e 0.6
```

A animação deve iniciar apenas uma vez por padrão.

---

# Reiniciar animação

Crie uma função:

```ts
restartAnimation()
```

Essa função deve:

- cancelar timers ativos;
- limpar mensagens;
- voltar para a gaveta de apps;
- resetar estados;
- iniciar a timeline novamente.

Também permita reiniciar a animação clicando/tocando no smartphone depois que a sequência estiver concluída.

Não precisa mostrar um grande botão visual de "replay" sobre a arte, a menos que já exista algo equivalente no design.

---

# Estado e React

Utilize recursos nativos do React quando forem suficientes:

```tsx
useState
useEffect
useRef
useCallback
```

Não adicione Redux, Zustand ou outra biblioteca global apenas para essa animação.

Não há necessidade.

---

# Animações

Priorize:

- CSS transitions;
- CSS keyframes;
- transforms;
- opacity;
- scale;
- translate;
- pequenas microinterações.

Caso o projeto já possua **Framer Motion**, ele pode ser utilizado.

Se não estiver instalado, não adicionar a dependência sem necessidade.

Evite animações pesadas.

A animação deve rodar suavemente em dispositivos móveis.

Prefira propriedades performáticas:

```css
transform
opacity
```

Evite animar continuamente propriedades caras como:

```css
top
left
width
height
```

quando um `transform` puder resolver.

---

# Aparência do WhatsApp

A interface deve ser reconhecível como WhatsApp e visualmente próxima à referência fornecida.

Prioridades:

- header verde;
- layout correto;
- tipografia semelhante;
- espaçamento coerente;
- mensagens com tamanhos naturais;
- balões corretamente posicionados;
- horário pequeno;
- checks;
- ícones claros;
- aparência mobile.

Não precisa copiar cada pixel de uma versão específica do aplicativo.

O objetivo é reproduzir visualmente a interface mostrada na referência dentro da tela do smartphone.

---

# Qualidade visual

Quero um resultado profissional.

Evite:

- texto desalinhado;
- ícones gigantes;
- espaçamentos inconsistentes;
- interfaces genéricas demais;
- fontes exageradas;
- mensagens ocupando largura excessiva;
- elementos escapando da tela;
- bordas que não combinam;
- animações bruscas;
- excesso de blur;
- efeitos neon;
- sombras exageradas.

O resultado deve parecer uma interface de produto real.

---

# Ícones e assets

Prioridade:

1. reutilizar biblioteca de ícones já existente no projeto;
2. SVGs simples;
3. CSS quando apropriado.

Não instalar pacote novo apenas para poucos ícones se isso puder ser evitado.

Para o ícone do WhatsApp, utilize um asset apropriado já existente ou um SVG/local asset compatível com o projeto.

Não busque recursos externos em runtime sem necessidade.

---

# Acessibilidade

Mesmo sendo uma demonstração visual:

- use `aria-hidden` em elementos puramente decorativos quando apropriado;
- evite botões sem nome acessível;
- se o smartphone for clicável para replay, forneça um `aria-label`;
- respeite `prefers-reduced-motion`.

Para usuários com:

```css
@media (prefers-reduced-motion: reduce)
```

reduza ou remova animações longas e apresente o estado final de forma apropriada.

---

# Performance

A animação deve ser leve.

Não usar:

- vídeo;
- canvas desnecessário;
- WebGL;
- animações contínuas pesadas;
- polling;
- bibliotecas grandes sem motivo.

Limpe:

- timers;
- observers;
- listeners;

quando o componente desmontar.

---

# Regras de implementação

## Faça

- analisar o componente existente primeiro;
- preservar a seção atual;
- manter o smartphone na mesma posição;
- substituir somente o print estático;
- criar a tela em React;
- fazer as mensagens aparecerem dinamicamente;
- usar animações sutis;
- manter responsividade;
- iniciar com `IntersectionObserver`;
- criar `restartAnimation()`;
- manter o código legível.

## Não faça

- não crie vídeo;
- não crie GIF;
- não use sequência de screenshots;
- não anime o celular inteiro;
- não redesenhe a página toda;
- não altere outras seções;
- não invente mensagens;
- não mude os textos;
- não substitua o smartphone existente por outro;
- não instale dependências grandes sem necessidade;
- não deixe todos os balões renderizados desde o início;
- não faça a animação sair dos limites do display.

---

# Resultado final esperado

O resultado deve dar a impressão de que o smartphone já existente na arte está realmente funcionando.

Quando o usuário chegar nessa seção:

1. vê a gaveta de aplicativos;
2. o WhatsApp é tocado;
3. o aplicativo abre;
4. aparece rapidamente a lista de conversas;
5. a conversa `+B Supermercados` é aberta;
6. aparece o indicador de digitação;
7. chega:

   `Entre no nosso grupo WhatsApp`

8. aparece novamente o indicador de digitação;
9. chega:

   `Você irá começar a receber ofertas.`

10. depois aparece do lado direito:

   `Quero as ofertas! 😍`

Tudo isso deve acontecer **dentro da tela do celular**, enquanto a moldura, o fundo e todo o resto da composição permanecem imóveis.

A sensação final precisa ser de uma **interface real de smartphone rodando em React dentro da página**, e não de uma animação pré-renderizada.

---

# Antes de finalizar

Depois de implementar:

1. confira visualmente o alinhamento da `.phoneScreen` com a moldura;
2. teste desktop e mobile;
3. confirme que nada ultrapassa os limites do display;
4. confirme que a animação só inicia quando a seção entra na viewport;
5. confirme que `restartAnimation()` funciona;
6. confirme que todos os timers/observers possuem cleanup;
7. confirme que não houve alteração em partes não relacionadas da página;
8. confirme que não foi adicionada nenhuma dependência desnecessária;
9. confira se os textos são exatamente os fornecidos;
10. ajuste os tempos e microanimações para que tudo pareça natural.

**Priorize fidelidade visual, fluidez e integração com o código existente.**
