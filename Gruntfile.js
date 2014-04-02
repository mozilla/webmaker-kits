module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    // running `grunt less` will compile once
    less: {
      development: {
        options: {
          paths: ['dist/css'],
          compress: true,
          sourceMap: true,
          sourceMapBasepath: '/',
          sourceMapRootpath: '/'
        },
        files: {
          'dist/css/style.css': 'assets/less/style.less',
          'dist/css/event.css': 'assets/less/event.less'
        }
      },
      dist: {
        options: {
          paths: ['dist/css'],
          compress: true
        },
        files: {
          'dist/css/style.css': 'assets/less/style.less',
          'dist/css/event.css': 'assets/less/event.less'
        }
      }
    },
    autoprefixer: {
      main: {
        browsers: ['last 2 versions'],
        expand: true,
        flatten: true,
        map: true,
        src: 'dist/css/*.css',
        dest: 'dist/css'
      }
    },
    uglify: {
      options: {
        mangle: false,
        sourceMap: true
      },
      files: {
        src: 'assets/js/**/*.js',
        dest: 'dist/js',
        expand: true,
        flatten: true,
        ext: '.min.js'
      }
    },
    jshint: {
      options: {
        'globals': {
          'module': false,
          'angular': false,
          'console': false,
          'google': false,
          'WebmakerAuthClient': false
        },
        'bitwise': true,
        'browser': true,
        'curly': true,
        'eqeqeq': true,
        'freeze': true,
        'immed': true,
        'indent': 2,
        'latedef': true,
        'newcap': true,
        'noempty': true,
        'quotmark': 'single',
        'trailing': true,
        'undef': true,
        'unused': 'vars'
      },
      files: [
        'Gruntfile.js',
        'assets/js/**/*.js'
      ]
    },
    // running `grunt watch` will watch for changes
    watch: {
      files: 'assets/less/*.less',
      tasks: ['less:development', 'autoprefixer']
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

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-autoprefixer' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'default', [ 'jshint', 'less:development', 'autoprefixer', 'connect', 'watch' ] );
  grunt.registerTask( 'test', [ 'jshint'] );
  grunt.registerTask( 'build', [ 'jshint', 'less:dist', 'autoprefixer', 'uglify' ] );
};
