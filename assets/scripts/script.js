$(document).ready(function () {
    var active = "person"

    $('#project-tab').click(function() {
        if (active = "person") {
            $('#projects').removeClass('hidden')
            $('#person').addClass('hidden')
            $('#project-tab').addClass('tab-open')
            $('#person-tab').removeClass('tab-open')
            active = "projects"
        }
    })

    $('#person-tab').click(function() {
        if (active = "projects") {
            $('#person').removeClass('hidden')
            $('#projects').addClass('hidden')
            $('#person-tab').addClass('tab-open')
            $('#project-tab').removeClass('tab-open')
            active = "person"
        }
    })
});