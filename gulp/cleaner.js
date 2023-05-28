import clean from 'gulp-clean'

export const cleaner = () => {
    return glob.src(['dist/**/*.*', '!dist/css/font.css', '!dist/css/icon-font.css', '!dist/font/*.*', '!dist/icon-font/*.*'], { read: false, allowEmpty: true })
        .pipe(clean())
        .pipe(glob.dest('dist/'));
}
