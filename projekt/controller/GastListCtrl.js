(function () {
  'use strict';

  angular
    .module('app')
    .controller('GastListCtrl', GastListCtrl);

  GastListCtrl.$inject = ['httpservice'];

  function GastListCtrl(httpservice) {
    var self = this;

    self.items = httpservice.items;
    self.number = httpservice.number;

    self.deleteItem = function (id) {
      for (var i = 0; i < self.items.length; i++) {
        if (self.items[i].id == id) {
          self.items.splice(i, 1);
        }
      }
    }

    self.load = function (id) {
      return httpservice.loadItem(id);
    };
  }

})();
