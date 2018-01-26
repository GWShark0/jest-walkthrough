import quotient from '../quotient';

describe('quotient', () => {
  // regular division
  it('divides 1 / 2 to equal 0.5', () => {
    expect(quotient(1, 2)).toBe(0.5);
  });

  // integer division
  it('divides 1 / 2 to equal 0', () => {
    expect(quotient(1, 2)).toBe(0);
  });
});
