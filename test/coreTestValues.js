import { createProxy } from '../utils.js';

const setupValues = () => {

    let undefVal,
        nullVal,

        stringVal,
        emptyStringVal,
        argsObjectVal,
        emptyArgsObjectVal,
        numberVal,
        zeroNumberVal,
        booleanVal,

        regexpVal,
        dateVal,
        arrayVal,
        emptyArrayVal,
        objectVal,
        emptyObjectVal,

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
        emptyArrayBufferVal,
        dataViewVal,
        emptyDataViewVal,
        promiseVal,
        proxyVal,

        classVal,

        objValues;

    //  undefined
    undefVal = undefined;
    //  null
    nullVal = null;

    //  Instance of String
    stringVal = 'bar';
    //  Instance of an empty String
    emptyStringVal = '';
    //  Instance of an 'arguments' object
    const argsCaptureFunc = function() {
      argsObjectVal = arguments;
    };
    argsCaptureFunc(42);
    //  Instance of an 'empty arguments' object
    const emptyArgsCaptureFunc = function() {
      emptyArgsObjectVal = arguments;
    };
    emptyArgsCaptureFunc();

    //  Instance of Number
    numberVal = 42;
    //  Instance of Number that is set to 0
    zeroNumberVal = 0;
    //  Instance of Boolean
    booleanVal = true;

    //  Instance of RegExp
    regexpVal = /foo/g;
    //  Instance of Date
    dateVal = new Date('Aug 23 1995');
    //  Instance of Array
    arrayVal = [1, 2, 3];
    //  Instance of an empty Array
    emptyArrayVal = [];
    //  Instance of Object
    objectVal = {
    };
    objectVal.foo = 'bar';
    //  Instance of an empty Object
    emptyObjectVal = {
    };

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

    //  NaN
    nanVal = NaN;
    //  invalid Date
    invalidDateVal = new Date('fluffy');

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
    //  empty ArrayBuffer
    emptyArrayBufferVal = new ArrayBuffer(0);

    //  DataView
    dataViewVal = new DataView(new ArrayBuffer(2));
    //  empty DataView
    emptyDataViewVal = new DataView(new ArrayBuffer(0));

    //  Promise
    /* eslint-disable no-empty-function */
    promiseVal = new Promise(function() {}, function() {});
    /* eslint-enable no-empty-function */

    //  Proxy
    proxyVal = createProxy({goo: 'boo'}, {});

    //  ES Class
    classVal = class {
      constructor() {
      }
    };

    objValues = {
      'undefined':                undefVal,               //  undefined
      'null':                     nullVal,                //  null
      'Array':                    arrayVal,               //  Array
      'EmptyArray':               emptyArrayVal,          //  Array
      'Boolean':                  booleanVal,             //  Boolean
      'Date':                     dateVal,                //  Date
      'Function':                 functionVal,            //  Function
      'AsyncFunction':            asyncFunctionVal,       //  Async Function
      'GeneratorFunction':        generatorFunctionVal,   //  Generator Function
      'Error':                    errorVal,               //  Error
      'InvalidDate':              invalidDateVal,         //  not a Date
      'NaN':                      nanVal,                 //  NaN
      'Number':                   numberVal,              //  Number
      'ZeroNumber':               zeroNumberVal,          //  Number
      'RegExp':                   regexpVal,              //  RegExp
      'Object':                   objectVal,              //  Object
      'EmptyObject':              emptyObjectVal,         //  Object
      'String':                   stringVal,              //  String
      'EmptyString':              emptyStringVal,         //  String
      'Arguments':                argsObjectVal,          //  Arguments
      'EmptyArguments':           emptyArgsObjectVal,     //  Arguments

      'NativeType':               nativeTypeVal,          //  NativeType
      'NativeFunction':           nativeFuncVal,          //  NativeFunc

      'Symbol':                   symbolVal,              //  Symbol
      'Map':                      mapVal,                 //  Map
      'Set':                      setVal,                 //  Set
      'WeakMap':                  weakMapVal,             //  WeakMap
      'WeakSet':                  weakSetVal,             //  WeakSet
      'ArrayBuffer':              arrayBufferVal,         //  ArrayBuffer
      'EmptyArrayBuffer':         emptyArrayBufferVal,    //  ArrayBuffer
      'DataView':                 dataViewVal,            //  DataView
      'EmptyDataView':            emptyDataViewVal,       //  DataView
      'Promise':                  promiseVal,             //  Promise
      'Proxy':                    proxyVal,               //  Proxy

      'Class':                    classVal,               //  ES Class
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
      'EmptyArray':               true,   //  Array
      'Boolean':                  true,   //  Boolean
      'Date':                     true,   //  Date
      'Function':                 true,   //  Function
      'AsyncFunction':            true,   //  Async Function
      'GeneratorFunction':        true,   //  Generator Function
      'Error':                    true,   //  Error
      'InvalidDate':              true,   //  not a Date
      'NaN':                      true,   //  NaN
      'Number':                   true,   //  Number
      'ZeroNumber':               true,   //  Number
      'RegExp':                   true,   //  RegExp
      'Object':                   true,   //  Object
      'EmptyObject':              true,   //  Object
      'String':                   true,   //  String
      'EmptyString':              true,   //  String
      'Arguments':                true,   //  Arguments
      'EmptyArguments':           true,   //  Arguments

      'NativeType':               true,   //  NativeType
      'NativeFunction':           true,   //  NativeFunc

      'Symbol':                   true,   //  Symbol
      'Map':                      true,   //  Map
      'Set':                      true,   //  Set
      'WeakMap':                  true,   //  WeakMap
      'WeakSet':                  true,   //  WeakSet
      'ArrayBuffer':              true,   //  ArrayBuffer
      'EmptyArrayBuffer':         true,   //  ArrayBuffer
      'DataView':                 true,   //  DataView
      'EmptyDataView':            true,   //  DataView
      'Promise':                  true,   //  Promise
      'Proxy':                    true,   //  Proxy

      'Class':                    true,   //  ES Class
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
      'EmptyArray':               false,  //  Array
      'Boolean':                  false,  //  Boolean
      'Date':                     false,  //  Date
      'Function':                 false,  //  Function
      'AsyncFunction':            false,  //  Async Function
      'GeneratorFunction':        false,  //  Generator Function
      'Error':                    false,  //  Error
      'InvalidDate':              false,  //  not a Date
      'NaN':                      false,  //  NaN
      'Number':                   false,  //  Number
      'ZeroNumber':               false,  //  Number
      'RegExp':                   false,  //  RegExp
      'Object':                   false,  //  Object
      'EmptyObject':              false,  //  Object
      'String':                   false,  //  String
      'EmptyString':              false,  //  String
      'Arguments':                false,  //  Arguments
      'EmptyArguments':           false,  //  Arguments

      'NativeType':               false,  //  NativeType
      'NativeFunction':           false,  //  NativeFunc

      'Symbol':                   false,  //  Symbol
      'Map':                      false,  //  Map
      'Set':                      false,  //  Set
      'WeakMap':                  false,  //  WeakMap
      'WeakSet':                  false,  //  WeakSet
      'ArrayBuffer':              false,  //  ArrayBuffer
      'EmptyArrayBuffer':         false,  //  ArrayBuffer
      'DataView':                 false,  //  DataView
      'EmptyDataView':            false,  //  DataView
      'Promise':                  false,  //  Promise
      'Proxy':                    false,  //  Proxy

      'Class':                    false,  //  ES Class
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
