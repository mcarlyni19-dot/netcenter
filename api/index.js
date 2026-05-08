const LOCAL_BASE_URL = "http://localhost:3000";
const STATIC_DB_PATH = "./db.json";
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export async function buscarFerramentas() {
    try {
        if (isLocal) {
            const response = await fetch(`${LOCAL_BASE_URL}/ferramentas`);
            return await response.json();
        }

        const response = await fetch(STATIC_DB_PATH);
        const json = await response.json();
        return json.ferramentas;
    } catch (erro) {
        console.error("Erro ao ler db.json:", erro);
    }
}