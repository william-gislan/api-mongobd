import fastify from "fastify";
import { router } from "./routes";
<<<<<<< HEAD

const app = fastify();

const start = async () => {
  await app.register(router);

  try {
    await app.listen({port:3333});
    console.log("Server is running");
  } catch (error) {
     console.log("Fals ao conectar");
  };
};

start();
=======
import cors from '@fastify/cors';



const app = fastify({logger: true});

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message:error.message});
});    

const start = async () => {
    await app.register(cors);
    await app.register(router);
    
    try {
        await app.listen({port: 3333})
    } catch (error) {
        process.exit(1);
    }
}

start();
>>>>>>> 119d7d25a98316574d28bad2b0e7939f6e2b1156
