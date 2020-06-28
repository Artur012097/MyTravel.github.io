let rows = document.querySelectorAll('.trending-content-row');

for(let i = 0; i < rows.length; i++) {
    rows[0].classList.remove('trending-content-row_opacity-0')
    rows[i].classList.add('trending-content-row_opacity-0');
    
}


// Фон для блоков Трендинга 


let tBlocks = document.querySelectorAll('.trending-content-block-top')

for(let i = 0; i < tBlocks.length; i++) {
    if(i == 8) break;
    tBlocks[i].style.background = 'url(' +'../img/trending/' + [i + 1] + '.jpg' + ')';
    tBlocks[i].style.backgroundSize = 'cover';
}

// Скрипт для Бургер меню



// Добавление класса на кнопку Бургер

    burgerButton.onclick = function() {
        let burgerButton = document.querySelector('#burgerButton');
        let burgerOpen = 'burger-menu_open';
        let menuNavbar = document.querySelector('#menuNavbar');
        let menuNavbarOpen = 'header-menu_open'; 
        let body = document.querySelector('body');
        let bodyScrollOff = 'scroll-stop';


        if (burgerButton.classList.contains(burgerOpen)) {
            burgerButton.classList.remove(burgerOpen);
        }
        else {
            burgerButton.classList.add(burgerOpen);
        };

            // Добавляем класс на Меню

            if (menuNavbar.classList.contains(menuNavbarOpen)) {
                menuNavbar.classList.remove(menuNavbarOpen);
            }
            else {
                menuNavbar.classList.add(menuNavbarOpen);
            };


            if (body.classList.contains(bodyScrollOff)) {
                body.classList.remove(bodyScrollOff);
            }
            else {
                body.classList.add(bodyScrollOff);
            };

    };
    
    // let slickDots = document.querySelectorAll('.slick-dots li')
    
    // for(let i = 0; i < slickDots.length; i++) {
    //     slickDots.classList.add('lisk');
    //    }
    

    // Эффект наведения на ссылок меню шапки

    let headerLinks = document.querySelectorAll('.header-navbar__link');
    let headerLinkIcon = document.querySelector('.header-navbar__icon');
    let headerHiddenBlocks = document.querySelectorAll('.hidden');

    let headerHiddenBlocks_show = 'showed';
    
    
        for(let i = 0; i < headerLinks.length; i++) {

            headerLinks[i].onmouseover = function() {
                headerHiddenBlocks[i].classList.add(headerHiddenBlocks_show)
                
            }
            headerLinks[i].onmouseout = function() {
                if (headerHiddenBlocks[i].classList.contains(headerHiddenBlocks_show)) {
                    headerHiddenBlocks[i].classList.remove(headerHiddenBlocks_show)
                }
            }

            headerLinkIcon.onmouseover = function() {
                headerHiddenBlocks[headerLinks.length - 1].classList.add(headerHiddenBlocks_show)
            }

            headerLinkIcon.onmouseout = function() {
            if (headerHiddenBlocks[headerLinks.length - 1].classList.contains(headerHiddenBlocks_show)) {
                headerHiddenBlocks[headerLinks.length - 1].classList.remove(headerHiddenBlocks_show)
            }
        }

            // headerHiddenBlocks[i].
    };
    