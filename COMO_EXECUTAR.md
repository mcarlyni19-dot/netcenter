# 🚀 COMO EXECUTAR O NETCENTER - INSTRUÇÕES PARA AVALIAÇÃO

---

## **REQUISITOS DO PROJETO**

✅ **json-server** - API local com dados em JSON  
✅ **Fetch API** - Requisições HTTP assíncronas  
✅ **Manipulação DOM** - Elementos criados dinamicamente  
✅ **ESM Modules** - Código modularizado  
✅ **TailwindCSS** - Estilização responsiva  

---

## **PASSO 1: Instale as Dependências**

```bash
npm install
```

Isso vai instalar o `json-server` localmente.

---

## **PASSO 2: Inicie o json-server (TERMINAL 1)**

```bash
npm run dev
```

Você verá:
```
  ⚡ Server is running at http://localhost:3000
  Press ENTER to stop the server
```

**O json-server está rodando e servindo os dados de `data/db.json`**

---

## **PASSO 3: Abra o Frontend (TERMINAL 2)**

Opção A - Com Live Server (VS Code):
```
1. Abra index.html
2. Clique direito → "Open with Live Server"
```

Opção B - Com npx serve:
```bash
npx serve .
```

---

## **TESTANDO O FLUXO COMPLETO**

1. **Abra o navegador** em `http://localhost:5500` (ou a porta que Live Server mostrar)

2. **Verifique o Console** (F12):
   - Deve ver: `✅ Sucesso! Conectado ao json-server local.`
   - Os cards devem aparecer na página

3. **Clique em um card** ou no botão "Analisar"
   - Deve redirecionar para `tools.html`
   - Deve exibir os parâmetros corretamente

4. **Verifique Network** (DevTools > Network):
   - Requisição GET para `http://localhost:3000/ferramentas` ✓

---

## **ESTRUTURA DE DADOS - COMO FUNCIONA**

### **data/db.json** (Banco de dados)
```json
{
  "ferramentas": [
    {
      "id": "ping",
      "nome": "Teste de Ping",
      "descricao": "...",
      "icone": "activity"
    }
    // ... mais ferramentas
  ]
}
```

### **Endpoint exposto pelo json-server**
```
GET http://localhost:3000/ferramentas
```

### **Requisição no api/index.js**
```javascript
const response = await fetch('http://localhost:3000/ferramentas');
const data = await response.json();
return data;  // Retorna o array completo
```

---

## **FALHAS COMUNS E SOLUÇÕES**

### ❌ "Erro: Verifique se o npx json-server está rodando"

**Solução:**
```bash
# Certifique-se que json-server está rodando
npm run dev

# Em outro terminal, rode o frontend
npx serve .
```

### ❌ "Ferramentas não aparecem"

**Verifique:**
1. DevTools Console (F12) → Procure por ✅ ou ❌
2. Se ver "usando fallback (db.json)" → json-server não está rodando
3. Se ver erro 404 → json-server não está na porta 3000

### ❌ "CORS Error"

Isso não deve acontecer localmente, mas se acontecer:
```bash
# Mate json-server (Ctrl+C)
# Rode com flag CORS
npx json-server --watch data/db.json --port 3000 --host 0.0.0.0
```

---

## **PARA APRESENTAR AO PROFESSOR**

**Prepare 2 terminais lado a lado:**

**Terminal 1:**
```bash
npm run dev
```
Mostra o json-server rodando ✅

**Terminal 2:**
```bash
npx serve .
```
Mostra o frontend rodando ✅

**Navegador:**
- Abra a URL mostrada
- Demonstre os cards carregando
- F12 → Console → Mostre a mensagem ✅
- F12 → Network → Mostre a requisição para localhost:3000

---

## **FLUXO TÉCNICO (Para Explicar)**

```
1. Browser carrega index.html
                ↓
2. Executa main.js (ESM Module)
                ↓
3. main.js importa buscarFerramentas() do api/index.js
                ↓
4. buscarFerramentas() faz:
   fetch('http://localhost:3000/ferramentas')
                ↓
5. json-server lê data/db.json e retorna JSON
                ↓
6. response.json() converte para objeto JavaScript
                ↓
7. main.js itera com forEach()
                ↓
8. Para cada ferramenta, cria um card com:
   - createElement('div')
   - innerHTML com dados da ferramenta
   - appendChild() para adicionar no grid
                ↓
9. lucide.createIcons() renderiza os ícones SVG
                ↓
10. Cards aparecem na página ✅
```

---

## **CHECKLIST DE AVALIAÇÃO**

- [ ] **json-server rodando** na porta 3000
- [ ] **Fetch API** fazendo requisição GET
- [ ] **Try/Catch** tratando erros
- [ ] **createElement + appendChild** criando cards dinamicamente
- [ ] **addEventListener** capturando cliques
- [ ] **Query Strings** passando parâmetros
- [ ] **ESM Modules** com import/export
- [ ] **TailwindCSS** estilizando responsivo

---

## **ATALHO RÁPIDO**

Se quiser rodar tudo em um comando:

```bash
# Instale concurrently (se não tiver)
npm install -D concurrently

# Adicione ao package.json:
"scripts": {
  "dev": "json-server --watch data/db.json --port 3000",
  "serve": "npx serve .",
  "start": "concurrently \"npm run dev\" \"npm run serve\""
}

# Execute:
npm start
```

---

**Pronto! O NetCenter funciona 100% com json-server local!** 🎯
