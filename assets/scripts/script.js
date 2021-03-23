$(document).ready(function () {
    // PERSON AND PROJECTS TAB CHANGING
    var active = "person";

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

    // HOBBIES
    var hobby_open = false;
    $('.hobby').click(function() {
        if (hobby_open == false) {
            hobby_open = $(this);
            $(this).addClass('hobby-open');
            $(this).children('.hobby-content').children('.hobby-info').removeClass('hidden');
            $(this).children('.hobby-content').children('.hobby-icon').addClass('vertical');
        } else if (hobby_open[0] == $(this)[0]) {
            hobby_open = false;
            $(this).removeClass('hobby-open');
            $(this).children('.hobby-content').children('.hobby-info').addClass('hidden');
            $(this).children('.hobby-content').children('.hobby-icon').removeClass('vertical');
        } else {
            var current = $('.hobby-open');
            current.removeClass('hobby-open');
            current.children('.hobby-content').children('.hobby-info').addClass('hidden');
            current.children('.hobby-content').children('.hobby-icon').removeClass('vertical');
            hobby_open = $(this);
            $(this).addClass('hobby-open');
            $(this).children('.hobby-content').children('.hobby-info').removeClass('hidden');
            $(this).children('.hobby-content').children('.hobby-icon').addClass('vertical');
        }
    });

    // SKILLS
    var skill_open = false;
    $('.skill').click(function() {
        if (skill_open == false) {
            skill_open = $(this);
            $(this).addClass('skill-open');
            $(this).children('.skill-content').children('.skill-info').removeClass('hidden');
            $(this).children('.skill-content').children('.skill-icon').addClass('vertical');
        } else if (skill_open[0] == $(this)[0]) {
            skill_open = false;
            $(this).removeClass('skill-open');
            $(this).children('.skill-content').children('.skill-info').addClass('hidden');
            $(this).children('.skill-content').children('.skill-icon').removeClass('vertical');
        } else {
            var current = $('.skill-open');
            current.removeClass('skill-open');
            current.children('.skill-content').children('.skill-info').addClass('hidden');
            current.children('.skill-content').children('.skill-icon').removeClass('vertical');
            skill_open = $(this);
            $(this).addClass('skill-open');
            $(this).children('.skill-content').children('.skill-info').removeClass('hidden');
            $(this).children('.skill-content').children('.skill-icon').addClass('vertical');
        }
    });

    // PROJECT MODAL OPEN AND CLOSING
    $('.project').click(function() {
        $('#'+$(this).attr('id')+'.modal').addClass('open');
    });

    $('.modal-close, .modal-overlay').click(function() {
        $('#'+$(this).attr('id')+'.modal').removeClass('open');
    });
});