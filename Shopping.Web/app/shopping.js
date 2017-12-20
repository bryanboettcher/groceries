function shoppingController($scope) {

    $scope.items = [];

    $scope.newname = '';
    $scope.newquantity = 0;

    $scope.addItem = function(name, quantity) {
        $scope.items.push({
            name: name,
            quantity: quantity
        });

        $scope.totalItems = $scope.items.length;
        $scope.newname = '';
    }

    $scope.removeItem = function(name) {

        let index;
        for (index = 0; index < $scope.items.length; index++) {
            if ($scope.items[index].name === name) {
                $scope.items.splice(index, 1);
                return;
            }
        }

        $scope.totalItems = $scope.items.length;
    };

}