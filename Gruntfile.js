module.exports = function(grunt) {
	grunt.initConfig({
		// running `grunt less` will compile once
		less: {
			development: {
				options: {
					paths: ["./teach-assets/css"],
					yuicompress: true
				},
				files: {
					"./teach-assets/css/style.css": "./teach-assets/less/style.less",
					"./teach-assets/css/event.css": "./teach-assets/less/event.less",
				}
			}
		},
		autoprefixer: {
			development: {
				browsers: ['last 2 versions'],
				expand: true,
        		flatten: true,
				src: "./teach-assets/css/*.css",
				dest: "./teach-assets/css"
			}
		},
		// running `grunt watch` will watch for changes
		watch: {
			less: {
				files: "./teach-assets/less/*.less",
				tasks: ["less"]
			},
			prefixing: {
				files: "./teach-assets/less/*.less",
				tasks: ['autoprefixer']
			}
		},
		connect: {
			server: {
		    options: {
		      port: 9999,
		      useAvailablePort: true
		    }
		  }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['less', 'autoprefixer', 'connect', 'watch']);
	grunt.registerTask('build', ['less', 'autoprefixer']);
};
