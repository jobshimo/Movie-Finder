app.config(function($routeProvider) {
    $routeProvider
        .when("/search", {
            templateUrl: "core/search/search.html",
            controller: 'searchCtrl'
        })
        .when("/about", {
            templateUrl: "core/about/about.html",
            controller: 'aboutCtrl'
        })
        .otherwise({
            redirectTo: "/search",
        });
});