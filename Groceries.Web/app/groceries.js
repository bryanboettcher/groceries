// define the root application
var app = angular.module('GroceriesApp', [/* no dependencies */]);


app.service('GreetingService', greetingService);

// define the main controller
app.controller('HelloWorldController', helloWorldControllerFunction);


function greetingService() {
    return {
        getGreeting: function() { return 'hello world from service'; }
    };
}

function helloWorldControllerFunction($scope, GreetingService) {
    $scope.greeting = GreetingService.getGreeting();
    GreetingService.doVoidMethodThingy();
    //$scope.greeting = 'hi';
}