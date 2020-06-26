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