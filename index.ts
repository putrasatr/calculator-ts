type BasicCountType = "+" | "-" | "*" | "/";

type AddFunc = (event: ScientCalc) => number;
type NumParamProps = number[];

interface CalcProps {
  x?: number;
}
interface PowProps {
  n: number;
  powNum: number;
  countPreviousNumber: BasicCountType;
}
class Calculator {
  x: number;
  constructor(x: number) {
    this.x = x;
  }
  countLoop = (
    sym: BasicCountType,
    countWithX: Boolean,
    ...n: NumParamProps
  ) => {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
      result = result ? eval(`result ${sym} n[i]`) : n[i];
    }
    this.x = countWithX ? eval(`${this.x}${sym}${result}`) : result;
    return this.x;
  };
  add(...n: NumParamProps) {
    return this.countLoop("+", true, ...n);
  }
  subtract(...n: NumParamProps) {
    return this.countLoop("-", true, ...n);
  }
  multiple(withX: Boolean, ...n: NumParamProps) {
    return this.countLoop("*", withX, ...n);
  }
  divide(...n: NumParamProps) {
    return this.countLoop("/", true, ...n);
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
  pow(props: PowProps) {
    const powNum = props.powNum || 1;
    let value = [];
    for (let i = 0; i < powNum; i++) {
      value.push(props.n);
    }
    return Number(
      eval(
        `${this.x}${props.countPreviousNumber}${super.multiple(
          false,
          ...value
        )}`
      )
    );
  }
  typing(props: { line: string; prev: BasicCountType }) {
    try {
      return Number(eval(this.x + props.prev + props.line));
    } catch (error) {
      return "Inputan tidak valid";
    }
  }
}
const getCalculator = new ScientCalc(2);
console.log("Hasil Tambah =", getCalculator.add(1, 1, 20, 1));
console.log("Hasil Kurang =", getCalculator.subtract(23));
console.log("Hasil Kali =", getCalculator.multiple(true, 2, 2));
console.log("Hasil Bagi =", getCalculator.divide(25, 5));
console.log(
  "Hasil Ketik =",
  getCalculator.typing({
    line: "(23-20)*2",
    prev: "*",
  })
);
console.log("Hasil pangkat dua =", getCalculator.sqrt(3));
console.log(
  "Hasil pangkat =",
  getCalculator.pow({ n: 2, powNum: 3, countPreviousNumber: "-" })
);
