module.exports = function(grunt) {
  // Do grunt-related things in here
  // automatically loads grunt task
  require('load-grunt-tasks')(grunt);

	grunt.initConfig({
	  	connect: {
		    server: {
		      options: {
		        port: 9001,
		        base: 'src',
		        livereload: true,
		         open: true,
		      }
		    }
		},

	 	watch: {
		   	css: {
			     files: 'src/scss/**/*.scss',
			     tasks: ['sass'],
			     options: {
			       livereload: true,
			     },
			},
		    html: {
	        options: {
	          livereload: true,
	        },
	        files: 'src/*.html'
	       },
		},
		sass: {
		    dist: {
		      files: {
		        'src/css/compiled.css': 'src/scss/main.scss'
		      }
		    }
		}
	});

	// grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('start-dev', ['sass','connect','watch']);
};