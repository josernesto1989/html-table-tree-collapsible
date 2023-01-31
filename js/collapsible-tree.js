document.querySelectorAll('span[data-gr-ct-trigger]').forEach((element) =>{
    element.addEventListener('click',(e)=>{
        e.target.classList.toggle('fa-plus');
        e.target.classList.toggle('fa-minus');
        document.querySelectorAll(`[data-gr-ct-receiver='${e.target.getAttribute('data-gr-ct-trigger')}']`).forEach((element) =>{
            element.toggleAttribute('data-gr-ct-collapsed');
        });
        console.log('collapsed');
    });
});