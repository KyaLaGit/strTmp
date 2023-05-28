export function dataHeaderFixed() {
    const header = document.querySelector('[data-header-fixed]')

    if (header) {
        let headerOption = header.getAttribute('data-header-fixed')
        headerOption === '' ? headerOption = 0.5 : headerOption *= 1
        const headerScroll = header.getBoundingClientRect().top + (header.getBoundingClientRect().height * headerOption)

        document.addEventListener('scroll', e => {
            console.log("~ headerScroll", headerScroll)
            if (window.scrollY > headerScroll) {
                header.classList.add('fixed')
            } else if (window.scrollY < headerScroll) {
                header.classList.remove('fixed')
            }
        })
    }
}
// [data-header-fixed]

export function dataBurger() {
    const burger = document.querySelector('[data-burger]')

    if (burger) {
        const burgerList = document.querySelector('[data-burger-menu]')
        const wrapper = document.querySelector('.wrapper')
        const header = document.querySelector('.header')

        document.addEventListener('click', burgerEventFn)
        window.addEventListener('resize', burgerEventFn)

        function burgerEventFn(e) {
            const elem = e.target

            if (e.type === 'click' && elem.closest('[data-burger]')) {
                burger.classList.toggle('open')
                burgerList.classList.toggle('open')
                header.classList.toggle('open')
                wrapper.classList.toggle('lock')
            } else {
                burger.classList.remove('open')
                burgerList.classList.remove('open')
                header.classList.remove('open')
                wrapper.classList.remove('lock')
            }
        }
    }
}
// [data-burger],[data-burger-menu]

export function dataPromt() {
    const promtAll = document.querySelectorAll('[data-promt]')

    if (promtAll.length > 0) {
        promtAll.forEach(promt => {
            promt.classList.add('promt')
            promt.parentElement.setAttribute('data-promt-parent', '')
            if (window.getComputedStyle(promt.parentElement).position !== 'absolute' && window.getComputedStyle(promt.parentElement).position !== 'relative') {
                promt.parentElement.style.position = 'relative'
            }

            let dataValue = promt.getAttribute('data-promt')
            dataValue = dataValue.toLowerCase().trim()
            dataValue === '' ? dataValue = 'bottom' : null

            if (dataValue === 'bottom') {
                promt.classList.add('promt_bottom')
            } else if (dataValue === 'top') {
                promt.classList.add('promt_top')
            } else if (dataValue === 'left') {
                promt.classList.add('promt_left')
            } else if (dataValue === 'right') {
                promt.classList.add('promt_right')
            }
        })
    }

    let promt = null

    document.addEventListener('mouseover', promtEventFn)
    function promtEventFn(e) {
        const elem = e.target

        if (elem.closest('[data-promt-parent]')) {
            promt = elem.closest('[data-promt-parent]').querySelector('[data-promt]')
            promt.classList.add('visible')
        } else if (promt) {
            promt.classList.remove('visible')
            promt = null
        }
    }
}
// [data-promt]

export function dataTabs() {
    const tabWrapAll = document.querySelectorAll('[data-tab]')

    if (tabWrapAll.length > 0) {
        tabWrapAll.forEach(tabWrap => {
            const tabLinks = tabWrap.querySelector('[data-tab-links]').children
            const tabContents = tabWrap.querySelector('[data-tab-contents]').children

            for (let i = 0; i < tabLinks.length; i++) {
                tabLinks[i].setAttribute('data-tab-link', i + 1)
                tabLinks[0].classList.add('active')
            }

            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].setAttribute('data-tab-content', i + 1)
                tabContents[0].classList.add('open')
            }
        })
    }

    document.addEventListener('click', eventFn)
    function eventFn(e) {
        const elem = e.target

        if (elem.closest('[data-tab-link]')) {
            const index = elem.closest('[data-tab-link]').getAttribute('data-tab-link')
            const parent = elem.closest('[data-tab]')
            const contents = parent.querySelectorAll('[data-tab-content]')
            const links = parent.querySelectorAll('[data-tab-link]')

            links.forEach(link => {
                if (link.classList.contains('active')) {
                    link.classList.remove('active')
                }

                if (link.getAttribute('data-tab-link') === index) {
                    link.classList.add('active')
                }
            })

            contents.forEach(content => {
                if (content.classList.contains('open')) {
                    content.classList.remove('open')
                }

                if (content.getAttribute('data-tab-content') === index) {
                    content.classList.add('open')
                }
            })
        }
    }
}
// [data-tab], [data-tab-links], [data-tab-contents]

export function dataSelect() {
    const selectWrapAll = document.querySelectorAll('[data-select]')

    if (selectWrapAll.length >= 1) {
        const selectListAll = document.querySelectorAll('[data-select-list]')

        selectListAll.forEach(list => {
            for (let i = 0; i < list.children.length; i++) {
                list.children[i].setAttribute('data-select-item', '')
            }
        })

        document.addEventListener('click', eventFn)
        function eventFn(e) {
            const elem = e.target

            if (elem.closest('[data-select-link]') || elem.closest('[data-select-item]')) {
                const parent = elem.closest('[data-select]')
                const list = parent.querySelector('[data-select-list]')
                const link = parent.querySelector('[data-select-link]')
                const selectAll = parent.querySelectorAll('[data-select-item]')

                selectListAll.forEach(selectList => {
                    if (selectList.classList.contains('open') && selectList !== list) {
                        selectList.classList.remove('open')
                    }
                })

                list.classList.toggle('open')

                if (elem.closest('[data-select-item]')) {
                    selectAll.forEach(select => {
                        if (select.classList.contains('selected')) {
                            select.classList.remove('open')
                        }
                    })
                    elem.classList.add('selected')
                    link.textContent = elem.textContent
                }
            } else {
                selectListAll.forEach(list => {
                    if (list.classList.contains('open')) {
                        list.classList.remove('open')
                    }
                })
            }
        }
    }
}
// [data-select], [data-select-link], [data-select-list]

export function dataSHM() {
    const SHMItems = document.querySelectorAll('[data-shm]')

    if (SHMItems.length > 0) {
        SHMItems.forEach(item => {
            item.classList.add('shm', 'close')
            let chooseTitle = false
            let chooseList = false

            // Проверка на уже заданные data аттрибуты
            for (let i = 0; i < item.children.length; i++) {
                const children = item.children[i]

                if (typeof (children.getAttribute('data-shm-title')) === 'string') {
                    chooseTitle = true
                    children.classList.add('shm__title')
                } else if (typeof (children.getAttribute('data-shm-list')) === 'string') {
                    chooseList = true
                    children.classList.add('shm__list')
                }
            }

            // Присвоение соответственных классов
            for (let i = 0; i < item.children.length; i++) {
                const children = item.children[i]
                const childrenClasses = children.classList.value.split(' ')

                for (let i = 0; i < childrenClasses.length; i++) {
                    const childrenClass = childrenClasses[i]

                    if (!chooseTitle && childrenClass.includes('title')) {
                        children.classList.add('shm__title')
                    } else if (!chooseList && childrenClass.includes('list')) {
                        children.classList.add('shm__list')
                    }
                }
            }

            // Классы и оболочка для list
            let list = item.querySelector('.shm__list')
            list.insertAdjacentHTML('beforebegin', `<div class="shm__list-wrap"></div>`)
            list.remove()
            const listWrap = item.querySelector('.shm__list-wrap')
            listWrap.insertAdjacentHTML('afterbegin', list.outerHTML)
        })

        document.addEventListener('click', eventFn)
        window.addEventListener('resize', eventFn)
        function eventFn(e) {
            const elem = e.target

            if (window.innerWidth < 768) {
                if (e.type === 'click' && elem.closest('.shm__title')) {
                    elem.closest('.shm').classList.toggle('close')
                }
            }
        }
    }
}
// [data-shm], [data-shm-title], [data-shm-list]












