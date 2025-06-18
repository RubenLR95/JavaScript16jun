//LLAMAMOS AL HTML

document.getElementById('btn').addEventListener('click',()=>{
    const option = Number(document.getElementById('opt').value);
    let fruta;
    let imgSrc = '';
    //SEGÚN EL NÚMERO ASIGNAAMOS UNA FRUTA

    switch(option){
        case 1:
            fruta = "Melocotón";
            imgSrc = 'melocoton.jpeg';
            break;
        case 2:
            fruta = "Papaya";
            imgSrc = '/images/papaya.jpeg';
            break;
        case 3:
            fruta = "Chirimoya";
            imgSrc = '/images/chirimoya.jpeg';
            break;
        default:
            fruta = "Opción inválida";
            

    }

    document.getElementById('out2').textContent = fruta;
    document.getElementById('fruitimage').src = imgSrc;

});