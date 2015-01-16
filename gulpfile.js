// var gulp = require('gulp');
// var fs = require('fs');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
// var del = require('del');
// var pngcrush = require('imagemin-pngcrush');
// var jpegtran = require('imagemin-jpegtran');
// var gifsicle = require('imagemin-gifsicle');
// var preprocess = require('gulp-preprocess'),
// var plugins = require("gulp-load-plugins")({lazy:false});
// var wiredep = require('wiredep').stream;
//
// var appFolder = './app';
// var buildFolder = './public'; // be sure this matches what is in .bowerrc
//
// gulp.task('clean', function () {
//   console.log('Clean all files in build folder');
//   del([buildFolder + '/**.*', '!' + buildFolder + '/bower_components'], function (err) {
//     console.log('Files deleted');
//   });
// });
//
// // Initial commands. Create folders & core files
// gulp.task('init', ['clean'], function () {
//   if( !fs.existsSync(buildFolder)) fs.mkdirSync(buildFolder);
//   if( !fs.existsSync(buildFolder + '/img')) fs.mkdirSync(buildFolder + '/img');
//   gulp.src(appFolder + '/.htaccess').pipe(gulp.dest(buildFolder));
// });
//
// gulp.task('sass', function () {
//   if( fs.existsSync(buildFolder + '/bower_components/susy'))
//   {
//     gulp.src(appFolder + '/sass/**/*.scss')
//     .pipe(plugins.compass({
//       css: buildFolder,
//       sass: appFolder + '/sass'
//     }))
//
//     .pipe(plugins.csscomb())
//     .pipe(plugins.sourcemaps.init())
//     .pipe(plugins.autoprefixer({
//       browswers: ['last 2 versions', '> 1%', 'ie 10', 'ie 11', 'iOS 6', 'iOS 7', 'Android 4'],
//       cascade: false
//     }))
//     .pipe(plugins.concat('app.css'))
//     .pipe(plugins.minifyCss())
//     .pipe(plugins.sourcemaps.write('./maps'))
//     .pipe(gulp.dest(buildFolder))
//     .pipe(reload({stream: true}));
//   }
// });
//
// gulp.task('sassTest', function () {
//   if( fs.existsSync(buildFolder + '/bower_components/susy'))
//     {
//       gulp.src(appFolder + '/sass/**.scss')
//       .pipe(plugins.sass({
//         css: buildFolder,
//         sass: appFolder + '/sass',
//         require: ['susy']
//       }))
//
//       .pipe(plugins.csscomb())
//       .pipe(plugins.sourcemaps.init())
//       .pipe(plugins.autoprefixer({
//         browswers: ['last 2 versions', '> 1%', 'ie 10', 'ie 11', 'iOS 6', 'iOS 7', 'Android 4'],
//         cascade: false
//       }))
//       .pipe(plugins.concat('app.css'))
//       .pipe(plugins.minifyCss())
//       .pipe(plugins.sourcemaps.write('./maps'))
//       .pipe(gulp.dest(buildFolder))
//       .pipe(reload({stream: true}));
//     }
//   });
//
// gulp.task('scripts', function () {
//   gulp.src(appFolder + '/js/**.js')
//     .pipe(plugins.jshint())
//     .pipe(plugins.jshint.reporter('default'))
//     .pipe(plugins.sourcemaps.init())
//     .pipe(plugins.concat('app.js'))
//     .pipe(plugins.sourcemaps.write('./maps'))
//     .pipe(gulp.dest(buildFolder))
//     .pipe(reload({stream: true}));
// });
//
// // uses Swig templates
// gulp.task('swig', function () {
//   gulp.src([appFolder + '/partials/*.html'])
//     .pipe(plugins.swig())
//     .pipe(gulp.dest(buildFolder))
//     .pipe(reload({stream: true}));
// });
//
// gulp.task('wiredep', ['swig'], function () {
//   gulp.src([buildFolder + '/*.html'])
//     .pipe(wiredep({devDependencies: false}))
//     .pipe(gulp.dest(buildFolder))
// });
//
// gulp.task('html', function () {
//   gulp.src(appFolder + '/html/**/*.html')
//     .pipe(gulp.dest(buildFolder))
//     .pipe(reload({stream: true}));
// });
//
// gulp.task('generate_pages', ['handlebars'], function () {
//   return gulp.src(appFolder + '/templates/layout.hbs')
//   .pipe(plugins.tap(function (file) {
//     var template = handlebars.compile(file.contents.toString())
//     gulp.src(appFolder + '/markdown/**.md')
//       .pipe(plugins.markdown())
//       .pipe(plugins.tap(function (file) {
//         var data = {
//           content: file.contents.toString()
//         }
//         var html = template(data)
//         file.contents = new Buffer(html, 'utf-8')
//       }))
//       .pipe(gulp.dest(buildFolder))
//       .pipe(reload({stream: true}));
//     }))
// });
//
// gulp.task('handlebars', function () {
//   gulp.src(buildFodler + '/templates/**.hbs')
//     .pipe(plugins.tap(function (file, t) {
//       var tempalte = file.contents.toString()
//       var templateName = Path.basename(file.path).replace('.hbs', '')
//       handlebars.registerPartial(templateName, template)
//     }))
// });
//
// gulp.task('markdown', function () {
//   gulp.src(appFolder + '/markdown/**.md')
//     .pipe(plugins.markdown({
//       pedantic: true,
//       smartypants: true,
//       gfm: false
//     }))
//     .pipe(gulp.dest('md-tmp'))
//     .pipe(reload({stream: true}));
// })
//
// gulp.task('images', function () {
//   gulp.src(appFolder + '/images/**/*.{jpg,png,jpeg,gif}')
//     .pipe(gulp.dest(buildFolder + '/images'))
//     .pipe(reload({stream: true}));
// });
//
// gulp.task('optimize:images', function () {
//   gulp.src(buildFolder + '/images/**/*.{jpg,png,jpeg,gif}')
//   .pipe(plugins.imagemin({
//     progressive: true,
//     svgoPlugins: [{removeViewBox: false}],
//     use: [pngcrush(), jpegtran(), gifsicle()]
//   }))
//   .pipe(gulp.dest(buildFolder + '/images'))
//   .pipe(reload({stream: true}));
// });
//
// gulp.task('handlebars', function () {
//   gulp.src(appFolder + '/templates/hbtest.hbs')
//     .pipe(plugins.tap(function(file, t) {
//       var template = handlebars.compile(file.contents.toString())
//       var html = template({ title: "It worked!"})
//       file.contents = new Buffer(html, 'utf-8')
//     }))
//     .pipe(plugins.rename(function(path) {
//       path.extname = ".html"
//     }))
//     .pipe(gulp.dest(buildFolder))
//     .pipe(reload({stream: true}));
// })
//
// gulp.task('browser-sync', function () {
//   browserSync({
//     server: {
//       baseDir: buildFolder
//     }
//   });
// });
//
// gulp.task('default', ['init', 'scripts', 'sass', 'html', 'images', 'browser-sync', 'generate_pages'], function () {
//   gulp.watch(appFolder + '/js/**.js', ['scripts']);
//   gulp.watch(appFolder + '/sass/**/*.scss', ['sass']);
//   // gulp.watch([appFolder + '/templates/*.tpl', appFolder + '/partials/*.html'], ['swig']);
//   gulp.watch(appFolder + '/html/**/*.html', ['html']);
//   gulp.watch(appFolder + '/images/**/*.{jpg,png,jpeg,gif}', ['images']);
//   gulp.watch(appFolder + '/markdown/**.md', ['generate_pages']);
// });
//
// gulp.task('optimize', ['optimize:images'], function () {});

var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });
