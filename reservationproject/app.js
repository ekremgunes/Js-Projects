const container= document.querySelector(".container");
const movie = document.getElementById("movie");// select > option
const fee = document.getElementById("fee");
const count = document.getElementById("count");
const seats = document.querySelectorAll(".seat");

getfromLS();
calculateTotalFee();

container.addEventListener("click",function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotalFee();
    }
});

movie.addEventListener("change",function(e) {
    calculateTotalFee();
});


function calculateTotalFee() {
    const selectedSeats = document.querySelectorAll(".seat.selected");

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) {
        selectedSeatsArr.push(seat);
        
    });

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    //oturulan koltuk numaralarını alma
    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    });

    count.textContent = selectedSeats.length;
    fee.textContent = movie.value * selectedSeats.length;

    saveToLocalStorage(selectedSeatIndexs);
}

function getfromLS(){
    let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !=null && selectedSeats.length > 0) {
                seats.forEach(function(seat, index) {
                    if (selectedSeats.indexOf(index) > -1) {
                        seat.classList.add('selected');
                    }
                });
            }
        
        
        
        const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
        
        if (selectedMovieIndex != null) {
            movie.selectedIndex = selectedMovieIndex;
        }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));//seçili koltukların eklenmesi 
    localStorage.setItem('selectedMovieIndex', movie.selectedIndex);//seçilen filmin ls'ye kaydedilmesi
}
