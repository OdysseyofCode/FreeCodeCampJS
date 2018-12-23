function convertToRoman(number) {
var num = [];
var numbers = [   1,  4,   5,  9,  10, 40,  50,  90, 100, 400,500,900,1000];
var numerals = ['I','IV','V','IX','X','XL','L','XD','C','CD','D','CM','M'];
while (number > 0)
{
  for ( let i = 0 ; i < numbers.length; i++)
  {
if (number >= numbers[i] && number < numbers[i + 1])  {
    num.push(numerals[i]);
    number -= numbers[i];
  }

  }
 
 

}

num = num.join('');
 return num;
}

console.log(convertToRoman(28));