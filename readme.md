# Estudo de Javascript ES6

## Arrays

### Map 
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array com o resultado do processamento da função

    const arr = [1,3, 4, 5, 8, 9];   
    const newArr = arr.map(function(item, index){
      return item + index;
    });	
	console.log(newArr);

### Reduce
O método reduce() executa uma função reducer para cada membro do array, resultando em um UNICO valor de retorno.

    const arr = [1,3, 4, 5, 8, 9];
    const sum = arr.reduce(function(total, next){
       return total + next;
    });    
    console.log(sum);
	
### Filter
O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

     const arr = [1,3, 4, 5, 8, 9];
     const filter = arr.filter(function(item){
       return item % 2 === 0;
    });    
    console.log(filter);

### Find
O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

     const arr = [1,3, 4, 5, 8, 9];
     const find = arr.find(function(item){
      return item ===4;
    });    
    console.log(find);
    
## Desestruturação

    const newArr = arr.map(function(item){
       return item * 2;
    });

**Otimização 1  - Transformando em função Anônima**

        const newArr = arr.map((item) => {
           return item * 2;
        });

**Otimização 2 **

    const newArr = arr.map(item => {
       return item * 2;
    });

**Otimização 3 - Transformando todo codigo em uma linha**
Valido para funções que não tem escopo maior que duas linhas

    const newArr = arr.map(item => item * 2);

**Exemplo de função de retorno**

      function teste(){
          return "algo";
        }

Otimização 1 - retornando a função por uma const

    const teste = ( ) => {
       return 'teste';
    }

**Retornando uma String**

    const teste = ( ) => 'teste';

**Retornando um array **

    const teste = ( ) = [1,2,3,4];

**Retornando um número**

    const teste = ( ) = 3;

**Retornando um objeto - Deve ser passado entre parenteses nesse caso**

    const teste = () => ({nome: 'Euller'});
