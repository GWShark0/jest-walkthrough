import ls from '../ls';

jest.mock('fs');

describe('ls', () => {
  const DIR = ['.git', '.vimrc', 'README.md'];

  beforeEach(() => {
    require('fs').__setMockDir(DIR);
  });

  it('should list directory', () => {
    expect(ls()).toEqual(DIR)
  })
});
