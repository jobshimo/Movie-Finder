var app = angular.module("app01.controllers", []);

app.controller("mainCtrl", [
    "$scope",
    function($scope) {
        $scope.year = new Date().getUTCFullYear();
        $scope.navbar = "shared/navbar.html";
        $scope.footer = "shared/footer.html";
        $scope.card = "core/search/card/card.html";
        $scope.setActive = function(option) {
            $scope.nSearch = "nav-link";
            $scope.nAbout = "nav-link";
            $scope[option] = "nav-link active";
        };
    },
]);