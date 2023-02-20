// Dependency Inversion Principle (DIP)


    class UserInfo {
        id: number;
        username: string;
        gender: string

        constructor(id: number, username: string, gender: string) {
            this.id = id;
            this.username = username;
            this.gender = gender;
        }

    }

    class UserRepository implements IUserRepository {           //High Level Module


        GetUserInfo(): UserInfo[] {


            let userList: UserInfo[] = [];
            userList.push(new UserInfo(1, 'Naz', 'Kadın'))
            userList.push(new UserInfo(2, 'Mert', 'Erkek'))
            userList.push(new UserInfo(3, 'Eda', 'Kadın'))
            return userList;

        }
    }

    class UserRepositoryWithMongoDB implements IUserRepository {

        GetUserInfo(): UserInfo[] {

            let userList: UserInfo[] = [];
            userList.push(new UserInfo(1, 'Deniz', 'Erkek'))
            userList.push(new UserInfo(2, 'Burcu', 'Kadın'))
            userList.push(new UserInfo(3, 'Ferman', 'Erkek'))
            return userList;
        }

    }

    interface IUserRepository {
        GetUserInfo(): UserInfo[];
    }

    class UserService {

        private _userRepository: IUserRepository


        constructor(userRepository: IUserRepository) {

            this._userRepository = userRepository;
        }

        GetUserInfo(): UserInfo[] {
            let newUserList: UserInfo[] = [];


            this._userRepository.GetUserInfo().forEach(x => {
                newUserList.push(new UserInfo(x.id, x.username, x.gender));

            })
            return newUserList;
        }
    }

    class UserFactory {

        public CreateRepository(): IUserRepository {
            return new UserRepository();
        }

        public CreateRepositoryWithMongoDB(): IUserRepository {
            return new UserRepository();
        }
    }

    var userService = new UserService(new UserFactory().CreateRepository());
    userService.GetUserInfo().forEach(x => {
        console.log(`${x.id} ${x.username} ${x.gender}`)
    })


      
