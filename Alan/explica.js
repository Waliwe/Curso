
//dá pra atribuir varias variaveis ao mesmo tempo, porém não é recomendado
let x,y,z;


// a função let serve para atribuir uma variavel com o propósito de poder mudar de valor
//no futuro,  agora a função const, não permite ser alterada
const valorIngresso = 20;
//não dá pra trocar ⬇️
//valorIngresso = 30;
console.log(valorIngresso)


let nome = 'Alan'; //string literal
let idade = 16; //number literal
let Aprovado = true //bool - variavel boleana
let sobrenome ; //undefined
let colorSelecionada = null; //redefinir valor, valor nulo



//fazer com que o 'nome' vire um objeto,
let pessoas = { 
//chave⬇️
    nome: 'Alan',
          //⬆️identificador
          
    idade: 16,
    Aprovado: true,
    colorSelecionada:'De souza',
};
console.log(pessoas)
//no console, TYPEOF mostra o tipo da variavel que tu quer
//EX typeof idade



//array - conjunto de dados
let familia = [
    26,46,'Alan',50,17,true,
]

console.log(familia);
console.log(familia[2])
console.log(familia.length)//length serve para ver o tamanho

//para nomear uma função, tem que colocar um verbo + substantivo
let corSite = "azul"

function resetaCor(){
    corSite = ""
}
console.log(corSite)
resetaCor();
console.log(corSite)
//tem uma função chamada reseta cor, que quando chamada, ela muda de cor no console



//agora com paremetro
//meio que ele quando chamada tem que ter uma cor para chamar a função, que colocando a cor
//ela vira a cor que nem o exemplo
//dá pra colocar mais de um parametro
let OutraCor = "vermelho"

function MudarCor(cor){
    OutraCor = cor
}

console.log(OutraCor)
MudarCor("azul");
console.log(OutraCor)



//existem dois tipos de função
//uma delas realiza uma tarefa, mas não retorna nada

function dizerNome(){
    console.log('Alan')
}
dizerNome();


//e essa retorna algo
function MultiplicarPorDois (valor){
    return valor * 2;
}

// console.log(MultiplicarPorDois(5))

let resultado = MultiplicarPorDois(5);

console.log(resultado)




//operadores Aritiméticos(matematicos)

let salario = 100;

// + (mais) -(menos) * (vezes) / (dividir) ** (expoentes)

console.log(salario + salario)
console.log(salario - salario)
console.log(salario / salario)
console.log(salario * salario)
console.log(5 ** 5)

// ++ ou - -

let idade1 = 18;
console.log(idade1++)//na nova linha ele adiciona 
console.log(idade1)//mostra o resultado atualizado == 19
console.log(++idade1)// mostra o resultado atualizado ja no momento==> 20
//mesma coisa com o menos -- 
console.log(idade1--)
console.log(idade1)
console.log(--idade1)


//Operadores de Atribuição


let valorTeclado = 100;
//valorTeclado = valorTeclado + valorTeclado
valorTeclado += valorTeclado;
console.log("O valor do teclado é de " + valorTeclado + " Pila")
valorTeclado -= valorTeclado;
console.log("o valor do teclado agora é de " + valorTeclado + " Pila")



//operador de igualdade

//igualdade restrita
console.log(1 ===1);
console.log( '1' === 1);//string e number

//igualdade solta
console.log(1 == 1);
console.log('1' == 1);//compara apenas o valores não o tipo


//Operadores de comparação
//Operadores  lógicos
//Operadores Bitwide