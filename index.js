function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function hideLoader() {
    setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 2000);
}
