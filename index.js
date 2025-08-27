function getElement(id){
    const element = document.getElementById(id)
    return element;
}

getElement('hotline-section-parent').addEventListener('click', function(e){
    if(e.target.className.includes('life-btn')){

        // count update start
        lifeCount = getElement('life-count-navbar').innerText
        const updateLifeCount = Number(lifeCount) +1;
        getElement('life-count-navbar').innerText = updateLifeCount
        // count update ends

    }
        // call button to show service name and number and coin count
     if(e.target.className.includes('call-btn')){
        callBtn = e.target
        nationalServiceName = callBtn.parentNode.parentNode.children[1].children[0].innerText
        nationalServiceNumber = callBtn.parentNode.parentNode.children[1].children[2].innerText
        

        

        
        const coinCount = getElement('coin-count-navbar').innerText
        const coinCountAfterCall = Number(coinCount) - 20;
        if(coinCountAfterCall < 20){
            alert('Insufficient coin')
            return;
        }
        alert(nationalServiceName +"\n"+ nationalServiceNumber)

        getElement('coin-count-navbar').innerText = coinCountAfterCall
        }



     }


)