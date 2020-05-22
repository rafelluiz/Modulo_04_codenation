const calculadora = require("./calc");

describe("Calculadora",() => {
  it('teste exemplo', () =>{
    const numero1 = 23;
    const numero2 = 7;
    expect(23+7).toBe(30);
    expect(27+7).not.toBe(31);
  });

  describe("Soma", () => {
    it("Retorna 3 quando 2 somado com 1", () =>{
      const num1 = 2;
      const num2 = 1;
      expect(calculadora.soma(num1,num2)).toBe(3)
    })
  });

  describe("Subtração", () => {
    it("Retorna 1 quando 1 subtraido de 2", () =>{
      const num1 = 2;
      const num2 = 1;
      expect(calculadora.subtracao(num1,num2)).toBe(1)
    })
  });

  describe("Multiplicaçao", () => {
    it("Retorna 6 quando 3 multiplicado por 2", () =>{
      const num1 = 3;
      const num2 = 2;
      expect(calculadora.multiplicacao(num1,num2)).toBe(6)
    })
  });

  describe("Divisão", () => {
    it("Retorna 2 quando 4 dividido por 2", () =>{
      const num1 = 4;
      const num2 = 2;
      expect(calculadora.divisao(num1,num2)).toBe(2)
    });

    it("Retorna 0 se dividido por zero", () =>{
      const num1 = 4;
      const num2 = 0;
      expect(calculadora.divisao(num1,num2)).toBe("Erro, não pode dividir por 0")
    });
  });
});