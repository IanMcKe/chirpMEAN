var chirpApp = angular.module('chirpApp', ['ui.router', 'ngResource']);

chirpApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "../partials/main.html",
    controller: "MainController",
    controllerAs: "vm"
  });

  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "../partials/login.html",
    controller: "AuthController",
    controllerAs: "vm"
  });

  $stateProvider.state('register', {
    url: "/register",
    templateUrl: "../partials/register.html",
    controller: "AuthController",
    controllerAs: "vm"
  });
});
