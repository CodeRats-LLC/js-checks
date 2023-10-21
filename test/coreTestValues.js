const setupValues = () => {

    let undefVal,
        nullVal,

        stringVal,
        numberVal,
        booleanVal,

        regexpVal,
        dateVal,
        arrayVal,
        objectVal,

        functionVal,
        asyncFunctionVal,
        generatorFunctionVal,

        errorVal,

        nanVal,
        invalidDateVal,

        nativeTypeVal,
        nativeFuncVal,

        symbolVal,
        mapVal,
        setVal,
        weakMapVal,
        weakSetVal,
        arrayBufferVal,
        dataViewVal,
        promiseVal,
        proxyVal,

        objValues;

    //  undefined
    undefVal = undefined;
    //  null
    nullVal = null;

    //  Instance of Array
    arrayVal = [1, 2, 3];
    //  Instance of Boolean
    booleanVal = true;
    //  Instance of Date
    dateVal = new Date('Aug 23 1995');

    //  NB: Do *not* reformat this in any way. Some of the representation tests
    //  expect to see this in *exactly* this format.
    //  Instance of Function
    /* eslint-disable brace-style,max-statements-per-line,quotes,require-yield */
    functionVal = function() {return "fluffy"; };
    /* eslint-disable require-await */
    asyncFunctionVal = async function() {return "async fluffy"; };
    /* eslint-enable require-await */
    generatorFunctionVal = function*() {return "generator fluffy"; };
    /* eslint-enable brace-style,max-statements-per-line,quotes,require-yield */

    //  Error
    errorVal = new Error('There was an error');

    //  invalid Date
    invalidDateVal = new Date('fluffy');
    //  NaN
    nanVal = NaN;
    //  Instance of Number
    numberVal = 42;
    //  Instance of Object
    objectVal = {
    };
    objectVal.foo = 'bar';
    //  Instance of RegExp
    regexpVal = /foo/g;
    //  Instance of String
    stringVal = 'bar';

    //  Native Type
    nativeTypeVal = Array;
    //  Native Function
    nativeFuncVal = Array.prototype.slice;

    //  Symbol
    symbolVal = Symbol('foo');

    //  Map
    mapVal = new Map();
    mapVal.set('foo', 'bar');

    //  Set
    setVal = new Set();
    setVal.add(1);
    setVal.add(2);
    setVal.add(3);

    const goo = {},
            foo = {},
            bar = {},
            baz = {};

    //  WeakMap
    weakMapVal = new WeakMap();
    weakMapVal.set(goo, 'bar');

    //  WeakSet
    weakSetVal = new WeakSet();
    weakSetVal.add(foo);
    weakSetVal.add(bar);
    weakSetVal.add(baz);

    //  ArrayBuffer
    arrayBufferVal = new ArrayBuffer(8);

    //  DataView
    dataViewVal = new DataView(new ArrayBuffer(2));

    //  Promise
    /* eslint-disable no-empty-function */
    promiseVal = new Promise(function() {}, function() {});
    /* eslint-enable no-empty-function */

    //  Proxy
    proxyVal = new Proxy({goo: 'boo'}, {});

    objValues = {
      'undefined':                undefVal,               //  undefined
      'null':                     nullVal,                //  null
      'Array':                    arrayVal,               //  Array
      'Boolean':                  booleanVal,             //  Boolean
      'Date':                     dateVal,                //  Date
      'Function':                 functionVal,            //  Function
      'AsyncFunction':            asyncFunctionVal,       //  Async Function
      'GeneratorFunction':        generatorFunctionVal,   //  Generator Function
      'Error':                    errorVal,               //  Error
      'InvalidDate':              invalidDateVal,         //  not a Date
      'NaN':                      nanVal,                 //  NaN
      'Number':                   numberVal,              //  Number
      'RegExp':                   regexpVal,              //  RegExp
      'Object':                   objectVal,              //  Object
      'String':                   stringVal,              //  String

      'NativeType':               nativeTypeVal,          //  NativeType
      'NativeFunction':           nativeFuncVal,          //  NativeFunc

      'Symbol':                   symbolVal,              //  Symbol
      'Map':                      mapVal,                 //  Map
      'Set':                      setVal,                 //  Set
      'WeakMap':                  weakMapVal,             //  WeakMap
      'WeakSet':                  weakSetVal,             //  WeakSet
      'ArrayBuffer':              arrayBufferVal,         //  ArrayBuffer
      'DataView':                 dataViewVal,            //  DataView
      'Promise':                  promiseVal,             //  Promise
      'Proxy':                    proxyVal,               //  Proxy
    };

    return objValues;
};

//  ---

const trueValues = () => {

    let objValues;

    objValues = {
      'undefined':                true,   //  undefined
      'null':                     true,   //  null
      'Array':                    true,   //  Array
      'Boolean':                  true,   //  Boolean
      'Date':                     true,   //  Date
      'Function':                 true,   //  Function
      'AsyncFunction':            true,   //  Async Function
      'GeneratorFunction':        true,   //  Generator Function
      'Error':                    true,   //  Error
      'InvalidDate':              true,   //  not a Date
      'NaN':                      true,   //  NaN
      'Number':                   true,   //  Number
      'RegExp':                   true,   //  RegExp
      'Object':                   true,   //  Object
      'String':                   true,   //  String

      'NativeType':               true,   //  NativeType
      'NativeFunction':           true,   //  NativeFunc

      'Symbol':                   true,   //  Symbol
      'Map':                      true,   //  Map
      'Set':                      true,   //  Set
      'WeakMap':                  true,   //  WeakMap
      'WeakSet':                  true,   //  WeakSet
      'ArrayBuffer':              true,   //  ArrayBuffer
      'DataView':                 true,   //  DataView
      'Promise':                  true,   //  Promise
      'Proxy':                    true,   //  Proxy
    };

    return objValues;
};

//  ---

const falseValues = () => {

    let objValues;

    objValues = {
      'undefined':                false,  //  undefined
      'null':                     false,  //  null
      'Array':                    false,  //  Array
      'Boolean':                  false,  //  Boolean
      'Date':                     false,  //  Date
      'Function':                 false,  //  Function
      'AsyncFunction':            false,  //  Async Function
      'GeneratorFunction':        false,  //  Generator Function
      'Error':                    false,  //  Error
      'InvalidDate':              false,  //  not a Date
      'NaN':                      false,  //  NaN
      'Number':                   false,  //  Number
      'RegExp':                   false,  //  RegExp
      'Object':                   false,  //  Object
      'String':                   false,  //  String

      'NativeType':               false,  //  NativeType
      'NativeFunction':           false,  //  NativeFunc

      'Symbol':                   false,  //  Symbol
      'Map':                      false,  //  Map
      'Set':                      false,  //  Set
      'WeakMap':                  false,  //  WeakMap
      'WeakSet':                  false,  //  WeakSet
      'ArrayBuffer':              false,  //  ArrayBuffer
      'DataView':                 false,  //  DataView
      'Promise':                  false,  //  Promise
      'Proxy':                    false,  //  Proxy
    };

    return objValues;
};

//  ---

const Values = {
  setupValues,
  trueValues,
  falseValues,
};

export { setupValues, trueValues, falseValues };

export { Values };

export default Values;
