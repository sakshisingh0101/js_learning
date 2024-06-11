// let user={};
function User(username,id,isloggedIn)
{
    this.username=username;
    this.id=id;
    this.isloggedIn=isloggedIn;
    return this;
    
}
const userOne=  User("Sakshi Singh",12,'true')
const userTne=  new User("Sakshi Singh",11,'false')
console.log(userOne)