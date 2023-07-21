function isBalancedBrackets(str) {
  const stack = [];
  const openingBrackets = new Set(['(', '[', '{']);
  const closingBrackets = new Set([')', ']', '}']);
  const matchingBrackets = { ')': '(', ']': '[', '}': '{' };

  for (let char of str) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (closingBrackets.has(char)) {
      if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char]) {
        return "NO";
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

// Contoh penggunaan
console.log(isBalancedBrackets("{[()]}")); // Output: YES
console.log(isBalancedBrackets("{[(])}")); // Output: NO
console.log(isBalancedBrackets("{(([])[])[]}")); // Output: YES
