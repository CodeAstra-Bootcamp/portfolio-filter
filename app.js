$(document).ready(function() {
  window.firstLoad = true;

  $('#portfolio a').click(function(ev) {
    ev.preventDefault();
    if (window.firstLoad) {
      $('#portfolio a').not('.all').addClass('inactive');
      $('#portfolio .project-thumbnail').addClass('fadeOut');
    }
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
        if($('#portfolio a.inactive').not('.all').length == 1) {
          $('#portfolio a.all').removeClass('inactive');
        } else {
          $('#portfolio a.all').addClass('inactive');
        }
      } else {
        $('#portfolio a.all').addClass('inactive');
      }
      $(this).toggleClass('inactive');
      $('#portfolio .project-thumbnail' + this.dataset.filter).toggleClass('fadeOut');
    }
    window.firstLoad = false;
  });
});