//importa o cliente prisma configurado no arquivo "../prisma"
import prismaClient from "../prisma";

//define uma interface para os dados de criação do cliente
interface CustomerProps{
  name:string;
  email: string;
};

//define a classe responsavel por criar novos clientes
class CreateCustomerService{

  //define um metodo que recebe um ojeto com o padrao da customerProps como parametro
  async execute({name, email}: CustomerProps){

    //verifica se o nome e o email foram fornecidos
    if(!name || !email){
      throw new Error("Preencha os dados");
    }

    //cria um novo cliente no banco usando o prismaClient
    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status:true
      }
    });

    //retorna o objeto do cliente criado
    return customer;
  };

};

export { CreateCustomerService }