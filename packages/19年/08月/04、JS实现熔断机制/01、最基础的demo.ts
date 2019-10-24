function fusing() {
  let index = 0;
  return function() {
    index++;
    if (index > 1000) {
      index = 0;
      throw new Error('强制熔断');
    }
  };
}
const fus = fusing();
while (1) {
  fus();
}
