import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerControllers{
    async handle(request: FastifyRequest, replay:FastifyReply){
        const {id} = request.query as {id: string};

        const customerService = new DeleteCustomerService();

        const customer = await customerService.execute({ id });

        replay.send(customer);
    };
};

export { DeleteCustomerControllers };