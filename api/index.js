const BASE_URL = "http://localhost:3000";

export async function buscarFerramentas() {
    
    try {
        const response = await fetch(`${BASE_URL}/ferramentas`); 
        return await response.json();
    } catch (erro) {
        console.error("Erro ao ler db.json:", erro);
    }
}