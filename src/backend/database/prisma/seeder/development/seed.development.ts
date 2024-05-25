import type { Prisma, PrismaPromise } from "@prisma/client";
import type { PrismaClient } from "@prisma/client";
import { froulog } from "../../../../../utils/froulog";

export const defineDevelopmentSeeder = async (args: {
  prisma: PrismaClient;
  seeders: Array<(tx: PrismaClient) => PrismaPromise<void>>;
}) => {
  return args.prisma
    .$transaction(args.seeders.map((seeder) => seeder(args.prisma)))
    .catch((error: any) => {
      froulog.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await args.prisma.$disconnect();
    });
};
