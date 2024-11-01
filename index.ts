/*
  以下の問題をJavaScriptので解いてください。
  1. 関数の定義
  2. 関数の呼び出して結果をconsole.logする
  の、両方を記述してください。
*/

/*
  例題
*/
// 問題: 以下のようなオブジェクトを受け取り、nameとageを返す関数を作成してください
// 例): 引数: { name: '太郎', age: 20 }, 返り値: '太郎は20歳です'
// 回答例:
//   関数の定義

const getNameAndAge = (person) => {
  return person.name + "は" + person.age + "歳です";
};

//   関数の呼び出して結果をconsole.logする
const person = { name: "太郎", age: 20 }; // 引数には例の引数を使用してください。
console.log(getNameAndAge(person));

// 注意!!!
// 必ず、
// 1. 関数を定義
// 2. 引数となる定数を定義
// 3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
// の順番で記述してください。

// ===  TS ===========
// 型定義
type Person = { name: string; age: number; }
// 関数の定義
const getNameAndAgeTS = (person: Person) => { return person.name + 'は' + person.age + '歳です' }
// 関数の呼び出して結果をconsole.logする
const personTS: Person = { name: '太郎', age: 20 }
// 引数には例の引数を使用してください。
console.log(getNameAndAgeTS(personTS))
// ===  TS ===========
/*
  問題
*/

// 問題1: 引数として受け取った数値を2倍にして返す関数を作成して実行してください。
// 例) 引数: 2, 返り値: 4
const num: number = 2;
const doubledNum = (num: number) => {
  return num * 2;
};
console.log(doubledNum(num));

// 問題2: 最大値を返す関数を作成して実行してください。
// 例) 引数: 1, 3, 2, 5, 4, 返り値: 5
// ※ 引数の数は何個でも受け取れる様にしてください
// ※ Math.maxは使用しないでください
const numArray: number[] =  [1, 3, 2, 5, 4];
const function2 = (arg: number[]) => {
  let maxNum: number = -Infinity;
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] > maxNum) {
      maxNum = arg[i];
    }
  }
  return maxNum;
}
console.log(function2(numArray));

// 問題3: 配列を引数として受け取り、偶数のみを返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [2, 4, 6]
const numArray2: number[] = [1, 2, 3, 4, 5, 6];
const evenNum = (arry: number[]) => arry.filter((number: number) => number % 2 === 0);

console.log(evenNum(numArray2));

// const evenNum = numArray2.filter((number) => {
//   return number % 2 === 0;
// });

// 問題4: 配列内の重複を除去する関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 2, 4, 5, 6, 5, 6], 返り値: [1, 2, 3, 4, 5, 6]
const numArray3: number[] = [1, 2, 3, 2, 4, 5, 6, 5, 6];
const noDuplicate = (arry: number[]) =>
  arry.filter((number: number, index: number) => arry.indexOf(number) === index);
console.log(noDuplicate(numArray3));

// 問題5: テンプレートリテラルを使用して、引数で受け取った名前を元に「こんにちは、○○さん」と出力する関数を作成して実行してください。
// 例) 引数: '太郎', 出力: こんにちは、太郎さん
const hello = (name: string) => {
  console.log(`こんにちは、${name}さん`);
};
hello("太郎");

// 問題6: 配列を引数として受け取り、各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3], 返り値: [2, 4, 6]
const numArray4: number[] = [1, 2, 3];
const doubledNumArray = (arry: number[]) => arry.map((number: number) => number * 2);

console.log(doubledNumArray(numArray4));

// 問題7: 文字列の配列を受け取り、index番号を付けたオブジェクトを返す関数を作成して実行してください。
// 例) 引数: ['a', 'b', 'c'], 返り値: [{ index: 0, value: 'a' }, { index: 1, value: 'b' }, { index: 2, value: 'c' }]
// key名とvalue名が一緒の場合省略できる！！
const valueArray: string[] = ["a", "b", "c"];
const newArray = (arry: string[]) =>
  arry.map((value: string, index: number) => ({
    index,
    value
  }));
console.log(newArray(valueArray));

// 問題8: 名前と年齢オブジェクトの配列を受け取り、ageが第二引数で受け取った数字と一致するオブジェクトを返す関数を作成して実行してください。
// 例) 第一引数: [{ name: '太郎', age: 20 }, { name: '次郎', age: 30 }, { name: '三郎', age: 40 }]
//     第二引数: 30
//     返り値: { name: '次郎', age: 30 }
const nameAge: {name:string, age: number}[] = [
  { name: "太郎", age: 20 },
  { name: "次郎", age: 30 },
  { name: "三郎", age: 40 },
];
const thirty = (arry: {name:string, age: number}[] ) =>
  arry.filter((item:{ name: string, age: number }) => item.age === 30);
console.log(thirty(nameAge));

// 問題9: 数字の配列を引数として受け取り、偶数のみをフィルタリングし、その後各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [4, 8, 12]
const numArray5: number[] = [1, 2, 3, 4, 5, 6];
const evenDoubleNum = (arry: number[]) =>
  arry.filter((number: number) => number % 2 === 0).map((number:number) => number * 2);
console.log(evenDoubleNum(numArray5));

// 問題10: 数字の配列を引数として受け取り、各要素に10を足し、その後偶数のみをフィルタリングし、最後に要素を昇順にソートした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [12, 14, 16]
const numArray6: number[] = [1, 2, 3, 4, 5, 6];
const plusEvenSort = (arry: number[]) =>
  arry
    .map((number: number) => number + 10)
    .filter((number: number) => number % 2 === 0)
    .sort((a: number, b: number) => a - b);
console.log(plusEvenSort(numArray6));
