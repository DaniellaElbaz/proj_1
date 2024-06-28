
window.onload = () => {
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => {
        init_member_details(data);
        if (!window.eventDetailsDrawn) { // וודא שלא נקרא יותר מפעם אחת
            drawEventDetailsInScrollBar(data); // קרא פעם אחת בלבד
            window.eventDetailsDrawn = true;
        }
    });

    fetch('../data/reports.json')
        .then(response => response.json())

    drawUpPart();
    drawScrollPart();
};



function init_member_details(data){
    const name = 'נועה לוינסון';
    let user_photo;
    let events;
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

    const backToEventMap = document.createElement("button");
    backToEventMap.className = "back-to-eventMap";
    backToEventMap.innerHTML = "<p>לחזרה למפת אירוע</p>";
    
    const backIcon = document.createElement("img");
    backIcon.className = "back-icon";
    backIcon.src = "images/back-icon.png";
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






    const textDetailsContainer = document.createElement("div");
    textDetailsContainer.className = "text-event-details";

    const textPersonalDetails = document.createElement("div");
    textPersonalDetails.className = "text-personal-details";

    const textInfo = document.createElement("p");
    textInfo.className = "text-info";
    textInfo.textContent= "פרטים אישיים";

    const TextGeneralInfo = document.createElement("p");
    TextGeneralInfo.className = "text-general-info";
    TextGeneralInfo.textContent= "נא הזן תיאור כללי:";
    textDetailsContainer.appendChild(TextGeneralInfo);

    const photoText = document.createElement("p");
    photoText.className = "text-uniqe";
    photoText.textContent= "תמונה לזיהוי:";

    const imgText = document.createElement("p");
    imgText.className = "text-shoot";
    imgText.textContent= "צלם";


    const cameraIcon = document.createElement("img");
    cameraIcon.className = "camera-icon"
    cameraIcon.src = "images/camera-icon.png";
    cameraIcon.alt = "camera_icon";

    const emptyImage = document.createElement("img");
    emptyImage.className = "empty-image";
    emptyImage.src = "images/empty-image.png";
    emptyImage.alt = "empty_image";

    const recContainer = document.createElement("div");
    recContainer.className = "rec-container";

    const redButtonRec = document.createElement("button");
    redButtonRec.className = "red-rec";
    redButtonRec.innerHTML = "<p>בטל שינויים</p>";

    const greenButtonRec = document.createElement("button");
    greenButtonRec.className = "green-rec";
    greenButtonRec.innerHTML = "<p>שמור שינויים</p>";

    downSection.appendChild(emptyImage);
    downSection.appendChild(cameraIcon);
    downSection.appendChild(imgText);
    downSection.appendChild(photoText);
    downSection.appendChild(eventDataContainer);
    downSection.appendChild(textInfo);
    downSection.appendChild(textDetailsContainer);
    downSection.appendChild(redButtonRec);
    downSection.appendChild(greenButtonRec);

    createEditableRectangle(textDetailsContainer);   
}
function createEditableRectangle(parentElement) {
    const editableRectangle = document.createElement("div");
    editableRectangle.contentEditable = true;
    editableRectangle.className = "editable-rectangle";
    parentElement.appendChild(editableRectangle);
}

function drawEventDetailsInScrollBar(data) {
    const scrollSection = document.getElementById("scroll-bar");
    
    const eventDataContainer = document.createElement("div");
    eventDataContainer.className = "event-text-container";

    const name = 'נועה לוינסון';
    let user; 

    for (const memberKey in data.members) {
        user = data.members[memberKey];
        if (user.name == name) {
            const filteredEvents = user.events.filter(event => event.id === "123");

            filteredEvents.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'event';

                const eventPlace = document.createElement('p');
                eventPlace.textContent = `מקום האירוע: ${event.event_place}`;
                eventElement.appendChild(eventPlace);

                const eventName = document.createElement('p');
                eventName.textContent = `פרטים כללים: ${event.event_name}`;
                eventElement.appendChild(eventName);


                const eventDistance = document.createElement('p');
                eventDistance.textContent = `מרחק : ${event.distance_event}`;
                eventElement.appendChild(eventDistance);

                eventDataContainer.appendChild(eventElement);
            });

            break;
        }
    }

    scrollSection.appendChild(eventDataContainer);
}
