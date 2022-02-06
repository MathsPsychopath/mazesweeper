import getTimeBonus from "./getTimeBonus";
import getInitialPoints from "./getInitialPoints";
/**
 * 
 * @param {String} board - either 10x10 | 16x16 | 16x30
 * @param {Number} time - time taken to solve puzzle
 * @returns points won from solving this board correctly in a time subject to README
 */
export default function pointCalculator(board, time){
    return getInitialPoints(board) + getTimeBonus(time);
}