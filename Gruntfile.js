module.exports = function(grunt) {
	// Do grunt-related things in here

	grunt.registerTask('default', ['uglify', 'jshint']);

	// Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
		options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
		src: 'src/<%= pkg.name %>.js',
		dest: 'dist/<%= pkg.name %>.min.js'
		}
	}, jshint: {
		files: ['Gruntfile.js', 'src/**/*.js'],
		options: {
		// options here to override JSHint defaults
		globals: {
			angular: true,
			jQuery: true,
			console: true,
			module: true,
			document: true
		}
		}
	}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};