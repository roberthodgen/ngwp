module.exports = function(grunt) {
	// Do grunt-related things in here

	// Load Grunt tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-open');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/**\n' +
				' * <%= pkg.name %>\n' +
				' * \n' +
				' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				' * @link <%= pkg.site %>\n' +
				' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
				// ' * @license <%= pkg.license %>\n' +
				' */\n'
		}, uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			build: {
				files: {
					'dist/ngwp/ngwp.min.js': ['src/ngwp/ngwp.js'],

					'dist/ngwp/common/api-endpoint.min.js': ['src/ngwp/common/api-endpoint.js'],
					'dist/ngwp/common/filters.min.js': ['src/ngwp/common/filters.js'],

					'dist/ngwp/controllers/root-ctrl.min.js': ['src/ngwp/controllers/root-ctrl.js'],

				}
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
		}, connect: {
			server: {
				options: {
					hostname: "localhost",
					port: 8081,
					base: 'dist',
					keepalive: true
				}
			}
		}, clean: {
			build: 'dist/*',
			release: 'dist/*'
		}, open: {
			server: {
				path: 'http://localhost:8081'
			}
		}, copy: {
			ngwp: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*',
					dest: 'dist',
					filter: 'isFile'
				}]
			}, bootstrap: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist',
				src: '**/*',
				dest: 'dist/vendor/bootstrap',
				filter: 'isFile'
			}, jquery: {
				expand: true,
				cwd: 'bower_components/jquery/dist',
				src: '**/*',
				dest: 'dist/vendor/jquery',
				filter: 'isFile'
			}, angular: {
				expand: true,
				cwd: 'bower_components/angular',
				src: '**/*',
				dest: 'dist/vendor/angular',
				filter: 'isFile'
			}
		}
	});

	// Grunt Tasks
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('build', ['copy', 'uglify']);
	grunt.registerTask('run', ['open', 'connect']);

	// Shortcuts
	grunt.registerTask('b', 'build');
	grunt.registerTask('c', 'clean');
	grunt.registerTask('r', 'run');
};