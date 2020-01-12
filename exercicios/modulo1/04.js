//A partir do seguinte objeto:

const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
 };
 
 const {nome, endereco: {cidade, estado}} = empresa;
 
 //Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
 //fim deve ser possível fazer o seguinte:
 console.log(nome); // Rocketseat
 console.log(cidade); // Rio do Sul
 console.log(estado); // SC
 
 //4.2 Desestruturação em parâmetros
 //Na seguinte função:
 
 function mostraInfo({nome , idade }) {
  return `${nome} tem ${idade} anos.`;
 }
 console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
 