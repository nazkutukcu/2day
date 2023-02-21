
//high level module
class Login {

    _login:ILogin;
    constructor(login: ILogin) {
        this._login = login;
    }

    write(info: string) {
        this._login.write(info);
    }
}

interface ILogin{
    write(info: string)
}

// low level module
class Email implements ILogin {

    write(info: string) {
        console.log(`e-mail bilginiz ile giriş yaptınız :  ${info}`);
    }   

}

class PhoneNumber implements ILogin {

    write(info: string) {
        console.log(`telefon bilginiz ile giriş yaptınız : ${info}`);
    }   

}

class UserName implements ILogin {

    write(info: string) {
        console.log(`kullanıcı adınız ile giriş yaptınız :  ${info}`);
    }   

}

let login1= new Login(new Email());
login1.write("123456@mail.com");

let login2= new Login(new PhoneNumber());
login2.write("12345678900888");

let login3= new Login(new UserName());
login3.write("Mert Yılmaz");

