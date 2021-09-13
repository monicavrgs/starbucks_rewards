function openDefaultOption(){
    document.getElementById('default-open').click()
}

function openOption(option){
    let favorite = document.getElementById(option)
    let buttons = document.getElementsByClassName('favorites-nav-option')

    let favOptions = document.getElementsByClassName('favorites-option')
    
    for(let i = 0; i < favOptions.length; i++){
        favOptions[i].style.display = 'none'
        favorite.style.display = 'flex'

        buttons[i].classList.remove('active-nav-option')
    }

    let currentButton = event.currentTarget
    currentButton.classList.add('active-nav-option')
}

openDefaultOption()