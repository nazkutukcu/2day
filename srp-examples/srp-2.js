var srp2;
(function (srp2) {
    var Film = /** @class */ (function () {
        function Film(name, genre, director) {
            this.name = name;
            this.genre = genre;
            this.director = director;
        }
        return Film;
    }());
    var watchList = [];
    var CreateWatchList = /** @class */ (function () {
        function CreateWatchList() {
        }
        CreateWatchList.prototype.add = function () {
            watchList.push(new Film('Little Shop Of Horrors', "Musical/Horror", "Frank Oz"));
            watchList.push(new Film('Coraline', "Fantasy", "Henry Selick"));
            watchList.push(new Film('Amadeus', "Drama/Musical", " Miloš Forman"));
            watchList.push(new Film('Back to the Future', "Sci-fi", " Robert Zemeckis"));
            watchList.push(new Film('Scream 5', "Horror", " Tyler Gillett"));
            watchList.push(new Film('Knives Out', "Mystery", " Rian Johnson"));
            return watchList;
        };
        return CreateWatchList;
    }());
    var ShowMyWatchList = /** @class */ (function () {
        function ShowMyWatchList() {
        }
        ShowMyWatchList.prototype.show = function (watchList) {
            watchList.forEach(function (x) {
                console.log("Film ad\u0131: ".concat(x.name, " - T\u00FCr: ").concat(x.genre, " - Y\u00F6netmen: ").concat(x.director));
            });
        };
        return ShowMyWatchList;
    }());
    var myList = new CreateWatchList();
    myList.add();
    var show1 = new ShowMyWatchList();
    show1.show(watchList);
})(srp2 || (srp2 = {}));
