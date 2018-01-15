'use strict';

function shoppingController($scope, PersistenceService) {

    $scope.shoppingList = [];
    $scope.cart = [];

    $scope.webtext = {
        add: 'Add',
        remove: 'Remove',
        purchase: 'Move to cart',
        load: 'Update from server'
    };

    $scope.newname = '';
    $scope.newquantity = 0;

    $scope.addItemFromPage = function() {

        $scope.addItem($scope.newname, $scope.newquantity);
        $scope.newname = '';
        $scope.newquantity = 0;

    };

    $scope.addItem = function(name, quantity) {

        name = name.trim();

        if (!name) return;
        if (!quantity) return;

        let list = $scope.shoppingList;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name.toLowerCase() === name.toLowerCase()) {
                list[i].quantity = quantity;
                return;
            }
        }

        let cart = $scope.cart;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name.toLowerCase() === name.toLowerCase()) {
                return;
            }
        }

        list.push({
            name: name,
            quantity: quantity
        });
    };

    $scope.removeItem = function (name) {

        let index;
        for (index = 0; index < $scope.shoppingList.length; index++) {
            if ($scope.shoppingList[index].name.toLowerCase() === name.toLowerCase()) {
                $scope.shoppingList.splice(index, 1);
                return;
            }
        }
    };

    $scope.purchaseItem = function(name) {

        let item = undefined;
        let list = $scope.shoppingList;

        for (let i = 0; i < list.length; i++) {
            if (list[i].name === name) {
                item = list[i];
                break;
            }
        }

        if (!item) return;

        $scope.cart.push(item);

        $scope.removeItem(name);
    }

    $scope.loadFromPersistence = function() {
        $scope.shoppingList = PersistenceService.load();
    }
}