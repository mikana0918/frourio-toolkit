import * as prismaSeeder from "./src/backend/database/prisma/seeder";

const database = {
  seed: {
    prisma: prismaSeeder,
  },
};

export { database };
