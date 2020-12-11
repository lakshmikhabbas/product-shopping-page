module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // concat: {
        //     css: {
        //         src: [
        //             '*.css'
        //         ],
        //         dest: 'dist/my-project.css'
        //     },
        //     js: {
        //         src: [
        //             'src/*.js'
        //         ],
        //         dest: 'dist/my-project.js'
        //     }
        // },
        sass: {
                dev: {
                  options: {
                    style: 'compressed'
                  },
                  files: {
                    'style.css': 'style.scss',
                  }
                }
            },
        processhtml: {
                dev: {
                  files: {
                    'index.html': ['index.html']
                  }
            }
        },
        uglify: {
            js: {
                options: {
                    mangle: true
                },
                files: {
                    'js/source.js': 'js/source.js'
                }
            }
        },
        watch: {
          files: ['*'],
          tasks: ['scss', 'sass', 'processhtml', 'uglify']
       }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.registerTask('default', ['sass:dev', 'processhtml:dev', 'uglify:js']);
};
