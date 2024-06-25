import prismaClient from "../prisma"; // Importa o Prisma Client para interagir com o banco de dados

// Interface para tipagem dos dados de entrada do serviço de delete de cliente
interface DeleteCustomerProps {
  id: string; // Define que a propriedade 'id' deve ser uma string
}

class DeleteCustomerService {
  // Método assíncrono para executar a exclusão de um cliente
  async execute({ id }: DeleteCustomerProps) {
    // Verifica se o ID do cliente foi fornecido
    if (!id) {
      // Se o ID não for fornecido, lança uma exceção com uma mensagem informativa
      throw new Error("Solicitação inválida: ID do cliente é obrigatório"); // Melhore a mensagem de erro
    }

    // Tenta buscar o cliente pelo ID fornecido
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id, // Verifica se o valor da coluna 'id' na tabela 'customer' corresponde ao ID fornecido
      },
    });

    // Verifica se o cliente foi encontrado
    if (!findCustomer) {
      // Se o cliente não for encontrado, lança uma exceção informativa
      throw new Error("Cliente não existe");
    }

    // Executa a exclusão do cliente encontrado
    await prismaClient.customer.delete({
      where: {
        id, // Verifica se o valor da coluna 'id' na tabela 'customer' corresponde ao ID fornecido
      },
    });

    // Retorna uma mensagem de sucesso após a exclusão
    return { mensagem: "Cliente deletado com sucesso" };
  }
}

export { DeleteCustomerService };
