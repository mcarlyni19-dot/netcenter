export async function buscarFerramentas() {
    try {
        // 1. TENTA USAR JSON-SERVER LOCAL (porta 3000) - Requisito do Professor
        console.log('🔍 Tentando conectar ao json-server na porta 3000...');
        const response = await fetch('http://localhost:3000/ferramentas');
        
        if (response.ok) {
            const data = await response.json();
            console.log('✅ Sucesso! Conectado ao json-server local.');
            return data;
        }
        
        throw new Error('json-server não respondeu com OK');
        
    } catch (erro) {
        // 2. FALLBACK: Se json-server não estiver rodando, carrega do db.json
        console.warn('⚠️ json-server não disponível. Usando fallback (db.json)...');
        try {
            const response = await fetch('./data/db.json');
            const data = await response.json();
            console.log('✅ Dados carregados de db.json');
            return data.ferramentas;
        } catch (erroFallback) {
            console.error("❌ Erro crítico - não foi possível carregar dados:", erroFallback);
            return [];
        }
    }
}