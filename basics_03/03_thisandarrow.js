let user={
    username:"sakshi",
    greetings_message:function()
    {
        console.log(`Hello ${this.username}`);


    }
}
user.greetings_message()
//global object in console windows this will refer to windows but in code environment global object is braces
console.log(this);
