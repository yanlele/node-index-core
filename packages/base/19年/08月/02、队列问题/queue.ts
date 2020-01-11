const queue = [];

queue.push('1');
queue.push('2');
queue.push('3');
queue.push('4');

console.log(queue);

const result = queue.shift();
console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
console.log(result);
console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);

console.log(queue);
