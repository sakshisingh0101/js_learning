// //ES6
// class User
// { constructor(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;
// }
//  encyptPassword(){
//     return (`${this.password}abc`)
//  }

// }
// const user=new User("sakshi","sakshi@gmail.com","123")
// console.log(user.encyptPassword());
//BTS
function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
user.prototype.changeusername=function(){
    return this.username.toUpperCase();
    }
    const userOne=new user('sakshi','sakshi@gmail.com',123)
    userOne.changeusername();
    console.log( userOne.changeusername())


//inheritence
class student{
    constructor(name,standard,rollno)
    {
        this.name=name;
        this.standard=standard;
        this.rollno=rollno;
    }
    useme(){
        console.log("useme")
    }
}

// use of extend keyword
class teacher extends student{
    constructor(teachername,age,qualifiction)
    {  //constructor ko call ja rhi h aur parameters hum apne class ke according bhejenge
        super(teachername,11,23);
       this.age=age;
       this.qualification=qualifiction;
    }
}
const Teacher=new teacher('neetu',35,'B-ed');
console.log(Teacher.standard);
console.log(Teacher.useme());
console.log(Teacher instanceof student);