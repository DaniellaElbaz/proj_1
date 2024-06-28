let report;
const form = document.createElement("form");
const userName = 'נועה לוינסון';
window.onload = () => {
    form.classList.add('manege-necessary-data');
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => init_member_details(data));
    initBottomReport(form);
}
function init_member_details(data) {
    const userName = 'נועה לוינסון';
    let user_photo;
    let user;
    for (const memberKey in data.members) {
        user = data.members[memberKey];
        if (user.name == userName) {
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
    initReport(user,data);
}
function initReport(user,data) {
    report = document.getElementById("report");
    report.innerHTML = '';
    const reportItem = document.createElement('div');
    reportItem.classList.add('report-item');
    const items = inputFromJsonToTextBox(user);
    if (items) {
        reportItem.appendChild(items);
    }
    const selectedEvent = showSelectedEvent(user);
    if (selectedEvent) {
        reportItem.appendChild(selectedEvent);
    }
    reportItem.appendChild(makeABlackLine());
    report.appendChild(reportItem);
    reportItem.appendChild(inputToTextBox());
    report.appendChild(reportItem);
    reportItem.appendChild(makeABlackLine());
    report.appendChild(reportItem);
    reportItem.appendChild(showMembersEvent(data));
    report.appendChild(reportItem);
    report.appendChild(form);
}
function makeABlackLine(){
    const img = document.createElement('img');
    img.style.width = '100%';
    img.style.backgroundColor = 'black';
    img.style.height = '2px';
    img.style.border = 'none';
    return img;
}
function getEventID() {
    const aKeyValue = window.location.search.substring(1).split('&');
    const eventId = aKeyValue[0].split("=")[1];
    return eventId;
}
function showSelectedEvent(user) {
    const selectionEventId = getEventID();
    const name = 'נועה לוינסון';
    const eventD = document.createElement('p');
    for (const eventKey in user.events) {
        let evenDetails = user.events[eventKey];
        if (evenDetails.id == selectionEventId) {
            eventD.appendChild(initSelectBox(evenDetails));
            const p2 = document.createElement('p');
            p2.classList.add('inline');
            const nameI = document.createElement('input');
            nameI.id = "userName";
            nameI.placeholder = name;
            nameI.disabled = true;
            p2.appendChild(nameI);
            p2.appendChild(document.createTextNode(":שם המשתתף/ת"));
            eventD.appendChild(p2);
            eventD.appendChild(initDate(evenDetails));
            break;
        }
    }
    return eventD;
}
function initDate(evenDetails){
    let EventDate;
    const p = document.createElement('p');
    p.classList.add('inline');
    const dateAndTimeParts = evenDetails.date_and_time.trim().split(" שעה ");
    EventDate = dateAndTimeParts[0];
    const date = document.createElement('input');
    date.id = "inputDate";
    date.placeholder = EventDate;
    date.disabled = true;
    p.appendChild(date);
    p.appendChild(document.createTextNode(":תאריך האירוע"));
    return p;
}
function initSelectBox(evenDetails){
    let EventType;
    EventType = evenDetails.type_event;
    const p = document.createElement('p');
    p.classList.add('inline');
    const type = document.createElement('select');
    type.id = "selectType";
    const option = document.createElement('option');
    option.value = EventType;
    option.text = EventType;
    option.selected = true;
    type.disabled = true;
    type.appendChild(option);
    p.appendChild(type);
    p.appendChild(document.createTextNode(":סוג האירוע"));
    return p;
}
function inputFromJsonToTextBox(user) {
    const selectionEventId = getEventID();
    let reportItem = document.createElement('div');
    let EventName;
    let EventPlace;
    for (const eventKey in user.events) {
        let evenDetails = user.events[eventKey];
        if (evenDetails.id == selectionEventId) {
            EventName = evenDetails.event_name;
            const h1 = document.createElement('h1');
            h1.innerText = "דו''ח אירוע " + EventName;
            reportItem.appendChild(h1);
            EventPlace = evenDetails.event_place;
            const h2 = document.createElement('h1');
            h2.innerText = "מיקום - " + EventPlace;
            reportItem.appendChild(h2);
            break;
        }
    }
    return reportItem;
}
function inputToTextBox() {
    let inputItem = document.createElement('div');
    inputItem.classList.add('report-input');
    const when = document.createElement('p');
    when.innerHTML = `?מתי ואיך שמעת שהאירוע התרחש<span style ="color: #DC3545;">*</span>`;
    inputItem.appendChild(when);
    const Textwhen = document.createElement('textarea');
    Textwhen.id = "textareaWhen";
    Textwhen.name="whenText";
    Textwhen.maxLength = 90;
    form.appendChild(Textwhen);
    inputItem.appendChild(whenCount(Textwhen));
    const explain = document.createElement('p');
    explain.innerHTML = `הסבר/י על הדרך פעילות שלך באירוע<span style ="color: #DC3545;">*</span>`;
    inputItem.appendChild(explain);
    const Textexplain = document.createElement('textarea');
    Textexplain.id = "textareaExplain";
    Textexplain.name="explainText";
    Textexplain.maxLength = 300;
    form.appendChild(Textexplain);
    inputItem.appendChild(explainCount(Textexplain));
    Textwhen.addEventListener('input', () => updateCharCount(Textwhen, "whenCharCount"));
    Textexplain.addEventListener('input', () => updateCharCount(Textexplain, "explainCharCount"));
    return inputItem;
}
function whenCount(Textwhen) {
    let textareaContainerWhen = document.createElement('div');
    textareaContainerWhen.classList.add('textarea-container');
    textareaContainerWhen.appendChild(Textwhen);
    const whenCharCount = document.createElement('div');
    whenCharCount.classList.add('textarea-placeholder');
    whenCharCount.id = "whenCharCount";
    whenCharCount.textContent = `0/${Textwhen.maxLength} מילים`;
    textareaContainerWhen.appendChild(whenCharCount);
    return textareaContainerWhen;
}
function explainCount(Textexplain) {
    let textareaContainerExplain = document.createElement('div');
    textareaContainerExplain.classList.add('textarea-container');
    textareaContainerExplain.appendChild(Textexplain);
    const explainCharCount = document.createElement('div');
    explainCharCount.classList.add('textarea-placeholder');
    explainCharCount.id = "explainCharCount";
    explainCharCount.textContent = `0/${Textexplain.maxLength} מילים`;
    textareaContainerExplain.appendChild(explainCharCount);
    return textareaContainerExplain;
}
function updateCharCount(textarea, placeholderId) {
    const usedChars = textarea.value.length;
    const maxChars = textarea.maxLength;
    const placeholderElement = document.getElementById(placeholderId);
    placeholderElement.textContent = `${usedChars}/${maxChars}`;
}