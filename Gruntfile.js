module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: 'css'
                }]
            }
        },
        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },
        browserSync: {
            dev: {
                bsFiles: { //browser filess
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]

                },
                optiones: {
                    watchTask: true,
                    server: {
                        baseDir: './' //Directorio base para nuestro servidor
                    }
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: 'img/*.{png,gif,jpg,jpeg}',
                    dest: 'dist/'
                }]
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },
        },
        fonts: {
            files: [
                {
                    //para font-awesome
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/open-iconic/font',
                    src: ['font/*.*'],
                    dest: 'dist'
                }]
        }
    }),
        clean: {
            build: {
            src: ['dist/']
            }
        },
        cssmin: {
            dist: {}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            relesase: {
                //filerev:release hashes(md5) all assets (images, js and css)
                //in dist directory
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css'
                    ]
                }]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },
        useminPrepare: {
            foo: {
                dest: 'dist',
                src: ['index.html', 'about.html', 'precios.html', 'contacto.html', 'prueba.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = contex.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0,
                                    rebase: false
                                }
                            }
                        }]
                    }

                }
            }
        },
        usemin: {
            html: ['dist/index.html', 'dist/abaut.html', 'dist/precios.html', 'dist/contacto.html', 'dist/prueba.html'],
            options: {
                assetsDir: ['dist', 'dist/css', 'dist/js']
            }
        }

    });

grunt.registerTask('css', ['sass']);
grunt.registerTask('default', ['browserSync', 'watch'])
grunt.registerTask('img:compress', ['imagemin']);
grunt.registerTask('buid', [
    'clean',
    'copy',
    'imagemin',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin'
])

};