function contar() {
    var ini = document.getElementById('ni')
    var fim = document.getElementById('nf')
    var passo = document.getElementById('np')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar. Faltam Dados!'
    } else {
        res.innerHTML = 'Contando:<br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 ) {
            alert('Passo Inválido! Considerado Passo 1')
            p = 1
        }

        // Contagem Crescente
        if (i < f) {
            for(var c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        
        } else {
            // Contagem Regressiva
            for(var c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}