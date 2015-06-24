$(document).ready(function() {
  $('#filters a').click(function(ev) {
    ev.preventDefault();
    if ($(this).hasClass('web')) {
      $('#portfolio .project-thumbnail').hide();
      $('#portfolio .project-thumbnail.web').show();
    } else if ($(this).hasClass('art')) {
      $('#portfolio .project-thumbnail').hide();
      $('#portfolio .project-thumbnail.art').show();
    } else if ($(this).hasClass('graphic')) {
      $('#portfolio .project-thumbnail').hide();
      $('#portfolio .project-thumbnail.graphic').show();
    } else if ($(this).hasClass('all')) {
      $('#portfolio .project-thumbnail').show();
    }
  });
});