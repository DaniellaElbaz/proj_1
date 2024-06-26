
let eventErea;
function initRectangles(data) {
    eventErea = document.getElementById("events-container");
    eventErea.innerHTML = '';
    data.events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('events-item');
        const h1 = document.createElement('h1');
        h1.innerText = event.event_name;
        eventItem.appendChild(h1);
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
        eventItem.appendChild(table);
        if (event.event_photo) {
            const eventShow = document.createElement('p');
            eventShow.innerHTML = ` <p>:צפיה בדוח אירוע / מילוי דוח אירוע</p> `;
            eventItem.appendChild(eventShow);
            eventItem.appendChild(initBottomRectangles(event));
        }
        eventErea.appendChild(eventItem);
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

function initPage() {
    fill_sort_container();

    eventErea = document.getElementById("events-container");
    fetch("../data/Events.json")
        .then(response => response.json())
        .then(data => initRectangles(data));
}

window.onload = initPage;

