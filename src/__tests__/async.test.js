import { resolver, rejector } from '../async';

describe('promises', () => {

  it('resolve', () => {
    expect.assertions(1);
    return expect(resolver()).resolves.toEqual('resolved');
  });

  it('reject', () => {
    expect.assertions(1);
    return expect(rejector()).rejects.toEqual('rejected');
  });

});

describe('async/await', () => {

  it('resolve', async () => {
    expect.assertions(1);
    const result = await resolver();

    expect(result).toEqual('resolved');
  });

  it('reject', async () => {
    expect.assertions(1);
    try {
      await rejector();
    } catch (error) {
      expect(error).toEqual('rejected');
    }
  });

});
