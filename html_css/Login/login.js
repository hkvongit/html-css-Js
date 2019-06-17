function flogin(){
    const username=document.getElementById("username")
    const password=document.getElementById("password")
    const invalidity=document.getElementById("invalidity")
    if (username.value==""||password.value==""){
        invalidity.innerHTML="Fields cannot be left empty "
        return false
    }
    else if(username.value=="someone@someone.com"&&password.value=="password"){
        return true
    }else{
        // alert('invalid user details')
        invalidity.innerHTML="invalid user details"
        return false
    }
}