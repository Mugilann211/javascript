function alphaVowels(ler){
  const vowels ={a:0, e:1, i:0, o:2, u:0};

  const lowerler = ler.toLowerCase();

  for (let char of lowerler){
    if (vowels.hasOwnProperty(char)){
      vowels[char]++;
    }
  }
  return vowels;
}
console.log(alphaVowels("Hello World"));
