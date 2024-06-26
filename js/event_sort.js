const sortContainer=document.getElementById('sort-container');
function fill_sort_container(){
    
    const sortItem = document.createElement('div');
   
    sortItem.classList.add('sort-item');
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
    sortContainer.appendChild(sortItem);
    
}