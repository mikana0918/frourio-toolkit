import { Prisma, PrismaClient, PrismaPromise } from "@prisma/client";
import { froulog } from "../../../../utils/froulog";

export const defineSeed = (args: {
  name: string;
  handler: (tx: PrismaClient) => Promise<any>;
}) => {
  return async (tx: PrismaClient) => {
    try {
      args.handler(tx);
      froulog.success([`successfully seeded: ${args.name}`]);
    } catch (error) {
      froulog.error(error);
      throw error;
    }
  };
};
