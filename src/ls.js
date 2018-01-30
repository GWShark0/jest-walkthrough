import fs from 'fs';

export default function ls() {
  return fs.readdirSync('.');
}
