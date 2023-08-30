function contar() {
    var inicio = document.getElementById('n1')
    var fim = document.getElementById('n2')
    var passo = document.getElementById('n3')
    var res = document.getElementById('res')

    if (inicio.value.length== 0 || fim.value.length== 0 || passo.value.length== 0) {
        alert('[ERRO] Preencha Todos os Dados!')
        res.innerHTML = 'Impossível Fazer a Contagem pois Faltam Dados!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Impossível Fazer a contagem! Considerando Passo 1')
            p = 1
        }

        // Contagem Crescente
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        //Contagem Regressiva               
        } else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }              
        }
     res.innerHTML += `\u{1F3C1}`
        
    }
}


