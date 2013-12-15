// Filename: button-test.js  
// Timestamp: 2013.12.14-10:20:55 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: bttn.js

var buttonTest = (function() {

  return {
    attachBttn1 : function () {
      var mybttn = bttn({
        elemId : 'Bttn1',
        onClick : function (e) {
          if (mybttn.isActive()) {
            mybttn.deactivate(); 
          } else {
            mybttn.activate(); 
          }
          console.log('click1', mybttn.isActive());
        }
      });
      
      mybttn.activate();
      console.log(mybttn.isActive());
      mybttn.deactivate();
      console.log(mybttn.isActive());
        
      // make mybttn available through console
      window.mybttn = mybttn;
    },

    init : function () {
      var that = this;
      that.attachBttn1();
    }

  };
}());
