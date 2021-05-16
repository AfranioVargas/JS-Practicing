
    // OBJECT
    //criado um objeto com propriedade e valor

    // assignment or atribuição de valores
   name = 'Afranio Soares'

    // que tipo de dao foi colocado na variável?
   console.log(name)

   // Agrupamento de declarações
    //let age = 20
    //let isHuman = true

  let age, isHuma
   age = 42
   isHuman = true

  console.log(name, age, isHuman)

  const person = {
     name1: 'Afrânio Vargas',
     age1: 42,
     weight: 90.6
     //isAdmin: true
   }
    console.log(person.name1)
    console.log(person.age1)
    console.log(`${person.name1} tem ${person.age1} anos de idade`)
    

    //1. Declare uma variável de nome Weight
let weight

//2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*
3. Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    *age: Number (integer)
    *stars: Number (float) //números reais ou quebrados
    *isSubscribed: Booleal // Subscribed significa que a pessoa esta inscrita em alguma coisa
*/

//let name = "Afrânio"
//let age = 42,
//let stars = 4.8,
//let isSubscribed = true,

//4. A variável abaixo é de que tipo de dado?
// let student = {}; //Variáve é do tipo objeto

//4.1 Atribua a esta variável as mesmas propriedades do exercício 3 e as declare no console.
const student = {
    name: "Afrânio",
    age: 42,
    weight: 90,
    isSubscribed: true,
};
console.log(student)

//4.2 Mostre no console a seguinte mensagem:
    // <name> de idade <age> pesa <weight> kg

   // Atenção, substitua <name> <age> e <weight> pelos valores de cad propriedade do objeto

console.log(`${student.name} de idade ${student.age} anos, pesa ${student.weight} kg.`)

//5. Declare uma variável do tipo Array, de nome students e não atribua a ela nenhum valor, ou seja, somente o Array vazio
//let students = [];

//6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o obejto craido e inserir ele no Array)
let students = [
    student
]
console.log(students)

//7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])

//8. Crie um novo student e coloque na posição 1 do Array students
const Ernandes = {
    name: "Ernandes",
    age: 76,
    weight: 60,
    isSubscribed: true,
    }
    students = [
        student,
        Ernandes,
    ]
console.log(students)

//9. Sem rodar o código responda qual é a respost do código abaixo e por que? Após a sua resposta, rode o código e veja se você acertou
   //console.log(a)
   // var a = 1
   console.log(a)
   var a = 1 //resposta: vai imprimir no consolo um undefined por que embora a var a sofra o hoisting ela ainda não esta criada antes da execução do console.log(a)