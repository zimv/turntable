'use strict';

var request = require('request');
var mPath = require('path');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssDir: './css',
    buildCssDir: '<%= cssDir %>',
    jsDir: './js',
    vendorDir: './bower_components',
    libJSDir: './libs',
    appJSDir: './js',
    buildJSDir: '<%= jsDir %>',
    less: {
      development : {
        options : {
          compress : false
        },
        files : [
          { src : 'css/app.less' , dest: 'css/app.css'}
        ]
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      less : {
        files: [
          'css/**/*.less'
        ],
        tasks : ['less']
      },
      concat : {
        files: [
          './js/app/*.js'
        ],
        tasks : ['concat']
      }
    },
      concat:{
          options: {
              separator: '\n'
          },
          vendorJS: {
              src: [

              ],
              dest: './<%= buildJSDir %>/vendor.js'
          },
          libJS: {
              src: [

              ],
              dest: './<%= buildJSDir %>/lib.js'
          },
          appJS: {
              src: [
                  './js/app/*.js'
              ],
              dest: './<%= buildJSDir %>/app.js'
          },
          pageJS: {
              files: [

              ]
          }
      },
    uglify: {
      options: {
          report: 'min'
          //sourceMapRoot: './<%= buildJSDir %>',
          //sourceMap:function(path) { return path.replace(/js/,'map').replace('.js',".map")}
      },
      jsAll: {
          expand: true,
          cwd: './<%= buildJSDir %>/',
          src: '*.js',
          dest: './<%= buildJSDir %>/'
          //ext: '.min.js'
      }
    },
    clean: {
      build: {
        src: [
            './<% cssDir %>/*.css',
          './<%= buildJSDir %>/*.js.map'
        ]
      }
    },
    shell: {
      updateDepPkgs: {
        command: 'cnpm install && bower install --allow-root'
      },
      bower: {
        command: 'bower install --allow-root'
      },
      npm: {
        command: 'cnpm install'
      },
      gitPull: {
        command: 'cd .. && git add -A . && git stash && git pull'
      }
    },

    imagemin:{
      //压缩图片大小
      dist:{
        options:{
          optimizationLevel:3 //定义图片优化水平
        },
        files:[
          {
            expand:true,
            cwd:'img/',
            src:['**/*.{png,jpg,jpeg}'],//优化img目录下所有选定格式图片
            dest:'img/' //优化后图片保存，覆盖旧图片
          }
        ]
      }
    }

  });
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['clean:build', 'concat', 'less']);
  grunt.registerTask('deploy', ['clean:build', 'concat', 'less', 'uglify']);
 
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('img', ['imagemin']);
};
