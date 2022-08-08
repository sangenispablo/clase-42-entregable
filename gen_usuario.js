import { faker } from "@faker-js/faker";

export default function fakerUser() {
  return {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };
}
