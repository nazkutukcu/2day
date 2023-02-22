//Inheritance 
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
var interit1;
(function (interit1) {
    var Course = /** @class */ (function () {
        function Course(id, name) {
            this.id = id;
            this.name = name;
        }
        Course.prototype.showCourseInfo = function () {
            console.log("".concat(this.id, " - ").concat(this.name, " "));
        };
        return Course;
    }());
    var CourseOnline = /** @class */ (function (_super) {
        __extends(CourseOnline, _super);
        function CourseOnline(id, name, online_assignment) {
            var _this = _super.call(this, id, name) || this;
            _this.online_assignment = online_assignment;
            return _this;
        }
        CourseOnline.prototype.showCourseInfo = function () {
            /*
            Aşağıdaki gibi yazdığımda online_assigment aşağıda gözüküyor ,yan yana gözükmesi için super() kullanmadım.
            super.showCourseInfo();
            console.log(this.online_assignment);
            */
            console.log(" ".concat(this.id, " - ").concat(this.name, " - ").concat(this.online_assignment, " "));
        };
        return CourseOnline;
    }(Course));
    var PhysicalCourse = /** @class */ (function (_super) {
        __extends(PhysicalCourse, _super);
        function PhysicalCourse(id, name) {
            return _super.call(this, id, name) || this;
        }
        PhysicalCourse.prototype.showCourseInfo = function () {
            console.log(" ".concat(this.id, " - ").concat(this.name, "  "));
        };
        return PhysicalCourse;
    }(Course));
    var courseOnline = new CourseOnline(1, "programming", "case study");
    courseOnline.showCourseInfo();
    var coursePhysical = new PhysicalCourse(2, "english");
    coursePhysical.showCourseInfo();
})(interit1 || (interit1 = {}));
