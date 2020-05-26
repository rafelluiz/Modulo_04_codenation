const filtro = require('./filtro-aula');

// Importar o json
const data = require('./data/data.json');


describe("Filtro",() => {
  describe("Status", () => {
    it("Retorna somente os vivos", () => {
      const response = filtro.filterByStatus(data.results, "Alive");
      expect(response.length).toBe(8);
    });

    it("Retorna somente os mortos", () => {
      const response = filtro.filterByStatus(data.results, "Dead");
      expect(response.length).toBe(6);
    });

    it("Retorna somente os desconhecidos", () => {
      const response = filtro.filterByStatus(data.results, "unknown");
      expect(response.length).toBe(6);
    })

  });

});