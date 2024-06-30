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
    const line = document.createElement("div");
    line.className = "line";
      const historyLink = document.createElement("a");
    historyLink.className = "history-link";
    historyLink.textContent = "לכל היסטוריית האירועים";
    historyLink.href = "eventList.html";
    historyContainer.appendChild(line);
    historyContainer.appendChild(historyLink);
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
function addDescriptionElements(eventsHistory) {
    const section3 = document.getElementById("third-part");
    const description = document.createElement("div");
    description.className = "text-description";
    for (let i = 0; i < eventsHistory.length; i++) {
        const des = eventsHistory[i];
        const reportDes = document.createElement("p");
        reportDes.className = "report-des";
        if (des.description === "הסתיים ללא נפגעים") {
            const words = des.description.split(" ");
            words.forEach(word => {
                const span = document.createElement("span");
                span.textContent = word;
                span.style.display = "block";
                reportDes.appendChild(span);
            });
        } else {
            reportDes.textContent = des.description;
        }
        description.appendChild(reportDes);
    }
    section3.appendChild(description);
}