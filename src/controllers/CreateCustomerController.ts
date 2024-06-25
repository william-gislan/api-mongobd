import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../service/CreateCustomerService";


//define uma classe para ligar com as rquisições
class CreateCustomerController{

  //define um metodo assincrono chamado handle que aceita um objeto request e reply
  async handle(request: FastifyRequest, reply:FastifyReply){

    //extrai o nome e o email do corpo da requisição
    const {name, email} = request.body as ({name:string, email:string});

    //cria uma instacia do servico de criacao do cliente
    const createCustomer = new CreateCustomerService();

    //executa o serviço para criar o cliente com os dados fornecidos
    const customer = await createCustomer.execute({name, email});

     //envia a resposta com o cliente criado
     reply.send(customer);
  };
};

export { CreateCustomerController };