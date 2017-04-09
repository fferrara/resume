var fs = require('fs');
var path = require('path');

var gulp = require('gulp');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();

// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var runSequence = require('run-sequence');

var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;

var myPackage = require('./package.json');

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('archive:create_archive_dir', function () {
    fs.mkdirSync(path.resolve(dirs.archive), '0755');
});

gulp.task('archive:zip', function (done) {

    var archiveName = path.resolve(dirs.archive, pkg.name + '_v' + pkg.version + '.zip');
    var archiver = require('archiver')('zip');
    var files = require('glob').sync('**/*.*', {
        'cwd': dirs.dist,
        'dot': true // include hidden files
    });
    var output = fs.createWriteStream(archiveName);

    archiver.on('error', function (error) {
        done();
        throw error;
    });

    output.on('close', done);

    files.forEach(function (file) {

        var filePath = path.resolve(dirs.dist, file);

        // `archiver.bulk` does not maintain the file
        // permissions, so we need to add files individually
        archiver.append(fs.createReadStream(filePath), {
            'name': file,
            'mode': fs.statSync(filePath).mode
        });

    });

    archiver.pipe(output);
    archiver.finalize();

});

gulp.task('clean', function (done) {
    require('del')([
        dirs.archive,
        dirs.dist
    ]).then(function () {
        done();
    });
});

gulp.task('copy', [
    'copy:.htaccess',
    'copy:license',
    'copy:misc'
]);

gulp.task('copy:.htaccess', function () {
    return gulp.src('node_modules/apache-server-configs/dist/.htaccess')
        .pipe(plugins.replace(/# ErrorDocument/g, 'ErrorDocument'))
        .pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:license', function () {
    return gulp.src('LICENSE.txt')
        .pipe(gulp.dest(dirs.dist));
});

gulp.task('sass', function (done) {
    gulp.src(dirs.src + '/sass/app.scss')
        .pipe(plugins.sass())
        .on('error', plugins.sass.logError)
        .pipe(gulp.dest(dirs.src + '/css'))
        .pipe(plugins.minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(plugins.rename({extname: '.min.css'}))
        .pipe(gulp.dest(dirs.src + '/css'))
        .on('end', done);
});

gulp.task('css', ['sass'], function (done) {
    gulp.src([
        dirs.src + '/css/main.css',
        'node_modules/normalize.css/normalize.css',
        dirs.src + '/css/app.css'
    ])
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(plugins.rename({suffix: '.' + myPackage.version}))
        .pipe(gulp.dest(dirs.dist + '/css/'))
        .on('end', done);
});

gulp.task('copy:misc', function () {
    return gulp.src([

        // Copy all files
        dirs.src + '/**/*',

        // Exclude the following files
        // (other tasks will handle the copying of these files)
        '!' + dirs.src + '/css/*.css',
        '!' + dirs.src + '/sass',
        '!' + dirs.src + '/sass/**',
        '!' + dirs.src + '/index.html'

    ], {

        // Include hidden files by default
        dot: true

    }).pipe(gulp.dest(dirs.dist));
});

gulp.task('bower_components', function () {
    return gulp.src([
        'bower_components/typed.js/dist/typed.min.js',
        'bower_components/smooth-scroll/dist/js/smooth-scroll.min.js',
    ])
        .pipe(gulp.dest(dirs.dist + '/js/vendor/'));
});

gulp.task('lint:js', function () {
    return gulp.src([
        'gulpfile.js',
        dirs.src + '/js/*.js',
        dirs.test + '/*.js'
    ]).pipe(plugins.jscs())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('index', function () {
    gulp.src(dirs.src + '/index.html')
        .pipe(plugins.replace('../bower_components/typed.js/dist/', 'js/vendor/'))
        .pipe(plugins.replace('../bower_components/smooth-scroll/dist/js/', 'js/vendor/'))
        .pipe(plugins.replace(/href=".*bootstrap.*css"/g, 'href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"'))
        .pipe(plugins.replace(/href=".*font-awesome.*css"/g, 'href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"'))
        .pipe(plugins.replace(/href=".*normalize.*css"/g, 'href="//cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css"'))
        .pipe(plugins.replace(/href=".*main.css"/g, ''))
        .pipe(plugins.replace('app.css', 'style.'+myPackage.version+'.css'))
        .pipe(gulp.dest(dirs.dist));
});


// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('archive', function (done) {
    runSequence(
        'build',
        'archive:create_archive_dir',
        'archive:zip',
        done);
});

gulp.task('build', function (done) {
    runSequence(
        ['clean', 'lint:js', 'css'],
        'bower_components',
        'copy',
        'index',
        done);
});

gulp.task('default', ['build']);
