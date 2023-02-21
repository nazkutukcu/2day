namespace hasA2{
//var olan kodu bozmadan sayfadan veri alma,gönderme işlemlerini dinamik hale getirebiliyoruz.

interface IGetData {
    getData(): void
}
interface ISetData {
    setData(): void
}

class GetDataType1 implements IGetData {     
    getData(): void {                     
        console.log("model1 data alındı")
    }  
}

class GetDataType2 implements IGetData {     
    getData(): void {                     
        console.log("model2 data alındı")
    }  
}

class GetDataType3 implements IGetData {     
    getData(): void {                     
        console.log("model3 data alındı")
    }  
}

class SetDataType1 implements ISetData {     
    setData(): void {                     
        console.log("model1 data gönderildi")
    }  
}

class SetDataType2 implements ISetData {     
    setData(): void {                     
        console.log("model2 data gönderildi")
    }  
}
class SetDataType3 implements ISetData {     
    setData(): void {                     
        console.log("model3 data gönderildi")
    }  
}

abstract class EditData{
    public _getData: IGetData;
    public _setData: ISetData;
    constructor(getData: IGetData, setData: ISetData) {
        this._getData = getData;
        this._setData = setData;
    }

    SetGetDataOrSetData(getData: IGetData, setData: ISetData) {
        this._getData = getData;
        this._setData = setData;
    }

   
    getData(): void {
        this._getData.getData();
    }
    setData(): void {
        this._setData.setData()
    }
   

}

class View1 extends EditData {

}

var view1= new View1(new GetDataType2(), new SetDataType3());
view1.getData();
view1.setData();

view1.SetGetDataOrSetData(new GetDataType1(),new SetDataType1())
view1.getData();
view1.setData();




























}