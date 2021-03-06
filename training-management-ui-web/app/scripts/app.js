'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
  .module('yoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/kelas', {
        templateUrl: 'views/kelas.html',
        controller: 'KelasCtrl'
      })
      .when('/institusi', {
        templateUrl: 'views/institusi.html',
        controller: 'InstitusiCtrl'
      })
      .when('/materi', {
        templateUrl: 'views/materi.html',
        controller: 'MateriCtrl'
      })
      .when('/peserta', {
        templateUrl: 'views/peserta.html',
        controller: 'PesertaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
