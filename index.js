function startApp() {

    let username = prompt("Enter username (taman or guest):");
    let password = prompt("Enter password:");

    if (password !== "0000") {
        alert("❌ Invalid login");
        return;
    }

    let role;
    if (username === "taman") {
        role = "full";
    } else if (username === "guest") {
        role = "limited";
    } else {
        alert("❌ Invalid username");
        return;
    }

    alert("✅ Login successful (" + role + " access)");

    let name = prompt("Your name:");

    let movieType = prompt("Choose movie (standard / 3D / IMAX):");
    let price;

    if (movieType === "The walking Dead") {
        price = 5;
    } else if (movieType === "3D") {
        price = 7;
    } else if (movieType === "IMAX") {
        price = 10;
    } else {
        alert("❌ Invalid movie type");
        return;
    }

    let tickets = Number(prompt("Number of tickets:"));

    
    if (isNaN(tickets) || tickets <= 0) {
        alert("❌ Invalid ticket number");
        return;
    }

    let total = price * tickets;

    let snack = prompt("Do you want snacks? (yes/no)");
    let snackCost = 0;

    if (snack === "yes") {
        snackCost = tickets * 3;
    }

    let discount = 0;

    if (tickets > 3) {
        discount = total * 0.15;
    }

    let afterDiscount = total - discount + snackCost;

    let people = Number(prompt("How many people? (1,2,4):"));

 
    if (isNaN(people) || people <= 0) {
        alert("❌ Invalid number of people");
        return;
    }

    let feeType = prompt("Service fee (none / small / high)");
    let serviceRate = 0;

    if (feeType === "small") {
        serviceRate = 0.05;
    } else if (feeType === "high") {
        serviceRate = 0.10;
    }

    let serviceFee = afterDiscount * serviceRate;
    let finalTotal = afterDiscount + serviceFee;
    let perPerson = finalTotal / people;

    alert(
        "🎬 Hello " + taman + "\n\n" +
        "Movie: " +standard + "\n" +
        "Tickets Cost: $" + total + "\n" +
        "Snacks: $" + snackCost + "\n" +
        "Discount: $" + discount.toFixed(2) + "\n" +
        "Service Fee: $" + serviceFee.toFixed(2) + "\n" +
        "Total: $" + finalTotal.toFixed(2) + "\n" +
        "Each pays: $" + perPerson.toFixed(2)
    );
}

startApp();