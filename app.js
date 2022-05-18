let adviceID = document.querySelector('.advice2')
let mainText = document.querySelector('.main-text2')
let dice = document.querySelector('.dice')
dice.addEventListener('click',async () =>{
    
    const fullurl='https://api.adviceslip.com/advice'
    let callback = await fetch(fullurl);
    let data = await callback.json();
   
adviceID.innerHTML=`Advice #${data.slip.id}`
mainText.innerHTML=`"${data.slip.advice}"`
console.log(fullurl);
})
