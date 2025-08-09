import { faker } from '@faker-js/faker';
import type { PaymentType } from '../types/PaymentTypes';

export const Payment: PaymentType = {
  NAME: faker.person.fullName(),
  COUNTRY: faker.location.country(),
  CITY: faker.location.city(),
  CREDIT_CARD: faker.finance.creditCardNumber(),
  // Use a numeric month to match the purchase form's expected format
  MONTH: faker.number.int({ min: 1, max: 12 }).toString(),
  YEAR: '2030',
};
