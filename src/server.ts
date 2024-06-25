import fastify from "fastify";
import { router } from "./routes";

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