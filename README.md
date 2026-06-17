# 🌐 NetCenter

**NetCenter** é uma aplicação web desenvolvida como projeto acadêmico para atuar como um hub centralizador de ferramentas de diagnóstico de redes. O objetivo principal do projeto é aplicar conceitos modernos de desenvolvimento frontend, como modularização, consumo de APIs e manipulação dinâmica do DOM.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **HTML5 & CSS3:** Estruturação semântica e estilização.
* **TailwindCSS (via CDN):** Framework utilitário para design responsivo e moderno.
* **JavaScript (Vanilla ES6+):** Lógica da aplicação utilizando ECMAScript Modules (ESM).
* **Express + SQLite:** Backend simples em Express com persistência em SQLite.
* **Lucide Icons:** Biblioteca de ícones SVG de código aberto.

---

## 🎯 Requisitos Atendidos (Rubrica de Avaliação)

Este projeto foi estruturado para atender aos seguintes critérios acadêmicos:

- [x] **Estruturação Visual:** Interface construída de forma clara, responsiva e agradável, simulando um painel de diagnóstico real.
- [x] **Estruturação de Dados:** Backend Express com persistência SQLite para fornecer os dados das ferramentas disponíveis.
- [x] **Consumo de API (Fetch):** Implementação de requisições assíncronas (`fetch` com `try/catch`) para buscar os dados do servidor local.
- [x] **Manipulação Dinâmica do DOM:** Os cards das ferramentas na página inicial são gerados 100% via JavaScript (`createElement`, `appendChild`), sem HTML fixo para os dados.
- [x] **Uso de ESM (ECMAScript Modules):** Arquitetura separada em módulos lógicos, utilizando `import` e `export` para garantir a separação de responsabilidades (ex: `api.js` para rede, `main.js` para interface).
- [x] **Tratamento de Eventos:** Uso de `addEventListener` para capturar cliques nos cards e botões, capturando parâmetros e redirecionando as URLs dinamicamente.

---

## 📂 Estrutura do Projeto

* `server.js`: Backend Express que gerencia autenticação e fornece o endpoint `/ferramentas`.
* `api.js`: Módulo (ESM) responsável exclusivamente por fazer a requisição HTTP (Fetch API) ao servidor.
* `main.js`: Módulo principal que consome os dados de `api.js`, cria os elementos dinamicamente na tela e gerencia os eventos de clique.
* `index.html`: Página inicial com o motor de busca e a grade de ferramentas gerada pelo JavaScript.
* `tools.html`: Página de resultados que captura os parâmetros da URL (Query Strings) para exibir o alvo e a ferramenta selecionada de forma dinâmica.

---

## ⚙️ Como Executar o Projeto (Ambiente Codespaces / VS Code)

Para testar a aplicação localmente ou via GitHub Codespaces, siga os passos abaixo:

1. **Instale as dependências:**
   Abra o terminal na pasta raiz do projeto e execute:
   ```bash
   npm install
   ```

2. **Inicie o servidor local:**
   ```bash
   npm start
   ```

3. **Acesse a aplicação:**
   Abra `http://localhost:3000` no navegador.

4. **Fluxo de autenticação:**
   - Há um botão `Entrar` no cabeçalho para exibir a tela de login.
   - Há também uma página de cadastro (`register.html`) para criar usuários.
   - O backend usa JWT para proteger a rota de resultado (`tools.html`), exigindo token válido para acessar.
   - O armazenamento de usuários agora é feito em SQLite no arquivo `data.sqlite`.
   - Usuários autenticados podem gerar relatórios completos de análise de rede em PDF e acessar seus relatórios salvos em `reports.html`.
