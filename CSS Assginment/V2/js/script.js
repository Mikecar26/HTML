function hideNav(hide, show)
{
    var nav = document.getElementById(hide),
    body = document.body;

    nav.addEventListener('click', function(e) {
        body.className = body.className? '' : 'with_nav';
        e.preventDefault();
    })
}