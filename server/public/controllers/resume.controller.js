// var resumeApp = angular.module('resumeApp', [xeditable, route]);
resumeApp.controller('ResumeController', ['ResumeFactory', function(ResumeFactory) {
        console.log("ResumeController is loaded");
        var $scope = this;
        // $scope.newResume = {};
        $scope.resumeDocument = ResumeFactory.completeResume;
        ResumeFactory.getResume(); // NOTE: Calling from here triggers data call whenever controller is called (client side click).  // NOTE: In comparison, calling this function from the factory loads the data only when factory.js file is loaded.











        // $scope.firstExampleVariable = 'firstVar';
        // $scope.secondExampleVariable = 'secondVar';
        // $scope.thirdExampleVariable = {}; // $scope.newFavoriteThing = {};
        // // DOM Goal = $scope.thirdExampleVariable = {propertyOne: 'valueOne', propertyTwo: '1.2'};
        // $scope.arrayVariable = [ // an array of objects  // $scope.krissFavoriteThings = [
        //     {
        //         propertyOne: 'valueOne',
        //         propertyTwo: 1.2
        //     },
        //     {
        //         propertyOne: 'valueTwo',
        //         propertyTwo: 2.2
        //     },
        //     {
        //         propertyOne: 'valueThree',
        //         propertyTwo: 3.2
        //     }
        // ];
        // $scope.addThirdExampleVariable = function() {
        //     console.log('You did it!');
        //     $scope.arrayVariable.push(angular.copy($scope.thirdExampleVariable));
    }
});
console.log("resume.controller.js is run");