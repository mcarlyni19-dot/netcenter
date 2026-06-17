import fsPromises from 'fs/promises';
import path from 'path';
import prisma from './prisma/client.js';

const REPORTS_DIR = path.join(process.cwd(), 'reports');

const ferramentasSeed = [
  { id: 'meu-ip', nome: 'Meu IP', descricao: 'Consulta de IP público e dados de geolocalização.', icone: 'user' },
  { id: 'ping', nome: 'Teste de Ping', descricao: 'Mede a latência e disponibilidade de um host via pacotes ICMP.', icone: 'activity' },
  { id: 'traceroute', nome: 'Traceroute', descricao: 'Mapeia o caminho e os saltos de rede até o destino.', icone: 'route' },
  { id: 'nslookup', nome: 'Validação de DNS de domínio', descricao: 'Valida os principais registros DNS do domínio e identifica possíveis inconsistências.', icone: 'database' },
  { id: 'dns-lookup', nome: 'DNS Lookup', descricao: 'Consulta registros DNS para domínios específicos.', icone: 'globe' },
  { id: 'ip-geolocation', nome: 'IP Geolocation', descricao: 'Determina a localização geográfica de um endereço IP.', icone: 'map-pin' },
  { id: 'port-scanner', nome: 'Port Scanner', descricao: 'Escaneia portas abertas em um host para segurança de rede.', icone: 'shield' },
  { id: 'ssl-checker', nome: 'SSL Checker', descricao: 'Verifica a validade e configuração de certificados SSL.', icone: 'lock' },
  { id: 'whois', nome: 'WHOIS', descricao: 'Consulta informações de registro de domínios e IPs.', icone: 'info' },
  { id: 'http-header-checker', nome: 'HTTP Header Checker', descricao: 'Analisa os cabeçalhos HTTP de um site para diagnóstico.', icone: 'server' },
  { id: 'ip-reputation-checker', nome: 'IP Reputation Checker', descricao: 'Avalia a reputação de um endereço IP com base em listas de bloqueio e relatórios de segurança.', icone: 'shield-x' },
  { id: 'ip-blacklist-checker', nome: 'IP Blacklist Checker', descricao: 'Verifica se um endereço IP está listado em bancos de dados de bloqueio de spam ou segurança.', icone: 'shield-off' },
];

export async function initDatabase() {
  await fsPromises.mkdir(REPORTS_DIR, { recursive: true });

  await prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS ferramentas (
      id TEXT PRIMARY KEY,
      nome TEXT NOT NULL,
      descricao TEXT NOT NULL,
      icone TEXT NOT NULL
    )
  `;

  await prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `;

  await prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS reports (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      title TEXT NOT NULL,
      ferramenta TEXT NOT NULL,
      alvo TEXT NOT NULL,
      content TEXT NOT NULL,
      pdf_path TEXT NOT NULL,
      created_at TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

  for (const tool of ferramentasSeed) {
    await prisma.ferramenta.upsert({
      where: { id: tool.id },
      update: { nome: tool.nome, descricao: tool.descricao, icone: tool.icone },
      create: { id: tool.id, nome: tool.nome, descricao: tool.descricao, icone: tool.icone },
    });
  }
}
