let report;

window.onload = () => {
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => init_member_details(data));
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
    initReport(user);
}

function initReport(user) {
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
    report.appendChild(reportItem);
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
    let EventType;
    let EventDate;
    for (const eventKey in user.events) {
        let evenDetails = user.events[eventKey];
        if (evenDetails.id == selectionEventId) {
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
            eventD.appendChild(p);
            const p2 = document.createElement('p');
            p2.classList.add('inline');
            const nameI = document.createElement('input');
            nameI.id = "userName";
            nameI.placeholder = name;
            nameI.disabled = true;
            p2.appendChild(nameI);
            p2.appendChild(document.createTextNode(":שם המשתתף/ת"));
            eventD.appendChild(p2);
            const p3 = document.createElement('p');
            p3.classList.add('inline');
            const dateAndTimeParts = evenDetails.date_and_time.trim().split(" שעה ");
            EventDate = dateAndTimeParts[0];
            const date = document.createElement('input');
            date.id = "inputDate";
            date.placeholder = EventDate;
            date.disabled = true;
            p3.appendChild(date);
            p3.appendChild(document.createTextNode(":תאריך האירוע"));
            eventD.appendChild(p3);
            break;
        }
    }
    return eventD;
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
            h1.innerText = "דו'ח אירוע " + EventName;
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