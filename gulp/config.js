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
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
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
    src: srcAssets + '/scss/**.*{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      susy: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../../_assets/scss'
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
    html: srcAssets + '/**/*.html'
  },
  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}',
      '!' + srcAssets + '/scss/base/_sprites.scss',
      '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
    ]
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
  compass: {
    src: srcAssets + '/scss/**.*{sass,scss}',
    dest: developmentAssets + '/css'
  },
  susy: {
    src: dependencies + '/susy/sass/_susy.scss',
    dest: srcAssets + '/scss/vendor/_susy.scss'
  },
  htmlreplace: {
    src: src + '/**/*.html',
    dest: build,
    options: {
      js: developmentAssets + '/js/vendor.min.js',
      css: developmentAssets + '/css/vendor.min.css'
    }
  }
};
