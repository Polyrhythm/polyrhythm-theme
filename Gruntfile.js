module.exports = function(grunt) {
  grunt.initConfig = {
    stylus: {
      compile: {
        options: {
          use: [ require('nib') ]
        },
        files: {
          'assets/css/polyrhythm.css': 'src/**/*.styl'
        }
      }
    },
    watch: {
      styles: {
        files: ['src/**/*.styl'],
        tasks: ['stylus']
      }
    }
  };

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus', 'watch']);
};
