let blockOp = 'openned';
let rows = document.querySelectorAll('.trending-content-row');
let body = document.querySelector('body');
let trendLinks = document.querySelectorAll('.trending-list-link');

// Фон для блоков Трендинга 


let tBlocks = document.querySelectorAll('.trending-content-block-top')

for(let i = 0; i < tBlocks.length; i++) {
    if(i == 8) break;
    tBlocks[i].style.background = 'url(' +'../img/trending/' + [i + 1] + '.jpg' + ')';
    tBlocks[i].style.backgroundSize = 'cover';
}

for(let i = 0; i < trendLinks.length; i++) {
    
    // Скрипт блока Трендов 
    rows[i].classList.add('trending-content-row_opacity-0');

    trendLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        trendLinks[i].classList.add('checked')
    })

    if(trendLinks[i].classList.contains('checked')) {
        rows[i].classList.remove('trending-content-row_opacity-0'); 
    }
}

// Выбор вальюты в Шапке

let currHd = document.querySelector('.header-currency-link');
let currList = document.querySelector('.header-currency-list');

    currHd.addEventListener('mouseover', function() {
        currList.classList.add('active');
    })

    currHd.addEventListener('mouseout', function(e) {
       if (e.target !== currList) {
        currList.classList.remove('active');
       }
    })
// Скрипт для Бургер меню

// Добавление класса на кнопку Бургер

    burgerButton.onclick = function() {
        let burgerButton = document.querySelector('#burgerButton'); // Получаем кнопки бургер
        let burgerOpen = 'burger-menu_open';                        // Переменная для класса бургер, добавление после клика
        let menuNavbar = document.querySelector('#menuNavbar');     // Получаем меню из ДОМ
        let menuNavbarOpen = 'header-menu_open';                    // Переменная для класса меню, добавление после клика
        let body = document.querySelector('body');                  // Получаем кнопку Body
        let bodyScrollOff = 'scroll-stop';                          // Переменная для класса, которая останавливает скрол

        // Функция для смены кнопки бургер

        if (burgerButton.classList.contains(burgerOpen)) {
            burgerButton.classList.remove(burgerOpen);
        }
        else {
            burgerButton.classList.add(burgerOpen);
        };

            // Функция для октрытия мобильного меню

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
    

    // Эффект наведения на ссылок меню шапки

    let headerLinks = document.querySelectorAll('.header-navbar__link');
    let headerLinkIcon = document.querySelector('.header-navbar__icon');
    let headerHiddenBlocks = document.querySelectorAll('.hidden');

    let headerHiddenBlocks_show = 'showed';
    
    
        for(let i = 0; i < headerLinks.length; i++) {

            headerLinks[i].onmouseover = function() {
                headerHiddenBlocks[i].classList.add(headerHiddenBlocks_show)
                
            }
            headerLinks[i].onmouseout = function(e) {
                if (e.target == headerHiddenBlocks[i]) {
                    headerHiddenBlocks[i].classList.add(headerHiddenBlocks_show)
                }
                else if (e.target !== headerHiddenBlocks[i]) {
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
    };

    // Нижняя кнопка выбора языка   

    let langBtn = document.querySelector('.buy-language-btn');          // Кнокпа выбора языка в нижнем меню
    let langDrp = document.querySelector('.buy-language-dropdown');     // Всплывающее меню выбора языка
    let currencyBtn = document.querySelector('.buy-currency-btn');      // Кнокпа выбора валюты в нижнем меню
    let currencyDrp = document.querySelector('.buy-currency-dropdown'); // Всплывающее меню выбора валюты


    // Функция, которая открывает всплывающее меню выбора языка при клике 

    langBtn.addEventListener('click', function(e) {
        if (e.target == this) {
            if (langDrp.classList.contains(blockOp)) {
                langDrp.classList.remove(blockOp)
            }

            else {
                langDrp.classList.add(blockOp)
                e.stopPropagation();
            }

            // Закрытие меню при клике на другое место

            body.addEventListener('click', function(e) {
                if(e.target !== langDrp) {
                    langDrp.classList.remove(blockOp)
                }
            })
        }
    })

    let langLinks = document.querySelectorAll('.buy-dropdown__link__language');

    for (let i = 0; i < langLinks.length; i++) {
        langLinks[i].addEventListener('click', function(e) {
            e.preventDefault();

                (this).classList.remove('checked');
            if (e.target) {
                (e.target).classList.add('checked');
            } 
               
            langBtn.innerHTML = langLinks[i].textContent;
        })
    }
    
    // Функция, которая открывает всплывающее меню выбора валюты при клике 

    currencyBtn.addEventListener('click', function(e) {
        if (e.target == currencyBtn) {
            if (currencyDrp.classList.contains(blockOp)) {
                currencyDrp.classList.remove(blockOp)
            }
            else {
                currencyDrp.classList.add(blockOp)
                e.stopPropagation();
            }
        }
        
            // Закрытие меню при клике на другое место

        body.addEventListener('click', function(e) {
            if(e.target !== currencyDrp) {
                currencyDrp.classList.remove(blockOp)
            }
        })
    })

    let currencyLinks = document.querySelectorAll('.buy-dropdown__link__currency');

    for (let i = 0; i < currencyLinks.length; i++) {
        currencyLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            if (currencyLinks[i].classList.contains('checked')) {
                currencyLinks[i].classList.remove('checked');
            }
            else {
                currencyLinks[i].classList.add('checked');
            }
            currencyBtn.innerHTML = currencyLinks[i].textContent;
        })
    }


