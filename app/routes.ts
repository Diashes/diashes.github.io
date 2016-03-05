/// <reference path="../typings/tsd.d.ts"/>

angular.module('Hyrbyt')
.config(function($routeProvider :ng.route.IRouteProvider)
{
    $routeProvider

      .when('/', {
        templateUrl: 'views/main.view.html'
      })

      .when('/item', {
        templateUrl: 'views/item.view.html'
      })

      .otherwise({
        templateUrl: 'views/main.view.html'
      });
  });
