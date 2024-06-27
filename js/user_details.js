
window.onload = () => {
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => init_member_details(data));
    fetch('../data/reports.json')
        .then(response => response.json())

        drawUpPart();
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

    const backToEventMap = document.createElement("button");
    backToEventMap.className = "back-to-eventMap";
    backToEventMap.innerHTML = "<p>לחזרה למפת אירוע</p>";
    const backIcon = document.createElement("img");
    backIcon.className = "back-icon"
    backIcon.src = "images/back-icon.png";
    backIcon.alt = "back_icon";
    sectionUp.appendChild(backToEventMap);
    sectionUp.appendChild(backIcon);

    const eventPicContainer = document.createElement("div");
    eventPicContainer.className = "eventPic-container";
    const noaImg = document.createElement("img");
    noaImg.className = "noa-event-map"
    noaImg.src = "images/noaNewEvent.png";
    noaImg.alt = "noa-Event-Photo";
    eventPicContainer.appendChild(noaImg);
    sectionUp.appendChild(eventPicContainer);

}
