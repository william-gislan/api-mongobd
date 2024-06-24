// Importa os tipos FastifyRequest e FastifyReply do Fastify
import { FastifyRequest, FastifyReply } from "fastify";

// Importa a classe CreateCustomerService do módulo de serviços
import { CreateCustomerService } from "../services/CreateCustomerService";

// Define a classe CreateCustomerController, responsável por lidar com as requisições de criação de clientes
class CreateCustomerController {

    // Define um método assíncrono chamado handle que aceita um objeto request e um objeto reply
    async handle(request: FastifyRequest, reply: FastifyReply) {

        // Extrai o nome e o email do corpo da requisição
        const { name, email } = request.body as { name: string, email: string };

        // Cria uma instância do serviço de criação de cliente
        const customerService = new CreateCustomerService();

        // Executa o serviço para criar o cliente com os dados fornecidos
        const customer = await customerService.execute({ name, email });

        // Envia a resposta com o cliente criado
        reply.send(customer);
    }
}

// Exporta a classe CreateCustomerController para que possa ser utilizada em outros módulos
export { CreateCustomerController };
