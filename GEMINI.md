# 🛡️ Regras de Ouro & Diretrizes Globais — Agência IDE Técnica

## 1. Atualização e Push no GitHub (Confirmação Obrigatória)
Sempre que o usuário pedir para **atualizar no GitHub** (ou pedir push / commit & push):
1. **NUNCA** execute o git push imediatamente sem validação.
2. Identifique o link remoto do repositório (git remote get-url origin).
3. **Pergunte e confirme com o usuário primeiro**, usando o formato:
   > "Tá, vou fazer, mas só confirma se o GitHub é esse: <URL_DO_REPOSITORIO_GITHUB>"
4. Somente após o usuário confirmar a URL, execute o commit e push para o repositório.

---

## 2. Padrão de Codificação & Design System
- Sempre preserve a identidade visual, paleta oficial de cores e tipografia serifada/sans-serif definida no projeto.
- Mantenha os arquivos .MD/changelog.md atualizados em UTF-8 a cada modificação relevante.

---

## 3. Gestão e Padrão dos Documentos de Ajustes no Google Drive
- **Caminho Oficial no Google Drive:** `G:\Meu Drive\Reuniões 2026\SETEMBRO\SITES +B (Ajustes)\`
- **Estrutura de Pastas e Arquivos Oficiais:**
  - 📁 `Solicitacoes JR (no Grupo)/`: Documentos com as solicitações brutas enviadas no grupo do WhatsApp (`Ajustes Site - Supermercado.docx`, `Ajustes Site - GMB.docx`).
  - 📄 `Check Ajustes - Supermercado +B (Site).docx`: Documento oficial de check e status dos ajustes do Supermercado +B.
  - 📄 `Check Ajustes - Grupo Mais Barato (Site).docx`: Documento oficial de check e status dos ajustes do Grupo Mais Barato.
- **Padrão Visual e Tipográfico Obrigatório:**
  1. **Título do Documento:** Preto Puro (`#000000`), Negrito (~16pt).
  2. **Subtítulo:** Cinza Neutro (`#555555`), Itálico (~9.5pt) com metadados de commit:
     `Data das Últimas Solicitações no Grupo: DD MÊS | Últimos Ajustes Commits Feitos: DD MÊS as HH:MM (on github)`
  3. **Título dos Itens:** Preto Puro (`#000000`), Negrito (~11pt).
  4. **Tags de Status (Único Ponto Colorido):**
     - `[100% FINALIZADO NO SITE]` em Verde (`#2E7D32`).
     - `[AGUARDANDO ARTES DO MARKETING]` em Dourado/Laranja (`#DA8C00`).
  5. **Corpo do Texto / Subitens:** 100% em Cinza Neutro (`#555555`):
     - `SOLICITADO:` (Negrito, `#555555`)
     - `[x] IMPLEMENTAÇÃO TÉCNICA CONFORME SOLICITADO:` (Negrito, `#555555`)
     - `[  ] PENDÊNCIA (MARKETING):` ou `[✓] NENHUMA PENDÊNCIA:` (Negrito, `#555555`)
  6. **Tabela Final:** `GUIA TÉCNICO DE MEDIDAS & ESPECIFICAÇÕES DE ARTES (PARA O MARKETING)` com colunas *Seção do Site*, *Dimensão Recomendada* e *Proporção*.
