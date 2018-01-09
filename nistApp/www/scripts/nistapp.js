window.onload = function () {
    init();
}

function init() {
    var familybtn = document.getElementById("family");
    familybtn.addEventListener('click', familycontent);

    document.addEventListener('click', hideDropdown);

}

function familycontent(event) {
    document.getElementById("myDropdown").classList.toggle("show");
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

