const Queue = require('./Queue');

const order = new Queue();
order.enqueue('apple pie');
order.enqueue('roast chicken');
order.enqueue('quinoa salad');
console.log('\nFood preparing...\n')
order.dequeue();
order.dequeue();
order.dequeue();
console.log('All orders ready!')