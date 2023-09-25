function rand(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

let numb = prompt('Enter number of examples');
let min = 1;
let max = 30;
let primer = 0;

for (let i = 1; i <= numb; i++) {
  let one = rand(min, max);
  let two = rand(min, max);
  let oper = rand(1, 4);

  switch (oper) {
    case 1:
      userAnsw = +prompt(one + '+' + two + ' =');
      console.log(
        one +
          '+' +
          two +
          ' =' +
          userAnsw +
          (userAnsw == one + two
            ? ' Right!'
            : ' Error! Right answer is ' + (one + two))
      );
      break;
    case 2:
      userAnsw = +prompt(one + '-' + two + ' =');
      console.log(
        one +
          '-' +
          two +
          ' =' +
          userAnsw +
          (userAnsw == one - two
            ? ' Right!'
            : ' Error! Right answer is ' + (one - two))
      );
      break;
    case 3:
      userAnsw = +prompt(one + '*' + two + ' =');
      console.log(
        one +
          '*' +
          two +
          ' =' +
          userAnsw +
          (userAnsw == one * two
            ? ' Right!'
            : ' Error! Right answer is ' + one * two)
      );
      break;
    case 4:
      userAnsw = +prompt(one + '/' + two + ' =');
      console.log(
        one +
          '/' +
          two +
          ' =' +
          userAnsw +
          (userAnsw == one / two
            ? ' Right!'
            : ' Error! Right answer is ' + one / two)
      );
      break;
  }
}
