let DATA =  "secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ",DATA);
    }
}

class Admin extends User{
    constructor(name,email) {
        super(name,email);
    }
    editDATA() {
        DATA = "some new value";
    }
}

let student1 = new User("parth", "parth@gmail.com");
let student2 = new User("lathiya", "lathiya@gmail.com");

let teacher1 = new User("dean", "dean@gmail.com");

let admin1 = new User("admin", "admin@collage.com");