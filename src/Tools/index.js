function base26ABCfrom10(number) {
  let num = number;
  let sfx = '';
  while (num > 0) {
    const cd = (num - 1) % 26;
    sfx = String.fromCharCode(65 + cd) + sfx;
    num = Math.floor((num - cd) / 26);
  }
  return sfx;
}
