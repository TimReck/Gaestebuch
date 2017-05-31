(function () {
  'use strict';

  angular
    .module('app')
    .controller('GastCreateCtrl', GastCreateCtrl);

  GastCreateCtrl.$inject = ['httpservice'];

  function GastCreateCtrl(httpservice) {
    var self = this;

    self.items = httpservice.items;

    self.add = function () {
      return httpservice.addItem(self.vorname, self.nachname, self.alter);
    }

  }
})();