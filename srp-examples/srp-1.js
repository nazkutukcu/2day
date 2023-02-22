//Single Responsibility Principle (SRP)
var srp1;
(function (srp1) {
    var Book = /** @class */ (function () {
        function Book(name, author, numberOfPages) {
            this.name = name;
            this.author = author;
            this.numberOfPages = numberOfPages;
        }
        return Book;
    }());
    var bookList = [];
    var CreateMyReadingChallenge = /** @class */ (function () {
        function CreateMyReadingChallenge() {
        }
        CreateMyReadingChallenge.prototype.add = function () {
            bookList.push(new Book('Pride and Prejudice', "Jane Austen", 424));
            bookList.push(new Book('The Picture of Dorian Gray', "Oscar Wilde", 280));
            bookList.push(new Book('Letter from an Unknown Woman', "Stefan Zweig", 80));
            bookList.push(new Book('Martin Eden', "Jack London", 520));
            bookList.push(new Book('The Ginza Ghost', "Keikichi Osaka", 204));
            return bookList;
        };
        return CreateMyReadingChallenge;
    }());
    var WriteMyReadingChallenge = /** @class */ (function () {
        function WriteMyReadingChallenge() {
        }
        WriteMyReadingChallenge.prototype.writeToConsole = function (bookList) {
            bookList.forEach(function (x) {
                console.log("Kitap ad\u0131: ".concat(x.name, " , Yazar: ").concat(x.author, " , Sayfa Say\u0131s\u0131: ").concat(x.numberOfPages));
            });
        };
        return WriteMyReadingChallenge;
    }());
    var myReadingChallenge = new CreateMyReadingChallenge();
    myReadingChallenge.add();
    var write1 = new WriteMyReadingChallenge();
    write1.writeToConsole(bookList);
})(srp1 || (srp1 = {}));
