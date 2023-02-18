
interface ITakePhoto{

    takePhoto();

}




class BasePhone{
    call(){
        console.log("arama yapıldı")
    }
    
}
class Iphone12 extends BasePhone implements ITakePhoto{
    takePhoto()
    {
        console.log("fotoğraf çekildi")

    }
    
}
class Nokia extends BasePhone implements ITakePhoto{
    takePhoto()
    {
        throw new Error("fotoğraf çekme özelliği yok")

    }
    
}
let phone: BasePhone;

phone=new Iphone12;
phone.call();
if(phone instanceof Iphone12){
    (phone as Iphone12).takePhoto();
}



phone=new Nokia;
phone.call();

