# 🌐 NetCenter

**NetCenter** é uma aplicação web desenvolvida como projeto acadêmico para atuar como um hub centralizador de ferramentas de diagnóstico de redes. O objetivo principal do projeto é aplicar conceitos modernos de desenvolvimento frontend, como modularização, consumo de APIs e manipulação dinâmica do DOM.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **HTML5 & CSS3:** Estruturação semântica e estilização.
* **TailwindCSS (via CDN):** Framework utilitário para design responsivo e moderno.
* **JavaScript (Vanilla ES6+):** Lógica da aplicação utilizando ECMAScript Modules (ESM).
* **JSON Server:** Simulação de uma API RESTful (`db.json`) para consumo de dados.
* **Lucide Icons:** Biblioteca de ícones SVG de código aberto.

---

## 🎯 Requisitos Atendidos (Rubrica de Avaliação)

Este projeto foi estruturado para atender aos seguintes critérios acadêmicos:

- [x] **Estruturação Visual:** Interface construída de forma clara, responsiva e agradável, simulando um painel de diagnóstico real.
- [x] **Estruturação de Dados:** Uso de um arquivo `db.json` servido via `json-server` para fornecer os dados das ferramentas disponíveis.
- [x] **Consumo de API (Fetch):** Implementação de requisições assíncronas (`fetch` com `try/catch`) para buscar os dados do servidor local.
- [x] **Manipulação Dinâmica do DOM:** Os cards das ferramentas na página inicial são gerados 100% via JavaScript (`createElement`, `appendChild`), sem HTML fixo para os dados.
- [x] **Uso de ESM (ECMAScript Modules):** Arquitetura separada em módulos lógicos, utilizando `import` e `export` para garantir a separação de responsabilidades (ex: `api.js` para rede, `main.js` para interface).
- [x] **Tratamento de Eventos:** Uso de `addEventListener` para capturar cliques nos cards e botões, capturando parâmetros e redirecionando as URLs dinamicamente.

---

## 📂 Estrutura do Projeto

* `db.json`: Banco de dados simulado contendo as informações das ferramentas.
* `api.js`: Módulo (ESM) responsável exclusivamente por fazer a requisição HTTP (Fetch API) ao servidor.
* `main.js`: Módulo principal que consome os dados de `api.js`, cria os elementos dinamicamente na tela e gerencia os eventos de clique.
* `index.html`: Página inicial com o motor de busca e a grade de ferramentas gerada pelo JavaScript.
* `tools.html`: Página de resultados que captura os parâmetros da URL (Query Strings) para exibir o alvo e a ferramenta selecionada de forma dinâmica.

---

## ⚙️ Como Executar o Projeto (Ambiente Codespaces / VS Code)

Para testar a aplicação localmente ou via GitHub Codespaces, siga os passos abaixo:

1. **Inicie o servidor de dados (API):**
   Abra o terminal na pasta raiz do projeto e execute o comando:
   ```bash
   npx json-server --watch db.json --port 3000