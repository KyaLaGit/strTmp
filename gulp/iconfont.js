import gulpIconFont from 'gulp-iconfont'
import gulpIconfontCss from 'gulp-iconfont-css'
import fs from 'fs'
import path from 'path'

export const iconfont = cb => {
    fs.open(path.resolve('dist', 'icon-font'), 'r', (err) => {
        if (err) {
            return glob.src('src/icon-font/*.svg')
                .pipe(gulpIconfontCss({
                    fontName: 'myfont',
                    targetPath: '../css/icon-font.css',
                    fontPath: '../icon-font/',
                }))
                .pipe(gulpIconFont({
                    fontName: 'myfont',
                    prependUnicode: true,
                    formats: ['svg', 'woff', 'woff2'],
                    normalize: true,
                    fontHeight: 1001
                }))
                .pipe(glob.dest('dist/icon-font/'));
        } else {
            console.log('-----Иконочный шрифт уже конвертирован.')
        }
    })

    cb()
}