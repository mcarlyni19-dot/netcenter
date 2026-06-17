import prisma from '../prisma/client.js';

export function getReportsByUser(userId) {
  return prisma.report.findMany({
    where: { user_id: userId },
    orderBy: { created_at: 'desc' },
    select: { id: true, title: true, ferramenta: true, alvo: true, pdf_path: true, created_at: true },
  });
}

export function createReport(reportData) {
  return prisma.report.create({
    data: reportData,
  });
}
