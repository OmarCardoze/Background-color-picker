let colorPicker = document.getElementById('colorPicker')

colorPicker.addEventListener('input', e => {
    let background = document.getElementById('background')
    background.style.background = e.target.value
})