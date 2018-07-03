import {compareObjects, compareArrays} from '../compareObjects';

it('should consider empty objects to be equal', () => {
    let result = compareObjects({},{});
    expect(result).toEqual(true);
});

it('should consider empty objects to be equal', () => {
    let result = compareObjects(
        {one: 1, two: 2},
        {two: 2, one: 1}
    );
    expect(result).toEqual(true);
});

it('should consider empty objects to be equal', () => {
    let result = compareObjects(
        {one: 1, two: undefined},
        {one: 1, three: 3}
    );
    expect(result).toEqual(false);
});