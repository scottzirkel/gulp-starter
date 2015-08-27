var src           = 'app',
    build         = 'build',
    dependencies  = src + '/_components',
    assets        = src + '/assets',
    buildAssets   = build + '/assets';

module.exports = {
  autoprefixer: "'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'",
  bower: {
    css: {
      src: [dependencies + '/**/css/*.css', dependencies + '/**/dist/*.css', dependencies + '/**/*.css'],
      dest: buildAssets + '/css'
    },
    js: {
      src: [dependencies + '/dist/**.min.js', dependencies + '/**/*.js', !dependencies + '/src/*.js'],
      dest: buildAssets + '/js'
    }
  },
  browsersync: {
    server: {
      baseDir: [build]
    },
    port: 9999,
    files: [
      buildAssets + '/css/*.css',
      buildAssets + '/js/.js',
      buildAssets + '/img/**.{jpg,jpeg,gif,png}'
    ]
  },
  clean: {
    src: build,
    options: {
      force: true
    }
  },
  html: {
    src: [src + '/html/**/*.html', !src + '/html/templates/*.html'],
    dest: build
  },
  images: {
    src: src + '/images/**/*.{jpg,jpeg,gif,png}',
    dest: buildAssets + '/img'
  },
  javascript: {
    src: src + '/js/**/*.js',
    dest: buildAssets + '/js'
  },
  sass: {
    src: src + '/sass/core.scss',
    dest: buildAssets + '/css',
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
    sass: src + '/sass/**/*.{sass,scss}'
  }
};
