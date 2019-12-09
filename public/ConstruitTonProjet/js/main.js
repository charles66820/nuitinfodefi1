$(document).ready(function() {
  $.getJSON("/ConstruitTonProjet/departementsLeroyMerlin.json", function (r) {

    var app = new Vue({
      el: '#app',
      data: {
        magasins: r
      }
    });
    
    $("#filter").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#app tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  })

});
