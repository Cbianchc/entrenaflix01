import { PrismaClient } from '@prisma/client'

const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prismadb = client

export default client


// import { Prisma, PrismaClient } from "@prisma/client";

// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient;
//     }
//   }
// }

// let client = global.prismadb;

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     client = new PrismaClient();
//   } else {
//     if (!global.prismadb) {
//       global.prismadb = new PrismaClient();
//     }

//     client = global.prismadb;
//   }
// }

// export default client;