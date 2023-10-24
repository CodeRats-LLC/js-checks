import { hasOwn, canInvoke, PROXIED } from './utils.js';

const NATIVE_CODE = /\[native code\]/;
const BOOLEAN_CONSTRUCTOR = /function Boolean\(\)/;
const DATE_CONSTRUCTOR = /function Date\(\)/;
const REGEXP_CONSTRUCTOR = /function RegExp\(\)/;

//  ------------------------------------------------------------------------

const isValid = (aValue) => {

  /**
   * @method isValid
   * @summary Return true if the receiver is not undefined and not null,
   *   meaning it has some value (empty/false or otherwise).
   * @param {Object} aValue The value to test.
   * @example Test to see if anObj is valid:
   *   <code>
   *      if (isValid(anObj)) { console.info('its valid'); };
   *   </code>
   * @returns {Boolean} Whether or not the value is not null *and* is not
   *   undefined.
   */

  return aValue !== undefined && aValue !== null;
};

//  ------------------------------------------------------------------------

const notValid = (aValue) => {

  /**
   * @method notValid
   * @summary Returns true if the value provided is either null or undefined.
   * @param {Object} aValue The value to test.
   * @example Test to see if anObj is not valid:
   *   <code>
   *      if (notValid(anObj)) { console.info('its not valid'); };
   *   </code>
   * @returns {Boolean} Whether or not the value is not valid (that is, either
   *   null or undefined).
   */

  return aValue === undefined || aValue === null;
};

//  ------------------------------------------------------------------------

const ifInvalid = (aSuspectValue, aDefaultValue) => {

  /**
   * @method ifInvalid
   * @summary Returns either aSuspectValue or aDefaultValue based on the
   *   state of aSuspectValue. If aSuspectValue is notValid() aDefaultValue
   *   is returned.
   * @param {Object} aSuspectValue The value to test.
   * @param {Object} aDefaultValue The value to return if aSuspectValue is ===
   *   null or === undefined.
   * @example Set the value of theObj to true, if anObj is invalid:
   *   <code>
   *      theObj = ifInvalid(anObj, true);
   *   </code>
   * @returns {Object} One of the two values provided.
   */

  return notValid(aSuspectValue) ? aDefaultValue : aSuspectValue;
};

//  ------------------------------------------------------------------------

const isNaN = (anObj) => {

  /**
   * @method isNaN
   * @summary Returns true if the value provided is NaN.
   * @description The ECMAScript-supplied global isNaN() function lies.
   *   Therefore, we use the Number.isNaN() static method.
   * @param {Object} anObj The value to test.
   * @example Test to see if anObj is NaN:
   *   <code>
   *      if (isNaN(anObj)) { console.info('its NaN'); };
   *   </code>
   * @returns {Boolean} Whether or not the value is NaN.
   */

  return Number.isNaN(anObj);
};

//  ------------------------------------------------------------------------

const isNull = (anObj) => {

  /**
   * @method isNull
   * @summary Returns true if anObj is truly 'null' (ie. === null) rather
   *   than undefined or a non-null value.
   * @param {Object} anObj The value to test.
   * @example Test to see if anObj is null:
   *   <code>
   *      if (isNull(anObj)) { console.info('its null'); };
   *   </code>
   * @returns {Boolean} Whether or not the value is null.
   */

  return anObj === null;
};

//  ------------------------------------------------------------------------

const notDefined = (anObj) => {

  /**
   * @method notDefined
   * @summary Returns true if the value provided is undefined.
   * @param {Object} anObj The value to test.
   * @example Test to see if anObj is not defined:
   *   <code>
   *      if (notDefined(anObj)) { console.info('its not defined'); };
   *   </code>
   * @returns {Boolean} Whether or not the value is undefined.
   */

  return anObj === undefined;
};

//  ------------------------------------------------------------------------

const notNaN = (anObj) => {

  /**
   * @method notNaN
   * @summary Returns true if the value provided is not NaN.
   * @description The ECMAScript-supplied global isNaN() function lies.
   *   Therefore, we use the Number.isNaN() static method.
   * @param {Object} anObj The value to test.
   * @example Test to see if anObj is not NaN:
   *   <code>
   *      if (notNaN(anObj)) { console.info('its not NaN'); };
   *   </code>
   * @returns {Boolean} Whether or not the value is not NaN.
   */

  return !Number.isNaN(anObj);
};

//  ------------------------------------------------------------------------

const notNull = (anObj) => {

  /**
   * @method notNull
   * @summary Returns true if the value provided is not null. Be aware, the
   *   value could be undefined and this method will return true. In cases
   *   where you want to test both you should use the *Valid variations.
   * @param {Object} anObj The value to test.
   * @example Test to see if anObj is not null:
   *   <code>
   *      if (notNull(anObj)) { console.info('its not null'); };
   *   </code>
   * @returns {Boolean} Whether or not the value is not null.
   */

  return anObj !== null;
};

//  ------------------------------------------------------------------------

const ifNull = (aSuspectValue, aDefaultValue) => {

  /**
   * @method ifNull
   * @summary Returns either aSuspectValue or aDefaultValue based on the
   *   state of aSuspectValue. If aSuspectValue is isNull() aDefaultValue
   *   is returned.
   * @param {Object} aSuspectValue The value to test.
   * @param {Object} aDefaultValue The value to return if aSuspectValue is ===
   *   null.
   * @example Set the value of theObj to true, if anObj is null:
   *   <code>
   *      theObj = ifNull(anObj, true);
   *   </code>
   * @returns {Object} One of the two values provided.
   */

  /* eslint-disable no-extra-parens */
  return (aSuspectValue === null) ? aDefaultValue : aSuspectValue;
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const ifUndefined = (aSuspectValue, aDefaultValue) => {

  /**
   * @method ifUndefined
   * @summary Returns either aSuspectValue or aDefaultValue based on the
   *   state of aSuspectValue. If aSuspectValue is notDefined()
   *   aDefaultValue is returned.
   * @param {Object} aSuspectValue The value to test.
   * @param {Object} aDefaultValue The value to return if aSuspectValue is ===
   *   undefined.
   * @example Set the value of theObj to true, if anObj is undefined:
   *   <code>
   *      theObj = ifUndefined(anObj, true);
   *   </code>
   * @returns {Object} One of the two values provided.
   */

  /* eslint-disable no-extra-parens */
  return (aSuspectValue === undefined) ? aDefaultValue : aSuspectValue;
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------
//  TYPE CHECKS
//  ------------------------------------------------------------------------

const isFunction = (anObj) => {

  /**
   * @method isFunction
   * @summary Returns true if the object provided is a function instance. No
   *   attempt is made to determine whether or not that function is a method
   *   (an owned function). Use isMethod() to test for those cases.
   * @param {Object} anObj The object to test.
   * @example Test to see if a function is a Function:
   *   <code>
   *      anObj = function() {return 42};
   *      isFunction(anObj);
   *      <samp>true</samp>
   *   </code>
   * @example Test to see if a DOM function is a Function:
   *   <code>
   *      isFunction(document.write);
   *      <samp>true</samp>
   *   </code>
   * @example Test to see if a RegExp is a Function:
   *   <code>
   *      isFunction(/matchme/g);
   *      <samp>false</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is a JavaScript
   *   Function.
   */

  var str;

  str = Object.prototype.toString.call(anObj);

  //  *Object*'s toString() will report ES classes as '[object Function]', so
  //  we have to an ES class check here.
  if (isESClass(anObj)) {
    return false;
  }

  return str === '[object Function]' ||
          str === '[object AsyncFunction]' ||
          str === '[object GeneratorFunction]';
};

//  ------------------------------------------------------------------------

const isAsyncFunction = (anObj) => {

  /**
   * @method isAsyncFunction
   * @summary Returns true if the object provided is an asynchronous function
   *   instance. No attempt is made to determine whether or not that
   *   function is a method (an owned function). Use isMethod() to test for
   *   those cases.
   * @param {Object} anObj The object to test.
   * @example Test to see if a function is an asynchronous Function:
   *   <code>
   *      anObj = async function() {return 42};
   *      isAsyncFunction(anObj);
   *      <samp>true</samp>
   *   </code>
   * @example Test to see if a DOM function is an asynchronous Function:
   *   <code>
   *      isAsyncFunction(document.write);
   *      <samp>false</samp>
   *   </code>
   * @example Test to see if a RegExp is an asynchronous Function:
   *   <code>
   *      isAsyncFunction(/matchme/g);
   *      <samp>false</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is a JavaScript
   *   asynchronous Function.
   */

  var str;

  str = Object.prototype.toString.call(anObj);

  return str === '[object AsyncFunction]';
};

//  ------------------------------------------------------------------------

const isGeneratorFunction = (anObj) => {

  /**
   * @method isGeneratorFunction
   * @summary Returns true if the object provided is a generator function
   *   instance. No attempt is made to determine whether or not that
   *   function is a method (an owned function). Use isMethod() to test for
   *   those cases.
   * @param {Object} anObj The object to test.
   * @example Test to see if a function is an Generatorhronous Function:
   *   <code>
   *      anObj = function*() {return 42};
   *      isGeneratorFunction(anObj);
   *      <samp>true</samp>
   *   </code>
   * @example Test to see if a DOM function is an Generatorhronous Function:
   *   <code>
   *      isGeneratorFunction(document.write);
   *      <samp>false</samp>
   *   </code>
   * @example Test to see if a RegExp is an Generatorhronous Function:
   *   <code>
   *      isGeneratorFunction(/matchme/g);
   *      <samp>false</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is a JavaScript
   *   generator Function.
   */

  var str;

  str = Object.prototype.toString.call(anObj);

  return str === '[object GeneratorFunction]';
};

//  ------------------------------------------------------------------------

const isString = (anObj) => {

  /**
   * @method isString
   * @summary Returns true if the object provided is a string primitive or a
   *   String object.
   * @param {Object} anObj The object to test.
   * @example Test to see if an object is a string:
   *   <code>
   *      anObj = 'foo';
   *      isString(anObj);
   *      <samp>true</samp>
   *      isString('bar');
   *      <samp>true</samp>
   *      isString(42);
   *      <samp>false</samp>
   *   </code>
   * @returns {Boolean}
   */

  return Object.prototype.toString.call(anObj) === '[object String]';
};

//  ------------------------------------------------------------------------

const isPlainObject = (anObj) => {

  /**
   * @method isPlainObject
   * @summary Returns true if the object provided is a 'plain JavaScript
   *     Object' - that is, created via 'new Object()' or '{}'.
   * @param {Object} anObj The object to test.
   * @example Test what's a type and what's not:
   *   <code>
   *      anObj = new Object();
   *      isPlainObject(anObj);
   *      <samp>true</samp>
   *      anObj = {};
   *      isPlainObject(anObj);
   *      <samp>true</samp>
   *      anObj = true;
   *      isPlainObject(anObj);
   *      <samp>false</samp>
   *      anObj = 42;
   *      isPlainObject(anObj);
   *      <samp>false</samp>
   *      anObj = '';
   *      isPlainObject(anObj);
   *      <samp>false</samp>
   *      anObj = [];
   *      isPlainObject(anObj);
   *      <samp>false</samp>
   *      anObj = lang.Object.construct();
   *      isPlainObject(anObj);
   *      <samp>false</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is a Type.
   */

  //  Based on jQuery 2.X isPlainObject with additional checks for TIBET
  //  objects.

  if (anObj === null ||
      anObj === undefined ||
      anObj.$$type ||               //  TIBET type
      typeof anObj !== 'object' ||  //  Primitive scalars
      anObj.nodeType ||             //  Nodes
      anObj.moveBy ||               //  Windows
      isArgArray(anObj)) {          //  'arguments' objects
      return false;
  }

  if (anObj.constructor && !hasOwn(anObj.constructor.prototype,
                                    'isPrototypeOf')) {
      return false;
  }

  return true;
};

//  ------------------------------------------------------------------------

const isESClass = (anObj) => {

  /**
   * @method isESClass
   * @summary Returns true if the object provided is an ECMAScript 'class'
   *   Function, as distinct from a regular Function.
   * @param {Object} anObj The object to test.
   * @returns {Boolean} Whether or not the supplied object is an ECMAScript
   *   class Function.
   */

  //  Make sure to call *Function*'s toString() here - Object's toString()
  //  will just return '[object Function]'
  return typeof anObj === 'function' &&
    /^class\s/.test(Function.prototype.toString.call(anObj));
};

//  ------------------------------------------------------------------------

const isNativeFunction = (anObj) => {

  /**
   * @method isNativeFunction
   * @summary Returns true if the object provided acts as a native (i.e.
   *   builtin) Function.
   * @param {Object} anObj The object to test.
   * @returns {Boolean} Whether or not the supplied object is a native
   *   Function (that is, one that is built into the browser).
   */

  return isValid(anObj) && NATIVE_CODE.test(anObj.toString());
};

//  ------------------------------------------------------------------------

const isThenable = (anObj) => {

  /**
   * @method isThenable
   * @summary Returns true if the object provided acts as a 'thenable' (most
   *   likely, a Promise).
   * @param {Object} anObj The object to test.
   * @example Test what's a thenable and what's not:
   *   <code>
   *      anObj = lang.Object.construct();
   *      isThenable(anObj);
   *      <samp>false</samp>
   *      anObj = Promise.resolve();
   *      isThenable(anObj);
   *      <samp>true</samp>
   *      anObj = obj.someMethodThatReturnsResponse();
   *      isThenable(anObj);
   *      <samp>true</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is a thenable.
   */

  return canInvoke(anObj, 'then');
};

//  ------------------------------------------------------------------------

const isFalse = (aValue) => {

  /**
   * @method isFalse
   * @summary Return true if the argument is the Boolean 'false'. This is a
   *   more explicit test than 'if (!anObj)' since that test will often lead
   *   your code astray due to bizarre type conversions.
   * @param {Object} aValue The value to test.
   * @example Test to see if anObj is false:
   *   <code>
   *      if (isFalse(anObj)) { console.info('its false'); };
   *   </code>
   * @returns {Boolean} True if aValue === false.
   */

  //  Seems pendantic, but its the best performer

  if (aValue === false) {
    return true;
  }

  if (aValue === true) {
    return false;
  }

  /* eslint-disable no-extra-parens */
  return (isBoolean(aValue) && aValue.valueOf() === false);
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isFalsey = (aValue) => {

  /**
   * @method isFalsey
   * @summary Return true if the argument is considered to be 'falsey',
   *   according to JavaScript rules.
   * @param {Object} aValue The value to test.
   * @example Test to see if anObj is falsey:
   *   <code>
   *      if (isFalsey('')) { console.info('its false'); };
   *   </code>
   * @returns {Boolean} True if aValue is a 'falsey' value.
   */

  if (aValue === false ||
      aValue === '' ||
      aValue === 0 ||
      aValue === undefined ||
      aValue === null ||
      isNaN(aValue)) {

      return true;
  }

  return false;
};

//  ------------------------------------------------------------------------

const isTrue = (aValue) => {

  /**
   * @method isTrue
   * @summary Return true if the argument is the Boolean 'true'. This is a
   *   more explicit test than 'if (anObj)' since that test will often lead
   *   your code astray due to bizarre type conversions.
   * @param {Object} aValue The value to test.
   * @example Test to see if anObj is true:
   *   <code>
   *      if (isTrue(anObj)) { console.info('its true'); };
   *   </code>
   * @returns {Boolean} True if aValue === true.
   */

  //  Seems pendantic, but its the best performer

  if (aValue === true) {
    return true;
  }

  if (aValue === false) {
    return false;
  }

  /* eslint-disable no-extra-parens */
  return (isBoolean(aValue) && aValue.valueOf() === true);
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isTruthy = (aValue) => {

    /**
     * @method isTruthy
     * @summary Return true if the argument is considered to be 'truthy',
     *     according to JavaScript rules.
     * @param {Object} aValue The value to test.
     * @example Test to see if anObj is truthy:
     *     <code>
     *          if (isTruthy('hi')) { console.info('its true'); };
     *     </code>
     * @returns {Boolean} True if aValue is a 'truthy' value.
     */

    return !isFalsey(aValue);
};

//  ------------------------------------------------------------------------

const notFalse = (aValue) => {

  /**
   * @method notFalse
   * @summary Return true if the argument is not the Boolean 'false'. This is
   *   a more explicit test than 'if (anObj)' since that test will often
   *   lead your code astray due to bizarre type conversions.
   * @param {Object} aValue The value to test.
   * @example Test to see if anObj is false:
   *   <code>
   *      if (notFalse(anObj)) { console.info('its not false'); };
   *   </code>
   * @returns {Boolean} True if aValue !== false.
   */

  if (aValue === true) {
    return true;
  }

  if (aValue === false) {
    return false;
  }

  return !isFalse(aValue);
};

//  ------------------------------------------------------------------------

const notTrue = (aValue) => {

  /**
   * @method notTrue
   * @summary Return true if the argument is not the Boolean 'true'. This is
   *   a more explicit test than 'if (!anObj)' since that test will often
   *   lead your code astray due to bizarre type conversions.
   * @param {Object} aValue The value to test.
   * @example Test to see if anObj is false:
   *   <code>
   *      if (notTrue(anObj)) { console.info('its not true'); };
   *   </code>
   * @returns {Boolean} True if aValue !== true.
   */

  if (aValue === false) {
    return true;
  }

  if (aValue === true) {
    return false;
  }

  return !isTrue(aValue);
};

//  ------------------------------------------------------------------------

const isArgArray = (anObj) => {

  /**
   * @method isArgArray
   * @summary Returns true if the object provided is an 'arguments' array, a
   *   very special object in JavaScript which isn't an Array.
   * @param {Object} anObj The object to test.
   * @example Test to see if 'arguments' is an arg Array:
   *   <code>
   *      isArgArray(arguments);
   *      <samp>true</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is an 'arguments'
   *   array.
   */

  /* eslint-disable no-extra-parens */
  return (isValid(anObj) &&
          Object.prototype.toString.call(anObj) === '[object Arguments]');
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isArray = (anObj) => {

  /**
   * @method isArray
   * @summary Returns true if the object provided is a JavaScript Array.
   * @param {Object} anObj The object to test.
   * @example Test to see if 'anObj' is an Array:
   *   <code>
   *      anObj = []
   *      isArray(anObj);
   *      <samp>true</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is a JavaScript
   *   Array.
   */

  //  Defined by ECMAScript edition 5
  return Array.isArray(anObj);
};

//  ------------------------------------------------------------------------

const isBoolean = (anObj) => {

  /**
   * @method isBoolean
   * @summary Returns true if the object provided is a boolean primitive or
   *   wrapper object.
   * @param {Object} anObj The object to test.
   * @returns {Boolean} Whether or not the supplied object is a boolean.
   */

  if (anObj === true || anObj === false) {
    return true;
  }

  //  if it says so, then it is (a primitive one)
  if (typeof anObj === 'boolean') {
    return true;
  }

  //  Boolean objects won't say so unless we check, and if the object
  //  is in another window the constructor test will fail so we have to go
  //  even further.
  /* eslint-disable no-extra-parens */
  return (isValid(anObj) && (anObj.constructor === Boolean ||
                              BOOLEAN_CONSTRUCTOR.test(
                                  '' + anObj.constructor)));
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isDate = (anObj) => {

  /**
   * @method isDate
   * @summary Returns true if the object provided is a date value.
   * @param {Object} anObj The object to test.
   * @returns {Boolean}
   */

  //  all dates report object as their primitive type (but so does null)
  if (notValid(anObj) || typeof anObj !== 'object') {
    return false;
  }

  //  also watch out for foolishness around 'new Date(blah)' returning objects
  //  which aren't really dates (instead of null). The ECMA-402 i18n spec for
  //  ECMAScript defines that these objects should return 'Invalid Date' (and
  //  ECMAScript edition 5 specifies 'NaN' if they were created with an
  //  invalid number).
  if (anObj.toString() === 'Invalid Date' || anObj.toString() === 'NaN') {
    return false;
  }

  //  last chance is constructor

  /* eslint-disable no-extra-parens */
  return (anObj.constructor === Date ||
          DATE_CONSTRUCTOR.test('' + anObj.constructor));
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isError = (anObj) => {

  /**
   * @method isError
   * @summary Returns true if the object provided is an Error object.
   * @param {Object} anObj The Object to test.
   * @returns {Boolean} Whether or not the supplied object is an Error.
   *   object.
   */

  if (notValid(anObj)) {
    return false;
  }

  if (anObj instanceof Error) {
    return true;
  }

  /* eslint-disable no-extra-parens */
  return (isValid(anObj) &&
          anObj.message !== undefined &&
          anObj.stack !== undefined);
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isNumber = (anObj) => {

  /**
   * @method isNumber
   * @summary Returns true if the object provided is a numeric value. We do
   *   not consider NaN (NotANumber) to be a number for purposes of this
   *   test since our semantic usage of isNumber is based on testing
   *   parseInt results to see if a user has entered a valid numeric value
   *   or if data from a service is numeric.
   * @description The obvious question is why not use typeof anObj ==
   *   "number"? Well, because typeof NaN == "number" will return true and,
   *   in our minds anyway, NaN is explicitly by name Not A Number. At the
   *   very least you won't want to do math with it or try to save it to a
   *   numeric column in a database. Sure, the spec says the behavior here
   *   is correct. We didn't say it was a bug, it's just lousy semantics so
   *   we made it work the way we, and other developers, assumed it would
   *   work so that a call like if (isNumber(parseInt(userData)))
   *   doMath(); works the way you'd expect and won't try to compute the sum
   *   of 'foo', 'bar', and 'baz' when the user enters alphas.
   * @param {Object} anObj The object to test.
   * @example Test to see if anObj is a Number:
   *   <code>
   *      anObj = 42;
   *      isNumber(anObj);
   *      <samp>true</samp>
   *   </code>
   * @example Test to see if any other object, including NaN, is a Number:
   *   <code>
   *      isNumber('');
   *      <samp>false</samp>
   *      isNumber(NaN);
   *      <samp>false</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is a JavaScript
   *     Number.
   */

  var type;

  //  Symbols will throw on the isNaN call, so we check for them first.
  type = typeof anObj;

  /* eslint-disable no-extra-parens */
  return (type !== 'symbol' &&
          !isNaN(anObj) &&
          !Array.isArray(anObj) &&
          (anObj - parseFloat(anObj) + 1) >= 0) ||
          anObj === Number.POSITIVE_INFINITY ||
          anObj === Number.NEGATIVE_INFINITY;
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isPromise = (anObj) => {

  /**
   * @method isPromise
   * @summary Returns true if the object provided is an ECMA E6 Promise
   *   object.
   * @param {Object} anObj The object to test.
   * @returns {Boolean} Whether or not the supplied object is an ECMA E6
   *   Promise object.
   */

  return Object.prototype.toString.call(anObj) === '[object Promise]';
};

//  ------------------------------------------------------------------------

const isProxy = (anObj) => {

  /**
   * @method isProxy
   * @summary Returns true if the object provided is an ECMA E6 Proxy object.
   * @description This method relies on the fact that the Proxy was created
   *    using the 'createProxy' function in 'utils.js'.
   * @param {Object} anObj The object to test.
   * @example Test to see if anObj is a Proxy:
   *   <code>
   *      anObj = createProxy(myTarget, myConfig);
   *      isProxy(anObj);
   *      <samp>true</samp>
   *   </code>
   * @example Test to see if any other object is a Proxy:
   *   <code>
   *      isProxy('');
   *      <samp>false</samp>
   *      isProxy(42);
   *      <samp>false</samp>
   *   </code>
   * @returns {Boolean} Whether or not the supplied object is an ECMA E6 Proxy
   *   object.
   */

  return isValid(anObj) && isValid(anObj[PROXIED]);
};

//  ------------------------------------------------------------------------

const isRegExp = (anObj) => {

  /**
   * @method isRegExp
   * @summary Returns true if the object provided is a regular expression
   *   instance.
   * @param {Object} anObj The object to test.
   * @returns {Boolean} Whether or not the supplied object is a RegExp.
   */

  //  most regexp tests are done when we're trying to tell the difference
  //  between what might be a regex or a string, so check that first
  if (typeof anObj === 'string') {
    return false;
  }

  //  constructor checks are next best option

  /* eslint-disable no-extra-parens */
  return (isValid(anObj) && (anObj.constructor === RegExp ||
                              REGEXP_CONSTRUCTOR.test(
                                  '' + anObj.constructor)));
  /* eslint-enable no-extra-parens */
};

//  ------------------------------------------------------------------------

const isSymbol = (anObj) => {

  /**
   * @method isSymbol
   * @summary Returns true if the object provided is a symbol instance.
   * @param {Object} anObj The object to test.
   * @returns {Boolean} Whether or not the supplied object is a Symbol.
   */

  if (typeof anObj === 'symbol') {
    return true;
  }

  return false;
};

//  ------------------------------------------------------------------------

const isInvalidDate = (anObj) => {

  /**
   * @method isInvalidDate
   * @summary Returns true if the object is a Date object, but has an invalid
   *   Date value.
   * @param {Object} anObj The object to test.
   * @returns {Boolean}
   */

  //  all dates report object as their primitive type (but so does null)
  if (notValid(anObj) || typeof anObj !== 'object') {
    return false;
  }

  //  The ECMA-402 i18n spec for ECMAScript defines that these objects should
  //  return 'Invalid Date' (and ECMAScript edition 5 specifies 'NaN' if they
  //  were created with an invalid number).
  if (anObj.toString &&
    (anObj.toString() === 'Invalid Date' || anObj.toString() === 'NaN')) {
    return true;
  }

  return false;
};

//  ------------------------------------------------------------------------

const isIterable = (anObj) => {

  /**
   * @method isIterable
   * @summary Returns true if the object has an iterator property and can be
   *   used in an interating context. Common objects for which this is true
   *   are 'arguments' objects, Array, Set, Map, etc.
   * @param {Object} anObj The object to test.
   * @returns {Boolean} True if the object can be iterated.
   */

  if (anObj === null || typeof anObj !== 'object') {
    return false;
  }

  return typeof anObj[Symbol.iterator] === 'function';
};

//  ------------------------------------------------------------------------

const isEmpty = (anObj) => {

  /**
   * @method isEmpty
   * @summary Returns true if the object provided is 'empty' meaning it may
   *   be 'invalid' or have a size, length, or empty attribute which defines
   *   it as having zero-length content.
   * @description A common error is using isEmpty() to test a return value
   *   which is a Node. This will return varying results depending on how
   *   many childNodes the Node has. Use isValid() to test whether a node
   *   exists, then use isEmpty() to test for children.
   * @param {Object} anObj The object to test.
   * @example Test which primitive objects are considered empty and which ones
   *   aren't:
   *   <code>
   *    isEmpty(42);
   *    <samp>false</samp>
   *    isEmpty(true);
   *    <samp>false</samp>
   *    isEmpty('Hi there');
   *    <samp>false</samp>
   *    isEmpty('');
   *    <samp>true</samp>
   *   </code>
   * @returns {Boolean} True if the object has content size = 0.
   */

  var val,
      type;

  //  NB: This is a very heavily used routine, so we use very primitive
  //  checking in it.

  if (anObj === undefined || anObj === null) {
    return true;
  }

  type = typeof anObj;

  //  have to be careful here because of IE and its failure to support
  //  toString() on certain node objects
  if (type === 'string') {
    //  Make sure to use a '===' test here since if anObj is false, 0,
    //  null, undefined, etc. a '==' test could actually succeed.
    return anObj === '';
  }

  if (type === 'symbol') {
    return false;
  }

  //  if its a boolean, it can't be empty.
  if (type === 'boolean') {
    return false;
  }

  //  if its a number and its NaN, then it's empty - otherwise, it's not.
  if (type === 'number') {
    return isNaN(anObj);
  }

  //  'arguments' arrays are handled specially, since they don't act like
  //  other arrays (i.e. they don't participate in the prototype chain).
  if (isArgArray(anObj)) {
    return anObj.length === 0;
  }

  //  If it has a 'length', 'size' or 'byteLength'  slot and that contains a
  //  Number, use that. This would include native Strings. Note that we're not
  //  interested in Functions, since 'length' is an alias for 'arity'.
  if (type !== 'function') {
    val = anObj.length;
    if (typeof val === 'number') {
      return val === 0;
    }
    //  Map, Set
    val = anObj.size;
    if (typeof val === 'number') {
      return val === 0;
    }
    //  ArrayBuffer, DataView
    val = anObj.byteLength;
    if (typeof val === 'number') {
      return val === 0;
    }
  }

  if (isRegExp(anObj) ||
      isDate(anObj) ||
      isInvalidDate(anObj) ||
      isFunction(anObj) ||
      isError(anObj) ||
      isPromise(anObj) ||
      isESClass(anObj)) {
      return false;
  }

  return Object.keys(anObj).length === 0;
};

//  ------------------------------------------------------------------------

const ifEmpty = (aSuspectValue, aDefaultValue) => {

/**
 * @method ifEmpty
 * @summary Returns either aSuspectValue or aDefaultValue based on the
 *   state of aSuspectValue. If aSuspectValue isEmpty() aDefaultValue
 *   is returned.
 * @param {Object} aSuspectValue The value to test.
 * @param {Object} aDefaultValue The value to return if test passes.
 * @example Set the value of theObj to 'Hi there', if anObj is empty:
 *   <code>
 *        theObj = ifEmpty(anObj, 'Hi there');
 *   </code>
 * @returns {Object} One of the two values provided.
 */

return isEmpty(aSuspectValue) ? aDefaultValue : aSuspectValue;
};

//  ------------------------------------------------------------------------

const notEmpty = (anObj) => {

  /**
   * @method notEmpty
   * @summary Returns true if the object provided is not 'empty' meaning it
   *   must be a valid object with a size, length, or empty attribute which
   *   defines it as having content.
   * @description A common error is using notEmpty() to test a return value
   *   which is a Node. This will return varying results depending on how
   *   many childNodes the Node has. Use isValid() to test whether a node
   *   exists, then use notEmpty() to test for children.
   * @param {Object} anObj The object to test.
   * @example See the isEmpty() method for examples on 'emptiness'.
   * @returns {Boolean} True if the object has content size > 0.
   */

  return !isEmpty(anObj);
};

//  ------------------------------------------------------------------------

const ifNaN = (aSuspectValue, aDefaultValue) => {

  /**
   * @method ifNaN
   * @summary Returns either aSuspectValue or aDefaultValue based on the
   *   state of aSuspectValue. If aSuspectValue is NaN, aDefaultValue is
   *   returned.
   * @param {Object} aSuspectValue The value to test.
   * @param {Object} aDefaultValue The value to return if aSuspectValue is
   *   NaN.
   * @example Set the value of theObj to 42, if anObj is NaN:
   *   <code>
   *      theObj = ifNaN(anObj, 42);
   *   </code>
   * @returns {Object} One of the two values provided.
   */

  return isNaN(aSuspectValue) === true ? aDefaultValue : aSuspectValue;
};

//  ------------------------------------------------------------------------

export {
  canInvoke,

  hasOwn,

  ifEmpty,
  ifInvalid,
  ifNaN,
  ifNull,
  ifUndefined,

  isArgArray,
  isArray,
  isAsyncFunction,
  isBoolean,
  isDate,
  isESClass,
  isEmpty,
  isError,
  isFalse,
  isFalsey,
  isFunction,
  isGeneratorFunction,
  isInvalidDate,
  isIterable,
  isNaN,
  isNativeFunction,
  isNull,
  isNumber,
  isPlainObject,
  isPromise,
  isProxy,
  isRegExp,
  isString,
  isSymbol,
  isThenable,
  isTrue,
  isTruthy,
  isValid,

  notDefined,
  notEmpty,
  notFalse,
  notNaN,
  notNull,
  notTrue,
  notValid,
};

const Checks = {
  canInvoke,

  hasOwn,

  ifEmpty,
  ifInvalid,
  ifNaN,
  ifNull,
  ifUndefined,

  isArgArray,
  isArray,
  isAsyncFunction,
  isBoolean,
  isDate,
  isESClass,
  isEmpty,
  isError,
  isFalse,
  isFalsey,
  isFunction,
  isGeneratorFunction,
  isInvalidDate,
  isIterable,
  isNaN,
  isNativeFunction,
  isNull,
  isNumber,
  isPlainObject,
  isPromise,
  isProxy,
  isRegExp,
  isString,
  isSymbol,
  isThenable,
  isTrue,
  isTruthy,
  isValid,

  notDefined,
  notEmpty,
  notFalse,
  notNaN,
  notNull,
  notTrue,
  notValid,
};

export { Checks };

export default Checks;
