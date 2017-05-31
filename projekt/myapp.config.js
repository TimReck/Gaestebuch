(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false),

      $routeProvider
        .when('/gastList', {
          templateUrl: 'gastList.html',
          controller: 'GastListCtrl',
          controllerAs: 'gaesteListe'
        }).

        when('/gastCreate', {
          templateUrl: 'gastCreate.html',
          controller: 'GastCreateCtrl',
          controllerAs: 'gastCreate'
        }).

        when('/gastEdit', {
          templateUrl: 'gastEdit.html',
          controller: 'GastEditCtrl',
          controllerAs: 'gastEdit'
        }).

        otherwise({
          templateUrl: 'start.html'
        });
  }
})();