export default function timer(cb) {
  let time = 0;
  setInterval(() => cb(++time), 1000);
}
