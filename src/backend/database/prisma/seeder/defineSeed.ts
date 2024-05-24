import { Prisma } from "@prisma/client";

export const defineSeed = (args: {
  handler: (tx: Prisma.TransactionClient) => Promise<void>;
}) => {
  return async (tx: Prisma.TransactionClient) => {
    return args
      .handler(tx)
      .catch((error) => {
        console.error(error);
        process.exit(1);
      })
      .finally(async () => {
        await tx.$disconnect();
      });
  };
};
