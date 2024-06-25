import { FastifyRequest, FastifyReply } from "fastify"; // Importa interfaces para tipagem de requisições e respostas Fastify
import prismaClient from "../prisma"; // Importa o Prisma Client para interagir com o banco de dados
import { DeleteCustomerService } from "../service/DeleteCustomerService"; // Importa o serviço de exclusão de cliente

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Extrai o ID do cliente da query string da requisição HTTP (se presente)
    const { id } = await request.query as { id: string }; // Tipagem para garantir que 'id' seja uma string

    // Cria uma instância do serviço de exclusão de cliente
    const customerService = new DeleteCustomerService();

    // Tenta executar a exclusão do cliente usando o serviço
    try {
      const customer = await customerService.execute({ id }); // Envia o ID para o serviço

      // Se a exclusão for bem-sucedida, envia a mensagem de sucesso na resposta
      reply.send(customer); // A resposta do serviço de exclusão provavelmente é um objeto com mensagem de sucesso
    } catch (error) {
      // Se ocorrer um erro durante a exclusão, retorna um erro apropriado
      console.error(error); // Registra o erro no console para fins de depuração
      reply.code(500).send("Erro ao excluir cliente"); // Melhore a mensagem de erro para informar o cliente
    }
  }
}

export { DeleteCustomerController };
