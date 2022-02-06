/**
 * 
 * @param {Integer} time - time taken to solve puzzle 
 * @returns the bonus points acquired from time.
 */
export default function getTimeBonus(time){
    return time < 30 ? 5 : time < 60 ? 3 : 1;
}