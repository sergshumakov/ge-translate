type MapChars = { [key: string]: string }

const map: MapChars = {
  "ts'": 'წ',
  "ch'": 'ჭ',
  "k'": 'კ',
  "p'": 'პ',
  "t'": 'ტ',
  zh: 'ჟ',
  gh: 'ღ',
  sh: 'შ',
  ch: 'ჩ',
  ts: 'ც',
  dz: 'ძ',
  kh: 'ხ',
  a: 'ა',
  b: 'ბ',
  g: 'გ',
  d: 'დ',
  e: 'ე',
  v: 'ვ',
  w: 'ვ',
  z: 'ზ',
  t: 'თ',
  i: 'ი',
  l: 'ლ',
  m: 'მ',
  n: 'ნ',
  o: 'ო',
  r: 'რ',
  s: 'ს',
  u: 'უ',
  p: 'ფ',
  f: 'ფ',
  k: 'ქ',
  q: 'ყ',
  c: 'ც',
  x: 'ხ',
  j: 'ჯ',
  h: 'ჰ',
}

export default function transliteration(text: string): string {
  Object.keys(map).forEach(function (key: string) {
    const regExp = new RegExp(key, 'g')
    text = text.replace(regExp, map[key])
  })

  return text
}
