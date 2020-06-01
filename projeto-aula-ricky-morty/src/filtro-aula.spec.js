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

  describe("Sexo", () => {
    it("Retorna somente os homens", () => {
      const response = filtro.filterByGender(data.results,"Male");
      expect(response.length).toBe(15);
    });

    it("Retorna somente as mulheres", () => {
      const response = filtro.filterByGender(data.results,"Female");
      expect(response.length).toBe(4);
    });

  });

  describe("Episódios", () => {
    it("Retorna episode 6 da url", () => {
      const url = "https://rickandmortyapi.com/api/episode/6";
      expect(filtro.getEpisodeFromURL(url)).toBe("6");
    });

    it("Retorna um array de numeros dos episódios", () => {
      const personagem = data.results[6];
      const ricky = data.results[0];
      const episodes = {
        '10': [ricky],
        '11': [ricky],
      };
      //expect(personagem.name).toBe("Abradolf Lincler");
      const response = filtro.mapCharacterToEpisodes(episodes,personagem);
      expect(response['10'].length).toBe(2);
      expect(response['10'][1].name).toBe(personagem.name);
    });

    it("Retorna somente Morty", () => {
      const response = filtro.filterByEpisode(data.results,'1');
      expect(response.length).toBe(2);
      expect(response[1].name).toBe("Morty Smith");
    });
  });
});