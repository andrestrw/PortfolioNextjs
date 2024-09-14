const { PrismaClient } = require("@prisma/client");

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// No es necesario declarar tipos en JavaScript
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Si no estamos en producción, asigna prismaGlobal a globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
