$(document).ready(function() {
  $('#portfolio a').click(function(ev) {
    ev.preventDefault();
    $('#portfolio .project-thumbnail').hide();
    $('#portfolio .project-thumbnail' + this.dataset.filter).show();
  });
});