/// <reference path="../../_references.d.ts" />

module App.Directives {

  export class CardDirective implements IDirective {
    public IID :string = 'card';
    public restrict :string = 'E';
    public templateUrl :string = 'card.template.html';
    public controller :Interfaces.ICardController = Controllers.CardController;
    public controllerAs :string = 'card';

    constructor() {
      console.log('Card');
    }
  }

  angular.module('Hyrbyt').directive('card', function() { return { template: 'CAAAAARD' } });
}
