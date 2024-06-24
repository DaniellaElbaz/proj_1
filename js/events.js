let eventErea;

window.onload = () => {
    eventErea = document.getElementById("events-container");

    fetch("../data/Events.json")
    .then(response => response.json())
    .then(data => initRectangles(data));
}

function initRectangles(data) {
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
            <p>תאריך: ${event.date_and_time}</p> \n
            <p>מקום האירוע: ${event.event_place}</p> \n
            <p>סטטוס: ${event.event_status}</p> \n`;
        if (event.event_map) {
            const td2 = document.createElement('td');
            const map = document.createElement('img');
            map.src = event.event_map;
            map.alt = "Event Map";
            map.title = "Event Map";
            td2.appendChild(map);
            tr.appendChild(td2);
        }
        tr.appendChild(td);
        table.appendChild(tr);
        eventItem.appendChild(table);
        if (event.event_photo) {
            const hr = document.createElement('hr');
            hr.style.width = '100%';
            hr.style.backgroundColor = 'black';
            hr.style.height = '2px'; // Adjust the height as needed
            hr.style.border = 'none';
            eventItem.appendChild(hr);
            const eventShow = document.createElement('p');
            eventShow.innerHTML = ` <p>:צפיה בדוח אירוע/מילוי דוח אירוע</p>\n `;
            eventItem.appendChild(eventShow);
            eventItem.appendChild(initBottomRectangles(event));
        }
        eventErea.appendChild(eventItem);
    });
}
function initBottomRectangles(event) {
    
    const eventLabel = document.createElement('span');
    eventLabel.innerHTML = `:זירת האירוע`;
    const img = document.createElement('img');
    img.src = event.event_photo;
    img.alt = "Event Photo";
    img.title = "Event Photo";
    const eventContainer = document.createElement('div');
    eventContainer.classList.add('event-item-container');
    eventContainer.appendChild(img);
    eventContainer.appendChild(eventLabel);
    
    return(eventContainer);
}