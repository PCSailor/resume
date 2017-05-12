var resumeApp = angular.module('resumeApp', [xeditable, route]);
resumeApp.controller('resumeController', function() {
    console.log("resumeController is loaded");
    var $scope = this;
    $scope.firstExampleVariable = 'firstVar';
    $scope.secondExampleVariable = 'secondVar';
    $scope.thirdExampleVariable = {}; // $scope.newFavoriteThing = {};
    // DOM Goal = $scope.thirdExampleVariable = {propertyOne: 'valueOne', propertyTwo: '1.2'};
    $scope.arrayVariable = [ // an array of objects  // $scope.krissFavoriteThings = [
        {
            propertyOne: 'valueOne',
            propertyTwo: 1.2
        },
        {
            propertyOne: 'valueTwo',
            propertyTwo: 2.2
        },
        {
            propertyOne: 'valueThree',
            propertyTwo: 3.2
        }
    ];
    $scope.addThirdExampleVariable = function() {
        console.log('You did it!');
        $scope.arrayVariable.push(angular.copy($scope.thirdExampleVariable));
    }
})