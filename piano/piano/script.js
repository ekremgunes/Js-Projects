const previous_btn = document.querySelector(".previous-btn");
const next_btn = document.querySelector(".next-btn");
const examples = document.querySelectorAll(".note-example");

previous_btn.addEventListener('click', (e) => {

    let example = document.querySelector(".active-example");
    let previous_example = example.previousElementSibling;

    if (previous_example == null) {
        previous_example = examples[examples.length - 1]
    }

    example.classList.remove("active-example");
    previous_example.classList.add("active-example");

})

next_btn.addEventListener('click', (e) => {
    let example = document.querySelector(".active-example");
    let next_example = example.nextElementSibling;
    if (next_example == null) {
        next_example = examples[0];
    }
   
    example.classList.remove("active-example");
    next_example.classList.add("active-example");


})


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
                    }, 110);
                }
            })

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
    }, 1500);

    console.log(error.message);
}
