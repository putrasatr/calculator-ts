type BasicCountType = "+" | "-" | "*" | "/";

type AddFunc = (event: ScientCalc) => number;
type NumParamProps = number[];

interface CalcProps {
  x: number | 0;
}
interface PowProps {
  n?: number | 0;
  x: number;
}
class Calculator {
  x: number;
  constructor(x: number) {
    this.x = x;
  }
  countLoop = (sym: BasicCountType, ...n: NumParamProps) => {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
      result = result ? eval(`result ${sym} n[i]`) : n[i];
    }
    this.x = eval(`${this.x}${sym}${result}`);
    return this.x;
  };
  add(...n: NumParamProps) {
    return this.countLoop("+", ...n);
  }
  subtract(...n: NumParamProps) {
    return this.countLoop("-", ...n);
  }
  multiple(...n: NumParamProps) {
    return this.countLoop("*", ...n);
  }
  divide(...n: NumParamProps) {
    return this.countLoop("/", ...n);
  }
  result() {
    console.log(this.x);
    return this.x;
  }
}
class ScientCalc extends Calculator {
  pi: number;
  constructor(x: number, pi = 22 / 7) {
    super(x);
    this.pi = pi;
  }
  sqrt(n: number) {
    return n * n;
  }
  pow(props: PowProps = { n: 0, x: 1 }) {
    const x = props.x || 1;
    const num = props.n || this.x;
    let result = 1;
    for (let i = 0; i < x; i++) {
      result = result * num;
    }
    this.x = result;
    return this.x;
  }
  typing(props: { line: string; prev: BasicCountType }) {
    try {
      this.x = Number(eval(this.x + props.prev + props.line));
      return this.x;
    } catch (error) {
      return "Inputan tidak valid";
    }
  }
}
// const getCalculator = new ScientCalc(2);
// console.log("Hasil Tambah =", getCalculator.add(1, 1, 20, 1));
// console.log("Hasil Kurang =", getCalculator.subtract(23));
// console.log("Hasil Kali =", getCalculator.multiple(2, 2));
// console.log("Hasil Bagi =", getCalculator.divide(25, 5));
// console.log(
//   "Hasil Ketik =",
//   getCalculator.typing({
//     line: "(23-20)*2",
//     prev: "*",
//   })
// );
// console.log("Hasil pangkat dua =", getCalculator.sqrt(3));
// console.log("Hasil pangkat =", getCalculator.pow({ x: 2, n: 100 }));

// const secondCalc = new ScientCalc(0);

// secondCalc.add(3);
// secondCalc.pow({ x: 1 });
// secondCalc.result();
