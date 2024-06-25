import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersServices } from "../services/ListCustomerService";

class ListCutomersControllers{
    async handle(request:FastifyRequest, replay:FastifyReply){
        const listCustomerService = new ListCustomersServices();

        const customer = await listCustomerService.execute();

        replay.send(customer);
    }
};

export { ListCutomersControllers}