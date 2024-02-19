 
// const seatPrice = 550;
// const seats = document.querySelectorAll('.seats');
// const totalPriceLabel = document.getElementById('total-price-label');
// const totalPriceValue = document.getElementById('total-price-value');
// let selectedSeats = new Set();

// Add event listener to each seat
// seats.forEach((seat) => {
//     seat.addEventListener('click', () => {
//         if (selectedSeats.size < 4) {
//             if (selectedSeats.has(seat)) {
//                 // If the seat is already selected, remove it from the set
//                 selectedSeats.delete(seat);
//                 seat.classList.remove('selected');
//             } else {
//                 // If the seat is not selected, add it to the set
//                 selectedSeats.add(seat);
//                 seat.classList.add('selected');
//             }
//         } else {
//             alert('You can only select up to 4 seats.');
//         }

//         // Calculate and display the total price
//         const totalPrice = Array.from(selectedSeats).reduce((acc, seat) => acc + seatPrice, 0);
//         totalPriceValue.textContent = `${totalPrice} BDT`;
//     });
// });
 


const seatPrice = 550;
const seats = document.querySelectorAll('.seats');
const totalPriceLabel = document.getElementById('total-price-label');
const totalPriceValue = document.getElementById('total-price-value');
let selectedSeats = new Set();
const sitlist = document.getElementById('selected-seats-sidebar')


// Add event listener to each seat
seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        if (selectedSeats.size < 8) {
            if (selectedSeats.has(seat)) {
                // If the seat is already selected, remove it from the set and revert the color
                selectedSeats.delete(seat);
                seat.classList.remove('bg-[#1DD100]');
              
            } else {
                // If the seat is not selected, add it to the set and change the color
                selectedSeats.add(seat);
                seat.classList.add('bg-[#1DD100]');
            }
        } else {
            alert('You can only select up to 8 seats.');
        }

        // Calculate and display the total price
        const totalPrice = Array.from(selectedSeats).reduce((acc, seat) => acc + seatPrice, 0);
        totalPriceValue.textContent = `${totalPrice} BDT`;
    });
});

function NextPage() {
    const homeScreen = document.getElementById('home');
    const LastPage = document.getElementById('lastPage')
    homeScreen.classList.add('hidden')
    LastPage.classList.remove('hidden')
}

function EndPage() {
    const homeScreen = document.getElementById('home');
    const LastPage = document.getElementById('lastPage')
    homeScreen.classList.remove('hidden')
    LastPage.classList.add('hidden')
}