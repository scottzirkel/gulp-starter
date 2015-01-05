/*
  Config
  Configs for all gulp tasks
*/

var src               = 'app',
    build             = 'build',
    development       = 'development',
    production        = 'production',
    dependencies      = 'app/_components',
    srcAssets         = 'app/_assets',
    developmentAssets = 'build/assets',
    productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9988
    }
  },
  delete: {
    src: [developmentAssets]
  },
  sass: {
    src: srcAssets + '/scss/**.scss',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: false,
      errorLogToConsole: true
    }
  },
  compass: {
    src: srcAssets + '/scss/**.scss',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      susy: true,
      errorLogToConsole: true
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A seperate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './' + srcAssets + '/js/application.js',
      dest: developmentAssets + '/js',
      outputName: 'application.js'
    }, {
      entries: './' + srcAssets + '/js/head.js',
      dest: developmentAssets + '/js',
      outputName: 'head.js'
    }]
  },
  images: {
    src: srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024,
      debug: false
    }
  },
  watch: {
    sass: srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/js/**/*.js',
    images: srcAssets + '/images/**/*',
    html: src + '/_htdocs/**/*.html'
  },
  jshint: {
    src: srcAssets + '/js/*.js'
  },
  optimize: {
    css: {
      src: developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src: developmentAssets + '/js/*.js',
      dest: productionAssets + '/js',
      options: {}
    },
    images: {
      src: developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    },
    html: {
      src: src + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true
      }
    }
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*',
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
  rsync: {
    src: production + '/**/',
    options: {
      destination: '~/path/to/web/root',
      root: production,
      hostname: 'mydomain.com',
      username: 'user',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  },
  susy: {
    src: dependencies + '/susy/sass/**/*.{sass,scss}',
    dest: srcAssets + '/scss/vendor/'
  },
  htmlreplace: {
    src: src + '/_htdocs/**/*.html',
    dest: build,
    options: {
      js: '/' + developmentAssets + '/js/app.min.js',
      css: '/' + developmentAssets + '/css/app.min.css'
    }
  }
};
