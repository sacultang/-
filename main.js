console.log('reg')

const str = `
010-1234-5895
thebrown@gmail.com
http://www.omdbapi.com/?i=tt3896198&apikey=f6573a61&s=lion
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi') // 생성자 방식
const regexp = /the/gi  // 리터럴 방식
console.log(str.match(regexp))