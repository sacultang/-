
const str = `
010-1234-5895
thebrown@gmail.com
https://www.omdbapi.com/?i=tt3896198&apikey=f6573a61&s=lion
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the','gi') // 생성자 방식
// const regexp = /the/gi  // 리터럴 방식
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp,'AAA'))
// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gmi))
// console.log(str.match(/dog|fox/))
// console.log(str.match(/https?/g))
// console.log(str.match(/d{3}/g))
// console.log(str.match(/\b\w{2,3}\b/g))
// console.log(str.match(/[가-힣]{1,}/g))
// console.log(str.match(/\w/g))
// console.log(str.match(/\bf\w{1,}\b/g))
// console.log(str.match(/\d{1,}/g))
// console.log(str.match(/\s/g))
const h = `  the hello  world   !

`
// const h1Els = document.querySelector('h1')

// h1Els.textContent = h1El.replace(/\s/g), ''
console.log(h.replace(/\s/g, ''))
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))