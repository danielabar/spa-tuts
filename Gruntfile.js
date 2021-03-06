/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          define: true,
          require: true,
          console: true,
          QUnit: true,
          test: true,
          strictEqual: true,
          Backbone: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['app/scripts/**/*.js', '!app/scripts/templates.js']
      }
    },

    jst: {
      compile: {
        options: {
          // templateSettings: {
          //   interpolate : /\{\{(.+?)\}\}/g
          // }
          namespace: 'Templates',
          amd: true
        },
        files: {
          'app/scripts/templates.js': ['app/templates/**/*.html']
        }
      }
    },

    watch: {
      options: {
        atBegin: true
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test']
      },
      jst: {
        files: 'app/templates/**/*.html',
        tasks: ['jst']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jst']);

};
