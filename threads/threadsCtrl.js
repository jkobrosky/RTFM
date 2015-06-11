var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray) {
	$scope.threads = $firebaseArray(threadsRef);

	$scope.createThread = function(username, title) {
		$scope.threads.$add({
			username: username,
			title: title
		});
		$scope.newThreadTitle = '';
		$scope.username = '';
	}

});