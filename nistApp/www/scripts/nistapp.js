window.onload = function () {
    init();
}

function init() {
    var myecho = "this is an echo";



    var familyBtn = document.getElementById("family");
    familyBtn.addEventListener('click', familyContent(myecho));

    var subsecBtn = document.getElementById("subsec");
    subsecBtn.addEventListener('click', subsecContent);

    document.addEventListener('click', hideDropdown);

}

function familyContent(myecho) {
    console.log(myecho);
    document.getElementById("familyDropdown").classList.toggle("show");
    // '+' can be used to concatenete string. use results from query to populate innerhtml.
    /*document.getElementById("familyDropdown").innerHTML = '<a href="#">Link 9</a>';*/
}
function subsecContent() {
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

