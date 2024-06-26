let report;

window.onload = () => {
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => init_member_details(data));
}

function init_member_details(data){
    let user_photo;
    const userName = 'נועה לוינסון';
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
    user.events.forEach(event => {
        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        const items = inputFromJsonToTextBox(user);
        if (items) { 
            reportItem.appendChild(items);
        }
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = `
            <p> סוג האירוע</p>
            <p>שם המשתתף/ת</p>
            <p>תאריך האירוע</p>`;
        tr.appendChild(td);

        const selectedEvent = showSelectedEvent(user);
        if (selectedEvent) { 
            tr.appendChild(selectedEvent);
        }
        table.appendChild(tr);
        reportItem.appendChild(table);
        
        report.appendChild(reportItem);
    });
}

function getEventID(){
    const aKeyValue = window.location.search.substring(1).split('&');
    const eventId = aKeyValue[0].split("=")[1];
    return eventId;
}

function showSelectedEvent(user) {
    const selectionEventId = getEventID();
    const name = 'נועה לוינסון';
    const td = document.createElement('td');
    let EventType;
    let EventDate;
    for (const eventKey in user.event) {
        let evenDetails = user.event[eventKey];
        if (evenDetails.id == selectionEventId) {
            EventType = evenDetails.type_event;
            const type = document.createElement('input');
            type.id = "inputType";
            type.placeholder = EventType;
            td.appendChild(type);
            const nameI = document.createElement('input');
            nameI.id = "userName";
            nameI.placeholder = name;
            td.appendChild(nameI);
            const dateAndTimeParts = evenDetails.date_and_time.trim().split(" שעה ");
            EventDate = dateAndTimeParts[0];
            const date = document.createElement('input');
            date.id = "inputDate";
            date.placeholder = EventDate;
            td.appendChild(date);
            break;
        }
    }
    return td;
}

function inputFromJsonToTextBox(user){
    const selectionEventId = getEventID();
    let reportItem = document.createElement('div');
    let EventName;
    let EventPlace;
    for (const eventKey in user.event) {
        let evenDetails = user.event[eventKey];
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

/*function initBottomRectangles(event) {
    const eventLabel = document.createElement('p');
    eventLabel.innerHTML = `:זירת האירוע`;
    const img = document.createElement('img');
    img.src = event.event_photo;
    img.alt = "Event_Place";
    img.title = "Event_Place";
    const eventContainer = document.createElement('div');
    eventContainer.classList.add('event-item-container');
    eventContainer.appendChild(img);
    eventContainer.appendChild(eventLabel);
    return eventContainer;
}*/
