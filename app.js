$(document).ready(function() {
  $('#portfolio a').click(function(ev) {
    ev.preventDefault();
    if ($(this).hasClass('all')) {
      if ($(this).hasClass('inactive')) {
        $('#portfolio a').removeClass('inactive');
        $('#portfolio .project-thumbnail').removeClass('fadeOut');
      } else {
        $('#portfolio a').addClass('inactive');
        $('#portfolio .project-thumbnail').addClass('fadeOut');
      }
    } else {
      if ($(this).hasClass('inactive')) {
        if($('#portfolio a.inactive').length == 2) {
          $('#portfolio a.all').removeClass('inactive');
        }
      } else {
        $('#portfolio a.all').addClass('inactive');
      }
      $(this).toggleClass('inactive');
      $('#portfolio .project-thumbnail' + this.dataset.filter).toggleClass('fadeOut');
    }
  });
});