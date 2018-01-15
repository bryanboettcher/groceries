// define the root application
var app = angular.module('ShoppingApp', [/* no dependencies */]);

// define the main controller
//          For<ShoppingController> Use<shoppingController>
app.controller('ShoppingController', shoppingController);

app.service('PersistenceService', fakePersistenceService);