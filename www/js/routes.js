angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.help', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

/**
tentang pengembang
**/
.state('menu.adam', {
  views: {
    'side-menu21': {
      templateUrl: 'templates/team/adam.html',
      controller: 'aboutCtrl'
    }
  }
})
.state('menu.cakra', {
  views: {
    'side-menu21': {
      templateUrl: 'templates/team/cakra.html',
      controller: 'aboutCtrl'
    }
  }
})


  .state('menu.faid', {
    views: {
      'side-menu21': {
        templateUrl: 'templates/team/faid.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.riski', {
    views: {
      'side-menu21': {
        templateUrl: 'templates/team/riski.html',
        controller: 'aboutCtrl'
      }
    }
  })

/**
END
**/
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
