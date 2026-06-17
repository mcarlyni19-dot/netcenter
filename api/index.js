const LOCAL_BASE_URL = 'http://localhost:3000';
const API_BASE_URL = (() => {
  if (window.location.protocol === 'file:') return LOCAL_BASE_URL;
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return window.location.origin;
  }
  return LOCAL_BASE_URL;
})();

export async function buscarFerramentas() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/ferramentas`);
        if (!response.ok) {
            throw new Error('Falha ao buscar ferramentas.');
        }
        return await response.json();
    } catch (erro) {
        console.error('Erro ao buscar ferramentas:', erro);
        throw erro;
    }
}