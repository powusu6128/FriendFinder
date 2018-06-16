var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // app.get("/api/friends/:friend", function(req,res){
  //   res.friendsData[0];
  // })

  app.post("/api/friends", function(req, res) {
    // This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    var newFriend = req.body;
    var currentMatch;
    var currentDiff;
    var bestDiff;
    var friends = friendsData.list;

    for (var i = 0; i < friends.length; i++) {
      currentDiff = 0;
      for (var j = 0; j < 10; j++) {
        currentDiff +=Math.abs((parseInt(newFriend.scores[j]) - friends[i].scores[j]));
      }
      if (i === 0) { //our first compare, no one to check against
        currentMatch = 0;
        bestDiff = currentDiff;
      } else {
        if (currentDiff < bestDiff) {
          currentMatch = i;
          bestDiff = currentDiff;
        }
      }
    }
    friends.push(newFriend);
    //display best match
    res.send(friends[currentMatch]);
  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    console.log(friendsData);
  });
};