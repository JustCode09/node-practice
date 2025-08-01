// ============================
// 🧓 COMMONJS MODULE (like older Node.js style)
// ============================

// Simulating another file's functions
function addCommon(a, b) {
  return a + b;
}

function subCommon(a, b) {
  return a - b;
}

// Simulating module.exports = { addCommon, subCommon }
const mathCommon = { addCommon, subCommon };

// Using it like require()
console.log("🧓 CommonJS Module:");
console.log("3 + 4 =", mathCommon.addCommon(3, 4));
console.log("7 - 2 =", mathCommon.subCommon(7, 2));




// ============================
// ✨ ES6 MODULE (modern style)
// ============================

// Simulating exported object from ES6 module
const mathES6 = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Simulating import { add, subtract } from './mathES6.js'
console.log("\n✨ ES6 Module:");
console.log("5 + 6 =", mathES6.add(5, 6));
console.log("10 - 3 =", mathES6.subtract(10, 3));




// ============================
// 🎁 DEFAULT EXPORT (ES6)
// ============================

function greet(name) {
  return `Hello, ${name}!`;
}

// Simulating default export/import
console.log("\n🎁 Default Export:");
console.log(greet("Saurav"));




// ============================
// 🎭 DYNAMIC IMPORT (load only when needed)
// ============================

console.log("\n🎭 Dynamic Import Example:");

const useAdvancedMath = true;

if (useAdvancedMath) {
  // Simulating dynamic import
  const dynamicMath = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };

  console.log("3 × 5 =", dynamicMath.multiply(3, 5));
  console.log("10 ÷ 2 =", dynamicMath.divide(10, 2));
}




// ============================
// 🏎️ MODULE CACHING (CommonJS only)
// ============================

console.log("\n🏎️ Module Caching Example:");

let requireCache = {};

function fakeRequire(path) {
  if (!requireCache[path]) {
    console.log(`🔄 Loading ${path}...`);
    requireCache[path] = { message: "I’m now cached!" };
  }
  return requireCache[path];
}

// First time load
const first = fakeRequire("myModule");

// Second time – from cache
const second = fakeRequire("myModule");

console.log("Is it same from cache?", first === second); // true

// Clear cache manually
delete requireCache["myModule"];

// Now it will reload
const third = fakeRequire("myModule");

console.log("Reloaded again?", first === third); // false




// ============================
// ✅ END OF FILE
// ============================
console.log("\n✅ All done! You learned CommonJS, ES6, default, dynamic and caching.");