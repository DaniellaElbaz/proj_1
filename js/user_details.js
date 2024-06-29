
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

    const userDetailsContainer = document.createElement("div");
    userDetailsContainer.className = "user-details-container";
    
    const textInfo = document.createElement("p");
    textInfo.className = "text-info";
    textInfo.textContent= "פרטים אישיים";
    userDetailsContainer.appendChild(textInfo);

    const TextGeneralInfo = document.createElement("p");
    TextGeneralInfo.className = "text-general-info";
    TextGeneralInfo.textContent= "נא הזן תיאור כללי:";
    userDetailsContainer.appendChild(TextGeneralInfo);

    const rectangleText =  createEditableRectangle();  
    
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

    const redButtonRec = document.createElement("button");
    redButtonRec.className = "red-rec";
    redButtonRec.innerHTML = "<p>בטל שינויים</p>";

    const greenButtonRec = document.createElement("button");
    greenButtonRec.className = "green-rec";
    greenButtonRec.innerHTML = "<p>שמור שינויים</p>";

    downSection.appendChild(eventDataContainer);
    downSection.appendChild(userDetailsContainer);
    downSection.appendChild(rectangleText);
    downSection.appendChild(displayIcons);
    downSection.appendChild(displayText);
    downSection.appendChild(emptyImgContainer);
}

function createEditableRectangle() {
    const editableRectangle = document.createElement("div");
    editableRectangle.contentEditable = true;
    editableRectangle.className = "editable-rectangle";
    return editableRectangle;
}

function createIconsContainer() {
    const cameraModifyIcons = document.createElement("div");
    cameraModifyIcons.className = "camera-modify-icons-container";

    const modifyImage = document.createElement("img");
    modifyImage.className = "modify-icon";
    modifyImage.src = "images/modify-icon.png";
    modifyImage.alt = "modify_icon";
    
    const cameraIcon = document.createElement("img");
    cameraIcon.className = "camera-icon"
    cameraIcon.src = "images/camera-icon.png";
    cameraIcon.alt = "camera_icon";
    
    cameraModifyIcons.appendChild(modifyImage);
    cameraModifyIcons.appendChild(cameraIcon);
    return cameraModifyIcons;
}
function createTextContainer() {

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

const photoText = document.createElement("p");
    photoText.className = "text-uniqe";
    photoText.textContent= "תמונה לזיהוי:";

    const imgText = document.createElement("p");
    imgText.className = "text-shoot";
    imgText.textContent= "צלם";
  
    textContainer.appendChild(photoText);
    textContainer.appendChild(imgText);
   
    return textContainer;
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
