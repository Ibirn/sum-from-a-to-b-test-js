
function sum(n, toN) {
  if(n === toN){
    return n;
  }
  return n + sum(n + 1, toN)
}

module.exports = sum;
