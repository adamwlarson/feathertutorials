feather.ns("feathertutorials");
(function() {
  feathertutorials.app = feather.Widget.create({
    name: "feathertutorials.app",
    path: "widgets/app/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        var me = this;
        me.get( ".topBar" ).effect("bounce", { times: 3 }, 300);
        me.domEvents
        //me.get( ".topBar" ).hide( "drop", { direction: "down", mode: "show"}, 1000);
      }
    }
  });
})();