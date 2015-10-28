var chirpApp = angular.module('chirpApp', ['ui.router', 'ngResource']);

chirpApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "../main.html",
    controller: "MainController",
    controllerAs: "vm"
  });

  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "../login.html",
    controller: "AuthController",
    controllerAs: "vm"
  });

  $stateProvider.state('register', {
    url: "/register",
    templateUrl: "../register.html",
    controller: "AuthController",
    controllerAs: "vm"
  });
});
