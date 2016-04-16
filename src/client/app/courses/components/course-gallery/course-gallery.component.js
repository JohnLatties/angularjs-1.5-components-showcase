(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courseGallery', {
  		templateUrl: 'app/courses/components/course-gallery/course-gallery.html',
			controller: CourseGalleryController,
	  	bindings: {
				//inputs
	  		courses: '<'

				//outputs
	  	}
	  });

		function CourseGalleryController() {
			var vm = this;

			vm.$onInit = function() {
				console.log('CourseGalleryController::$onInit');
			};
		}
})();