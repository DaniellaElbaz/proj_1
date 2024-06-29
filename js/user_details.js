
window.onload = () => {
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => {
        init_member_details(data);
        if (!window.eventDetailsDrawn) { 
            drawEventDetailsInScrollBar(data);
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
    const eventIconsGroup = createIconsGroup();
    const textGroup = createTextGroup();
    const userDetailsContainer = document.createElement("div");
    userDetailsContainer.className = "user-details-container";
    
    const textEventInfo = document.createElement("p");
    textEventInfo.className = "text-event-info";
    textEventInfo.textContent= "פרטי אירוע";
    userDetailsContainer.appendChild(textEventInfo);

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

    const greenButtonRec = document.createElement("button");
    greenButtonRec.className = "green-rec";
    greenButtonRec.innerHTML = "<p>שמור שינויים</p>";
recContainer.appendChild(greenButtonRec);

const redButtonRec = document.createElement("button");
redButtonRec.className = "red-rec";
redButtonRec.innerHTML = "<p>בטל שינויים</p>";
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

function createEditableRectangle() {
    const container = document.createElement("div");
    container.className = "editable-rectangle-container";

    const editableRectangle = document.createElement("div");
    editableRectangle.contentEditable = true;
    editableRectangle.className = "editable-rectangle";
    editableRectangle.style.direction = "rtl"; 

   
    const wordCount = document.createElement("div");
    wordCount.className = "word-count";
    wordCount.textContent = "0/31 מילים";

    container.appendChild(editableRectangle);
    container.appendChild(wordCount);

   
    editableRectangle.addEventListener("input", () => {
        let content = editableRectangle.textContent.trim();
        const words = content.split(/\s+/).filter(word => word.length > 0);
        const wordLimit = 31;

        if (words.length > wordLimit) {
            content = words.slice(0, wordLimit).join(" ");
            editableRectangle.textContent = content;
        }

        wordCount.textContent = `${words.length}/${wordLimit} מילים`;
    });

    
    editableRectangle.addEventListener("keydown", (event) => {
        let content = editableRectangle.textContent.trim();
        const words = content.split(/\s+/).filter(word => word.length > 0);
        const wordLimit = 31;


        
        if (event.key !== 'Backspace' && event.key !== 'Delete' && words.length >= wordLimit) {
            event.preventDefault();
        }
    });

    return container;
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
    const scrollSection = document.getElementById("down-part");
    
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
                eventPlace.textContent = event.event_place;
                eventElement.appendChild(eventPlace);

                const eventName = document.createElement('p');
                eventName.textContent = event.event_name;
                eventElement.appendChild(eventName);


                const eventDistance = document.createElement('p');
                eventDistance.textContent = event.distance_event;
                eventElement.appendChild(eventDistance);

                eventDataContainer.appendChild(eventElement);
            });

            break;
        }
    }

    scrollSection.appendChild(eventDataContainer);
}

function createIconsGroup() {
    
    const eventIconsGroup = document.createElement("div");
    eventIconsGroup.className = "events-icons-group";

    const locationIcon = document.createElement("img");
    locationIcon.className = "location-icon";
    locationIcon.src = "images/location-icon.png";
    locationIcon.alt = "location_icon";
    eventIconsGroup.appendChild(locationIcon);

    const infoIcon = document.createElement("img");
    infoIcon.className = "info-icon"
    infoIcon.src = "images/info-icon.png";
    infoIcon.alt = "info_icon";
    eventIconsGroup.appendChild(infoIcon);

    const distanceIcon = document.createElement("img");
    distanceIcon.className = "distance-icon"
    distanceIcon.src = "images/distance-icon.png";
    distanceIcon.alt = "distance_icon";
    eventIconsGroup.appendChild(distanceIcon);

    
   
    return eventIconsGroup;
}

function createTextGroup() {

    const textGroup = document.createElement("div");
    textGroup.className = "text-group";

const locationText = document.createElement("p");
    locationText.className = "text-location";
    locationText.textContent= "מקום האירוע-";
    textGroup.appendChild(locationText);

    const detailsGeneralText = document.createElement("p");
    detailsGeneralText.className = "text-general";
    detailsGeneralText.textContent= "פרטים כללים-";
    textGroup.appendChild(detailsGeneralText);
  
    const distanceText = document.createElement("p");
    distanceText.className = "distance-text";
    distanceText.textContent= "מרחק-";
    textGroup.appendChild(distanceText);
   
    return textGroup;
}