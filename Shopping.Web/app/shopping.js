
function shoppingController($scope, GreetingService) {
    $scope.greeting = GreetingService.getGreeting();
    GreetingService.doVoidMethodThingy();
    //$scope.greeting = 'hi';
}