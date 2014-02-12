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
	// running `grunt watch` will watch for changes
	watch: {
		files: "./teach-assets/less/*.less",
		tasks: ["less"]
	}
});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less']);
};
