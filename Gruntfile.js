module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    // running `grunt less` will compile once
    less: {
      development: {
        options: {
          paths: ['./assets/css'],
          yuicompress: true
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
        src: './assets/css/*.css',
        dest: './assets/css'
      },
      dist:{
        browsers: ['last 2 versions'],
        expand: true,
        flatten: true,
        map: true,
        src: './dist/assets/css/*.css',
        dest: './dist/assets/css'
      }
    },
    uglify: {
      dist: {
        options: {
          mangle: false,
          sourceMap: true
        },
        files: {
          'dist/assets/js/main.min.js': [ 'dist/assets/js/main.js' ]
        }
      }
    },
    copy: {
      dist: {
        files: [
          {
            src: './*.html',
            dest: './dist/'
          },
          {
            src: './assets/js/*.js',
            dest: './dist/'
          },
          {
            src: './assets/css/*.css',
            dest: './dist/'
          }
        ]
      },
    },
    jshint: {
      options: {
        strict: true,
        curly: true,
        newcap: true,
        quotmark: true,
        camelcase: true,
        undef: true,
        unused: true,
        eqeqeq: true,
        node: true,
        browser: true
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
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-autoprefixer' );

  grunt.registerTask( 'default', [ 'jshint', 'less:development', 'autoprefixer:development' ] );
  grunt.registerTask( 'watch', [ 'less:development', 'autoprefixer:development', 'connect', 'watch' ] );
  grunt.registerTask( 'build', [ 'jshint', 'less:development', 'autoprefixer:development', 'less:dist', 'autoprefixer:dist', 'copy:dist', 'uglify:dist' ] );
};
