let amoi = 1;
let rej = document.querySelector('#rejouer');
let col = document.querySelector('#collecte');
let som =0;
let scortot=0;
    document.querySelector('.player1').style.backgroundColor = 'lightgray';
    document.querySelector('#act1').style.width = '20px';
    document.querySelector('#act1').style.height = '20px'
    document.querySelector('#act1').style.borderRadius = '50%';
    document.querySelector('#act1').style.backgroundColor = 'red';
    document.querySelector('.player2').style.backgroundColor = 'white';
    document.querySelector('#act2').style.width = '0px';
    document.querySelector('#act2').style.height = '0px'
    document.querySelector('#act2').style.borderRadius = '50%';
    document.querySelector('#act2').style.backgroundColor = 'red';

rej.addEventListener('click', function(){
    let des = Math.ceil(Math.random()*6);
    document.querySelector('.image').innerHTML=`<img src="img/${des}.jpg" alt = "">`;
    if(amoi==1){
    let some= document.getElementById('somme1');
    //console.log(some);
    
    if(des == 1){
        document.getElementById('somme1').innerHTML = '0';
        amoi=2;
        document.querySelector('.player1').style.backgroundColor = 'white';
        document.querySelector('#act1').style.width = '0px';
        document.querySelector('#act1').style.height = '0px'
        document.querySelector('#act1').style.borderRadius = '50%';
        document.querySelector('#act1').style.backgroundColor = 'red';
        document.querySelector('.player2').style.backgroundColor = 'lightgray';
        document.querySelector('#act2').style.width = '20px';
        document.querySelector('#act2').style.height = '20px'
        document.querySelector('#act2').style.borderRadius = '50%';
        document.querySelector('#act2').style.backgroundColor = 'red';
    }
    else{
         som = parseInt(some.innerHTML);
         some.innerHTML = des + som;
    }
}
else{
    let some1= document.getElementById('somme2');
    if(des == 1){
        document.getElementById('somme2').innerHTML = '0';
        amoi=1;
        document.querySelector('.player2').style.backgroundColor = 'white';
    document.querySelector('#act2').style.width = '0px';
    document.querySelector('#act2').style.height = '0px'
    document.querySelector('#act2').style.borderRadius = '50%';
    document.querySelector('#act2').style.backgroundColor = 'red';
    document.querySelector('.player1').style.backgroundColor = 'lightgray';
    document.querySelector('#act1').style.width = '20px';
    document.querySelector('#act1').style.height = '20px'
    document.querySelector('#act1').style.borderRadius = '50%';
    document.querySelector('#act1').style.backgroundColor = 'red';
    }
    else{
         som = parseInt(some1.innerHTML);
         some1.innerHTML = des + som;
    }
}
});
col.addEventListener('click', function(){
if(amoi==1){
    document.querySelector('.player1').style.backgroundColor = 'white';
    document.querySelector('#act1').style.width = '0px';
    document.querySelector('#act1').style.height = '0px'
    document.querySelector('#act1').style.borderRadius = '50%';
    document.querySelector('#act1').style.backgroundColor = 'red';
    document.querySelector('.player2').style.backgroundColor = 'lightgray';
    document.querySelector('#act2').style.width = '20px';
    document.querySelector('#act2').style.height = '20px'
    document.querySelector('#act2').style.borderRadius = '50%';
    document.querySelector('#act2').style.backgroundColor = 'red';
    let player1 = document.querySelector('#scor1');
    let scorre =parseInt(document.getElementById('somme1').innerHTML);
    scortot = parseInt(player1.innerHTML)+ scorre;
    player1.innerHTML= scortot ;
    if(scortot>= 100){
        document.querySelector('.player1').innerHTML='WINNER!!!';
        document.querySelector('.player1').style.color ='red';
        rej.addEventListener('click', function(){
            confirm('vous voulez rejouer');
            if (confirm){
                des = Math.ceil(Math.random()*6);
                amoi=1;
                document.querySelector('.player1').style.backgroundColor = 'lightgray';
                document.querySelector('#act1').style.width = '20px';
                document.querySelector('#act1').style.height = '20px'
                document.querySelector('#act1').style.borderRadius = '50%';
                document.querySelector('#act1').style.backgroundColor = 'red';
                document.querySelector('.player2').style.backgroundColor = 'white';
                document.querySelector('#act2').style.width = '0px';
                document.querySelector('#act2').style.height = '0px'
                document.querySelector('#act2').style.borderRadius = '50%';
                document.querySelector('#act2').style.backgroundColor = 'red';
                document.getElementById('somme1').innerHTML = '0';
                document.getElementById('somme2').innerHTML = '0';
                player1.innerHTML='0';
                document.querySelector('.player2').innerHTML='0';
            }
        })
    }
    document.getElementById('somme1').innerHTML='0';
    amoi=2;
}
else{
    document.querySelector('.player2').style.backgroundColor = 'white';
    document.querySelector('#act2').style.width = '0px';
    document.querySelector('#act2').style.height = '0px'
    document.querySelector('#act2').style.borderRadius = '50%';
    document.querySelector('#act2').style.backgroundColor = 'red';
    document.querySelector('.player1').style.backgroundColor = 'lightgray';
    document.querySelector('#act1').style.width = '20px';
    document.querySelector('#act1').style.height = '20px'
    document.querySelector('#act1').style.borderRadius = '50%';
    document.querySelector('#act1').style.backgroundColor = 'red';
    let player2 = document.querySelector('#scor2'); 
    let scorre =parseInt(document.getElementById('somme2').innerHTML);
    scortot = parseInt(player2.innerHTML)+ scorre;
    player2.innerHTML= scortot ;
    if(scortot>= 100){
        document.querySelector('.player2').innerHTML='WINNER!!!';
        document.querySelector('.player2').style.color ='red';
        des = Math.ceil(Math.random()*6);
                amoi=1;
                document.querySelector('.player1').style.backgroundColor = 'lightgray';
                document.querySelector('#act1').style.width = '20px';
                document.querySelector('#act1').style.height = '20px'
                document.querySelector('#act1').style.borderRadius = '50%';
                document.querySelector('#act1').style.backgroundColor = 'red';
                document.querySelector('.player2').style.backgroundColor = 'white';
                document.querySelector('#act2').style.width = '0px';
                document.querySelector('#act2').style.height = '0px'
                document.querySelector('#act2').style.borderRadius = '50%';
                document.querySelector('#act2').style.backgroundColor = 'red';
                document.getElementById('somme1').innerHTML = '0';
                document.getElementById('somme2').innerHTML = '0';
                document.querySelector('.player1').innerHTML='0';
                player2.innerHTML='0';
    }
    document.getElementById('somme2').innerHTML='0';
    amoi=1;
}
});