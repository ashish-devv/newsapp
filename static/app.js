
var app = angular.module("myapp", []);
app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }]);

// app.config(function($routeProvider){
//     $routeProvider
//     .when("/headlines",{
//         templateUrl: "templates/headlines.html",
//         controller: "headlinescontroller"
//     })
//     .when("/world",{
//         templateUrl: "templates/world.html",
//         controller: "headlinescontroller"
//     })
//     .otherwise
    
    
// });


app.controller('headlinescontroller',($scope,$http)=>{
    var URL="http://127.0.0.1:5000/api/headlines";

    $http.get(URL).then(
        (response)=>{
            console.log("App running Successfully.✔✔✔")
            $scope.articles=response.data.articles;
            //console.log($scope.articles);

        }
        ,
        (error)=>{
            console.log(error);

        });
});

//this will be removed after ngroute



app.controller('sportscontroller',($scope,$http)=>{
    var URL="http://127.0.0.1:5000/api/sports";

    $http.get(URL).then(
        (response)=>{
            console.log("App running Successfully.✔✔✔")
            $scope.articles=response.data.articles;
            //console.log($scope.articles);

        }
        ,
        (error)=>{
            console.log(error);

        });
});

app.controller('techcontroller',($scope,$http)=>{
    var URL="http://127.0.0.1:5000/api/tech";

    $http.get(URL).then(
        (response)=>{
            console.log("App running Successfully.✔✔✔")
            $scope.articles=response.data.articles;
            //console.log($scope.articles);

        }
        ,
        (error)=>{
            console.log(error);

        });
});


app.controller('entercontroller',($scope,$http)=>{
    var URL="http://127.0.0.1:5000/api/enter";

    $http.get(URL).then(
        (response)=>{
            console.log("App running Successfully.✔✔✔")
            $scope.articles=response.data.articles;
            //console.log($scope.articles);

        }
        ,
        (error)=>{
            console.log(error);

        });
});