/**
 * Created by JeffWin7 on 7/31/2015.
 */

var myModule = angular.module("myFilter", []);

myModule.filter('filterBy', function() {

    return function(items, searchString) {

        if(!searchString) return items;

        var result = [];

        searchString = searchString.toLowerCase();

        angular.forEach(items, function(item){

            if(item.email.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });

        return result;
    };
});

function TestController($scope, $http) {



    $http({method: 'POST', url: 'Data.json'}).success(function(data)
    {
        $scope.contacts = data; // response data
    });

    $scope.add = function() {

        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        if(!re.test($scope.newcontact.email)) {
            alert($scope.newcontact.email + " is not a valid email address");
            return;
        }

        if(!$scope.newcontact.name) {
            alert("Name cannot be blank");
            return;
        }

        $scope.contacts.push($scope.newcontact);
        $scope.newcontact=[];
    }
}

function GetData($scope, $http)
{

}

/*app.filter('searchFor', function() {

 return function(arr, searchString) {
 if(!searchString) return arr;

 var result = [];

 searchString = searchString.toLowerCase();

 angular.forEach(arr, function(item){

 if(item.value.toLowerCase().indexOf(searchString) !== -1) {
 result.push(item);
 }
 });
 };
 });
 */