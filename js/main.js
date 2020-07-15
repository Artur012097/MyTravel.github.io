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


let trendLink = $('.trending-list-link');
let trendRow = $('.trending-content-row');

    


trendLink.click(function(e){ 
    e.preventDefault();
    trendLink.removeClass("checked");
    $(this).addClass("checked");

    for (let i = 0; i < trendLink.length; i++) {
        if (trendLink[i].classList.contains('checked')) {
            trendRow[i].classList.remove('trending-content-row_opacity-0') 
        }
        else {
            trendRow[i].classList.add('trending-content-row_opacity-0') 
        }
    }
  })

  for(let i = 0; i < trendRow.length; i++) {
    trendRow[i].classList.add('trending-content-row_opacity-0')
    trendRow[0].classList.remove('trending-content-row_opacity-0')
}

// Выбор вальюты в Шапке

let currHd = document.querySelector('.header-currency');
let currList = document.querySelector('.header-currency-list');

    currHd.addEventListener('mouseover', function() {
        currList.classList.add('active');
    })

    currHd.addEventListener('mouseout', function(e) {
        currList.classList.remove('active');
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

    let headerLinks = document.querySelectorAll('.header-navbar>li');
    let headerLinkIcon = document.querySelector('.header-navbar__icon');
    let headerHiddenBlocks = document.querySelectorAll('.header-navbar__hidden-block');
    
        for(let i = 0; i < headerLinks.length; i++) {

            headerLinks[i].onmouseenter = function() {
                headerHiddenBlocks[i].classList.add('showed')  
                
            }
            headerLinks[i].onmouseleave = function() {
                headerHiddenBlocks[i].classList.remove('showed')
            }

            headerLinkIcon.addEventListener('mouseenter', function() {
                headerHiddenBlocks[headerHiddenBlocks.length - 1].classList.add('showed')
            })
            headerLinkIcon.addEventListener('mouseleave', function() {
                headerHiddenBlocks[headerHiddenBlocks.length - 1].classList.remove('showed')
            })
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

    let langLinks = $('.buy-dropdown__link__language');

    langLinks.click(function(e){ 
        e.preventDefault();
        langLinks.removeClass("checked");
        $(this).addClass("checked");

        for (let i = 0; i < langLinks.length; i++) {
            if (langLinks[i].classList.contains("checked")) {
                langBtn.innerHTML = langLinks[i].textContent;
            }
        }
    })
    
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

        body.onclick = function(e) {
            if(e.target !== currencyDrp) {
                currencyDrp.classList.remove(blockOp)
            }
        }
    })

    let currencyLinks = $('.buy-dropdown__link__currency');

    currencyLinks.click(function(e){ 
        e.preventDefault();
        currencyLinks.removeClass("checked");
        $(this).addClass("checked");

        for (let i = 0; i < currencyLinks.length; i++) {
            if (currencyLinks[i].classList.contains("checked")) {
                currencyBtn.innerHTML = currencyLinks[i].textContent;
            }
        }
    })

    let tourLinks = $('.tour-search-link');
    let tourRow = document.querySelectorAll('.tour-form-row');

    for (let i = 0; i < tourLinks.length; i++) {
        tourRow[i].classList.add('opacity-0');
        tourRow[0].classList.remove('opacity-0')
    

    tourLinks.click(function(e){ 
        e.preventDefault();
        tourLinks.removeClass('checked');
        $(this).addClass('checked');

        if (tourLinks[i].classList.contains('checked')) {
            tourRow[i].classList.remove('opacity-0');
        }
        else {
            tourRow[i].classList.add('opacity-0');
        }
    });
}
        
let singLnk = document.querySelector('.header-sing__link');
let singBlk = document.querySelector('.sing-block');

singLnk.onclick =  () => {
    if (singBlk.classList.contains('opened')) {
        singBlk.classList.remove('opened')
    }
    else {
        singBlk.classList.add('opened')
        
    }
    body.onclick = function(event){
       
        if(event.target == singLnk) {
            console.log(1)
            event.stopPropagation();
        }
        else {
            console.log(2)
        }
        console.log(event)
    }
    
}


