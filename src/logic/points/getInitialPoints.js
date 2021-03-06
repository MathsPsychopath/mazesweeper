/**
 * 
 * @param {String} board - either 10x10 | 16x16 | 16x30
 * @returns either 5 | 10 | 15
 */
export default function getInitialPoints(board){
    return board === "10x10" ? 5 : board === "16x16" ? 10 : 15;
}