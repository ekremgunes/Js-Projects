
try {

    const lights = document.querySelectorAll(".light");
    const audio = document.querySelector("audio");

    const play_note = (key) => {
        audio.src = "notes/" + key + ".mp3";
    }


    window.addEventListener('keydown', (e) => {
        let pressed_key = e.key;

        if (parseInt(pressed_key) !== NaN) {

            lights.forEach(item => {
                if (item.textContent.includes(pressed_key)) {
                    item.classList.add("active-note");
                    setTimeout(() => {
                        item.classList.remove("active-note");
                    }, 150);
                }
            });

            switch (pressed_key) {
                case "0":
                    play_note(pressed_key)

                    break;
                case "1":
                    play_note(pressed_key)


                    break;
                case "2":
                    play_note(pressed_key)


                    break;
                case "3":
                    play_note(pressed_key)

                    break;
                case "4":
                    play_note(pressed_key)

                    break;
                case "5":
                    play_note(pressed_key)

                    break;
                case "6":
                    play_note(pressed_key)

                    break;
                case "7":
                    play_note(pressed_key)

                    break;
                case "8":
                    play_note(pressed_key)

                    break;
                case "9":
                    play_note(pressed_key)

                    break;

                default:

                    break;
            }
        }

    });
} catch (error) {
    setTimeout(() => {
        alert("ERROR :(");
    }, 700);
    
    console.log(error.message);
}
