window.onload = () => {
    fetch("data/Events.json")
        .then(response => response.json())
        .then(data => {
            init_member_details(data);
            if (!window.eventDetailsDrawn) {
                drawEventDetailsInScrollBar(data);
                window.eventDetailsDrawn = true;
            }
        });
    fetch("data/reports.json")
        .then(response => response.json())
    drawUpPart();
    drawScrollPart();
};
function init_member_details(data) {
    const name = 'נועה לוינסון';
    let user_photo;
    let user;
    for (const memberKey in data.members) {
        user = data.members[memberKey];
        if (user.name == name) {
            user_photo = user.user_photo;
            events = user.events;
            break;
        }
    }
    const userDetails = document.getElementById("UserImage");
    const photo = document.createElement('img');
    photo.src = user_photo;
    photo.alt = "user_photo";
    photo.title = "user_photo";
    userDetails.appendChild(photo);
}
function drawUpPart() {
    const sectionUp = document.getElementById("up");
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    const backToEventMap = document.createElement("a");
    backToEventMap.className = "back-to-eventMap";
    backToEventMap.innerHTML = "<p>לחזרה לדף הבית</p>";
    backToEventMap.href = "index.html";
    backToEventMap.style.textDecoration = 'none';
    const backIcon = document.createElement("img");
    backIcon.className = "back-icon";
    backIcon.src = "images/back.png";
    backIcon.alt = "back_icon";
    backToEventMap.appendChild(backIcon);
    buttonContainer.appendChild(backToEventMap);
    sectionUp.appendChild(buttonContainer);
    const eventPicContainer = document.createElement("div");
    eventPicContainer.className = "eventPic-container";
    const noaImg = document.createElement("img");
    noaImg.className = "noa-event-map";
    noaImg.src = "images/noaNewEvent.png";
    noaImg.alt = "noa-Event-Photo";
    eventPicContainer.appendChild(noaImg);
    sectionUp.appendChild(eventPicContainer);
}
function drawScrollPart() {
    const downSection = document.getElementById("down-part");
    const eventDataContainer = document.createElement("div");
    eventDataContainer.className = "event-data-container";
    const eventIconsGroup = createIconsGroup();
    const textGroup = createTextGroup();
    const userDetailsContainer = document.createElement("div");
    userDetailsContainer.className = "user-details-container";
    const textEventInfo = document.createElement("p");
    textEventInfo.className = "text-event-info";
    textEventInfo.textContent = "פרטי אירוע";
    userDetailsContainer.appendChild(textEventInfo);
    const textInfo = document.createElement("p");
    textInfo.className = "my-text-info";
    textInfo.textContent = "פרטים אישיים";
    userDetailsContainer.appendChild(textInfo);
    const TextGeneralInfo = document.createElement("p");
    TextGeneralInfo.className = "text-general-info";
    TextGeneralInfo.textContent = "נא הזן תיאור כללי:";
    userDetailsContainer.appendChild(TextGeneralInfo);
    const rectangleText = createEditableRectangle();
    const displayIcons = createIconsContainer();
    const displayText = createTextContainer();
    const emptyImgContainer = document.createElement("div");
    emptyImgContainer.className = "empty-img-container";
    const emptyImage = document.createElement("img");
    emptyImage.className = "empty-image";
    emptyImage.src = "images/empty-image.png";
    emptyImage.alt = "empty_image";
    emptyImgContainer.appendChild(emptyImage);
    const recContainer = document.createElement("div");
    recContainer.className = "rec-container";
    const greenButtonRec = document.createElement("button");
    greenButtonRec.className = "green-rec";
    greenButtonRec.innerHTML = "<p>שמור שינויים</p>";
    greenButtonRec.addEventListener("click", () => {
        showModal("השינויים נשמרו בהצלחה");
    });
    recContainer.appendChild(greenButtonRec);
    const redButtonRec = document.createElement("a");
    redButtonRec.className = "red-rec";
    redButtonRec.innerHTML = "<a>בטל שינויים</a>";
    redButtonRec.href = "index.html";
    redButtonRec.style.textDecoration = 'none';
    recContainer.appendChild(redButtonRec);
    downSection.appendChild(eventDataContainer);
    downSection.appendChild(eventIconsGroup);
    downSection.appendChild(textGroup);
    downSection.appendChild(userDetailsContainer);
    downSection.appendChild(rectangleText);
    downSection.appendChild(displayIcons);
    downSection.appendChild(displayText);
    downSection.appendChild(emptyImgContainer);
    downSection.appendChild(recContainer);
}
