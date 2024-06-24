import { PrismaClient  } from "@prisma/client";//essa instância representa a conexão com o banco de dados e permite executar consultas e operações CRUD (Criar, Ler, Atualizar e Deletar) em seus modelos de dados.


const prismaClient = new PrismaClient();

export default prismaClient;