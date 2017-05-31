(function () {
  'use strict';

  angular
    .module('app')
    .factory('httpservice', httpservice);

  httpservice.$inject = ['$http', '$location'];

  function httpservice($http, $location) {
    var items = [];
    var item = [];
    var number;

    getItems();

    return {
      items,
      item,
      number,
      addItem: addItem,
      loadItem: loadItem,
      editItem: editItem
    };

    /////////////////////////////////////////////////////

    function getItems() {
      return $http.get('items.json')
        .then(getComplete);

      function getComplete(response) {
        console.log(response.data);

        response.data.forEach(function (item) {
          items.push(item);
        });

        number = items[items.length - 1].id + 1;
      }
    }
    //Neuen Gast hinzufügen
    function addItem(vorname, nachname, alter) {
      var gast = {
        vorname: vorname,
        nachname: nachname,
        alter: alter,
        id: number++
      };
      items.push(gast);
      $location.path('gastList');
    }

    //**Gast bearbeiten**// 
    //Profil laden
    function loadItem(id) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
          item.vorname = items[i].vorname;
          item.nachname = items[i].nachname;
          item.alter = items[i].alter;
          item.id = items[i].id;
        }
      }
    }
    //Profil editieren
    function editItem(id) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
          items[i].vorname = item.vorname;
          items[i].nachname = item.nachname;
          items[i].alter = item.alter;
        }
      }
      $location.path('gastList');
    }

  }
})();