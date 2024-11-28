import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Type safe communication",
      description: "Type safe communication",
      version: "1.0.0",
    }
  }
});

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});
 

app.get("/", () => {
  return "Hello World";
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});