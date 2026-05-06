// api.js

export async function buscarFerramentas() {
    // Pega a URL do Codespaces e aponta para a porta 3000 do JSON Server
    const apiUrl = window.location.origin.replace('5500', '3000') + '/ferramentas';
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Falha na comunicação com a API');
        
        return await response.json();
    } catch (erro) {
        console.error("Erro no Fetch:", erro);
        throw erro; // Repassa o erro para o arquivo principal tratar
    }
}