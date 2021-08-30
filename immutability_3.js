const person = {
  name: "Mandy",
  height: 1.66,
  city: "Taiba",
  state: "Ceará",
};

/*** atribuição por referência ***/
// as duas constantes apontam para o mesmo objeto mutável na memória
const newPerson = person;
newPerson.name = "Amanda";
console.log(person); // { name: 'Amanda', height: 1.66, city: 'Taiba', state: 'Ceará' }

/*** passar por referência (função impura!) ***/
// fez um clone apenas no primeiro nível dos atributos
function changePerson(person) {
  const newPerson = { ...person };
  person.name = "Galadriel";
  person.country = "Arda";

  return newPerson;
}

const personNotChanged = changePerson(person);
console.log(person); // { name: 'Galadriel', height: 1.66, city: 'Taiba', state: 'Ceará', country: 'Arda' }
console.log(personNotChanged); // { name: 'Amanda', height: 1.66, city: 'Taiba', state: 'Ceará' }

/*** atribuição por valor ***/
let a = 3;
let b = a; // cópia!

a++;
b--;
console.log(a, b); // 4, 2

// boa prática: object.freeze
