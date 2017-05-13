resumeApp.factory('ResumeFactory', ['$http', function($http) {
    var factoryResume = { list: [] }; //FIXME: What is this importing?

    // getResume();  // NOTE: See 'ResumeFactory.getResume();' in the controller.  Calling from factory loads data only when factory.js file is loaded while calling from controller.js triggers data call whenever controller is called (client side click).

    function getResume() {
        $http({
            method: 'GET',
            url: '/resume'
        }).then(function(response) {
            console.log('response from factory: ', response);
            console.log('response.data from factory: ', response.data);

            factoryResume.list = response.data;
        });
    }
    return { // NOTE: public API, if not here, controller won't see it
        // NOTE: left side matches controller.js: right side matches factory.js
        completeResume: factoryResume, // from resume.controller - '$scope.resumeDocument = ResumeFactory.completeResume'
        getResume: getResume
    };
}]);
console.log("resume.factory.js is run");