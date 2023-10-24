/* eslint-disable mocha/no-setup-in-describe */

import chai from 'chai';
const assert = chai.assert;

const Checks = (await import('../index.js')).default;

const isValid = Checks.isValid;
const notValid = Checks.notValid;
const ifInvalid = Checks.ifInvalid;
const isNaN = Checks.isNaN;
const isNull = Checks.isNull;
const notDefined = Checks.notDefined;
const notNaN = Checks.notNaN;
const notNull = Checks.notNull;
const ifNull = Checks.ifNull;
const ifUndefined = Checks.ifUndefined;

const isFunction = Checks.isFunction;
const isAsyncFunction = Checks.isAsyncFunction;
const isGeneratorFunction = Checks.isGeneratorFunction;
const isString = Checks.isString;
const isPlainObject = Checks.isPlainObject;
const isESClass = Checks.isESClass;
const isNativeFunction = Checks.isNativeFunction;
const isThenable = Checks.isThenable;

const isFalse = Checks.isFalse;
const isFalsey = Checks.isFalsey;
const isTrue = Checks.isTrue;
const isTruthy = Checks.isTruthy;
const notFalse = Checks.notFalse;
const notTrue = Checks.notTrue;

const isArgArray = Checks.isArgArray;
const isArray = Checks.isArray;
const isBoolean = Checks.isBoolean;
const isDate = Checks.isDate;
const isNumber = Checks.isNumber;
const isPromise = Checks.isPromise;
const isProxy = Checks.isProxy;
const isRegExp = Checks.isRegExp;
const isSymbol = Checks.isSymbol;
const isInvalidDate = Checks.isInvalidDate;
const isIterable = Checks.isIterable;
const isEmpty = Checks.isEmpty;
const ifEmpty = Checks.ifEmpty;
const notEmpty = Checks.notEmpty;
const ifNaN = Checks.ifNaN;

//  ---

const Values = (await import('./coreTestValues.js')).default;

const testVals = Values.setupValues();
const trueVals = Values.trueValues();
const falseVals = Values.falseValues();

describe('js-checks', function () {

  //  ---

  describe('isValid', function () {

    const checkTestVals = {
      ...trueVals,
      'undefined': false,
      'null': false,
    };

    describe('isValid imports properly as a property of Checks', function () {
      it('exports isValid', function () {
        assert.isFunction(Checks?.isValid, 'isValid() is not exported');
      });
    });

    describe('isValid imports properly as an individual member', function () {
      it('exports isValid', function () {
        assert.isFunction(isValid, 'isValid() is not exported');
      });
    });

    describe('isValid core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isValid for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isValid(value), 'isValid() should be true and isn\'t');
            } else {
              assert.isFalse(isValid(value), 'isValid() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isValid core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('notValid', function () {

    const checkTestVals = {
      ...falseVals,
      'undefined': true,
      'null': true,
    };

    describe('notValid imports properly as a property of Checks', function () {
      it('exports notValid', function () {
        assert.isFunction(Checks?.notValid, 'notValid() is not exported');
      });
    });

    describe('notValid imports properly as an individual member', function () {
      it('exports notValid', function () {
        assert.isFunction(notValid, 'notValid() is not exported');
      });
    });

    describe('notValid core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('notValid for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(notValid(value), 'notValid() should be false and isn\'t');
            } else {
              assert.isFalse(notValid(value), 'notValid() shouldn\'t be false and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'notValid core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('ifInvalid', function () {

    const checkTestVals = {
      ...falseVals,
      'undefined': true,
      'null': true,
    };

    describe('ifInvalid imports properly as a property of Checks', function () {
      it('exports ifInvalid', function () {
        assert.isFunction(Checks?.ifInvalid, 'ifInvalid() is not exported');
      });
    });

    describe('ifInvalid imports properly as an individual member', function () {
      it('exports ifInvalid', function () {
        assert.isFunction(ifInvalid, 'ifInvalid() is not exported');
      });
    });

    describe('ifInvalid core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('ifInvalid for: ' + name, function () {
            if (checkTestVals[name] === true) {
              const val = ifInvalid(value, 42);
              assert(val === 42, 'ifInvalid() should be 42 and isn\'t');
            } else {
              const val = ifInvalid(value, 42);
              if (Number.isNaN(value)) {
                assert(true);
              } else {
                assert(val === value, 'ifInvalid() should be ', value, ' and isn\'t');
              }
            }
          });
        }
      } catch (e) {
        console.log('Error in \'ifInvalid core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isNaN', function () {

    const checkTestVals = {
      ...falseVals,
      'NaN': true,
    };

    describe('isNaN imports properly as a property of Checks', function () {
      it('exports isNaN', function () {
        assert.isFunction(Checks?.isNaN, 'isNaN() is not exported');
      });
    });

    describe('isNaN imports properly as an individual member', function () {
      it('exports isNaN', function () {
        assert.isFunction(isNaN, 'isNaN() is not exported');
      });
    });

    describe('isNaN core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isNaN for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isNaN(value), 'isNaN() should be true and isn\'t');
            } else {
              assert.isFalse(isNaN(value), 'isNaN() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isNaN core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isNull', function () {

    const checkTestVals = {
      ...falseVals,
      'null': true,
      //  undefined is considered to be not a null
    };

    describe('isNull imports properly as a property of Checks', function () {
      it('exports isNull', function () {
        assert.isFunction(Checks?.isNull, 'isNull() is not exported');
      });
    });

    describe('isNull imports properly as an individual member', function () {
      it('exports isNull', function () {
        assert.isFunction(isNull, 'isNull() is not exported');
      });
    });

    describe('isNull core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isNull for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isNull(value), 'isNull() should be true and isn\'t');
            } else {
              assert.isFalse(isNull(value), 'isNull() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isNull core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('notDefined', function () {

    const checkTestVals = {
      ...falseVals,
      'undefined': true,
      //  null is considered defined
    };

    describe('notDefined imports properly as a property of Checks', function () {
      it('exports notDefined', function () {
        assert.isFunction(Checks?.notDefined, 'notDefined() is not exported');
      });
    });

    describe('notDefined imports properly as an individual member', function () {
      it('exports notDefined', function () {
        assert.isFunction(notDefined, 'notDefined() is not exported');
      });
    });

    describe('notDefined core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('notDefined for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(notDefined(value), 'notDefined() should be true and isn\'t');
            } else {
              assert.isFalse(notDefined(value), 'notDefined() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'notDefined core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('notNaN', function () {

    const checkTestVals = {
      ...trueVals,
      'NaN': false,
    };

    describe('notNaN imports properly as a property of Checks', function () {
      it('exports notNaN', function () {
        assert.isFunction(Checks?.notNaN, 'notNaN() is not exported');
      });
    });

    describe('notNaN imports properly as an individual member', function () {
      it('exports notNaN', function () {
        assert.isFunction(notNaN, 'notNaN() is not exported');
      });
    });

    describe('notNaN core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('notNaN for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(notNaN(value), 'notNaN() should be true and isn\'t');
            } else {
              assert.isFalse(notNaN(value), 'notNaN() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'notNaN core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('notNull', function () {

    const checkTestVals = {
      ...trueVals,
      'null': false,
      //  undefined is considered to be not a null
    };

    describe('notNull imports properly as a property of Checks', function () {
      it('exports notNull', function () {
        assert.isFunction(Checks?.notNull, 'notNull() is not exported');
      });
    });

    describe('notNull imports properly as an individual member', function () {
      it('exports notNull', function () {
        assert.isFunction(notNull, 'notNull() is not exported');
      });
    });

    describe('notNull core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('notNull for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(notNull(value), 'notNull() should be true and isn\'t');
            } else {
              assert.isFalse(notNull(value), 'notNull() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'notNull core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('ifNull', function () {

    const checkTestVals = {
      ...falseVals,
      'null': true,
      //  undefined is considered to be not a null
    };

    describe('ifNull imports properly as a property of Checks', function () {
      it('exports ifNull', function () {
        assert.isFunction(Checks?.ifNull, 'ifNull() is not exported');
      });
    });

    describe('ifNull imports properly as an individual member', function () {
      it('exports ifNull', function () {
        assert.isFunction(ifNull, 'ifNull() is not exported');
      });
    });

    describe('ifNull core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('ifNull for: ' + name, function () {
            if (checkTestVals[name] === true) {
              const val = ifNull(value, 42);
              assert(val === 42, 'ifNull() should be 42 and isn\'t');
            } else {
              const val = ifNull(value, 42);
              if (Number.isNaN(value)) {
                assert(true);
              } else {
                assert(val === value, 'ifNull() should be ', value, ' and isn\'t');
              }
            }
          });
        }
      } catch (e) {
        console.log('Error in \'ifNull core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('ifUndefined', function () {

    const checkTestVals = {
      ...falseVals,
      'undefined': true,
      //  null is considered defined
    };

    describe('ifUndefined imports properly as a property of Checks', function () {
      it('exports ifUndefined', function () {
        assert.isFunction(Checks?.ifUndefined, 'ifUndefined() is not exported');
      });
    });

    describe('ifUndefined imports properly as an individual member', function () {
      it('exports ifUndefined', function () {
        assert.isFunction(ifUndefined, 'ifUndefined() is not exported');
      });
    });

    describe('ifUndefined core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('ifUndefined for: ' + name, function () {
            if (checkTestVals[name] === true) {
              const val = ifUndefined(value, 42);
              assert(val === 42, 'ifUndefined() should be 42 and isn\'t');
            } else {
              const val = ifUndefined(value, 42);
              if (Number.isNaN(value)) {
                assert(true);
              } else {
                assert(val === value, 'ifUndefined() should be ', value, ' and isn\'t');
              }
            }
          });
        }
      } catch (e) {
        console.log('Error in \'ifUndefined core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isFunction', function () {

    const checkTestVals = {
      ...falseVals,
      'Function': true,
      'AsyncFunction': true,
      'GeneratorFunction': true,
      'NativeType': true,
      'NativeFunction': true,
    };

    describe('isFunction imports properly as a property of Checks', function () {
      it('exports isFunction', function () {
        assert.isFunction(Checks?.isFunction, 'isFunction() is not exported');
      });
    });

    describe('isFunction imports properly as an individual member', function () {
      it('exports isFunction', function () {
        assert.isFunction(isFunction, 'isFunction() is not exported');
      });
    });

    describe('isFunction core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isFunction for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isFunction(value), 'isFunction() should be true and isn\'t');
            } else {
              assert.isFalse(isFunction(value), 'isFunction() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isFunction core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isAsyncFunction', function () {

    const checkTestVals = {
      ...falseVals,
      'AsyncFunction': true,
    };

    describe('isAsyncFunction imports properly as a property of Checks', function () {
      it('exports isAsyncFunction', function () {
        assert.isFunction(Checks?.isAsyncFunction, 'isAsyncFunction() is not exported');
      });
    });

    describe('isAsyncFunction imports properly as an individual member', function () {
      it('exports isAsyncFunction', function () {
        assert.isFunction(isAsyncFunction, 'isAsyncFunction() is not exported');
      });
    });

    describe('isAsyncFunction core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isAsyncFunction for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isAsyncFunction(value), 'isAsyncFunction() should be true and isn\'t');
            } else {
              assert.isFalse(isAsyncFunction(value), 'isAsyncFunction() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isAsyncFunction core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isGeneratorFunction', function () {

    const checkTestVals = {
      ...falseVals,
      'GeneratorFunction': true,
    };

    describe('isGeneratorFunction imports properly as a property of Checks', function () {
      it('exports isGeneratorFunction', function () {
        assert.isFunction(Checks?.isGeneratorFunction, 'isGeneratorFunction() is not exported');
      });
    });

    describe('isGeneratorFunction imports properly as an individual member', function () {
      it('exports isGeneratorFunction', function () {
        assert.isFunction(isGeneratorFunction, 'isGeneratorFunction() is not exported');
      });
    });

    describe('isGeneratorFunction core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isGeneratorFunction for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isGeneratorFunction(value), 'isGeneratorFunction() should be true and isn\'t');
            } else {
              assert.isFalse(isGeneratorFunction(value), 'isGeneratorFunction() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isGeneratorFunction core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isString', function () {

    const checkTestVals = {
      ...falseVals,
      'String': true,
      'EmptyString': true,
    };

    describe('isString imports properly as a property of Checks', function () {
      it('exports isString', function () {
        assert.isFunction(Checks?.isString, 'isString() is not exported');
      });
    });

    describe('isString imports properly as an individual member', function () {
      it('exports isString', function () {
        assert.isFunction(isString, 'isString() is not exported');
      });
    });

    describe('isString core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isString for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isString(value), 'isString() should be true and isn\'t');
            } else {
              assert.isFalse(isString(value), 'isString() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isString core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isPlainObject', function () {

    const checkTestVals = {
      ...falseVals,
      'Object': true,
      'EmptyObject': true,
      'Proxy': true,  //  wraps a plain object in our test data
    };

    describe('isPlainObject imports properly as a property of Checks', function () {
      it('exports isPlainObject', function () {
        assert.isFunction(Checks?.isPlainObject, 'isPlainObject() is not exported');
      });
    });

    describe('isPlainObject imports properly as an individual member', function () {
      it('exports isPlainObject', function () {
        assert.isFunction(isPlainObject, 'isPlainObject() is not exported');
      });
    });

    describe('isPlainObject core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isPlainObject for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isPlainObject(value), 'isPlainObject() should be true and isn\'t');
            } else {
              assert.isFalse(isPlainObject(value), 'isPlainObject() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isPlainObject core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isESClass', function () {

    const checkTestVals = {
      ...falseVals,
      'Class': true,
    };

    describe('isESClass imports properly as a property of Checks', function () {
      it('exports isESClass', function () {
        assert.isFunction(Checks?.isESClass, 'isESClass() is not exported');
      });
    });

    describe('isESClass imports properly as an individual member', function () {
      it('exports isESClass', function () {
        assert.isFunction(isESClass, 'isESClass() is not exported');
      });
    });

    describe('isESClass core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isESClass for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isESClass(value), 'isESClass() should be true and isn\'t');
            } else {
              assert.isFalse(isESClass(value), 'isESClass() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isESClass core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isNativeFunction', function () {

    const checkTestVals = {
      ...falseVals,
      'NativeFunction': true,
      'NativeType': true,
    };

    describe('isNativeFunction imports properly as a property of Checks', function () {
      it('exports isNativeFunction', function () {
        assert.isFunction(Checks?.isNativeFunction, 'isNativeFunction() is not exported');
      });
    });

    describe('isNativeFunction imports properly as an individual member', function () {
      it('exports isNativeFunction', function () {
        assert.isFunction(isNativeFunction, 'isNativeFunction() is not exported');
      });
    });

    describe('isNativeFunction core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isNativeFunction for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isNativeFunction(value), 'isNativeFunction() should be true and isn\'t');
            } else {
              assert.isFalse(isNativeFunction(value), 'isNativeFunction() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isNativeFunction core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isThenable', function () {

    const checkTestVals = {
      ...falseVals,
      'Promise': true,
    };

    describe('isThenable imports properly as a property of Checks', function () {
      it('exports isThenable', function () {
        assert.isFunction(Checks?.isThenable, 'isThenable() is not exported');
      });
    });

    describe('isThenable imports properly as an individual member', function () {
      it('exports isThenable', function () {
        assert.isFunction(isThenable, 'isThenable() is not exported');
      });
    });

    describe('isThenable core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isThenable for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isThenable(value), 'isThenable() should be true and isn\'t');
            } else {
              assert.isFalse(isThenable(value), 'isThenable() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isThenable core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isFalse', function () {

    const checkTestVals = {
      ...falseVals,
      //  Everything will be false, including the Boolean value we use (because
      //  it's true ;-)).
    };

    describe('isFalse imports properly as a property of Checks', function () {
      it('exports isFalse', function () {
        assert.isFunction(Checks?.isFalse, 'isFalse() is not exported');
      });
    });

    describe('isFalse imports properly as an individual member', function () {
      it('exports isFalse', function () {
        assert.isFunction(isFalse, 'isFalse() is not exported');
      });
    });

    describe('isFalse core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isFalse for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isFalse(value), 'isFalse() should be true and isn\'t');
            } else {
              assert.isFalse(isFalse(value), 'isFalse() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isFalse core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isFalsey', function () {

    const checkTestVals = {
      ...falseVals,
      'EmptyString': true,
      'ZeroNumber': true,
      'undefined': true,
      'null': true,
      'NaN': true,
      //  The Boolean value we use will be false (because it's true ;-)).
    };

    describe('isFalsey imports properly as a property of Checks', function () {
      it('exports isFalsey', function () {
        assert.isFunction(Checks?.isFalsey, 'isFalsey() is not exported');
      });
    });

    describe('isFalsey imports properly as an individual member', function () {
      it('exports isFalsey', function () {
        assert.isFunction(isFalsey, 'isFalsey() is not exported');
      });
    });

    describe('isFalsey core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isFalsey for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isFalsey(value), 'isFalsey() should be true and isn\'t');
            } else {
              assert.isFalse(isFalsey(value), 'isFalsey() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isFalsey core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isTrue', function () {

    const checkTestVals = {
      ...falseVals,
      'Boolean': true,
      //  Everything will be false, except the Boolean value we use (because
      //  it's true ;-)).
    };

    describe('isTrue imports properly as a property of Checks', function () {
      it('exports isTrue', function () {
        assert.isFunction(Checks?.isTrue, 'isTrue() is not exported');
      });
    });

    describe('isTrue imports properly as an individual member', function () {
      it('exports isTrue', function () {
        assert.isFunction(isTrue, 'isTrue() is not exported');
      });
    });

    describe('isTrue core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isTrue for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isTrue(value), 'isTrue() should be true and isn\'t');
            } else {
              assert.isFalse(isTrue(value), 'isTrue() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isTrue core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isTruthy', function () {

    const checkTestVals = {
      ...trueVals,
      'EmptyString': false,
      'ZeroNumber': false,
      'undefined': false,
      'null': false,
      'NaN': false,
      //  The Boolean value we use will be true (because it's true ;-)).
    };

    describe('isTruthy imports properly as a property of Checks', function () {
      it('exports isTruthy', function () {
        assert.isFunction(Checks?.isTruthy, 'isTruthy() is not exported');
      });
    });

    describe('isTruthy imports properly as an individual member', function () {
      it('exports isTruthy', function () {
        assert.isFunction(isTruthy, 'isTruthy() is not exported');
      });
    });

    describe('isTruthy core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isTruthy for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isTruthy(value), 'isTruthy() should be true and isn\'t');
            } else {
              assert.isFalse(isTruthy(value), 'isTruthy() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isTruthy core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('notFalse', function () {

    const checkTestVals = {
      ...trueVals,
      //  Everything will be true, including the Boolean value we use
    };

    describe('notFalse imports properly as a property of Checks', function () {
      it('exports notFalse', function () {
        assert.isFunction(Checks?.notFalse, 'notFalse() is not exported');
      });
    });

    describe('notFalse imports properly as an individual member', function () {
      it('exports notFalse', function () {
        assert.isFunction(notFalse, 'notFalse() is not exported');
      });
    });

    describe('notFalse core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('notFalse for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(notFalse(value), 'notFalse() should be true and isn\'t');
            } else {
              assert.isFalse(notFalse(value), 'notFalse() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'notFalse core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('notTrue', function () {

    const checkTestVals = {
      ...trueVals,
      'Boolean': false,
      //  Everything will be true, except the Boolean value we use (because
      //  it's true ;-)).
    };

    describe('notTrue imports properly as a property of Checks', function () {
      it('exports notTrue', function () {
        assert.isFunction(Checks?.notTrue, 'notTrue() is not exported');
      });
    });

    describe('notTrue imports properly as an individual member', function () {
      it('exports notTrue', function () {
        assert.isFunction(notTrue, 'notTrue() is not exported');
      });
    });

    describe('notTrue core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('notTrue for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(notTrue(value), 'notTrue() should be true and isn\'t');
            } else {
              assert.isFalse(notTrue(value), 'notTrue() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'notTrue core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isArgArray', function () {

    const checkTestVals = {
      ...falseVals,
      'Arguments': true,
      'EmptyArguments': true,
    };

    describe('isArgArray imports properly as a property of Checks', function () {
      it('exports isArgArray', function () {
        assert.isFunction(Checks?.isArgArray, 'isArgArray() is not exported');
      });
    });

    describe('isArgArray imports properly as an individual member', function () {
      it('exports isArgArray', function () {
        assert.isFunction(isArgArray, 'isArgArray() is not exported');
      });
    });

    describe('isArgArray core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isArgArray for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isArgArray(value), 'isArgArray() should be true and isn\'t');
            } else {
              assert.isFalse(isArgArray(value), 'isArgArray() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isArgArray core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isArray', function () {

    const checkTestVals = {
      ...falseVals,
      'Array': true,
      'EmptyArray': true,
    };

    describe('isArray imports properly as a property of Checks', function () {
      it('exports isArray', function () {
        assert.isFunction(Checks?.isArray, 'isArray() is not exported');
      });
    });

    describe('isArray imports properly as an individual member', function () {
      it('exports isArray', function () {
        assert.isFunction(isArray, 'isArray() is not exported');
      });
    });

    describe('isArray core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isArray for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isArray(value), 'isArray() should be true and isn\'t');
            } else {
              assert.isFalse(isArray(value), 'isArray() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isArray core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isBoolean', function () {

    const checkTestVals = {
      ...falseVals,
      'Boolean': true,
    };

    describe('isBoolean imports properly as a property of Checks', function () {
      it('exports isBoolean', function () {
        assert.isFunction(Checks?.isBoolean, 'isBoolean() is not exported');
      });
    });

    describe('isBoolean imports properly as an individual member', function () {
      it('exports isBoolean', function () {
        assert.isFunction(isBoolean, 'isBoolean() is not exported');
      });
    });

    describe('isBoolean core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isBoolean for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isBoolean(value), 'isBoolean() should be true and isn\'t');
            } else {
              assert.isFalse(isBoolean(value), 'isBoolean() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isBoolean core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isDate', function () {

    const checkTestVals = {
      ...falseVals,
      'Date': true,
    };

    describe('isDate imports properly as a property of Checks', function () {
      it('exports isDate', function () {
        assert.isFunction(Checks?.isDate, 'isDate() is not exported');
      });
    });

    describe('isDate imports properly as an individual member', function () {
      it('exports isDate', function () {
        assert.isFunction(isDate, 'isDate() is not exported');
      });
    });

    describe('isDate core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isDate for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isDate(value), 'isDate() should be true and isn\'t');
            } else {
              assert.isFalse(isDate(value), 'isDate() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isDate core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isNumber', function () {

    const checkTestVals = {
      ...falseVals,
      'Number': true,
      'ZeroNumber': true,
    };

    describe('isNumber imports properly as a property of Checks', function () {
      it('exports isNumber', function () {
        assert.isFunction(Checks?.isNumber, 'isNumber() is not exported');
      });
    });

    describe('isNumber imports properly as an individual member', function () {
      it('exports isNumber', function () {
        assert.isFunction(isNumber, 'isNumber() is not exported');
      });
    });

    describe('isNumber core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isNumber for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isNumber(value), 'isNumber() should be true and isn\'t');
            } else {
              assert.isFalse(isNumber(value), 'isNumber() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isNumber core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isPromise', function () {

    const checkTestVals = {
      ...falseVals,
      'Promise': true,
    };

    describe('isPromise imports properly as a property of Checks', function () {
      it('exports isPromise', function () {
        assert.isFunction(Checks?.isPromise, 'isPromise() is not exported');
      });
    });

    describe('isPromise imports properly as an individual member', function () {
      it('exports isPromise', function () {
        assert.isFunction(isPromise, 'isPromise() is not exported');
      });
    });

    describe('isPromise core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isPromise for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isPromise(value), 'isPromise() should be true and isn\'t');
            } else {
              assert.isFalse(isPromise(value), 'isPromise() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isPromise core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isProxy', function () {

    //  NB: The 'isProxy' method relies on the fact that the Proxy was created
    //  using the 'createProxy' function in 'utils.js'.

    const checkTestVals = {
      ...falseVals,
      'Proxy': true,
    };

    describe('isProxy imports properly as a property of Checks', function () {
      it('exports isProxy', function () {
        assert.isFunction(Checks?.isProxy, 'isProxy() is not exported');
      });
    });

    describe('isProxy imports properly as an individual member', function () {
      it('exports isProxy', function () {
        assert.isFunction(isProxy, 'isProxy() is not exported');
      });
    });

    describe('isProxy core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isProxy for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isProxy(value), 'isProxy() should be true and isn\'t');
            } else {
              assert.isFalse(isProxy(value), 'isProxy() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isProxy core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isRegExp', function () {

    const checkTestVals = {
      ...falseVals,
      'RegExp': true,
    };

    describe('isRegExp imports properly as a property of Checks', function () {
      it('exports isRegExp', function () {
        assert.isFunction(Checks?.isRegExp, 'isRegExp() is not exported');
      });
    });

    describe('isRegExp imports properly as an individual member', function () {
      it('exports isRegExp', function () {
        assert.isFunction(isRegExp, 'isRegExp() is not exported');
      });
    });

    describe('isRegExp core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isRegExp for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isRegExp(value), 'isRegExp() should be true and isn\'t');
            } else {
              assert.isFalse(isRegExp(value), 'isRegExp() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isRegExp core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isSymbol', function () {

    const checkTestVals = {
      ...falseVals,
      'Symbol': true,
    };

    describe('isSymbol imports properly as a property of Checks', function () {
      it('exports isSymbol', function () {
        assert.isFunction(Checks?.isSymbol, 'isSymbol() is not exported');
      });
    });

    describe('isSymbol imports properly as an individual member', function () {
      it('exports isSymbol', function () {
        assert.isFunction(isSymbol, 'isSymbol() is not exported');
      });
    });

    describe('isSymbol core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isSymbol for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isSymbol(value), 'isSymbol() should be true and isn\'t');
            } else {
              assert.isFalse(isSymbol(value), 'isSymbol() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isSymbol core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isInvalidDate', function () {

    const checkTestVals = {
      ...falseVals,
      'InvalidDate': true,
    };

    describe('isInvalidDate imports properly as a property of Checks', function () {
      it('exports isInvalidDate', function () {
        assert.isFunction(Checks?.isInvalidDate, 'isInvalidDate() is not exported');
      });
    });

    describe('isInvalidDate imports properly as an individual member', function () {
      it('exports isInvalidDate', function () {
        assert.isFunction(isInvalidDate, 'isInvalidDate() is not exported');
      });
    });

    describe('isInvalidDate core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isInvalidDate for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isInvalidDate(value), 'isInvalidDate() should be true and isn\'t');
            } else {
              assert.isFalse(isInvalidDate(value), 'isInvalidDate() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isInvalidDate core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isIterable', function () {

    const checkTestVals = {
      ...falseVals,
      'Array': true,
      'EmptyArray': true,
      'Arguments': true,
      'EmptyArguments': true,
      'Map': true,
      'Set': true,
      //  WeakMap and WeakSet are *not* iterable, per ECMA.
    };

    describe('isIterable imports properly as a property of Checks', function () {
      it('exports isIterable', function () {
        assert.isFunction(Checks?.isIterable, 'isIterable() is not exported');
      });
    });

    describe('isIterable imports properly as an individual member', function () {
      it('exports isIterable', function () {
        assert.isFunction(isIterable, 'isIterable() is not exported');
      });
    });

    describe('isIterable core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isIterable for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isIterable(value), 'isIterable() should be true and isn\'t');
            } else {
              assert.isFalse(isIterable(value), 'isIterable() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isIterable core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('isEmpty', function () {

    const checkTestVals = {
      ...falseVals,
      'undefined': true,
      'null': true,
      'EmptyArguments': true,
      'EmptyArray': true,
      'EmptyArrayBuffer': true,
      'EmptyDataView': true,
      'EmptyObject': true,
      'EmptyString': true,
      'NaN': true,
      //  We can't retrieve the size of a WeakMap or Weakset, per ECMA
      'WeakMap': true,
      'WeakSet': true,
    };

    describe('isEmpty imports properly as a property of Checks', function () {
      it('exports isEmpty', function () {
        assert.isFunction(Checks?.isEmpty, 'isEmpty() is not exported');
      });
    });

    describe('isEmpty imports properly as an individual member', function () {
      it('exports isEmpty', function () {
        assert.isFunction(isEmpty, 'isEmpty() is not exported');
      });
    });

    describe('isEmpty core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('isEmpty for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(isEmpty(value), 'isEmpty() should be true and isn\'t');
            } else {
              assert.isFalse(isEmpty(value), 'isEmpty() shouldn\'t be true and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'isEmpty core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('ifEmpty', function () {

    const checkTestVals = {
      ...falseVals,
      'undefined': true,
      'null': true,
      'EmptyArguments': true,
      'EmptyArray': true,
      'EmptyArrayBuffer': true,
      'EmptyDataView': true,
      'EmptyObject': true,
      'EmptyString': true,
      'NaN': true,
      //  We can't retrieve the size of a WeakMap or Weakset, per ECMA
      'WeakMap': true,
      'WeakSet': true,
    };

    describe('ifEmpty imports properly as a property of Checks', function () {
      it('exports ifEmpty', function () {
        assert.isFunction(Checks?.ifEmpty, 'ifEmpty() is not exported');
      });
    });

    describe('ifEmpty imports properly as an individual member', function () {
      it('exports ifEmpty', function () {
        assert.isFunction(ifEmpty, 'ifEmpty() is not exported');
      });
    });

    describe('ifEmpty core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('ifEmpty for: ' + name, function () {
            if (checkTestVals[name] === true) {
              const val = ifEmpty(value, 42);
              assert(val === 42, 'ifEmpty() should be 42 and isn\'t');
            } else {
              const val = ifEmpty(value, 42);
              if (Number.isNaN(value)) {
                assert(true);
              } else {
                assert(val === value, 'ifEmpty() should be ', value, ' and isn\'t');
              }
            }
          });
        }
      } catch (e) {
        console.log('Error in \'ifEmpty core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('notEmpty', function () {

    const checkTestVals = {
      ...trueVals,
      'undefined': false,
      'null': false,
      'EmptyArguments': false,
      'EmptyArray': false,
      'EmptyArrayBuffer': false,
      'EmptyDataView': false,
      'EmptyObject': false,
      'EmptyString': false,
      'NaN': false,
      //  We can't retrieve the size of a WeakMap or Weakset, per ECMA
      'WeakMap': false,
      'WeakSet': false,
    };

    describe('notEmpty imports properly as a property of Checks', function () {
      it('exports notEmpty', function () {
        assert.isFunction(Checks?.notEmpty, 'notEmpty() is not exported');
      });
    });

    describe('notEmpty imports properly as an individual member', function () {
      it('exports notEmpty', function () {
        assert.isFunction(notEmpty, 'notEmpty() is not exported');
      });
    });

    describe('notEmpty core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('notEmpty for: ' + name, function () {
            if (checkTestVals[name] === true) {
              assert.isTrue(notEmpty(value), 'notEmpty() should be false and isn\'t');
            } else {
              assert.isFalse(notEmpty(value), 'notEmpty() shouldn\'t be false and is');
            }
          });
        }
      } catch (e) {
        console.log('Error in \'notEmpty core ECMA objects\': ', e);
      }
    });
  });

  //  ---

  describe('ifNaN', function () {

    const checkTestVals = {
      ...falseVals,
      'NaN': true,
    };

    describe('ifNaN imports properly as a property of Checks', function () {
      it('exports ifNaN', function () {
        assert.isFunction(Checks?.ifNaN, 'ifNaN() is not exported');
      });
    });

    describe('ifNaN imports properly as an individual member', function () {
      it('exports ifNaN', function () {
        assert.isFunction(ifNaN, 'ifNaN() is not exported');
      });
    });

    describe('ifNaN core ECMA objects', function () {
      try {
        for (let [name, value] of Object.entries(testVals)) {
          it('ifNaN for: ' + name, function () {
            if (checkTestVals[name] === true) {
              const val = ifNaN(value, 42);
              assert(val === 42, 'ifNaN() should be 42 and isn\'t');
            } else {
              const val = ifNaN(value, 42);
              if (Number.isNaN(value)) {
                assert(true);
              } else {
                assert(val === value, 'ifNaN() should be ', value, ' and isn\'t');
              }
            }
          });
        }
      } catch (e) {
        console.log('Error in \'ifNaN core ECMA objects\': ', e);
      }
    });
  });
});

/* eslint-enable mocha/no-setup-in-describe */

