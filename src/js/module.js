// BURGER --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// [data-burger],[data-burger-menu] ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { dataBurger } from './modules/data.js'
// dataBurger()


// SELECT ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// [data-select], [data-select-link], [data-select-list] ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { dataSelect } from './modules/data.js'
// dataSelect()


// TABS ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// [data-tab], [data-tab-links], [data-tab-contents] ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { dataTabs } from './modules/data.js'
// dataTabs()


// PROMT ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// [data-promt] "bottom"(a), "top", "right", "left", "own" ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { dataPromt } from './modules/data.js'
// dataPromt()


// SHM(show and hide menu) ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// [data-shm], [data-shm-title](a), [data-shm-list](a) ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { dataSHM } from './modules/data.js'
// dataSHM()


// HEADER SCROLL FIXED ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// [data-header-fixed] ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { dataHeaderFixed } from './modules/data.js'
// dataHeaderFixed()


// POPUP ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// [data-popup], [data-popup-link], [data-popup-content] ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { dataPopup } from './modules/data.js'
// dataPopup()


// MLIDER ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import { Mlider } from './modules/Mlider-v0.1.js'
// const slider = new Mlider(
//     // Classes for slider elements
//     {
//         sliderSelector: '.mlider',
//         slideSelector: '.slide-mlider',

//         prevBtnSelector: '.mlider__prev-btn',
//         nextBtnSelector: '.mlider__next-btn',
//         dotSelector: '.mlider__dot',
//         counterSelector: '.mlider__counter',

//         currentSelector: '.current',
//     },

//     // Slider options
//     {
//         // loop[true or false]
//         infinity: false,
//         // slide width [auto or castom](castom --> can use preViewSlides)
//         slideSize: 'castom',
//         // visible slides [quantity] (only with slideSize: custom)
//         preViewSlides: 1.2,
//         // slide position in visible area[left, center, right or auto]
//         slidePosition: 'center',
//         // time of animation(change slide)[ms]
//         animationTime: 400,

//         // using column-gap(gap displaces other slides in visible area)[true] OR
//         // padding and negative margin(not displaces other slides in visible area)[false]
//         saveSlideSize: true,
//         // distance between slides[px]
//         gap: 20,

//         // use overflow: hidden on slider-wrapper[true or false]
//         overflowHidden: true,
//         // include counter in dots(index number in dot)[true or false]
//         counterInDots: false,
//     }
// )