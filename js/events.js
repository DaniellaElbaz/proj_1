let eventErea;
const sortContainer=document.getElementById('sort-container');
window.onload = () => {
    fill_sort_container();
    eventErea = document.getElementById("events-container");
    fetch("../data/Events.json")
        .then(response => response.json())
        .then(data => init_member_details(data));
};
        function fill_sort_container(){
            const sort = document.createElement('div');
            sort.classList.add('sort');
            const sortItem = document.createElement('div');
            sortItem.classList.add('sort-item');
            const sortInput =document.createElement('input');
            sortInput.placeholder="חיפוש";
            sortInput.id="search";
            sort.appendChild(sortInput);
            const clock = document.createElement('img');
            clock.src = "../images/clock_down.png";
            clock.alt = "clock";
            clock.title = "clock";
            sortItem.appendChild(clock);
            const filter = document.createElement('img');
            filter.src = "../images/un_filter.png";
            filter.alt = "filter";
            filter.title = "filter";
            sortItem.appendChild(filter);
            const box = document.createElement('img');
            box.src = "../images/checkbox.png";
            box.alt = "checkbox";
            box.title = "checkbox";
            sortItem.appendChild(box);
            sortContainer.appendChild(sort);
            sortContainer.appendChild(sortItem);
        }
        function init_member_details(data) {
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
            initRectangles(user);
        }

        function initRectangles(user) {
            eventErea = document.getElementById("events-container");
            eventErea.innerHTML = '';
            user.events.forEach(event => {
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
                    const button = document.createElement('button');
                    button.innerText = 'לחץ כאן';
                    button.addEventListener('click', () => {
                        window.location.href = `event_report.html?eventId=${event.id}`;
                    });
                    eventShow.innerHTML = `:צפיה בדוח אירוע / מילוי דוח אירוע `;
                    eventShow.appendChild(button);
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
            return eventContainer;
        }
