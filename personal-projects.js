var selectedLink = "Personal Projects";

$('#agile-made-simple').click((function() {
    expandOrCollapse('#agile-made-simple-content');
}));

$('#api-share').click((function() {
    expandOrCollapse('#api-share-content');
}));

$('#robot-waiter').click((function() {
    expandOrCollapse('#robot-waiter-content');
}));

$('#legends-of-the-seven-seas').click((function() {
    expandOrCollapse('#legends-of-the-seven-seas-content');
}));

// Selector is the element selector
// Expand being true will display, expand being false will hide
var expandOrCollapse = function(selector) {
    $(selector).slideToggle(500);
}

$(document).ready((function(){
    $('.project-content').toggleClass('hidden');
}));