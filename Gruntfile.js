module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
          ]
        },
        files: {
          'public/css/styles.css': ['public/less/*.less']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 8 versions']
      },
      dist: {
        files: {
          'public/css/styles.css': 'public/css/styles.css'
        }
      }
    },
    watch: {
      styles: {
        files: ['public/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
