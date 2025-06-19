document.addEventListener('DOMContentLoaded', ()=> {

    const picker = document.getElementById('colorPicker');
    const btn = document.getElementById('btnCambiar');

    btn.addEventListener('click', () => {
        document.body.style.backgroundColor = picker.value;
    })

});