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
    initReport(user,data);
}
