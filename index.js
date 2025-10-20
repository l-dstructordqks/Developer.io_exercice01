const coin = document.querySelector(".coin");
const result = document.querySelector(".result");
//const button = 
//coin.onclick = flipCoin;
function flipCoin(e) {
    coin.classList.remove('flip-coin');
    let boolean = Math.floor(Math.random() * 2);
    setTimeout(() => {
        coin.classList.add('flip-coin')
    }, 30);
    if(boolean === 1) {
        coin.src = "resources/tails.svg";
        result.textContent = "Tails"
    } else {
        coin.src = "resources/heads.svg";
        result.textContent = "Heads"
    }
}