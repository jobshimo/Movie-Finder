var app = angular.module("app01.services", []);

app.factory("Movies", [
    "$http",
    "$q",
    "$rootScope",
    function($http, $q, $rootScope) {
        var self = {
            loading: false,
            ok: undefined,
            msg: "",
            data: [],
            totalResults: 0,
            endPage: 0,
            notFound: false,
        };

        self.search = function(textSearch, page) {
            get(textSearch, page);
            return self;
        };
        self.getMovies = function(textSearch, page) {
            self.loading = true;
            var q = $q.defer();
            if (!textSearch) textSearch = "star wars";

            $http
                .get(
                    "http://www.omdbapi.com/?apikey=fa0b0b6d&s=" +
                    textSearch +
                    "&page=" +
                    page
                )
                .then(
                    function success(response) {
                        q.resolve(response.data);
                    },
                    function error(reject) {
                        q.reject(reject);
                    }
                );
            return q.promise;
        };

        function get(textSearch, page) {
            $rootScope.promise = self.getMovies(textSearch, page);
            $rootScope.promise.then(
                function(data) {
                    if (data.Error === "Movie not found!" || data.Error === "Too many results.") self.notFound = true;
                    else self.notFound = false;
                    self.loading = false;
                    self.ok = true;
                    self.msg = "success";
                    self.data = data.Search;
                    self.totalResults = parseInt(data.totalResults, 10);
                    self.totalResults % 10 != 0 ?
                        (self.endPage = Math.trunc(self.totalResults / 10) + 1) :
                        (self.endPage = Math.trunc(self.totalResults / 10));
                },
                function(error) {
                    self.loading = false;
                    self.ok = false;
                    self.msg = "data error ==> " + error.data.Error;
                    console.error(self.msg);
                }
            );
        }

        get();

        return self;
    },
]);