const startBtn = document.querySelector('.btn-start')
const player_1 = document.querySelector('.player-1')
const player_2 = document.querySelector('.player-2')
const player_1_bar = document.querySelector('.bar-1')
const player_2_bar = document.querySelector('.bar-2')
const info_span = document.querySelector("#info-span")
const sound_div = document.querySelector(".sound-div")

// localStorage.clear();

if (localStorage.getItem('player_1_name') != null) {
    player_1.textContent = localStorage.getItem('player_1_name')
}
if (localStorage.getItem('player_2_name') != null) {
    player_2.textContent = localStorage.getItem('player_2_name')
}

function play() {

    //players width value
    let p1 = parseInt(getComputedStyle(player_1_bar).getPropertyValue("width").replace('px', ''));
    let p2 = parseInt(getComputedStyle(player_2_bar).getPropertyValue("width").replace('px', ''));

    const updateSituation = (p1, p2) => {
        player_2_bar.style.setProperty('--player2', p2 + 'px');
        player_1_bar.style.setProperty('--player1', p1 + 'px');

    }

    window.addEventListener('keyup', (e) => {
        let pressed_key = e.key.toLowerCase();//for CAPSLOCK
        if (pressed_key == 'f' || pressed_key == 'l') {

            if (pressed_key == 'f') {
                p2 -= 16
                p1 += 16
                //update situation
                updateSituation(p1, p2);

            } else if (pressed_key == 'l') {
                p1 -= 16
                p2 += 16
                //update situation
                updateSituation(p1, p2);

            }
        }

        if (p1 >= 320 || p2 >= 320) {

            sound_div.innerHTML = "";

            if (p1 > p2) {
                alert("WİNNER NUMBER 1!")
            }
            else {
                alert("WİNNER NUMBER 2 !")

            }
            //clear something
            p1 = 160;
            p2 = 160;
            updateSituation(p1, p2);
            location.reload();
            alert('İf you wanna new game click start !');
        }
    })
}

var i = 4
const counter = () => {

    sound_div.innerHTML = "<audio src='timer.mp3' loop   autoplay></audio>"
    const timer1 = setTimeout(() => {
        const timer2 = setInterval(() => {
            --i
            info_span.innerText = i
            if (i == 0) {
                info_span.textContent = " GO !"
                clearInterval(timer2)
                clearInterval(timer1)
                sound_div.innerHTML = "";
                sound_div.innerHTML = "<audio src='soundtrack.mp3' loop   autoplay></audio>";
                play();
                i = 4
            }
        }, 1000);

    }, 15);

}

startBtn.addEventListener('click', () => {
    var player_1_name = "";
    var player_2_name = "";

    if (localStorage.getItem('player_1_name') == null) {
        player_1_name = prompt('Player 1 name : ')
        if (player_1_name != "" && player_1_name != null) {
            localStorage.setItem('player_1_name', player_1_name);
            player_1.textContent = player_1_name
        }
    }
    if (localStorage.getItem('player_2_name') == null) {
        player_2_name = prompt('Player 2 name : ')
        if (player_2_name != "" && player_2_name != null) {
            localStorage.setItem('player_2_name', player_2_name);
            player_2.textContent = player_2_name
        }
    }

    startBtn.style.display ="none"
    counter();


})

