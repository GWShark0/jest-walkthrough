const fs = jest.genMockFromModule('fs');

let mockDirectory = [];

function __setMockDir(directory) {
  mockDirectory = directory;
}

function readdirSync(directoryPath) {
  return mockDirectory;
}

fs.__setMockDir = __setMockDir;
fs.readdirSync = readdirSync;

module.exports = fs;
