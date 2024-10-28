document.getElementById('btn').addEventListener('click', function() {
    const notfcsn = document.getElementById('notfcsn');
    

    notfcsn.classList.remove('hidden');
    notfcsn.classList.add('visible');
    
    setTimeout(function() {
        notfcsn.classList.remove('visible');
        notfcsn.classList.add('hidden');
    }, 5000);
});
