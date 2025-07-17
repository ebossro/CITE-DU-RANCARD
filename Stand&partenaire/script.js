const mainButton1 = document.getElementsById('btn-main1');
document.addEventListener('click', function(event) {
    event.preventDefault();
    mainButton1.style.backgroundColor = 'blue';
})
