'use strict';

/**
 * Block comment.
 * @param {string} var0
 * @return {onbject}
 */

// comment

var var1 = 'string';
let var2 = 42 * 42 ^ 2;
const VAR3 = true;
const var4 = [null, undefined, NaN, global, self, this, super];
const var5 = (
  <div>
    <span className="test" id={var1}></span>
    <br />
  </div>
);
require('module');
import def, { exp1, exp2 } from './file2';

module.exports = (function myFunc1([var1], { var2 = 'default' }) {
  const myFunc2 = () => console.log('ok');
  try {
    debugger;
    myFunc2.prototype = Object.assign({});
  } catch (err) {}
  const ternary = (var1 ? 'yes': 'no');
  do {
    const obj = {
      key: 'value',
      [var1]: var1.match(/[A-Za-z]\w+.*/giu),
      func() {},
    };
    delete obj.func;
  } while (var1);
  while (var1) {
    if (Array.isArray(VAR3)) {
      throw new Error(`${VAR3} is an array`);
    }
  }
  for(const i = 0; i<10; i++) {
    continue;
  }
  switch (var1) {
    case 'string':
      window.document.setTimeout(myFunc1, 100);
      break;
  }
})();

myLabel: myFunc1(var1, var2);

class MyClass {
  static const a = 0;
  constructor() {
    //
  }
}
