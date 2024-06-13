const user={
    email:'sakshi@singh',
    password:"123abc",
    get _email()
    {
        return this.email;
    },
    set _email(value)
    {  
       this.email=value;
    }
}
console.log(user._email)
user._email="chai";
console.log(user.email);