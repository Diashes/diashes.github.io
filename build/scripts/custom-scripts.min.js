/// <reference path="../typings/tsd.d.ts"/>
angular.module('Hyrbyt')
    .config(function ($routeProvider) {
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
var Helpers;
(function (Helpers) {
    function addDirective(directive, moduleName) {
        angular.module(moduleName).directive(directive.IID, function () { return directive; });
    }
    Helpers.addDirective = addDirective;
    function addController(controller, moduleName) {
        angular.module(moduleName).controller(controller.IID, controller);
    }
    Helpers.addController = addController;
})(Helpers || (Helpers = {}));
// module App.Controllers {
//
//   export class MainController implements IController {
//     public IID :string = 'MainController';
//
//     public items :Array<Object> = [
//       {
//         name: "Lampa",
//         type: "donation"
//       },
//       {
//         name: "Bord",
//         type: "dontaion"
//       },
//       {
//         name: "Böcker",
//         type: "donation"
//       },
//       {
//         name: "Symaskin",
//         type: "rent"
//       }
//     ]
//
//     constructor() {
//       console.log('maincontrl');
//     }
//   }
//
//   angular.module('Hyrbyt').controller(MainController);
// }
/// <reference path="../../_references.d.ts" />
var App;
(function (App) {
    var Directives;
    (function (Directives) {
        var CardDirective = (function () {
            function CardDirective() {
                this.IID = 'card';
                this.restrict = 'E';
                this.templateUrl = 'card.template.html';
                this.controller = App.Controllers.CardController;
                this.controllerAs = 'card';
                console.log('Card');
            }
            return CardDirective;
        })();
        Directives.CardDirective = CardDirective;
        angular.module('Hyrbyt').directive('card', function () { return { template: 'CAAAAARD' }; });
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
/// <reference path="_references.d.ts"/>
console.log('wadsaf');
angular.module('Hyrbyt', ['ngRoute']);
// .directive('cardTest', function() { return { template: 'directive' }});
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var CardController = (function () {
            function CardController() {
            }
            return CardController;
        })();
        Controllers.CardController = CardController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=scripts.js.map