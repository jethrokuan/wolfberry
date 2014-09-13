app.controller('CampaignsCtrl', function($scope, $firebase){
  var ref = new Firebase("https://wolfberry.firebaseio.com/campaigns");
  var sync = $firebase(ref);
  var campaignsArray = sync.$asArray();
  $scope.campaigns = campaignsArray;
  // $scope.campaigns = [
  //   {title: "Campaign 1"},
  //   {title: "Campaign 2"},
  //   {title: "Campaign 3"}
  // ]
})
