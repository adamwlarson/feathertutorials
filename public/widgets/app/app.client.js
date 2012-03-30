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
      
      //Load the inital content here, which is "What Is Feather"
      //Then listen for events from the tutorialNav widget for examples
      //and tutorials that need be displayed
      

      }
    }
  });
})();