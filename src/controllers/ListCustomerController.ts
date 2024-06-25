import { FastifyRequest, FastifyReply } from "fastify"; // Importa interfaces para tipagem de requisições e respostas Fastify
import { ListCustomerService } from "../service/ListCustomerService"; // Importa o serviço de listagem de clientes

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Cria uma instância do serviço de listagem de clientes
    const listCustomerService = new ListCustomerService();

    // Extrai o ID da query string da requisição HTTP (se presente)
    const { id } = request.query as { id: string }; // Tipagem para garantir que 'id' seja uma string

    try {
      // Tenta executar a busca de cliente utilizando o serviço
      const customer = await listCustomerService.execute(id);

      // Se a busca for bem-sucedida, envia o cliente encontrado na resposta
      reply.send(customer);
    } catch (error) {
      // Se ocorrer um erro durante a busca, retorna um erro 404 ("Não encontrado") com uma mensagem genérica "erro"
      reply.code(404).send("erro"); // Melhore a mensagem de erro para informar o cliente sobre o problema
    }
  }
}

export { ListCustomerController };
