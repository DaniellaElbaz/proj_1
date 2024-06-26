let report;
window.onload = () => {
    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => init_member_details(data));
}
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
    initReport(user);
}
function initReport(user) {
    report = document.getElementById("report");
    report.innerHTML = '';
    user.events.forEach(event => {
        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        const h1 = document.createElement('h1');
        h1.innerText = `<p style="font-size:12px;">דו"ח אירוע  <span style="font-size:12px;">${event.event_name}</span></p>` ;
        reportItem.appendChild(h1);
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = `
            <p style="font-size:12px;">תאריך: <span style="font-size:12px;">${event.date_and_time}</span></p>
            <p style="margin-right: 18px;">מקום האירוע: <span style="font-size:12px;">${event.event_place}</span></p>
            <p style="margin-right: 18px;">סטטוס: <span style="font-size:12px;">${event.event_status}</span></p>`;
        if (event.event_map) {
            const td2 = document.createElement('td');
            const map = document.createElement('img');
            map.src = event.event_map;
            map.alt = "Event Map";
            map.title = "Event_Map";
            td2.appendChild(map);
            tr.appendChild(td2);
        }
        tr.appendChild(td);
        table.appendChild(tr);
        reportItem.appendChild(table);
        if (event.event_photo) {
            const eventShow = document.createElement('p');
            eventShow.innerHTML = ` <p>:צפיה בדוח אירוע / מילוי דוח אירוע</p> `;
            reportItem.appendChild(eventShow);
            reportItem.appendChild(initBottomRectangles(event));
        }
        report.appendChild(reportItem);
    });
}
function initBottomRectangles(event) {
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
    return(eventContainer);
}
