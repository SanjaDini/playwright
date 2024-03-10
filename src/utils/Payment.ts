import { faker } from '@faker-js/faker';

export const Payment: PaymentType = {
  NAME: faker.person.fullName(),
  COUNTRY: faker.location.country(),
  CITY: faker.location.city(),
  CREDIT_CARD: faker.finance.creditCardNumber(),
  MONTH: faker.date.month(),
  YEAR: '2030',
};
