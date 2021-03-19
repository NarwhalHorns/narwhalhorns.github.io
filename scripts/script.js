$(document).ready(function () {
    var active = "person"

    $('#project-tab').click(function() {
        if (active = "person") {
            $('#projects').removeClass('hidden')
            $('#person').addClass('hidden')
            active = "projects"
        }
    })

    $('#person-tab').click(function() {
        if (active = "projects") {
            $('#person').removeClass('hidden')
            $('#projects').addClass('hidden')
            active = "person"
        }
    })
});