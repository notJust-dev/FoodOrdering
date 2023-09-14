import { Order } from '../../src/types';
import products from './products';
import dayjs from 'dayjs';

const now = dayjs();

const orders: Order[] = [
  {
    id: 23123,
    created_at: now.subtract(1, 'hour').toISOString(),
    total: 31.4,
    status: 'Cooking',
    items: [
      {
        id: '1',
        size: 'M',
        quantity: 2,
        product: products[0],
      },
      {
        id: '2',
        size: 'L',
        quantity: 1,
        product: products[1],
      },
    ],
  },
  {
    id: 32145,
    created_at: now.subtract(3, 'days').toISOString(),
    total: 11.4,
    status: 'Delivered',
    items: [
      {
        id: '1',
        size: 'M',
        quantity: 2,
        product: products[3],
      },
    ],
  },
  {
    id: 23445,
    created_at: now.subtract(3, 'weeks').toISOString(),
    total: 11.4,
    status: 'Delivered',
    items: [
      {
        id: '1',
        size: 'M',
        quantity: 1,
        product: products[3],
      },
      {
        id: '2',
        size: 'M',
        quantity: 1,
        product: products[7],
      },
      {
        id: '3',
        size: 'L',
        quantity: 1,
        product: products[8],
      },
    ],
  },
];

export default orders;
