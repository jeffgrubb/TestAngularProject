/**
 * Created by JeffWin7 on 7/31/2015.
 */

function TestController($scope) {

    $scope.contacts = ["me@email.com", "hello@world.com"];

    $scope.add = function() {
        $scope.contacts.push($scope.newcontact);
        $scope.newcontact="";
    }

}