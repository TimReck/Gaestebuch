(function () {
  'use strict';

  angular
    .module('app')
    .controller('GastEditCtrl', GastEditCtrl);

  GastEditCtrl.$inject = ['httpservice'];

  function GastEditCtrl(httpservice) {
    var self = this;

    self.items = httpservice.items;
    self.item = httpservice.item;

    console.log(self.item);

    self.edit = function (id) {
      return httpservice.editItem(id);
    }


  }
})();