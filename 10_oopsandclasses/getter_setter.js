class user
{
    constructor(email,password)
    {
        this.email=email;
        this.password=password;
    }
    set email(email)

    {
        this._email=email.toUpperCase();
    }
    get email()
    {
        return this._email;
    }
}

const sakshi=new user("sakshi@gmail.com","123");
// sakshi.surname="singh";
// console.log(sakshi.surname);
console.log(sakshi.email);
