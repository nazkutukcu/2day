// Dependency Inversion Principle (DIP)
var UserInfo = /** @class */ (function () {
    function UserInfo(id, username, gender) {
        this.id = id;
        this.username = username;
        this.gender = gender;
    }
    return UserInfo;
}());
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.GetUserInfo = function () {
        var userList = [];
        userList.push(new UserInfo(1, 'Naz', 'Kadın'));
        userList.push(new UserInfo(2, 'Mert', 'Erkek'));
        userList.push(new UserInfo(3, 'Eda', 'Kadın'));
        return userList;
    };
    return UserRepository;
}());
var UserRepositoryWithMongoDB = /** @class */ (function () {
    function UserRepositoryWithMongoDB() {
    }
    UserRepositoryWithMongoDB.prototype.GetUserInfo = function () {
        var userList = [];
        userList.push(new UserInfo(1, 'Deniz', 'Erkek'));
        userList.push(new UserInfo(2, 'Burcu', 'Kadın'));
        userList.push(new UserInfo(3, 'Ferman', 'Erkek'));
        return userList;
    };
    return UserRepositoryWithMongoDB;
}());
var UserService = /** @class */ (function () {
    function UserService(userRepository) {
        this._userRepository = userRepository;
    }
    UserService.prototype.GetUserInfo = function () {
        var newUserList = [];
        this._userRepository.GetUserInfo().forEach(function (x) {
            newUserList.push(new UserInfo(x.id, x.username, x.gender));
        });
        return newUserList;
    };
    return UserService;
}());
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.prototype.CreateRepository = function () {
        return new UserRepository();
    };
    UserFactory.prototype.CreateRepositoryWithMongoDB = function () {
        return new UserRepository();
    };
    return UserFactory;
}());
var userService = new UserService(new UserFactory().CreateRepository());
userService.GetUserInfo().forEach(function (x) {
    console.log("".concat(x.id, " ").concat(x.username, " ").concat(x.gender));
});
