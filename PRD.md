📄 Product Requirements Document (PRD) - NetCenter
1. Visão Geral do Produto
O NetCenter é uma aplicação web multi-página que atua como um hub centralizador de ferramentas para diagnóstico de redes. O produto visa facilitar a simulação de comandos comuns de infraestrutura (como Ping, Traceroute, Meu IP e NSLookup) através de uma interface gráfica amigável, moderna e responsiva, substituindo a necessidade imediata do uso de terminais de linha de comando (CLI) para consultas rápidas.

2. Objetivos do Projeto
Objetivo Funcional: Prover uma interface onde o usuário possa inserir um "alvo" (IP ou Domínio) e simular a execução de ferramentas de rede, exibindo resultados visuais emulando um terminal.

Objetivo Acadêmico: Demonstrar domínio em tecnologias fundamentais de Front-End, especificamente: Modularização (ESM), requisições HTTP (Fetch API), manipulação avançada da Árvore de Elementos (DOM) e componentização de dados através de uma API Mockada.

3. Requisitos Funcionais (RF)
Os Requisitos Funcionais descrevem o que o sistema deve fazer.

RF01 - Listagem de Ferramentas: O sistema deve buscar a lista de ferramentas disponíveis no servidor (via API) e exibi-las na página inicial em formato de grade (cards).

RF02 - Captura de Alvo: A página inicial deve possuir um campo de busca que permita ao usuário digitar um IP ou Domínio válido (ex: google.com).

RF03 - Navegação Parametrizada: Ao clicar no botão principal de "Analisar" ou em um card específico de ferramenta, o sistema deve redirecionar o usuário para a página de resultados (tools.html), passando os dados de escolha via parâmetros na URL (Query Strings).

RF04 - Simulação de Execução: A página de resultados deve ler os parâmetros da URL e exibir visualmente (emulando um terminal) qual ferramenta está sendo simulada contra qual alvo específico.
RF05 - Relatórios por usuário: Usuários cadastrados devem poder gerar um relatório em PDF da análise de rede e armazená-lo em sua conta para consulta posterior.

4. Requisitos Não Funcionais (RNF)
Os Requisitos Não Funcionais descrevem como o sistema deve fazer (restrições técnicas exigidas na rubrica de avaliação).

RNF01 - Arquitetura de Dados: Os dados das ferramentas devem ser persistidos em SQLite e expostos por um backend Express.

RNF02 - Comunicação Assíncrona: A busca dos dados deve ser feita obrigatoriamente utilizando a Fetch API nativa do JavaScript, com tratamento de erros (blocos try/catch).

RNF03 - Manipulação Dinâmica do DOM: A renderização dos cards na interface não pode ser escrita em HTML fixo (hardcoded). O JavaScript deve ser responsável por criar os elementos (document.createElement) e injetá-los na tela.

RNF04 - Modularização (ESM): A lógica de negócios deve ser obrigatoriamente separada. Deve existir um arquivo dedicado à comunicação de rede (api/index.js) e um arquivo para controle de interface (main.js), interligados através de import e export.

RNF05 - Estilização: A interface deve ser responsiva e estilizada utilizando o framework TailwindCSS (via CDN).

5. Arquitetura e Fluxo de Dados
A aplicação segue um fluxo de consumo de API padrão Front-End:

O servidor Express expõe os dados em SQLite pelo endpoint REST em http://localhost:3000/ferramentas.

O arquivo index.html carrega o módulo main.js.

O main.js invoca a função assíncrona alocada no api/index.js.

O api/index.js realiza o Fetch, formata o retorno para JSON e devolve os dados em formato de array de objetos.

O main.js itera sobre o array, constrói o HTML via DOM e anexa ouvintes de eventos (Event Listeners) em cada card gerado.