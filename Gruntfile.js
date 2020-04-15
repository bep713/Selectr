module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		jshint: {
			all: ['src/*.js', 'tests/*.js']
		},
		qunit: {
			all: ['tests/index.html']
		},
		uglify: {
			dynamic_mappings: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.js'],
					dest: 'dist/',
					ext: '.min.js'
				}]
			}
		}
	});

	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['test']);
};
