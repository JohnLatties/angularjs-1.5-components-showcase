(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courseActions', {
  		templateUrl: 'app/courses/components/course-actions/course-actions.html',
	  	bindings: {
				//inputs
	  		course: '<',

        //outputs
        onEnroll: '&',
        onLike: '&'
	  	},
			controller: CourseActionsController
	  });

		CourseActionsController.$inject = ['datacontext'];

		function CourseActionsController(datacontext) {
			var vm = this;

			vm.toggleEnrollCourse = function(course) {
				console.log('CourseActionsController::toggleEnrollCourse');
        console.log(course);
				datacontext.courses.enroll(course.id).then(function() {
					return vm.onEnroll();
				});
				//vm.galleryCtrl.enrollCourse
			};

			vm.toggleLikeCourse = function(course) {
				console.log('CourseActionsController::toggleLikeCourse');
        console.log(course);
				datacontext.courses.like(course.id).then(function() {
					return vm.onLike();
				});
				//vm.galleryCtrl.enrollCourse
			};
		}
})();