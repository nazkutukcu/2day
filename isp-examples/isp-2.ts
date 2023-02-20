
/* wrong way

interface IDevelopersTasks{
  
   createResponsiveDesign();
   databaseManagement();
   createWebPages()
   serverArchitecture()
   security()
}
*/

//good way

interface IFrontendDeveloper{
    createResponsiveDesign();
    createWebPages()
}

interface IBackendDeveloper{
    databaseManagement();
    serverArchitecture()
    security()
}

class DevelopersTasks implements IFrontendDeveloper ,IBackendDeveloper{
    databaseManagement() {
        throw new Error("Method not implemented.");
    }
    serverArchitecture() {
        throw new Error("Method not implemented.");
    }
    security() {
        throw new Error("Method not implemented.");
    }
    createResponsiveDesign() {
        throw new Error("Method not implemented.");
    }
    createWebPages() {
        throw new Error("Method not implemented.");
    }

}