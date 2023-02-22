//Inheritance 

namespace interit1 {

    class Course {
        id: number;
        name: string;
        price: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;

        }

        showCourseInfo(): void {
            console.log(`${this.id} - ${this.name} `);
        }
    }

    class CourseOnline extends Course {

        online_assignment: string;
        constructor(id: number, name: string, online_assignment: string) {
            super(id, name);
            this.online_assignment = online_assignment;
        }

        showCourseInfo(): void {
            /*
            Aşağıdaki gibi yazdığımda online_assigment aşağıda gözüküyor ,yan yana gözükmesi için super() kullanmadım.
            super.showCourseInfo();       
            console.log(this.online_assignment);
            */
            console.log(` ${this.id} - ${this.name} - ${this.online_assignment} `);

        }
    }

    class PhysicalCourse extends Course {
        
        constructor(id: number, name: string) {
            super(id, name);
           
        }

        showCourseInfo(): void {
          
            console.log(` ${this.id} - ${this.name}  `);

        }
    }

    var courseOnline = new CourseOnline(1, "programming", "case study");
    courseOnline.showCourseInfo();

    var coursePhysical= new PhysicalCourse(2,"english")
    coursePhysical.showCourseInfo();


    } 

