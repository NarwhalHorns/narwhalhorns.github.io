$(document).ready(function () {
    var active = "projects";

    $('#project-tab').click(function() {
        if (active = "person") {
            $('#projects').removeClass('hidden');
            $('#person').addClass('hidden');
            $('#project-tab').addClass('tab-open');
            $('#person-tab').removeClass('tab-open');
            active = "projects";
        }
    });

    $('#person-tab').click(function() {
        if (active = "projects") {
            $('#person').removeClass('hidden');
            $('#projects').addClass('hidden');
            $('#person-tab').addClass('tab-open');
            $('#project-tab').removeClass('tab-open');
            active = "person"
        }
    });

    $('.project').click(function() {
        $('#'+$(this).attr('id')+'.modal').addClass('open');
    });

    $('.modal-close, .modal-overlay').click(function() {
        $('#'+$(this).attr('id')+'.modal').removeClass('open');
    });
});