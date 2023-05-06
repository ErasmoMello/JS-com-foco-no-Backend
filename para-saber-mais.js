// função sem retorno, sem parâmetro

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()


// função sem retorno, com parâmetro

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')


// função com retorno, sem parâmetro   

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


   // função matemática com return, mais de um parâmetro

   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
   }
   
   console.log(operacaoMatematica(15, 30, 45)) // 90