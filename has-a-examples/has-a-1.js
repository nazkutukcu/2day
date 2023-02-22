var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Has-a
//Var olan kodu bozmadan yeni diller öğrenmeyi dinamik hale getiriyoruz.
var hasA1;
(function (hasA1) {
    var LearnEnglishType1 = /** @class */ (function () {
        function LearnEnglishType1() {
        }
        LearnEnglishType1.prototype.learnEnglish = function () {
            console.log("İngilizce seviyesi: Beginner");
        };
        return LearnEnglishType1;
    }());
    var LearnEnglishType2 = /** @class */ (function () {
        function LearnEnglishType2() {
        }
        LearnEnglishType2.prototype.learnEnglish = function () {
            console.log("İngilizce seviyesi: Intermediate");
        };
        return LearnEnglishType2;
    }());
    var LearnEnglishType3 = /** @class */ (function () {
        function LearnEnglishType3() {
        }
        LearnEnglishType3.prototype.learnEnglish = function () {
            console.log("İngilizce seviyesi: Advanced ");
        };
        return LearnEnglishType3;
    }());
    var LearnGermanType1 = /** @class */ (function () {
        function LearnGermanType1() {
        }
        LearnGermanType1.prototype.learnGerman = function () {
            console.log("Almanca seviyesi: Beginner");
        };
        return LearnGermanType1;
    }());
    var LearnGermanType2 = /** @class */ (function () {
        function LearnGermanType2() {
        }
        LearnGermanType2.prototype.learnGerman = function () {
            console.log("Almanca seviyesi: Intermadiate");
        };
        return LearnGermanType2;
    }());
    var LearnGermanType3 = /** @class */ (function () {
        function LearnGermanType3() {
        }
        LearnGermanType3.prototype.learnGerman = function () {
            console.log("Almanca seviyesi: Advanced");
        };
        return LearnGermanType3;
    }());
    var LearnLanguage = /** @class */ (function () {
        function LearnLanguage(learnEnglish, learnGerman) {
            this._learnEnglish = learnEnglish;
            this._learnGerman = learnGerman;
        }
        LearnLanguage.prototype.SetLearnEngOrGerman = function (learnEnghish, learnGerman) {
            this._learnEnglish = learnEnghish;
            this._learnGerman = learnGerman;
        };
        LearnLanguage.prototype.learnTypeScript = function () {
            console.log("typeScript çalışıyorum");
        };
        LearnLanguage.prototype.learnEnglish = function () {
            this._learnEnglish.learnEnglish();
        };
        LearnLanguage.prototype.learnGerman = function () {
            this._learnGerman.learnGerman();
        };
        return LearnLanguage;
    }());
    var Student1 = /** @class */ (function (_super) {
        __extends(Student1, _super);
        function Student1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Student1;
    }(LearnLanguage));
    var Student2 = /** @class */ (function (_super) {
        __extends(Student2, _super);
        function Student2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Student2;
    }(LearnLanguage));
    var student1 = new Student1(new LearnEnglishType2(), new LearnGermanType3());
    student1.learnEnglish();
    student1.learnGerman();
    console.log("---------------------------------------------------------------");
    /*
    student1.SetLearnEngOrGerman(new LearnEnglishType1(),new LearnGermanType1())
    student1.learnEnglish();
    student1.learnGerman();
    student1.learnTypeScript();
    */
    student1.SetLearnEngOrGerman(new LearnEnglishType1(), new LearnGermanType1());
    student1.learnEnglish();
    student1.learnGerman();
})(hasA1 || (hasA1 = {}));
