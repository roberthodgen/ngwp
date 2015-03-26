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
				expand: true,
				cwd: 'src',
				src: '**/*',
				dest: 'dist',
				filter: 'isFile'
			}, bootstrap: {
				expand: true,
				cwd: 'node_modules/bootstrap/dist',
				src: '**/*',
				dest: 'dist/vendor/bootstrap',
				filter: 'isFile'
			}, jquery: {
				expand: true,
				cwd: 'node_modules/jquery/dist',
				src: '**/*',
				dest: 'dist/vendor/jquery',
				filter: 'isFile'
			}, angular: {
				expand: true,
				cwd: 'node_modules/angular',
				src: '**/*',
				dest: 'dist/vendor/angular',
				filter: 'isFile'
			}, angular_route: {
				expand: true,
				cwd: 'node_modules/angular-route',
				src: '**/*',
				dest: 'dist/vendor/angular-route',
				filter: 'isFile'
			}, angular_ui_router: {
				expand: true,
				cwd: 'node_modules/angular-ui-router/release',
				src: '**/*',
				dest: 'dist/vendor/angular-ui-router',
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