function switchMode() {
    var body = document.body;
    if (body.classList.contains('desktop-mode')) {
        // Switch to mobile mode
        body.classList.remove('desktop-mode');
        document.getElementById('popup').style.display = 'block';
    } else {
        // Switch to desktop mode
        body.classList.add('desktop-mode');
        document.getElementById('popup').style.display = 'none';
    }
}

// Check if in mobile mode on page load and show popup
window.onload = function() {
    if(window.innerWidth <= 767) { // Assuming mobile mode if screen width is less than or equal to 767px
        document.getElementById('popup').style.display = 'block';
    }
};