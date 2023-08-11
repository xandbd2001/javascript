function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO!] Verifique seus dados e tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'imagens/bebe-h.png') 
            } else if (idade < 21) {
                //jovem]
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/velho-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/velho-m.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}