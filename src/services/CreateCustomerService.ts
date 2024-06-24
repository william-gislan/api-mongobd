// Importa o cliente Prisma configurado no arquivo "../prisma"
import prismaClient from "../prisma";

// Define uma interface para os dados de criação do cliente
interface CreateCustomerProps {
    name: string;  // O nome do cliente deve ser uma string
    email: string; // O email do cliente deve ser uma string
}

// Define a classe CreateCustomerService, responsável por criar novos clientes
class CreateCustomerService {

    // Define um método assíncrono chamado execute que aceita um objeto com name e email
    async execute({ name, email }: CreateCustomerProps) {

        // Verifica se o nome ou o email não foram fornecidos
        if (!name || !email) {
            // Lança um erro caso algum dos campos esteja vazio
            throw new Error("Preencha os dados");
        }

        // Cria um novo cliente no banco de dados usando Prisma
        const customer = await prismaClient.customer.create({
            data: {
                name,       // Define o nome do cliente
                email,      // Define o email do cliente
                status: true // Define o status do cliente como verdadeiro (ativo)
            }
        });

        // Retorna o objeto do cliente criado
        return customer;
    }
}

// Exporta a classe CreateCustomerService para que possa ser utilizada em outros módulos
export { CreateCustomerService}
