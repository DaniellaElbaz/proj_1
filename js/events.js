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

        const p = document.createElement('p');
        p.innerHTML = `
            <strong>תאריך:</strong> ${event.date_and_time} <br>
            <strong>מקום האירוע:</strong> ${event.event_place} <br>
            <strong>סטטוס:</strong> ${event.event_status} <br>
            <strong>צפיה בדוח אירוע/מילוי דוח אירוע:</strong> <br>
        `;
        eventItem.appendChild(p);

        if (event.event_photo) {
            const img = document.createElement('img');
            img.src = event.event_photo;
            img.alt = "Event Photo";
            img.title = "Event Photo";
            eventItem.appendChild(img);
        }

        if (event.event_map) {
            const map = document.createElement('img');
            map.src = event.event_map;
            map.alt = "Event Map";
            map.title = "Event Map";
            eventItem.appendChild(map);
        }

        eventErea.appendChild(eventItem);
    });
}
