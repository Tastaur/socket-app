import { getNumberWithComma } from '..';


describe('getNumberWithComma', () => {
  it('should return split value',  () => {
    expect(getNumberWithComma(1)).toEqual('1');
    expect(getNumberWithComma(10)).toEqual('10');
    expect(getNumberWithComma(100)).toEqual('100');
    expect(getNumberWithComma(1000)).toEqual('1,000');
    expect(getNumberWithComma(10000)).toEqual('10,000');
    expect(getNumberWithComma(100000)).toEqual('100,000');
    expect(getNumberWithComma(1000000)).toEqual('1,000,000');
  });
});
