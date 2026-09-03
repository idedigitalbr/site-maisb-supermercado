/**
 * INTERFACE ANIMADA DO WHATSAPP DENTRO DO SMARTPHONE (S23 STYLE)
 * Implementação fiel conforme especificação técnica da Agência IDE Técnica
 * Suporte a ciclo completo de 5 cenas: Gaveta -> Toque -> Lista -> Chat -> Mensagens dinâmicas
 */

(function () {
  'use strict';

  // Configurações e tempos da timeline (em ms)
  const TIMINGS = {
    DRAWER_DISPLAY: 1200,       // Tempo na tela inicial/gaveta
    APP_PRESS: 250,             // Feedback de toque no app WhatsApp
    APP_OPEN: 450,              // Transição de abertura do WhatsApp
    LIST_DISPLAY: 800,          // Tempo na lista de conversas
    CHAT_SELECT: 220,           // Feedback de clique na conversa do +B
    CHAT_ENTER: 350,            // Transição para o chat
    TYPING_1: 900,              // Digitando primeira mensagem
    MSG_1_PAUSE: 750,           // Pausa após primeira mensagem
    TYPING_2: 850,              // Digitando segunda mensagem
    MSG_2_PAUSE: 900,           // Pausa antes de digitar a resposta
    SEND_BOUNCE: 180,           // Feedback do botão enviar
    BLUE_CHECKS_DELAY: 450,     // Tempo para checks ficarem azuis
    TYPING_INVITE: 1100,        // Digitando mensagem do convite oficial
    FINISHED_HOLD: 16000        // Tempo estendido de leitura e clique no convite (16s)
  };

  // SVGs reutilizáveis com alta nitidez
  const ICONS = {
    checks: `<span class="wpp-checks" aria-hidden="true">
      <svg viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6L4.5 9.5L11.5 2M5 6L8.5 9.5L15.5 2" stroke="#8696A0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>`,
    typingDots: `<div class="wpp-typing-bubble" id="wpp-typing-bubble" aria-label="Digitando...">
      <span class="wpp-typing-dot"></span>
      <span class="wpp-typing-dot"></span>
      <span class="wpp-typing-dot"></span>
    </div>`
  };

  class WppPhoneController {
    constructor() {
      this.container = document.getElementById('wpp-phone-container');
      this.screen = document.getElementById('wpp-phone-screen');
      this.sceneDrawer = document.getElementById('wpp-scene-drawer');
      this.sceneList = document.getElementById('wpp-scene-list');
      this.sceneChat = document.getElementById('wpp-scene-chat');
      this.chatMessagesContainer = document.getElementById('wpp-chat-messages');
      this.contactStatus = document.getElementById('wpp-nav-status');
      this.inputPlaceholder = document.getElementById('wpp-bottom-text');
      this.sendBtn = document.getElementById('wpp-bottom-btn');
      this.appWhatsapp = document.getElementById('wpp-app-whatsapp');
      this.chatItemMaisB = document.getElementById('wpp-chat-item-maisb');

      this.activeTimers = [];
      this.isRunning = false;
      this.isFinished = false;

      if (!this.container || !this.screen) return;

      this.init();
    }

    init() {
      // Configura IntersectionObserver para iniciar quando estiver visível na viewport
      this.setupObserver();
    }

    setupObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this.isRunning) {
              this.start();
            }
          } else {
            // Se sair da tela antes de concluir, limpa para poupar CPU
            if (this.isRunning && !this.isFinished) {
              this.clearAllTimers();
              this.isRunning = false;
            }
          }
        });
      }, { threshold: 0.3 });

      observer.observe(this.container);
    }

    addTimer(fn, delay) {
      const id = setTimeout(fn, delay);
      this.activeTimers.push(id);
      return id;
    }

    clearAllTimers() {
      this.activeTimers.forEach(clearTimeout);
      this.activeTimers = [];
    }

    resetDOM() {
      this.clearAllTimers();
      this.isRunning = false;
      this.isFinished = false;

      // Restaura Cena 1: Gaveta
      if (this.sceneDrawer) {
        this.sceneDrawer.classList.remove('is-hidden');
      }
      if (this.appWhatsapp) {
        this.appWhatsapp.classList.remove('is-pressed');
      }

      // Restaura Cena 4: Lista
      if (this.sceneList) {
        this.sceneList.classList.remove('is-active');
      }
      if (this.chatItemMaisB) {
        this.chatItemMaisB.classList.remove('is-pressed');
      }

      // Restaura Cena 5: Chat
      if (this.sceneChat) {
        this.sceneChat.classList.remove('is-active');
      }
      if (this.chatMessagesContainer) {
        this.chatMessagesContainer.innerHTML = '';
      }
      if (this.contactStatus) {
        this.contactStatus.textContent = 'online';
        this.contactStatus.classList.remove('is-typing');
      }
      if (this.inputPlaceholder) {
        this.inputPlaceholder.textContent = 'Mensagem';
        this.inputPlaceholder.classList.add('is-placeholder');
      }
      if (this.sendBtn) {
        this.sendBtn.classList.remove('is-sent');
      }
    }

    start() {
      this.resetDOM();
      this.isRunning = true;
      this.isFinished = false;

      // ── CENA 1: GAVETA DE APPS
      this.addTimer(() => {
        // ── CENA 2: TOQUE NO WHATSAPP
        if (this.appWhatsapp) {
          this.appWhatsapp.classList.add('is-pressed');
        }

        this.addTimer(() => {
          // ── CENA 3: ABERTURA DO WHATSAPP
          if (this.sceneDrawer) {
            this.sceneDrawer.classList.add('is-hidden');
          }
          if (this.sceneList) {
            this.sceneList.classList.add('is-active');
          }

          // ── CENA 4: LISTA DE CONVERSAS
          this.addTimer(() => {
            if (this.chatItemMaisB) {
              this.chatItemMaisB.classList.add('is-pressed');
            }

            this.addTimer(() => {
              // ── CENA 5: ABRINDO CONVERSA DO +B SUPERMERCADOS
              if (this.sceneList) {
                this.sceneList.classList.remove('is-active');
              }
              if (this.sceneChat) {
                this.sceneChat.classList.add('is-active');
              }

              this.runChatConversation();
            }, TIMINGS.CHAT_SELECT);
          }, TIMINGS.LIST_DISPLAY);
        }, TIMINGS.APP_PRESS);
      }, TIMINGS.DRAWER_DISPLAY);
    }

    runChatConversation() {
      // 1. Aguarda entrada e exibe primeiro indicador de digitação
      this.addTimer(() => {
        this.showTypingIndicator(true);

        // 2. Primeira Mensagem Recebida (Grande e em Destaque)
        this.addTimer(() => {
          this.showTypingIndicator(false);
          this.appendMessage({
            type: 'received',
            title: 'Entre no nosso grupo<br>WhatsApp',
            time: '09:41'
          });

          // 3. Pausa e entra no segundo estado de digitação
          this.addTimer(() => {
            this.showTypingIndicator(true);

            // 4. Segunda Mensagem Recebida
            this.addTimer(() => {
              this.showTypingIndicator(false);
              this.appendMessage({
                type: 'received',
                text: 'Você irá começar a receber ofertas.',
                time: '09:41'
              });

              // 5. Simulação de digitação da resposta pelo usuário
              this.addTimer(() => {
                this.simulateUserTyping('Quero as ofertas! 😍', () => {
                  // Feedback de envio no botão
                  if (this.sendBtn) {
                    this.sendBtn.classList.add('is-sent');
                  }

                  this.addTimer(() => {
                    if (this.inputPlaceholder) {
                      this.inputPlaceholder.textContent = 'Mensagem';
                      this.inputPlaceholder.classList.add('is-placeholder');
                    }
                    if (this.sendBtn) {
                      this.sendBtn.classList.remove('is-sent');
                    }

                    // 6. Mensagem enviada pelo usuário (Balão verde à direita)
                    const sentMsgElem = this.appendMessage({
                      type: 'sent',
                      text: 'Quero as ofertas! 😍',
                      time: '09:41',
                      hasChecks: true
                    });

                    // 7. Confirmação dos checks azuis do WhatsApp
                    this.addTimer(() => {
                      if (sentMsgElem) {
                        const checksElem = sentMsgElem.querySelector('.wpp-checks');
                        if (checksElem) {
                          checksElem.classList.add('is-blue');
                        }
                      }

                      // 8. O +B responde enviando o convite oficial do grupo de ofertas
                      this.addTimer(() => {
                        this.showTypingIndicator(true);

                        this.addTimer(() => {
                          this.showTypingIndicator(false);

                          // Mensagem 4: Card de Convite Oficial Clicável
                          this.appendInviteMessage();

                          // Conversa concluída
                          this.isFinished = true;

                          // 9. Segura a tela com o convite finalizado por 16 segundos para leitura e clique
                          this.addTimer(() => {
                            this.restart();
                          }, TIMINGS.FINISHED_HOLD);
                        }, TIMINGS.TYPING_INVITE);
                      }, 700);
                    }, TIMINGS.BLUE_CHECKS_DELAY);
                  }, TIMINGS.SEND_BOUNCE);
                });
              }, TIMINGS.MSG_2_PAUSE);
            }, TIMINGS.TYPING_2);
          }, TIMINGS.MSG_1_PAUSE);
        }, TIMINGS.TYPING_1);
      }, TIMINGS.CHAT_ENTER);
    }

    simulateUserTyping(text, onComplete) {
      if (!this.inputPlaceholder) {
        if (onComplete) onComplete();
        return;
      }

      this.inputPlaceholder.textContent = '';
      this.inputPlaceholder.classList.remove('is-placeholder');

      let currentIdx = 0;
      const typeNextChar = () => {
        if (currentIdx < text.length) {
          this.inputPlaceholder.textContent += text.charAt(currentIdx);
          currentIdx++;
          const charDelay = Math.floor(Math.random() * 25) + 35; // 35ms - 60ms por caractere
          this.addTimer(typeNextChar, charDelay);
        } else {
          this.addTimer(() => {
            if (onComplete) onComplete();
          }, 250);
        }
      };

      typeNextChar();
    }

    showTypingIndicator(show) {
      if (this.contactStatus) {
        if (show) {
          this.contactStatus.textContent = 'digitando...';
          this.contactStatus.classList.add('is-typing');
        } else {
          this.contactStatus.textContent = 'online';
          this.contactStatus.classList.remove('is-typing');
        }
      }

      if (!this.chatMessagesContainer) return;

      const existingBubble = document.getElementById('wpp-typing-bubble');
      if (show) {
        if (!existingBubble) {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = ICONS.typingDots;
          const bubbleNode = wrapper.firstElementChild;
          this.chatMessagesContainer.appendChild(bubbleNode);
          this.scrollToBottom();
        }
      } else {
        if (existingBubble) {
          existingBubble.remove();
        }
      }
    }

    appendMessage({ type, title, text, time, hasChecks }) {
      if (!this.chatMessagesContainer) return null;

      const msgDiv = document.createElement('div');
      msgDiv.className = `wpp-msg ${type}`;

      let innerHTML = '';
      if (title) {
        innerHTML += `<div class="wpp-msg-title">${title}</div>`;
      }
      if (text) {
        innerHTML += `<div class="wpp-msg-text">${text}</div>`;
      }

      innerHTML += `<div class="wpp-msg-meta">${time || '09:41'}${hasChecks ? ICONS.checks : ''}</div>`;
      msgDiv.innerHTML = innerHTML;

      this.chatMessagesContainer.appendChild(msgDiv);
      this.scrollToBottom();
      return msgDiv;
    }

    appendInviteMessage() {
      if (!this.chatMessagesContainer) return null;

      const msgDiv = document.createElement('div');
      msgDiv.className = 'wpp-msg received wpp-msg-invite';

      msgDiv.innerHTML = `
        <a href="https://chat.whatsapp.com/IQe461Q5z0h1SSVDjKETh3" target="_blank" rel="noopener noreferrer" class="wpp-invite-card-link" title="Entrar no Grupo de Ofertas +B Supermercados">
          <div class="wpp-invite-preview">
            <div class="wpp-invite-avatar">
              <img src="./assets/Logos/FavIcon-Supermercados-MaisB-icone).webp" alt="+B Supermercados" />
            </div>
            <div class="wpp-invite-preview-info">
              <div class="wpp-invite-group-name">OFERTAS +B SUPERMERCADOS</div>
              <div class="wpp-invite-group-desc">WhatsApp Group Invite</div>
              <div class="wpp-invite-group-url">chat.whatsapp.com/IQe461Q5z0h1SSVDjKETh3</div>
            </div>
          </div>
          <div class="wpp-invite-link-row">
            <span class="wpp-invite-link-text">https://chat.whatsapp.com/IQe461Q5z0h1SSVDjKETh3</span>
            <span class="wpp-msg-meta">09:41</span>
          </div>
          <div class="wpp-invite-action-btn">
            <span>Entrar no Grupo de Ofertas</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </a>
      `;

      // Garante que o clique no link abra a aba externa sem interferência
      const linkElem = msgDiv.querySelector('.wpp-invite-card-link');
      if (linkElem) {
        linkElem.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }

      this.chatMessagesContainer.appendChild(msgDiv);
      this.scrollToBottom();
      return msgDiv;
    }

    scrollToBottom() {
      if (this.chatMessagesContainer) {
        this.chatMessagesContainer.scrollTop = this.chatMessagesContainer.scrollHeight;
      }
    }

    restart() {
      this.start();
    }
  }

  // Inicializa quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.wppAnimationInstance = new WppPhoneController();
    });
  } else {
    window.wppAnimationInstance = new WppPhoneController();
  }

  // Expõe função global para controle manual ou debug
  window.restartWppAnimation = function () {
    if (window.wppAnimationInstance) {
      window.wppAnimationInstance.restart();
    }
  };
})();
