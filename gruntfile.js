'use strict';

module.exports = function (grunt) {
  
  // CONFIGURATION
  var globalConfig = {
    devBuild: "builds/dev/docs",
    prodBuild: "builds/prod/docs",
    linkCheckerURL: "dash-local.harvard.edu"
  };

  grunt.initConfig({
    // load global config
    globalConfig: globalConfig,

    //////////
    // BASH
    /////////
    
    exec: {
      // jekyll
      jekyllBuild: {
        command: 'cd app; ../jekyll/bin/jekyll build; cd ../',
        stderr: false,
        callback: function (error, stdout, stderr) {
          if (stderr) {
              grunt.warn(stderr)
          }
        }
      },
      jekyllClear: {
        command: 'cd app; rm .jekyll-metadata; cd ../'
      },

      // custom tests
      findRelics: {
        command: 'cd tests/find_relics; bash find_relics.sh; cd ../../',
          stderr: false,
          callback: function (error, stdout, stderr) {
              if (stderr) {
                  grunt.warn("Relics found. (If intentional, add regex to tests/find_relics/exclude_TYPE.txt)\n\n" + stderr)
            }
          }
      },
      findNotes: {
        command: 'cd tests/find_notes; bash find_notes.sh; cd ../../',
          stderr: false,
          callback: function (error, stdout, stderr) {
              if (stderr) {
                  grunt.warn("Notes found. (If intentional, add regex to tests/find_notes/exclude_TYPE.txt)\n\n" + stderr)
            }
          }
      },
      checkBaseurl: {
        command: 'cd tests/check_baseurl; bash check_baseurl.sh; cd ../../',
          stderr: false,
          callback: function (error, stdout, stderr) {
              if (stderr) {
                  grunt.warn("Found relative links without {{site.baseurl}}. (If intentional, add lines to tests/check_baseurl/exclude_lines.txt)\n\n" + stderr)
            }
          }
      }
    },

    htmlmin: {
      prod: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          conservativeCollapse: true
        },
        files: [{
          expand: true,
          cwd: '<%= globalConfig.devBuild %>',
          src: '**/*.html',
          dest: '<%= globalConfig.prodBuild %>/'
        }]
      }
    },

    //////////
    // Static Assets
    //////////
    copy: {
      bootstrapCustom: {
        src: 'app/_scss/_bootstrap-custom.scss',
        dest: 'vendor/bootstrap-sass/assets/stylesheets/_bootstrap-custom.scss'
      },
      fonts: {
        expand: true,
        cwd: '<%= globalConfig.devBuild %>/assets/fonts',
        src: '**',
        dest: '<%= globalConfig.prodBuild %>/assets/fonts/'
      },
      files: {
        expand: true,
        cwd: '<%= globalConfig.devBuild %>/assets/files',
        src: '**',
        dest: '<%= globalConfig.prodBuild %>/assets/files/'
      },
      serverconfig: {
        expand: true,
        cwd: '<%= globalConfig.devBuild %>',
        src: ['.htaccess', 'robots.txt'],
        dest: '<%= globalConfig.prodBuild %>/'
      },
      sitemap:{
        src: '<%= globalConfig.devBuild %>/sitemap.xml', 
        dest: '<%= globalConfig.prodBuild %>/sitemap.xml'
      }
    },

    imagemin: {
      dynamic: {                      
        files: [{
        expand: true,                  
        cwd: '<%= globalConfig.devBuild %>/assets/img',                   
        src: ['**/*'],   
        dest: '<%= globalConfig.prodBuild %>/assets/img/',
        }]
      }
    },

    //////////
    // Javascript
    //////////

    // concat config
    concat: {
      options: {
        separator: ';',
      },
      dev: {
        src: ['vendor/jquery/dist/jquery.js','vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js', 'vendor/bootstrap-sass/assets/javascripts/bootstrap/tab.js', 'app/assets/js/slide.js'],
        dest: '<%= globalConfig.devBuild %>/assets/js/main.js'
      }
    },

    // uglifier config
    uglify: {
      prod: {
        files: {
        '<%= globalConfig.prodBuild %>/assets/js/main.js': ['<%= globalConfig.devBuild %>/assets/js/main.js']
        }
      }
    },

    //////////
    // CSS
    //////////

    // sass (libsass) config
    sass: {
      dev: {
        options: {
          style: "expanded"
        },
        files: [{
          src: 'app/_scss/main.scss',
          dest: '<%= globalConfig.devBuild %>/assets/css/main.css'
        }]
      }
    },

    // purify css
    purifycss: {
      options: {},
      target: {
        src: ['<%= globalConfig.devBuild %>/**/*.html', '<%= globalConfig.devBuild %>/assets/*.js'],
        css: ['<%= globalConfig.devBuild %>/assets/css/main.css'],
        dest: '<%= globalConfig.prodBuild %>/assets/css/main.css'
      }
    },

    // minify css
    cssmin: {
      target: {
      files: [{
        src: '<%= globalConfig.prodBuild %>/assets/css/main.css',
        dest: '<%= globalConfig.prodBuild %>/assets/css/main.css',
      }]
      }
    },

    //////////
    // Validation, etc.
    //////////

     // bootlint
    bootlint: {
      options: {
        stoponerror: false,
        relaxerror: ['W005', 'W001', 'W002', 'W003']
      },
      files: ['<%= globalConfig.devBuild %>/**/*.html']
    },

    // broken links
    linkChecker: {
      options: {
      maxConcurrency: 20,
      callback: function (crawler) {
        crawler.addFetchCondition(function(parsedURL) {
          // mailto links are obfuscated and confuse the crawler, exclude them
          return !parsedURL.path.match(/&$/i);
        });
        crawler.addFetchCondition(function(parsedURL) {
          // don't check the assets folder, causes error and doesn't make sense
          return !parsedURL.path.match(/assets/i);
        });
        }
      },
      dev: {
        site: '<%= globalConfig.linkCheckerURL %>',
      }
    }
    // ,


    //////////
    // Deploying
    //////////

    // rsync: {
    //   options: {
    //     args: ['-cavz'],
    //     exclude: ['.DS_Store']
    //   },
    //   eaton: {
    //     options: {
    //       src: './<%= globalConfig.prodBuild %>/',
    //       dest: '',
    //       host: 'oscusr@eaton.hul.harvard.edu',
    //       delete: true
    //     }
    //   },
    //   byron: {
    //     options: {
    //       src: './<%= globalConfig.prodBuild %>/',
    //       dest: '',
    //       host: 'oscusr@byron.hul.harvard.edu',
    //       delete: true
    //     }
    //   },
    //   turner: {
    //     options: {
    //       src: './<%= globalConfig.prodBuild %>/',
    //       dest: '',
    //       host: 'dspace@turner.lib.harvard.edu',
    //       delete: false
    //     }
    //   },

    // }


  });

    

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bootlint');
  grunt.loadNpmTasks('grunt-link-checker');
  grunt.loadNpmTasks("grunt-rsync")

  // Register the grunt tasks
  grunt.registerTask('build', ['copy:bootstrapCustom','exec:jekyllBuild','concat','sass']);
  grunt.registerTask('rebuild', ['exec:jekyllClear','build']);

  grunt.registerTask('test', ['exec:findRelics', 'exec:checkBaseurl', 'bootlint', 'linkChecker:dev']);
  grunt.registerTask('polish', ['exec:findNotes']);

  grunt.registerTask('stage', ['newer:htmlmin','newer:copy:fonts','newer:copy:files','newer:copy:serverconfig','newer:copy:sitemap','newer:imagemin',
             'purifycss','cssmin','newer:uglify']);

  // Register rebuild as the default task fallback
  grunt.registerTask('default', 'rebuild');

};
