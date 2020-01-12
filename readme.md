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
    
## Arrow Function

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

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

**Otimização 1 - retornando a função por uma const**

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
    
 
## Valores padrões para funções

    function soma(a=3,b=6){
      return a + b;
    }
    soma(1);
    soma();

**Utlizando Arrow Functions  (Simplificando =D )**

    const soma = (a=3, b=6) => a + b
    soma(1);
    soma();

## Desestruturação

A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

Exemplo sem a utilização de desestruturação.

    const usuario = {
      nome: 'Euller',
      idade: 36, 
      endereco: {
        cidade: 'Belo Horizonte', 
        estado: 'MG'
      }
    };
    
    const nome = usuario.nome;
    const idade = usuario.idade;
    const cidade = usuario.endereco.cidade;

**Refatorando**

    const { nome , idade, endereco: { cidade } } = usuario;

**Utilizando em funções**

    function mostraDados({nome, idade}){
      console.log(nome, idade);
    }
    
    mostraDados(usuario);

## REST Operator

    const usuario = {
      nome: 'Euller',
      idade: 23,
      empresa: 'Google'
    }
    
    const {nome, ...resto} = usuario;  
	console.log(nome, resto);
    return // 'Euller', {idade: 23, empresa: "Google"}
    


    const array = [1,2,3,4];
    
    const [a, b, ...c] = array;
    
    console.log(a);
    console.log(b);
    console.log(c);
	return //1, 2 , [3, 4]

**Utilizando funções**

    function soma(...params){
      return params.reduce((total,next)=>total+next);
    }
    
    function soma2(a, b,...params){
      return params;
    }

## Spread Operator

    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);
    return // [1,2,3,4, 5, 6];

Cria um novo objeto com base nos dados do objeto 1, mudando apenas o nome

        const usuario1 = {
          nome: 'Renato',
          idade: 22, 
          empresa: 'Facebook'
        };
        const usuario2 = {...usuario1, nome: 'Gabriel'};
      console.log(usuario2);  
      
# Template Literals

Template literals são literais string que permitem expressões embutidas. Você pode usar string multi-linhas e interpolação de string com elas.

    const nome = "Euller";
    const idade = 36;

**Exemplo sem template literals**

    console.log('Meu nome é ' + nome + ' e tenho' + idade + ' anos');

**Usando template literals, abre e fecha com ` e utiliza ${var}**

    console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

# Object Short  Syntax

Sintaxe curta de objetos

    const nome = "Euller";
    const idade = 23;
    
**Sem short syntax**

    const usuario = {
      nome: nome, 
      idade: idade, 
      empresa: 'Google'
    }

**Com ES6**

    const usuario = {
      nome, 
      idade, 
      empresa: 'Google'
    }
# Programação Assincrona

    const minhaPromisse = () => new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve('OK')},2000);
    });
    
    async function executaPromise(){
      console.log(await minhaPromisse());
      console.log(await minhaPromisse());
      console.log(await minhaPromisse());  
    }
    
    const executaPromise = async () => {
      console.log(await minhaPromisse());
      console.log(await minhaPromisse());
      console.log(await minhaPromisse());
    }
    
    executaPromise();
