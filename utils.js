//  ------------------------------------------------------------------------

const hasOwn = (anObj, aName) => {

    /**
     * @method owns
     * @summary Returns true if the object hasOwnProperty() aName. This wrapper
     *     exists because numerous objects which should respond to that method
     *     don't, and will throw errors if you try to use it.
     * @param {Object} anObj The object to test.
     * @param {String} aName The slot name to check.
     * @returns {Boolean} True if the object owns the slot.
     */

    return Object.prototype.hasOwnProperty.call(anObj, aName);
};

//  ------------------------------------------------------------------------

const canInvoke = (anObj, anInterface) => {

    /**
     * @method canInvoke
     * @summary Returns true if the object provided implements the method named
     *     in the name provided.
     * @description The Smalltalk method 'respondsTo' is replaced in TIBET with
     *     this method, which allows you to check a method name against a
     *     potentially null/undefined parameter or return value.
     * @param {Object} anObj The object to check.
     * @param {String} anInterface A method name to check.
     * @example Testing to see if anObj implements 'getID':
     *     <code>
     *          canInvoke(anObj, 'getID');
     *          <samp>true</samp>
     *     </code>
     * @returns {Boolean} True if the object implements the method(s) of the
     *     interface.
     */

    var obj;

    //  This is a very heavily used routine, so we use very primitive checking
    //  in it.

    //  On some platforms, if obj is a '[native code]' function, 'instanceof
    //  Function' will return false. This is the only consistent test for
    //  whether something can truly respond.

    //  Unfortunately, the 'in' operator will throw an exception on primitive
    //  strings, numbers and booleans. Therefore, we catch and try different
    //  logic for those. Note that this is actually quite a bit faster than
    //  testing to see what kind of object we're dealing with.
    try {
        /* eslint-disable no-extra-parens */
        return (anInterface in anObj) &&
                (typeof (obj = anObj[anInterface]) === 'function');
        /* eslint-enable no-extra-parens */
    } catch (e) {
        //  Note that we *must* compare anObj to both null and undefined rather
        //  than '!' because it might get falsey things like a '0' and the empty
        //  String.
        if (anObj === undefined || anObj === null || !anInterface) {
            return false;
        }

        obj = anObj[anInterface];
        /* eslint-disable no-extra-parens */
        return (typeof obj === 'function');
        /* eslint-enable no-extra-parens */
    }
};

//  ------------------------------------------------------------------------

//  NB: This *MUST* be considered a private slot - otherwise we get endless
//  recursion when iterating over a Proxy. Also, this is a Symbol for
//  uniqueness.
const PROXIED = Symbol('__Proxied__');

const createProxy = (proxyTarget, proxyConfig) => {

    /**
     * @method createProxy
     * @summary Creates an ECMA E6 proxy object. This method stamps a slot
     *     onto the return E6 Proxy object that allows the system to determine
     *     whether an object is a Proxy or not, which is normally very
     *     difficult, if not impossible, to determine. Use isProxy to determine
     *     if an object is an E6 Proxy.
     * @param {Object} proxyTarget The object to act as a proxy for.
     * @param {Object} proxyConfig The proxy configuration.
     * @returns {Proxy} An ECMA E6 proxy object.
     */

    var newProxyConfig,
        newProxy;

    newProxyConfig = {...proxyConfig};

    if (proxyConfig.get !== undefined && proxyConfig.get !== null) {
        newProxyConfig.get = function(target, property, receiver) {
            if (property === PROXIED) {
                return target;
            }

            return proxyConfig.get(target, property, receiver);
        };
    } else {
        newProxyConfig.get = function(target, property, receiver) {
            if (property === PROXIED) {
                return target;
            }

            return Reflect.get(target, property, receiver);
        };
    }

    newProxy = new Proxy(proxyTarget, newProxyConfig);

    return newProxy;
};

//  ------------------------------------------------------------------------

export {
  hasOwn,
  canInvoke,

  PROXIED,
  createProxy,
};

const Utils = {
  hasOwn,
  canInvoke,

  PROXIED,
  createProxy,
};

export { Utils };

export default Utils;
