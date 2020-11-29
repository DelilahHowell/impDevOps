$(function() {
  console.log('team-script.js loaded & ready.')

  $(".alert").hide().show(1000);

  $('#imposterLink').click(function(e) {
      e.preventDefault();
      window.open('https://en.wikipedia.org/wiki/Impostor_syndrome', '_blank');
      window.open('https://www.codingdojo.com/blog/programmer-imposter-syndrome', '_blank');
  });

});