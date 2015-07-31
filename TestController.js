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

            if(item.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });

        return result;
    };
});

function TestController($scope) {

    $scope.contacts = ["me@email.com", "hello@world.com"];

    $scope.add = function() {

        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        if(!re.test($scope.newcontact)) {
            alert($scope.newcontact + " is not a valid email address");
            return;
        }

        $scope.contacts.push($scope.newcontact);
        $scope.newcontact="";
    }
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