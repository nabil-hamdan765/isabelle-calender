function calender() {
    const today = new Date();
    const day = today.getDate();
    const months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", 
        "November", "December"]
    const month = months[today.getMonth()];

    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;
}

function scheduleMidnightUpdate() {
    const now = new Date();

    const tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, 0, 0, 0, 0
    )

    const msUntilMidnight = tomorrow - now;
    setTimeout(() => {calender(); scheduleMidnightUpdate();}, msUntilMidnight);
}

calender();
scheduleMidnightUpdate();