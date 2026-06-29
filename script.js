const winterButton = document.getElementById("winter-button");
const winterDialog = document.getElementById("winter-dialog-container");
const winterDialogDays = document.getElementById("winter-dialog-days");

function winterIsComing() {
    winterDialog.showModal();
    calculateDaysUntilWinter();
}

function closeWinterDialog() {
    winterDialog.close();
}



function calculateDaysUntilWinter() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const winterStartDate = new Date(currentYear, 11, 21); // December 21st
    const springStartDate = new Date(currentYear, 2, 20); // March 20th
    if (today > winterStartDate || today < springStartDate) {
        winterDialogDays.textContent = "It is already here";
    }
    if (today < winterStartDate && today > springStartDate) {
        const timeDiff = winterStartDate - today; // Difference in milliseconds
        const daysUntilWinter = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); //Milliseconds to days
        winterDialogDays.textContent = `In ${daysUntilWinter} days`;
    }
}



const imgClickable = document.querySelector(".profile-photo");

imgClickable.addEventListener("click", () => {
        winterIsComing();
        }
    );