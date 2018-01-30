import timer from '../timer';

jest.useFakeTimers();

describe('timer', () => {

  it('calls the callback after 1 second', () => {
    const callback = jest.fn();
    timer(callback);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1 * 1000);

    expect(callback).toBeCalledWith(1);
  });

  it('calls the callback after 10 seconds', () => {
    const callback = jest.fn();
    timer(callback);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(10 * 1000);

    expect(callback).toBeCalledWith(10);
  });

});
