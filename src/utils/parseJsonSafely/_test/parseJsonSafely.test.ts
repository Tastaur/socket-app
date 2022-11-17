import { parseJsonSafely, shallowClone } from '..';


describe('parseJsonSafely test', () => {
  it('should return shallow copy', () => {
    const a = {};
    const b = shallowClone(a);
    const c = a;
    expect(a !== b).toBeTruthy();
    expect(c === a).toBeTruthy();
    expect(a).toEqual(b);
  });
  describe('should parseJsonSafely ', () => {
    it('should return arrays', () => {
      const arr = [1, 2, 3];
      const correctData = JSON.stringify(arr);
      const incorrectData = '[1, 2 ,3';
      expect(arr).toEqual(parseJsonSafely(correctData, []));
      expect([]).toEqual(parseJsonSafely(incorrectData, []));
    });
    it('should return object', () => {
      const correctObj = { a: 1 };
      const correctData = JSON.stringify({ a: 1 });
      const incorrectData = '{a: 1';
      expect(correctObj).toEqual(parseJsonSafely(correctData, {}));
      expect({}).toEqual(parseJsonSafely(incorrectData, {}));
    });
  });
});
