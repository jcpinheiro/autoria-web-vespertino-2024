let nome = document.getElementById('nome')
let quantidade = document.querySelector('#quantidade')
let valor = document.querySelector('#preco')


document.querySelector('#btnCadastro')
    .addEventListener('click', function(event) {
        
        event.preventDefault()

        console.log(nome.value)
        console.log(quantidade.value )
        console.log(valor.value)

      }) 

    


