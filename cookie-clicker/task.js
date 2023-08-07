const cookie = document.getElementById('cookie');
const speed = document.getElementById('clicker__speed');
const i = document.getElementById('clicker__counter');
let time1 = Date.now();

cookie.onclick = () => {
    i.textContent++;

    let time2 = Date.now();
    speed.textContent = (1 / (time2-time1) * 1000).toFixed(2);
    time1 = time2;

    if (i.textContent % 2 != 0) {
        cookie.width += 10;
        cookie.height += 10;
    } else {
        cookie.width -= 10;
        cookie.height -= 10;
    }
    console.log(i);
}