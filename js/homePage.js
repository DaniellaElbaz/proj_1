document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("first-part");

    // יצירת המיכל של האייקונים
    const iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";

    const icon1 = document.createElement("i");
    icon1.className = "fas fa-exclamation-triangle";
    
    const noticeText = document.createElement("p");
    noticeText.textContent = "שים לב אירוע חדש התווסף";

    const icon2 = document.createElement("i");
    icon2.className = "fas fa-exclamation-triangle";

    iconContainer.appendChild(icon1);
    iconContainer.appendChild(noticeText);
    iconContainer.appendChild(icon2);

    // יצירת המיכל של התמונה
    const eventPhoto = document.createElement("div");
    eventPhoto.className = "event-photo";

    const img = document.createElement("img");
    img.src = "images/map_noa.png";
    img.alt = "";

    eventPhoto.appendChild(img);

    // יצירת המיכל של הכפתורים
    const rectangleContainer = document.createElement("div");
    rectangleContainer.className = "rectangle-container";

    const redButton = document.createElement("button");
    redButton.className = "red-rectangle";
    redButton.innerHTML = "<p>קבלת אירוע</p>";

    const greenButton = document.createElement("button");
    greenButton.className = "green-rectangle";
    greenButton.innerHTML = "<p>סירוב</p>";

    rectangleContainer.appendChild(redButton);
    rectangleContainer.appendChild(greenButton);

    // הוספת כל האלמנטים לקטע
    section.appendChild(iconContainer);
    section.appendChild(eventPhoto);
    section.appendChild(rectangleContainer);
});
