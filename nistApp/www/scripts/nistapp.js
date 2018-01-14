window.onload = function () {
    init();
}

function init() {
    var familyBtn = document.getElementById("family");
    familyBtn.addEventListener('click', familyContent);

    var subsecBtn = document.getElementById("subsec");
    subsecBtn.addEventListener('click', subsecContent);

    document.addEventListener('click', hideDropdown);

}

function familyContent(event) {
    document.getElementById("familyDropdown").classList.toggle("show");
}
function subsecContent(event) {
    document.getElementById("subsecDropdown").classList.toggle("show");
}


function hideDropdown(event) {
    // Close the dropdown menu if the user clicks outside of it
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

