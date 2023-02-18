interface IUpBehavior{
    Up():void
}
interface IDownBehavior{
    Down():void
}
class UpBehaviorType1 implements IUpBehavior{
    Up(): void {
        console.log("up type 1")
    }
    
}
class UpBehaviorType2 implements IUpBehavior{
    Up(): void {
        console.log("up type 2")
    }
    
}

class UpBehaviorType3 implements IUpBehavior{
    Up(): void {
        console.log("up type 3")
    }
    
}
class DownBehaviorType1 implements IDownBehavior{
    Down(): void {
        console.log("down type 1")
    }
    
    
}

class DownBehaviorType2 implements IDownBehavior{
    Down(): void {
        console.log("down type 2")
    }
    
    
}

class DownBehaviorType3 implements IDownBehavior{
    Down(): void {
        console.log("down type 3")
    }
    
    
}

abstract class BaseBall{
    public _upBehavior: IUpBehavior
    public _downBehavior: IDownBehavior

    constructor(upBehavior:IUpBehavior, downBehavior:IDownBehavior){
        this._upBehavior=upBehavior;
        this._downBehavior=downBehavior;
    }

    SetUpOrDownBehavior(upBehavior: IUpBehavior, downBehavior: IDownBehavior) {
        this._upBehavior = upBehavior;
        this._downBehavior = downBehavior;
    }
    Yukarı(): void {
        console.log("yukarı")
    }
    Asagı(): void {
        console.log("aşağı")
    }
    Up():void{
        this._upBehavior.Up();
    }
    Down():void{
        this._downBehavior.Down();
    }
}

class Ball1 extends BaseBall {

}
class Ball2 extends BaseBall {

}

class Ball3 extends BaseBall {

}

var b1 = new Ball1(new UpBehaviorType2(),new DownBehaviorType3())
b1.Yukarı();
b1.Asagı();
b1.Up();
b1.Down();
b1.SetUpOrDownBehavior(new UpBehaviorType1(), new DownBehaviorType1())
b1.Up()
b1.Down()
