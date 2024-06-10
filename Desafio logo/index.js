console.log("digite o nome do seu jogador")
  //
  let nickname = "Honara"

console.log("quantidade de experiencia")
//
let xp = 7552


let nivel
if(xp <= 1000){
    nivel= "Ferro"
}
    else if(xp >=1001 && xp <=2000){
        nivel = "Bronze"
    }
else if(xp >=2001 && xp <=5000){
 nivel = "prata"
}
else if(xp >=6001 && xp <=7000){
    nivel = "ouro"

}
else if(xp >=7001 && xp <=8000){
    nivel = "platina"
}
else if(xp >=8001 && xp <=9000){
    nivel = "ascendente"

 }else if(xp >=9001 && xp <=10000)
        nivel ="imortal"

else{
    nivel = "radiante";
}

console.log(`o heroi do nome ${nickname} esta no nivel de ${nivel}`)