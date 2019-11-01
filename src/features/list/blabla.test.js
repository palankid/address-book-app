import blabla from "./blabla";

describe('blabla', () => {
  it('should test blabla', () => {
    const res = blabla([0,1,2,3]);
    expect(res).toEqual([0,1,1,1,2,1,3,1]);
  })
});
