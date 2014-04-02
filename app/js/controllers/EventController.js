'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData) {

		$scope.snippet = '<span style="color:red">hi there</span>';
		$scope.boolValue = true;
		$scope.sortorder = 'name';
		$scope.mystyle = {color:'red'};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;
		$scope.event = eventData.event;

		$scope.UpVoteSession = function(sessionsingle) {
			sessionsingle.upVoteCount++;
		};

		$scope.downVoteSession = function(sessionsingle) {
			sessionsingle.upVoteCount--
		};
	}
	);
