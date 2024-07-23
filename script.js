window.onload = function(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let rememberMe = document.getElementById('rememberMe');
    let loadData = window.localStorage;

    rememberMe.addEventListener('change', function(e){
        if(e.target.checked){
            localStorage.setItem('username', username.value);
            localStorage.setItem('password', password.value);
        }else{
            localStorage.clear();
        }
        
    });
    
    if(loadData.username && loadData.password){
        username.value = loadData.username;
        password.value = loadData.password;
    }

}





