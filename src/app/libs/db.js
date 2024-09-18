//manejar el problema de múltiples instancias de PrismaClient en Next.js durante el desarrollo.
const { PrismaClient } = require("@prisma/client");

const prismaClientSingleton = () => {
  // Crea y retorna una instancia ->encapsular creación de la instancia
  return new PrismaClient();
};

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Si no estamos en producción, asigna prismaGlobal a globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
