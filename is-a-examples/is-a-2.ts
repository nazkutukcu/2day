namespace isA2 {

    abstract class Device  {
        
        abstract sendMessage():void;
        abstract call():void;
        abstract takePicture():void;

    }

    class Telephone1 extends Device {
        sendMessage(): void {
            console.log("Mesaj gönderebilir")
        }
        call(): void {
            console.log("Sesli arama yapabilir")
        }
        takePicture(): void {
            console.log("Fotoğraf çekebilir")
        }

    }

    class Telephone2 extends Device {
        sendMessage(): void {
            console.log("Mesaj gönderebilir")
        }
        call(): void {
            console.log("Sesli arama yapabilir")
        }
        takePicture(): void {
            console.log("Fotoğraf çekebilir")
        }

    }

    class Camera extends Device {
        sendMessage(): void {
            throw new Error("yeniden öğrenemez");
        }
        call(): void {
            throw new Error("yeniden öğrenemez")
        }
        takePicture(): void {
            console.log("Fotoğraf çekebilir")
        }

    }

    var telephone1= new Telephone1();
    telephone1.call();
    telephone1.sendMessage();
    telephone1.takePicture();

    var telephone2= new Telephone2();
    telephone2.call();
    telephone2.sendMessage();
    telephone2.takePicture();

    































}