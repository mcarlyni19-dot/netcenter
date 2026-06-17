import prisma from '../prisma/client.js';

export function getAllFerramentas() {
  return prisma.ferramenta.findMany({
    select: { id: true, nome: true, descricao: true, icone: true },
  });
}
