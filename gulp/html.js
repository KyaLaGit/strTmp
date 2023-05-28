import fileinclude from 'gulp-file-include'

export const html = () => {
    return glob.src('src/*.html')
        .pipe(glob.plugin.plumber({
            errorHandler: glob.plugin.notify.onError({
                title: 'HTML'
            })
        }))
        .pipe(fileinclude())
        .pipe(glob.plugin.replace(/(\.\.\/)*img\//g, './img/'))
        .pipe(glob.dest('dist/'))
        .pipe(glob.plugin.browsersync.stream())
}