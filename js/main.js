let rows = document.querySelectorAll('.trending-content-row');

for(let i = 0; i < rows.length; i++) {
    rows[0].classList.remove('trending-content-row_opacity-0')
    rows[i].classList.add('trending-content-row_opacity-0');
    
}