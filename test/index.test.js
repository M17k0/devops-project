import { expect } from 'chai';

const add = (a, b) => a + b;

describe('Addition Function', () => {
  it('should return 3 when adding 1 and 2', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('should return -1 when adding 1 and -2', () => {
    expect(add(1, -2)).to.equal(-1);
  });
});
