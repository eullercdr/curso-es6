const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const arrIdades = usuarios.map(user=>user.idade);
console.log(arrIdades); //23, 15, 30

const maior18 = usuarios.filter(user=>user.idade>18 && user.empresa==='Rocketseat');
console.log(maior18);

const trabalhaGoogle = usuarios.find(user=>user.empresa==='Google');
console.log(trabalhaGoogle);

const calculo = usuarios
.map(user=>({...user, idade: user.idade*2}))
.filter(user=>user.idade<50);
console.log(calculo);