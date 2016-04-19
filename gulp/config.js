var src           = 'src',
    dist         = 'dist',
    dependencies  = src + '/_components',
    assets        = src + '/assets',
    distAssets   = dist + '/assets';

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
    dest: distAssets + '/_components'
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
    src: src + '/images/**/*.{jpg,jpeg,gif,png}',
    dest: distAssets + '/img'
  },
  javascript: {
    src: src + '/scripts/**/*.js',
    dest: distAssets + '/js'
  },
  sass: {
    src: src + '/sass/core.scss',
    dest: distAssets + '/css',
    options: {
      outputStyle: 'compressed'
    }
  },
  scsslint: {
    src: src + '/sass/*.scss',
    options: {
      'config': '/scsslint.yaml'
    }
  },
  watch: {
    images: src + '/images/**/*.{jpg,jpeg,gif,png}',
    html: src + '/html/**/*.html',
    sass: src + '/sass/**/*.{sass,scss}',
    scripts: src + '/scripts/**/*'
  }
};
