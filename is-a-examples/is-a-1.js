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
//is a
var isA;
(function (isA) {
    var LearnLanguage = /** @class */ (function () {
        function LearnLanguage() {
        }
        return LearnLanguage;
    }());
    var Student1 = /** @class */ (function (_super) {
        __extends(Student1, _super);
        function Student1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student1.prototype.learnEnglish = function () {
            console.log("İngilizce öğreniyor,level:beginner");
        };
        Student1.prototype.learnGerman = function () {
            console.log("Almanca öğreniyor,level:beginner");
        };
        return Student1;
    }(LearnLanguage));
    var Student2 = /** @class */ (function (_super) {
        __extends(Student2, _super);
        function Student2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student2.prototype.learnEnglish = function () {
            console.log("ingilizce öğreniyor ,level:intermediate");
        };
        Student2.prototype.learnGerman = function () {
            console.log("ingilizce öğreniyor, level:intermadiate");
        };
        return Student2;
    }(LearnLanguage));
    var Student3 = /** @class */ (function (_super) {
        __extends(Student3, _super);
        function Student3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student3.prototype.learnEnglish = function () {
            console.log("ingilizce öğreniyor, level:advanced");
        };
        Student3.prototype.learnGerman = function () {
            console.log("almanca öğreniyor,level :advanced");
        };
        return Student3;
    }(LearnLanguage));
    var EnglishTeacher = /** @class */ (function (_super) {
        __extends(EnglishTeacher, _super);
        function EnglishTeacher() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EnglishTeacher.prototype.learnEnglish = function () {
            throw new Error("yeniden öğrenemez");
        };
        EnglishTeacher.prototype.learnGerman = function () {
            console.log("almanca öğreniyor");
        };
        return EnglishTeacher;
    }(LearnLanguage));
    var student1 = new Student1();
    student1.learnEnglish();
    student1.learnGerman();
    console.log("------------------------------------");
    var student2 = new Student2();
    student2.learnEnglish();
    student2.learnGerman();
    console.log("------------------------------------");
    var student3 = new Student3();
    student3.learnEnglish();
    student3.learnGerman();
    console.log("------------------------------------");
    var englishTeacher = new EnglishTeacher();
    englishTeacher.learnEnglish(); //burdan error gelicek
    englishTeacher.learnGerman();
})(isA || (isA = {}));
