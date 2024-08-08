let nome = document.getElementById('nome')
let quantidade = document.querySelector('#quantidade')
let valor = document.querySelector('#preco')


document.querySelector('#btnCadastro')
    .addEventListener('click', function(event) {
        
        event.preventDefault()

        let inputs = [nome.value, quantidade.value, valor.value]

        let linha = document.createElement('tr')

/*    for(let i=0; i < inputs.length; i++) {
          console.log(inputs[i] )
        }
 */
/*        inputs.forEach(function(campo) {
          console.log(campo)
       })  */

       inputs.forEach(campo => {
          let celula = document.createElement('td')
          celula.textContent = campo
          linha.appendChild(celula)
       }) 
       let subTotal = parseFloat(inputs[1]) * parseFloat(inputs[2])
       let celula = document.createElement('td')
       celula.textContent = subTotal

       linha.appendChild(celula )

       document
           .querySelector('#tbodyItemPedido')
           .appendChild(linha )
      
       limpaFormulario();
          
      }) 

      function limpaFormulario() {
         nome.value = ''
         quantidade.value = ''
         valor.value = ''

         nome.focus()

      }

    


