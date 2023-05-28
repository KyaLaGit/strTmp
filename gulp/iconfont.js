import gulpIconFont from 'gulp-iconfont'
import gulpIconfontCss from 'gulp-iconfont-css'

export const iconfont = () => {
    return glob.src('src/icon-font/*.svg')
        .pipe(gulpIconfontCss({
            fontName: 'myfont',
            targetPath: '../css/icon-font.css',
            fontPath: '../icon-font/',
        }))
        .pipe(gulpIconFont({
            fontName: 'myfont',
            prependUnicode: true,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(glob.dest('dist/icon-font/'));
} 