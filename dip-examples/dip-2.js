//high level module
var Login = /** @class */ (function () {
    function Login(login) {
        this._login = login;
    }
    Login.prototype.write = function (info) {
        this._login.write(info);
    };
    return Login;
}());
// low level module
var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.write = function (info) {
        console.log("e-mail bilginiz ile giri\u015F yapt\u0131n\u0131z :  ".concat(info));
    };
    return Email;
}());
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber() {
    }
    PhoneNumber.prototype.write = function (info) {
        console.log("telefon bilginiz ile giri\u015F yapt\u0131n\u0131z : ".concat(info));
    };
    return PhoneNumber;
}());
var UserName = /** @class */ (function () {
    function UserName() {
    }
    UserName.prototype.write = function (info) {
        console.log("kullan\u0131c\u0131 ad\u0131n\u0131z ile giri\u015F yapt\u0131n\u0131z :  ".concat(info));
    };
    return UserName;
}());
var login1 = new Login(new Email());
login1.write("123456@mail.com");
var login2 = new Login(new PhoneNumber());
login2.write("12345678900888");
var login3 = new Login(new UserName());
login3.write("Mert Yılmaz");
