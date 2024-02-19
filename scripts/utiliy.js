// const seat = document.getElementById('totalseat')
// const seatText = seat.innerText
// const seatLive = parseInt(seatText)

// seat.addEventListener()
const seatsLeftValue = document.getElementById('seats-left-value');

function updateSeatsLeft() {
    const seatsLeft = 40 - selectedSeats.size;
    seatsLeftValue.textContent = seatsLeft;
}

// Call the function to update the seats left value initially
updateSeatsLeft();

// Add the function call to the seat click event listener
seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        // ... (existing code)

        // Update the seats left value
        updateSeatsLeft();
    });
});

const couponCode = document.getElementById('coupon-code');
const applyCoupon = document.getElementById('apply-coupon');
const grandTotalPriceValue = document.getElementById('grand-total-price-value');

// Function to apply the coupon code and update the grand total price
function applyCouponCode() {
    const coupon = couponCode.value.trim();

    // Check if the coupon code is a valid percentage off value
    const percentageOff = parseInt(coupon, 10);
    if (!isNaN(percentageOff) && (percentageOff === 15 || percentageOff === 20)) {
        const discountedPrice = totalPrice * (1 - percentageOff / 100);
        grandTotalPriceValue.textContent = `${discountedPrice} BDT`;
    } else {
        alert('Invalid coupon code. Please enter a valid coupon code.');
    }
}

// Add event listener to the apply coupon button
applyCoupon.addEventListener('click', applyCouponCode);