import type { Prisma, PrismaClient } from "@prisma/client";
import { defineSeed } from "../defineSeed";

export const defineProductionSeeder = (args: {
  prisma: PrismaClient;
  seeders: ReturnType<typeof defineSeed>[];
}) => {
  return args.prisma
    .$transaction((tx: Prisma.TransactionClient) =>
      args.seeders.map((seeder) => seeder(tx))
    )
    .catch((error: any) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await args.prisma.$disconnect();
    });
};
