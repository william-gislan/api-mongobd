<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";
=======
import { PrismaClient  } from "@prisma/client";//essa instância representa a conexão com o banco de dados e permite executar consultas e operações CRUD (Criar, Ler, Atualizar e Deletar) em seus modelos de dados.

>>>>>>> 119d7d25a98316574d28bad2b0e7939f6e2b1156

const prismaClient = new PrismaClient();

export default prismaClient;