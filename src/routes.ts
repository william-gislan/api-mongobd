import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
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
};