app.controller("searchCtrl", [
    "$scope",
    "Movies",
    function($scope, Movies) {
        $scope.setActive("nSearch");
        $scope.movies = Movies;
        $scope.textSearch = '';
        $scope.lengthCheck = function() {
            if ($scope.textSearch.length === 0) return true
            else return false
        }
        $scope.page = 1;
        $scope.endPage;
        Movies.totalResults % 10 != 0 ?
            ($scope.endPage = Math.trunc(Movies.totalResults / 10) + 1) :
            ($scope.endPage = Movies.totalResults);
        $scope.checkImage = function(image) {
            if (image != "N/A") return image;
            else return "./img/no-image.svg";
        };
        $scope.search = function() {
            $scope.page = 1;
            Movies.search($scope.textSearch, $scope.page);
        };
        $scope.cleanFilter = function() {
            if ($scope.textSearch.length === 0) {
                $scope.page = 1;
                Movies.search($scope.textSearch, $scope.page);
            }
        };
        $scope.firstPage = function() {
            $scope.page = 1;
            Movies.search($scope.textSearch, $scope.page);
        };
        $scope.finalPage = function(page) {
            $scope.page = page;
            $scope.endPage = page;
            Movies.search($scope.textSearch, $scope.page);
        };
        $scope.pageUp = function() {
            if ($scope.page === $scope.endPage) return;
            Movies.totalResults % 10 != 0 ?
                ($scope.endPage = Math.trunc(Movies.totalResults / 10) + 1) :
                ($scope.endPage = Movies.totalResults);
            $scope.page++;
            Movies.search($scope.textSearch, $scope.page);
        };
        $scope.pageDown = function() {
            if ($scope.page === 1) return;
            Movies.totalResults % 10 != 0 ?
                ($scope.endPage = Math.trunc(Movies.totalResults / 10) + 1) :
                ($scope.endPage = Movies.totalResults);
            $scope.page--;
            Movies.search($scope.textSearch, $scope.page);
        };
    },
]);