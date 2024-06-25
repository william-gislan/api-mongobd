import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
<<<<<<< HEAD
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
=======
import { CreateCustomerController } from "./controllers/CreateCustomerControllers";
import { request } from "http";
import { ListCutomersControllers } from "./controllers/ListCutomersControllers";
import { DeleteCustomerControllers } from "./controllers/DeleteCustomerControllers";

export async function router(fastify:FastifyInstance, options:FastifyPluginOptions) {
    fastify.get('/test', async (request: FastifyRequest, replay: FastifyReply) => {
        return { ok: true}
    });

   fastify.post('/customer', async (request:FastifyRequest, replay:FastifyReply) => {
    return new CreateCustomerController().handle(request, replay)
   });

   fastify.get('/customers', async (request: FastifyRequest, replay:FastifyReply) => {
    return new ListCutomersControllers().handle(request, replay);
   });

   fastify.delete('/customer', async (request:FastifyRequest, reply:FastifyReply) => {
    return new DeleteCustomerControllers().handle(request, reply);
   });
>>>>>>> 119d7d25a98316574d28bad2b0e7939f6e2b1156
};