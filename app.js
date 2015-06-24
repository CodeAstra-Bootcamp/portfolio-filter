$(document).ready(function() {
  $('#portfolio a').click(function(ev) {
    ev.preventDefault();
    if (this.dataset.category == "all") {
      $('#portfolio .project-thumbnail').show();
    } else {
      $('#portfolio .project-thumbnail').hide();
      $('#portfolio .project-thumbnail.' + this.dataset.category).show();
    }
  });
});