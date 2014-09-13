// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', "firebase"])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/campaigns')

  $stateProvider.state('campaigns', {
    abstract: true,
    url: "/campaigns",
    views: {
      campaigns: {
        template: '<ion-nav-view></ion-nav-view>'
      }
    }
  })

  $stateProvider.state('campaigns.index', {
    url: '',
    templateUrl: 'templates/campaigns.html',
    controller: 'CampaignsCtrl'
  })

  $stateProvider.state('about', {
    url: "/about",
    views: {
      about: {
        templateUrl: 'templates/about.html'
      }
    }
  })
})
