const speedToPace = function( speed, unit ) {
    
    // Get decimal version of pace and convert to string
    var paceInDec = 1 / (speed / 60);
    var paceInDecRounded = paceInDec.toFixed(2);
    var paceAsString = paceInDecRounded.toString();

    // Store minutes and seconds (dec) separately
    var paceMinutes = paceAsString.split(".")[0];
    var paceSeconds = paceAsString.split(".")[1];

    // Convert seconds as decimal to seconds
    var decimalInSec = 60 * paceSeconds;
    var zerodDecInSec = `0.${decimalInSec}`;
    var roundedDecInSec = parseFloat(zerodDecInSec).toFixed(2).split(".")[1];

    // Add converted portion to the orifinal
    var finalPace = `${paceMinutes}:${roundedDecInSec}`;

    return finalPace;
};

export default speedToPace;