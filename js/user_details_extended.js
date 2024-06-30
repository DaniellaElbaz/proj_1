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
    const exploreIcon = document.createElement("img");
    exploreIcon.className = "explore-icon"
    exploreIcon.src = "images/add-image.png";
    exploreIcon.alt = "add_image_icon";
    cameraModifyIcons.appendChild(modifyImage);
    cameraModifyIcons.appendChild(cameraIcon);
    cameraModifyIcons.appendChild(exploreIcon);
    return cameraModifyIcons;
}
function createTextContainer() {
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    const photoText = document.createElement("p");
    photoText.className = "text-uniqe";
    photoText.textContent = "תמונה לזיהוי:";
    const imgText = document.createElement("p");
    imgText.className = "text-shoot";
    imgText.textContent = "צלם";
    const imgExplore = document.createElement("p");
    imgExplore.className = "text-explore";
    imgExplore.textContent = "עיון";
    textContainer.appendChild(photoText);
    textContainer.appendChild(imgText);
    textContainer.appendChild(imgExplore);
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
    locationText.textContent = "מקום האירוע-";
    textGroup.appendChild(locationText);
    const detailsGeneralText = document.createElement("p");
    detailsGeneralText.className = "text-general";
    detailsGeneralText.textContent = "פרטים כללים-";
    textGroup.appendChild(detailsGeneralText);
    const distanceText = document.createElement("p");
    distanceText.className = "distance-text";
    distanceText.textContent = "מרחק-";
    textGroup.appendChild(distanceText);
    return textGroup;
}
function showModal(message) {
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    const modal = document.createElement("div");
    modal.className = "modal";
    const modalMessage = document.createElement("p");
    modalMessage.textContent = message;
    modal.appendChild(modalMessage);
    const closeButton = document.createElement("button");
    closeButton.textContent = "סגור";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(modalOverlay);
        window.location.href = "index.html";
    });
    modal.appendChild(closeButton);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
}