// importar json
//const dados = require('./data/data');


function filterByStatus(personagens, status) {
  return personagens.filter(personagem => personagem.status === status);
}

module.exports = {
  filterByStatus
};