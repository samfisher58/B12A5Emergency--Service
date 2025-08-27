function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

getElement("hotline-section-parent").addEventListener("click", function (e) {
  if (e.target.className.includes("life-btn")) {
    // count update start
    lifeCount = getElement("life-count-navbar").innerText;
    const updateLifeCount = Number(lifeCount) + 1;
    getElement("life-count-navbar").innerText = updateLifeCount;
    // count update ends
  }
  // call button to show service name and number and coin count
  if (e.target.className.includes("call-btn")) {
    callBtn = e.target;
    nationalServiceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    nationalServiceNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    const coinCount = getElement("coin-count-navbar").innerText;
    const coinCountAfterCall = Number(coinCount) - 20;
    if (coinCountAfterCall < 20) {
      alert("Insufficient coin");
      return;
    }
    getElement("coin-count-navbar").innerText = coinCountAfterCall;
    alert(nationalServiceName + "\n" + nationalServiceNumber);

     const historySectionParent = getElement('history-section-container')

      const date = new Date().toLocaleTimeString()

      const newHistory = document.createElement('div')
      newHistory.innerHTML = `
      <div class="flex items-center justify-between my-6 mt-4 p-4"> 
          <div>
            <h3 class="text-lg font-bold">${nationalServiceName}</h3>
            <p class="text-lg text-[#5C5C5C]">${nationalServiceNumber}</p>
          </div>
          <p class="text-lg text-black">${date}</p>
        </div>
      `;

      historySectionParent.append(newHistory);
      //call history clear part starts
    getElement('clear-btn').addEventListener('click', function(){
        const historyContainer = getElement('history-section-container')
        historyContainer.innerHTML = ''

    })
    //call history clear part ends
  }
  // call button to show service name and number + coin count ends

    //copy functionality starts
  if (e.target.className.includes("copy-btn")) {
    const copyBtn = e.target;
    nationalServiceNumber =
      copyBtn.parentNode.parentNode.children[1].children[2].innerText;
    navigator.clipboard.writeText(nationalServiceNumber).then(() => {
      alert("Number Copied\n" + nationalServiceNumber);
    });
    const copyCount = getElement("copy-count-navbar").innerText;
    const updateCopyCount = Number(copyCount) + 1;
    getElement("copy-count-navbar").innerText = updateCopyCount;
  }
    //copy functionality ends

    


});
