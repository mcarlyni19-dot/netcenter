// main.js

import { buscarFerramentas } from './api.js';

async function iniciarApp() {
    const grid = document.getElementById('grid-ferramentas');
    const inputBusca = document.getElementById('input-alvo');
    const btnBusca = document.getElementById('btn-busca');

    try {
        // 1. Busca os dados usando a função importada
        const dados = await buscarFerramentas();
        grid.innerHTML = ""; // Limpa a área

        // 2. Cria os cards dinamicamente
        dados.forEach(item => {
            const card = document.createElement('div'); // Manipulação manual do DOM
            card.className = "bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-all group cursor-pointer text-left";
            
            card.innerHTML = `
                <i data-lucide="${item.icone}" class="text-blue-500 w-6 h-6 mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 class="text-sm font-bold text-white mb-1">${item.nome}</h3>
                <p class="text-[10px] text-slate-500 uppercase font-semibold">${item.id}</p>
            `;

            // Tratamento de Evento: Clique no card
            card.addEventListener('click', () => {
                const alvo = inputBusca.value.trim() || 'meu-ip';
                window.location.href = `tools.html?ferramenta=${item.id}&alvo=${alvo}`;
            });

            // Adiciona na tela
            grid.appendChild(card);
        });

        // Renderiza os ícones gerados
        lucide.createIcons();

    } catch (erro) {
        grid.innerHTML = `<p class="text-red-500 text-xs col-span-full font-mono">Erro: Verifique se o npx json-server está rodando na porta 3000 e se está como 'Public'.</p>`;
    }

    // Tratamento de Evento: Clique no botão principal
    btnBusca.addEventListener('click', () => {
        const alvo = inputBusca.value.trim() || 'meu-ip';
        window.location.href = `tools.html?ferramenta=ping&alvo=${alvo}`;
    });
}

// Roda o script assim que a página carrega
document.addEventListener('DOMContentLoaded', iniciarApp);