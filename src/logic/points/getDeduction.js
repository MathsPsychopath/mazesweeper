/**
 * 
 * @param {Number} distance - integer distance offset from correct answer
 * @param {String} mode - either QuickMode | Normal | Chill and Casual
 * @returns the number of points to deduct from running total score.
 */
export default function getDeduction(distance, mode){
    const dist = Math.abs(distance);
    switch(mode){
        case "QuickMode":
            return dist <= 1 ? 0: -5;
        case "Normal":
            break;
        default:
            return 0;
    }
    if (dist <= 2) return 0;
    return dist === 3 ? -2 : (dist <= 5 ? -5 : (dist <= 7 ? -7 : -10));
}