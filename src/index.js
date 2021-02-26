module.exports = function check(str, bracketsConfig) {
  // your solution
  let i = 0;
  let string = str;

  while (1) {
    let finds = 0;
    for (let i = 0; i < bracketsConfig.length; i++) {
      const pairs = bracketsConfig[i][0] + bracketsConfig[i][1];
      for (let k = 0; k < string.length - 1; k++) {
        if (string[k] + string[k+1] === pairs) {
          finds++;
          string = [...string.split('').splice(0, k), ...string.split('').splice(k+2)].join('');
          k = 0;
        };
      }
    }
    if (finds === 0 || string.length === 0) break;
  }
  return string.length ? false : true;
}



// function check(str, bracketsConfig) {
//   // your solution
//   // let i = 0;
//   // let finds = 0;
//   let string = str;
//   console.log(`LENGTH = ${bracketsConfig.length}`);

//   while (1) {
//     let finds = 0;
//     for (let i = 0; i <= bracketsConfig.length - 1; i++) {
//       const pairs = bracketsConfig[i][0] + bracketsConfig[i][1];
//       console.log(`pair = ${pairs}`);
//       for (let k = 0; k < string.length - 1; k++) {
//         if (string[k] + string[k+1] === pairs) {
//           finds++;
//           console.log('pairs equal:', string[k] + string[k+1] ,'and', pairs);
//           string = [...string.split('').splice(0, k), ...string.split('').splice(k+2)].join('');
//           console.log(`string - '${string}'`);
//           k = 0;
//         };
//       }
//     }
//     if (finds === 0 || string.length === 0) break;
//   }
//   console.log('DONE!');
//   console.log(string.length ? false : true);
//   return string.length ? false : true;
// }

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// //
// check('()', config1);
// check('111115611111111222288888822225577877778775555666677777777776622222', config6);