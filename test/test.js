import chai from 'chai';

const assert = chai.assert;

const Checks = (await import('../index.js')).default;

const isValid = Checks.isValid;
const notValid = Checks.notValid;

//  ---

const Values = (await import('./coreTestValues.js')).default;

const testVals = Values.setupValues();
const trueVals = Values.trueValues();
const falseVals = Values.falseValues();

//  ---

describe('isValid', function () {

  const isValidChecks = {
    ...trueVals,
    'undefined': false,
    'null': false,
  };

  describe('isValid imports properly as a property of Checks', function () {
    it('exports isValid', function () {
      assert.isFunction(Checks?.isValid, 'isValid() is not exported');
    })
  });

  describe('isValid imports properly as an individual member', function () {
    it('exports isValid', function () {
      assert.isFunction(isValid, 'isValid() is not exported');
    })
  });

  describe('isValid core ECMA objects', function () {
    try {
      for (let [name, value] of Object.entries(testVals)) {
        it('isValid for: ' + name, function () {
          if (isValidChecks[name] === true) {
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

  const notValidChecks = {
    ...falseVals,
    'undefined': true,
    'null': true,
  };

  describe('notValid imports properly as a property of Checks', function () {
    it('exports notValid', function () {
      assert.isFunction(Checks?.notValid, 'notValid() is not exported');
    })
  });

  describe('notValid imports properly as an individual member', function () {
    it('exports notValid', function () {
      assert.isFunction(notValid, 'notValid() is not exported');
    })
  });

  describe('notValid core ECMA objects', function () {
    try {
      for (let [name, value] of Object.entries(testVals)) {
        it('notValid for: ' + name, function () {
          if (notValidChecks[name] === true) {
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
