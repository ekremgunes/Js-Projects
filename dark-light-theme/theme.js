const ThemeSwitch = document.querySelector('#switch-input')
const body = document.body;
// localStorage.clear();


ThemeSwitch.addEventListener('click', () => {

    if (body.classList.contains('light')) {
        changeTheme('dark');//light to dark      
    }
    else if (body.classList.contains('dark')) {

        changeTheme('light'); //dark to light     

    }
})

const changeTheme = (theme) => {
    if (theme == 'dark') {
        body.classList.replace('light', 'dark');
        
        if (localStorage.getItem('selectedTheme') != 'dark') {
            localStorage.setItem('selectedTheme', 'dark');
            
        }
        else{
            ThemeSwitch.toggleAttribute('checked');
        }
    }
    else if (theme == 'light') {
        body.classList.replace('dark', 'light');
        if (localStorage.getItem('selectedTheme') =='dark') {
            localStorage.removeItem('selectedTheme');
        }
    }
}

if (localStorage.getItem('selectedTheme') == 'dark') {
    changeTheme('dark');
}