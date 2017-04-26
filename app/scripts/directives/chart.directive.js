(function() {
	'use strict';

	function chartCtrl() {
		var vm = this;

	};

	angular
		.module('ngD3App')
		.directive('chart', chart);

	function chart() {
		var directive = {
			templateUrl: 'views/chart.html',
			controller: chartCtrl,
			scope: {
				type: '='
			},
			link: linkFn
		};

		return directive;

		function linkFn(scope, element, attr) {
			scope.version = d3.version;

			var canvas = d3.select('.chart').append('svg')
				.attr('width', 760)
				.attr('heigh', 900);
			canvas.selectAll('g')
				.data('/assets/usa-states.json')
				.enter()
				.append('g');
		}
	};

})();