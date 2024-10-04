import { input } from '@inquirer/prompts';
import { pizzaOrders } from './orders/pizzaOrders.js';
import { friesOrders } from './orders/friesOrders.js';


console.log(pizzaOrders, friesOrders);

const answer = await input({ message: 'Enter your name' });



