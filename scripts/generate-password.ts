import * as crypto from 'crypto';

const LEN = 24, MIN = 16, MAX = 128;
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUM = '0123456789';
const ALL = LOWER + UPPER + NUM;

function genPwd(len = LEN): string {
  len = Math.max(MIN, Math.min(MAX, len));
  let pwd = [
    LOWER[crypto.randomInt(LOWER.length)],
    UPPER[crypto.randomInt(UPPER.length)],
    NUM[crypto.randomInt(NUM.length)],
  ];
  while (pwd.length < len)
    pwd.push(ALL[crypto.randomInt(ALL.length)]);
  for (let i = pwd.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [pwd[i], pwd[j]] = [pwd[j], pwd[i]];
  }
  return pwd.join('');
}

const n = parseInt(process.argv[2]) || LEN;
console.log(genPwd(n));
