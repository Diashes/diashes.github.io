module Helpers {
  export function addDirective(directive :IDirective, moduleName :string) {
    angular.module(moduleName).directive(directive.IID, () => { return directive });
  }

  export function addController(controller :any, moduleName :string) {
    angular.module(moduleName).controller(controller.IID, controller );
  }
}
