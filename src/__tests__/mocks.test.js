describe('mock functions', () => {

  it('should get called', () => {
    const mockFn = jest.fn();

    mockFn();

    expect(mockFn).toHaveBeenCalled();
  });

  it('should get called in a callback', () => {
    const myFunc = (cb) => cb('blah');
    const mockFn = jest.fn();

    myFunc(mockFn);

    expect(mockFn).toHaveBeenCalledWith('blah');
  });

  it('should get called three times', () => {
    const mockFn = jest.fn();

    mockFn('Monday');
    mockFn('Tuesday');
    mockFn('Wednesday');

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenCalledWith('Tuesday');
  });

  it('should return foo', () => {
    const mockFn = jest.fn(() => 'foo');

    expect(mockFn()).toBe('foo');
  });

});
