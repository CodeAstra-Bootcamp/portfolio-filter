$(document).ready(function() {
  $('#portfolio a').click(function(ev) {
    ev.preventDefault();
    $('#portfolio .project-thumbnail').addClass('fadeOut');
    $('#portfolio .project-thumbnail' + this.dataset.filter).removeClass('fadeOut');
  });
});