import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import gulpAutoprefixer from 'gulp-autoprefixer'
import gulpGroupCssMediaQueries from 'gulp-group-css-media-queries'
import gulpCleanCss from 'gulp-clean-css'

const sass = gulpSass(dartSass)

export const scss = () => {
    return glob.src('src/scss/style.scss')
        .pipe(glob.plugin.plumber({
            errorHandler: glob.plugin.notify.onError({
                title: 'SCSS'
            })
        }))
        .pipe(sass())
        .pipe(gulpGroupCssMediaQueries())
        .pipe(gulpAutoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: false,
        }))
        .pipe(glob.dest('dist/css/'))
        .pipe(gulpCleanCss())
        .pipe(glob.plugin.rename({
            extname: '.min.css'
        }))
        .pipe(glob.dest('dist/css/'))
        .pipe(glob.plugin.browsersync.stream())
}