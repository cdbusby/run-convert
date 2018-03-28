/**
 * Convert speed of given unit to pace of any unit
 * @param {Integer} speed 
 * @param {*} FromUnit 
 * @param {*} toUnit 
 */
const speedToPace = function (speed, fromUnit, toUnit) {

    // Get decimal version of pace and convert to string
    var paceInDec = 1 / (speed / 60);
    var paceInDecRounded = paceInDec.toFixed(2);

    // Run decimal through function for time conversion
    var finalPace = decimalToTime(paceInDecRounded);

    return finalPace;
};

/**
 * Convert decimal to time
 * @param {Integer} decimal 
 */
function decimalToTime(decimal) {

    // Get the number of minutes
    var min = Math.floor(Math.abs(decimal));

    // Get the number of seconds
    var sec = Math.floor((Math.abs(decimal) * 60) % 60);

    // Jam them together and format as time
    return `${(min < 10 ? "0" : "")}${min}:${(sec < 10 ? "0" : "")}${sec}`;
}

export default speedToPace;