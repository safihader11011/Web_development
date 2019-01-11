$(document).ready(function () {
    $("#project_one").hover(function () {
        $("#project_two").toggle();
    });
    $("#project_one_navactive").hover(function () {
        $("#project_two").toggle();
    });
    $("#project_two").hover(function () {
        $("#project_two").toggle();
    });
    $("#blog_one").hover(function () {
        $("#blog_two").toggle();
    });
    $("#blog_one_navactive").hover(function () {
        $("#blog_two").toggle();
    });
    $("#blog_two").hover(function () {
        $("#blog_two").toggle();
    });
});