function setuserName(username)
{
   this.username=username;
   

}
function createusername(username,isloggedIn,email)
{// this.username= setuserName(username).username;
    setuserName.call(this,username);

    this.isloggedIn=isloggedIn;
    this.email=email;
}
let user=new createusername("sakshi",true,"sakshi@gmail.com");
console.log(user);