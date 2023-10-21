const isValid = (aValue) => {
    /**
     * @method isValid
     * @summary Return true if the receiver is not undefined and not null,
     *     meaning it has some value (empty/false or otherwise).
     * @param {Object} aValue The value to test.
     * @example Test to see if anObj is valid:
     *     <code>
     *          if (isValid(anObj)) { console.info('its valid'); };
     *     </code>
     * @returns {Boolean} Whether or not the value is not null *and* is not
     *     undefined.
     */

    return aValue !== undefined && aValue !== null;
};

//  ---

const notValid = (aValue) => {

    /**
     * @method notValid
     * @summary Returns true if the value provided is either null or undefined.
     * @param {Object} aValue The value to test.
     * @example Test to see if anObj is not valid:
     *     <code>
     *          if (notValid(anObj)) { console.info('its not valid'); };
     *     </code>
     * @returns {Boolean} Whether or not the value is not valid (that is, either
     *     null or undefined).
     */

    return aValue === undefined || aValue === null;
};

//  ---

const Checks = {
  isValid, notValid
};

export { isValid, notValid };

export { Checks };

export default Checks;
