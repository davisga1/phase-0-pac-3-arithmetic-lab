function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}
function increment(n) {
    return ++n
}
function decrement(n) {
    return --n
}
function makeInt(n) {
    const parsed = parseInt(n, 10);
  
  return parsed; 
  
}
function preserveDecimal(n) {
    const deci = parseFloat(n)
    return deci
}