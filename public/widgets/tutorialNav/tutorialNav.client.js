feather.ns("feathertutorials");
(function() {
  feathertutorials.tutorialNav = feather.Widget.create({
    name: "feathertutorials.tutorialNav",
    path: "widgets/tutorialNav/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        var me = this;
        //Bind click events
        me.domEvents.bind( me.get("#tut1"), "click", function(e){
          alert( "Hello" );
        });
      }
    }
  });
})();