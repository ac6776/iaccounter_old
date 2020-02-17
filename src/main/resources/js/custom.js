var $ = require('jquery');
window.jQuery = $;
window.$ = $;

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});