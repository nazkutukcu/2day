let setArray= new Set();
setArray.add("ahmet");
setArray.add("mehmet");
setArray.add("hasan");
// setArray.add("ahmet");   //kullanmış olduğumuz key'ler set kullandığımızda unique olmalı

for(let name of setArray){
    console.log(name);
}