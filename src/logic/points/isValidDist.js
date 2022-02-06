/**
 * 
 * @param {Number} distance - integer distance offset from correct answer 
 * @param {String} mode - either QuickMode | Normal | Chill and Casual
 * @returns true | false depending if the distance offset falls in error boundary of mode
 */
export default function isValidDist(distance, mode){
    const dist = Math.abs(distance);
    switch(mode){
        case "QuickMode":
            return dist <= 1;
        case "Normal":
            return dist <= 2;
        case "Chill and Casual":
            return dist <= 3;
        default:
            return false;
    }
}