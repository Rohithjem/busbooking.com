document.addEventListener('DOMContentLoaded', () => {
    const busTypeSelect = document.getElementById('bus-type');
    const seatSelection = document.getElementById('seat-selection');
    const paymentSection = document.getElementById('payment-section');
    const upperBerthsContainer = document.getElementById('upper-berths');
    const lowerBerthsContainer = document.getElementById('lower-berths');
    const confirmBookingBtn = document.getElementById('confirm-booking');

    // Create seats for upper and lower berths
    const seatCountUpper = 6; // Number of upper berths
    const seatCountLower = 6; // Number of lower berths

    for (let i = 1; i <= seatCountUpper; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat available';
        seat.textContent = i;
        seat.addEventListener('click', () => toggleSeatSelection(seat));
        upperBerthsContainer.appendChild(seat);
    }

    for (let i = 1; i <= seatCountLower; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat available';
        seat.textContent = i + seatCountUpper; // Ensure unique seat numbers
        seat.addEventListener('click', () => toggleSeatSelection(seat));
        lowerBerthsContainer.appendChild(seat);
    }

    function toggleSeatSelection(seat) {
        if (seat.classList.contains('available')) {
            seat.classList.remove('available');
            seat.classList.add('selected');
        } else if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            seat.classList.add('available');
        }
    }

    // Show seat selection and payment section on bus type selection change
    busTypeSelect.addEventListener('change', () => {
        seatSelection.classList.remove('hidden');
        paymentSection.classList.remove('hidden');
    });

    // Handle booking confirmation
    confirmBookingBtn.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
        } else {
            alert('Booking Confirmed! Your ticket will be printed.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const seatSelection = document.getElementById('seat-selection');
    const paymentSection = document.getElementById('payment-section');
    const confirmBookingBtn = document.getElementById('confirm-booking');

    // Simulate seat selection
    const upperBerthsContainer = document.getElementById('upper-berths');
    const lowerBerthsContainer = document.getElementById('lower-berths');
    const totalSeats = 12; // Total number of seats

    for (let i = 1; i <= totalSeats / 2; i++) {
        const seatUpper = document.createElement('div');
        seatUpper.className = 'seat available';
        seatUpper.textContent = i;
        seatUpper.addEventListener('click', () => toggleSeat(seatUpper));
        upperBerthsContainer.appendChild(seatUpper);

        const seatLower = document.createElement('div');
        seatLower.className = 'seat available';
        seatLower.textContent = i + totalSeats / 2;
        seatLower.addEventListener('click', () => toggleSeat(seatLower));
        lowerBerthsContainer.appendChild(seatLower);
    }

    function toggleSeat(seat) {
        if (seat.classList.contains('available')) {
            seat.classList.remove('available');
            seat.classList.add('selected');
        } else if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            seat.classList.add('available');
        }
    }

    // Show seat selection and payment section on bus type selection change
    form.addEventListener('change', (e) => {
        if (e.target.id === 'bus-type') {
            seatSelection.classList.remove('hidden');
            paymentSection.classList.remove('hidden');
        }
    });

    // Handle booking confirmation
    confirmBookingBtn.addEventListener('click', () => {
        const busType = document.getElementById('bus-type').value;
        const fromCity = document.getElementById('from-city').value;
        const toCity = document.getElementById('to-city').value;
        const selectedSeat = document.querySelector('.seat.selected')?.textContent || 'Not Selected';
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value || 'Not Selected';

        if (busType && fromCity && toCity && selectedSeat && paymentMethod) {
            window.location.href = `ticket.html?busType=${encodeURIComponent(busType)}&fromCity=${encodeURIComponent(fromCity)}&toCity=${encodeURIComponent(toCity)}&seatNumber=${encodeURIComponent(selectedSeat)}&paymentMethod=${encodeURIComponent(paymentMethod)}`;
        } else {
            alert('Please complete all fields.');
        }
    });
});
