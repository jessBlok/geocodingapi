


app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        

        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controller: 'TestCtrl'
        });
        
});

