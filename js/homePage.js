
window.onload = () => {
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => init_member_details(data));
    fetch('../data/reports.json')
        .then(response => response.json())
        .then(reports => {
            drawFirstPart();
            drawSecondPart(reports);
            drawThirdPart ();
        });
        fetch('data/eventsHistory.json')
        .then(response => response.json())
        .then(eventsHistory => {
            addDescriptionElements(eventsHistory);
        });
};
function init_member_details(data){
    const name = 'נועה לוינסון';
    let user_photo;
    let user;
    for (const memberKey in data.members) {
        user = data.members[memberKey];
        if (user.name == name) {
            user_photo = user.user_photo;
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

function drawFirstPart() {
    const section1 = document.getElementById("first-part");

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

    const eventPhoto = document.createElement("div");
    eventPhoto.className = "event-photo";

    const img = document.createElement("img");
    img.src = "images/map_noa.png";
    img.alt = "Event Photo";

    eventPhoto.appendChild(img);

    const rectangleContainer = document.createElement("div");
    rectangleContainer.className = "rectangle-container";

    const redButton = document.createElement("button");
    redButton.className = "red-rectangle";
    redButton.innerHTML = "<p>סירוב</p>";

    const greenButton = document.createElement("button");
    greenButton.className = "green-rectangle";
    greenButton.innerHTML = "<p>קבלת אירוע</p>";

    rectangleContainer.appendChild(redButton);
    rectangleContainer.appendChild(greenButton);

    section1.appendChild(iconContainer);
    section1.appendChild(eventPhoto);
    section1.appendChild(rectangleContainer);
}


function drawSecondPart(reports) {
    const section2 = document.getElementById("second-part");


    const realTimeText = createRealTimeText();
    section2.appendChild(realTimeText);

    const verticalLine = document.createElement("div");
    verticalLine.className = "vertical-line";
    section2.appendChild(verticalLine);


    const startTime = new Date();
    startTime.setHours(14);
    startTime.setMinutes(50);

    for (let i = 0; i < 3; i++) {
        const reportContainer = createReportContainer(startTime, i);
        section2.appendChild(reportContainer);
    }


    const lastReportContainer = createLastReportContainer(reports);
    section2.appendChild(lastReportContainer);
}


function createRealTimeText() {
    const realTimeText = document.createElement("div");
    realTimeText.className = "real-time-text";
    realTimeText.textContent = "דיווחים בזמן אמת";

    const alertIcon = document.createElement("img");
    alertIcon.src = "images/alert-icon.png";
    alertIcon.className = "alert-icon";

    realTimeText.appendChild(alertIcon);

    return realTimeText;
}


function createReportContainer(startTime, index) {
    const reportContainer = document.createElement("div");
    reportContainer.className = "report-container";


    const reportDate = new Date(startTime.getTime() + index * 10 * 60000);
    const hours = reportDate.getHours().toString().padStart(2, '0');
    const minutes = reportDate.getMinutes().toString().padStart(2, '0');

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots-container";

    const dotWrapper = document.createElement("div");
    dotWrapper.className = "dot-wrapper";

    const dot = document.createElement("span");
    dot.className = "dot-time";
    dot.textContent = "•";

    const reportTime = document.createElement("p");
    reportTime.className = "report-time";
    reportTime.textContent = `${hours}:${minutes}`;

    dotWrapper.appendChild(dot);
    dotWrapper.appendChild(reportTime);


    const horizontalLine = document.createElement("div");
    horizontalLine.className = "horizontal-line";
    dotWrapper.appendChild(horizontalLine);

    dotsContainer.appendChild(dotWrapper);
    reportContainer.appendChild(dotsContainer);

    reportTime.style.color = "black";
    reportTime.style.fontWeight = "bold";
    reportTime.style.fontFamily = "Inter";

    return reportContainer;
}


function createLastReportContainer(reports) {
    const lastReportContainer = document.createElement("div");
    lastReportContainer.className = "report-container";

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots-container";
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.textContent = "•";
        dotsContainer.appendChild(dot);
    }

    const imgReport = document.createElement("img");
    imgReport.src = "images/report-img.jpeg"
    imgReport.alt = "crash-photo";
    imgReport.className = "accident-photo";
    lastReportContainer.appendChild(imgReport);
    
    const textStyle = createTextStyle(reports);
    lastReportContainer.appendChild(textStyle);

    lastReportContainer.appendChild(dotsContainer);

    return lastReportContainer;
}


function createTextStyle(reports) {
    const textStyle = document.createElement("div");
    textStyle.className = "text-style";
    for (let i = 0; i < reports.length; i++) {
        const report = reports[i];
        const reportText = document.createElement("p");
        reportText.className = "report-text";
        reportText.textContent = report.text;
        textStyle.appendChild(reportText);
    }
    return textStyle;
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("text-with-image").addEventListener("click", toggleImage);
});
function toggleImage() {
    const image = document.getElementById("hidden-image");
    if (image.style.display === "none") {
        image.style.display = "block";

    } else {
        image.style.display = "none";
    }
}
function drawThirdPart() {
    const section3 = document.getElementById("third-part");

    const historyContainer = document.createElement("div");
    historyContainer.className = "history-container";

    const rectangle = document.createElement("div");
    rectangle.className = "rectangle";

    const line = document.createElement("div");
    line.className = "line";

    const historyText = document.createElement("p");
    historyText.className = "history-line";
    historyText.textContent = "לכל היסטוריית האירועים";

    historyContainer.appendChild(rectangle);
    historyContainer.appendChild(line);
    historyContainer.appendChild(historyText);

    addTextElements();

    section3.appendChild(historyContainer);
   
}
function addTextElements() {
    const section3 = document.getElementById("third-part");

    const textContainer = document.createElement("div");
    textContainer.className = "text-history-table";

    const descriptionText = document.createElement("p");
    descriptionText.className = "text-item";
    descriptionText.textContent = " פרטי אירוע";

    const statusText = document.createElement("p");
    statusText.className = "text-item";
    statusText.textContent = "סטטוס";

    const eventDetailsText = document.createElement("p");
    eventDetailsText.className = "text-item";
    eventDetailsText.textContent = "תיאור ";

    textContainer.appendChild(descriptionText);
    textContainer.appendChild(statusText);
    textContainer.appendChild(eventDetailsText);

    section3.appendChild(textContainer);
}

function addDescriptionElements(eventsHistory) 
{
    const section3 = document.getElementById("third-part");
    const description = document.createElement("div");
    description.className = "text-description";
    for (let i = 0; i < eventsHistory.length; i++) {
        const des = eventsHistory[i];
        const reportDes = document.createElement("p");
        reportDes.className = "report-des";
        reportDes.textContent = des.description;
        description.appendChild(reportDes);
    }
    section3.appendChild(description);
}



