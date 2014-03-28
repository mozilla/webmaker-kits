module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    // running `grunt less` will compile once
    less: {
      development: {
        options: {
          paths: ['./assets/css']
        },
        files: {
          './assets/css/style.css': './assets/less/style.less',
          './assets/css/event.css': './assets/less/event.less',
        }
      },
      dist: {
        options: {
          paths: ['./dist/assets/css'],
          compress: true,
          sourceMap: true
        },
        files: {
          './dist/assets/css/style.min.css': './assets/less/style.less',
          './dist/assets/css/event.min.css': './assets/less/event.less',
        }
      }
    },
    autoprefixer: {
      development: {
        browsers: ['last 2 versions'],
        expand: true,
        flatten: true,
        map: true,
        src: './assets/css/*.css',
        dest: './assets/css'
      },
      dist: {
        browsers: ['last 2 versions'],
        expand: true,
        flatten: true,
        map: true,
        src: './dist/assets/css/*.css',
        dest: './dist/assets/css'
      },
    },
    uglify: {
      dist: {
        options: {
          mangle: false,
          sourceMap: true
        },
        files: {
          'dist/assets/js/main.min.js': [ './assets/js/main.js' ]
        }
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
        'asset/js/**/*.js'
      ]
    },
    // running `grunt watch` will watch for changes
    watch: {
      less: {
        files: './assets/less/*.less',
        tasks: ['less']
      },
      prefixing: {
        files: './assets/less/*.less',
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

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-autoprefixer' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'default', [ 'jshint', 'less:development', 'autoprefixer:development' ] );
  grunt.registerTask( 'watch', [ 'less:development', 'autoprefixer:development', 'connect', 'watch' ] );
  grunt.registerTask( 'build', [ 'jshint', 'less:dist', 'autoprefixer:dist', 'uglify' ] );
};
