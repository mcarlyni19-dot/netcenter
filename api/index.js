export async function buscarFerramentas() {
    try {
        const response = await fetch('../data/db.json'); 
        return await response.json().then(data => data.ferramentas);
    } catch (erro) {
        console.error("Erro ao ler db.json:", erro);
    }
}