import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";


export async function router(fastify:FastifyInstance, options:FastifyPluginOptions){

  fastify.post('/customer', async(request:FastifyRequest, reply:FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  })

  fastify.get('/customers', async(request:FastifyRequest, reply:FastifyReply) => {
    return new ListCustomerController().handle(request, reply);
  });

  fastify.delete('/delete', async(request:FastifyRequest, reply:FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });
};