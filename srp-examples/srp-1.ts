//Single Responsibility Principle (SRP)

namespace srp1{

class UserRepository{
    userList: User[] = [];
        addUser(user: User) {
            this.userList.push(user);
            
        }
    
        removeUser(user_id: number) {
    
            
        }
        updateUserInfo(user: User) {
    
        }

}

class UserInfoPresenter {
    writeToConsole(userList: User[]) {
    userList.forEach(x => {
        console.log(x);
    })
}
}

class User{
    username:string;
    user_id:number;
}



}