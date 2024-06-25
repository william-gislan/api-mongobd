import prismaClient from "../prisma"; // Importa o Prisma Client para interagir com o banco de dados

// Cria uma classe chamada `ListCustomerService` para encapsular a lógica de busca de clientes
class ListCustomerService {
  // Define um método assíncrono chamado `execute` que recebe um parâmetro opcional `id` do tipo `string`
  async execute(id: string) {
    // Verifica se um ID foi fornecido
    if (id) {
      // Tenta buscar um cliente específico pelo ID fornecido
      try {
        const customer = await prismaClient.customer.findUnique({
          // Define a condição de busca: o valor da coluna `id` na tabela `customer` deve corresponder ao ID fornecido
          where: {
            id,
          },
        });

        // Verifica se o cliente foi encontrado
        if (!customer) {
          // Se o cliente não for encontrado, lança uma exceção com a mensagem "Cliente não encontrado"
          throw new Error("Cliente não encontrado");
        }

        // Se o cliente for encontrado, retorna o objeto do cliente
        return customer;
      } catch (error) {
        // Se ocorrer um erro durante a busca, captura o erro e retorna um objeto de erro com a mensagem do erro
        console.error(error); // Registra o erro no console
      }
    } else {
      // Se nenhum ID foi fornecido, busca todos os clientes
      try {
        const customers = await prismaClient.customer.findMany();
        return customers;
      } catch (error) {
        // Se ocorrer um erro durante a busca de todos os clientes, captura o erro e retorna um objeto de erro com a mensagem do erro
        console.error(error); // Registra o erro no console
      }
    }
  }
}

// Exporta a classe `ListCustomerService` para que ela possa ser usada em outros arquivos do projeto
export { ListCustomerService };
