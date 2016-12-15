var src           = 'src',
    dist          = 'dist',
    dependencies  = src + '/_components',
    assets        = src + '/assets',
    distAssets    = dist + '/assets',
    theme         = 'public/themes/THEME_NAME/assets';

module.exports = {
  autoprefixer: {
    browsers: [
      '> 5%',
      'last 2 versions'
    ],
    cascade: false
  },
  bower: {
    src: dependencies + '/**/*',
    dest: distAssets + '/_components',
    wp: {
      src: dependencies + '/**/*',
      dest: theme + '/_components'
    }
  },
  browsersync: {
    server: {
      baseDir: [dist]
    },
    port: 9999,
    scrollProportionally: false,
    files: [
      distAssets + '/css/*.css',
      distAssets + '/js/**/*.js',
      distAssets + '/img/**/*.{jpg,jpeg,gif,png}'
    ]
  },
  clean: {
    src: dist,
    options: {
      force: true
    }
  },
  html: {
    src: [!src + '/html/({**/_*.html}', src + '/html/**/*.html'],
    dest: dist
  },
  images: {
    src: src + '/images/**/*.{jpg,jpeg,gif,png,svg}',
    dest: distAssets + '/img',
    wp: {
      src: src + '/images/**/*.{jpg,jpeg,gif,png,svg}',
      dest: theme + '/img'
    }
  },
  javascript: {
    src: src + '/scripts/**/*.js',
    dest: distAssets + '/js',
    wp: {
      src: src + '/scripts/**/*.js',
      dest: theme + '/js'
    }
  },
  sass: {
    src: src + '/sass/core.scss',
    dest: distAssets + '/css',
    options: {
      outputStyle: 'compressed'
    },
    wp: {
      src: src + '/sass/core.css',
      dest: theme + '/css',
      options: {
        outputStyle: 'compressed'
      }
    }
  },
  sassLint: {
    src: src + '/sass/*.scss'
  },
  static: {
    src: src + '/static/**/*',
    dest: distAssets + '/inc',
    wp: {
      src: src + '/static/**/*',
      dest: theme + '/inc'
    }
  },
  watch: {
    bower: dependencies + '/_components/**/*',
    html: src + '/html/**/*.html',
    images: src + '/images/**/*.{jpg,jpeg,gif,png}',
    javascript: src + '/scripts/**/*',
    sass: src + '/sass/**/*.{sass,scss}',
    static: src + '/static/**/*'
  }
};
