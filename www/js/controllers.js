app.controller('CampaignsCtrl', function($scope, $firebase){
  var ref = new Firebase("https://wolfberry.firebaseio.com/campaigns");
  var sync = $firebase(ref);
  $scope.cardCounter = 1;
  var campaignsArray = sync.$asArray();
  $scope.campaigns = campaignsArray;
  // $scope.campaigns = [
  //   {title: "Campaign 1"},
  //   {title: "Campaign 2"},
  //   {title: "Campaign 3"}
  // ]
  $scope.cardLeft = function(){
  	$scope.cardCounter = $scope.cardCounter+1;
  	var i = ($scope.cardCounter)*-320;
  	i = String(i) + "px";
  	document.getElementsByClassName("campaignItem")[0].style.marginLeft = i;
  };
  $scope.cardRight = function(){
  	$scope.cardCounter = $scope.cardCounter-1;
  	var i = ($scope.cardCounter)*-320;
  	i = String(i) + "px";
  	document.getElementsByClassName("campaignItem")[0].style.marginLeft = i;
  };

})
