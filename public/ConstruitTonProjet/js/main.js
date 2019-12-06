$(document).ready(function() {
  $.getJSON("/ConstruitTonProjet/departementsLeroyMerlin.json", function (r) {
    console.log(r);
    
    var app = new Vue({
      el: '#app',
      data: {
        magasins: r
      }
    })
  })

});
