function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var numano = document.querySelector('input#ano')
    var idade = ano - numano.value
    var sexmasc = document.querySelector('input#sexmasc')
    var sexfem = document.querySelector('input#sexfem')
    res = document.querySelector('p#res')
    img = document.createElement('img')
    /*img.setAttribute('id', 'foto')*/
    if (numano.value.length == 0 || numano.value > ano) {
        alert('Coloque um ano valido ne caralho')
    } else if (sexmasc.checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 10) {
            img.setAttribute('src', 'foto-bebe-m.png')
        }else if(idade >=11 && idade <=24){
            img.setAttribute('src','foto-jovem-m.png')
        }
        else if (idade >=25 && idade <=53){
            img.setAttribute('src','foto-adulto-m.png')
        }else{
            img.setAttribute('src','foto-idoso-m.png')
        }
    } else{
        genero = 'Mulher'
        if(idade>=0 && idade<=10){
            img.setAttribute('src','foto-bebe-f.png')
        }else if (idade>=11 && idade<=24){
            img.setAttribute('src', 'foto-jovem-f.png')
        }else if (idade >=25 &&idade <= 53){
            img.setAttribute('src', 'foto-adulto-f.png')
        }else{
            img.setAttribute('src','foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}