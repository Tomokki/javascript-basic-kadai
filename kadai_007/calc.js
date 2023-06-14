// 1から20までのランダムな整数を生成して変数(num)に代入する
let num = Math.floor(Math.random() * 20);

 // 条件式を評価し、結果に応じて処理を行う
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num);
}