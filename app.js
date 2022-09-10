// const setTheme = theme => document.getElementsByClassName = theme;

// document.getElementById('theme-select').addEventListener('change', function(){
//     setTheme(this.value);
// });


const setTheme = theme => document.documentElement.className = theme;

    document.getElementById('theme-select').addEventListener('change', function() {
        setTheme(this.value);
    });

    const getTheme = () =>{
        const theme = localStorage.getItem('theme');
        theme && setTheme(theme);
    }

    getTheme();