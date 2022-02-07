import Square from "../../Components/Grid/Square"
describe("Square should be a react component that represents a single unit in the grid/board", () => {
    test("It should have 8 elements in an array", () => {
        const Sq = <Square />
        const squareProps = Sq.props;
        expect(squareProps.adjacent.length).toBe(8);
    });
    test("It should initialise all adjacent squares to be null", () => {
        const Sq = <Square />
        const squareProps = Sq.props;
        expect(squareProps.adjacent).toEqual(expect.arrayContaining([null,null,null,null,null,null,null,null]));
    });
    test("It should have state = visited:Bool", () => {
        const Sq = <Square/>
        //expect=(Sq.props)
    })

})