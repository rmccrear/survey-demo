import { input, select } from '@inquirer/prompts';
import { say } from 'cowsay';

import { pizzaOrders } from './orders/pizzaOrders.js';
import { friesOrders } from './orders/friesOrders.js';

const name = await input({ message: 'Enter your name' });
console.log(say({text: `hello ${name}`, e: "o-"}))

const pizza = await select(pizzaOrders);
console.log(`Your ${pizza} pizza will be ready shortly`);
const fries = await select(friesOrders);
console.log(`Your ${fries} fries will be ready shortly`);
