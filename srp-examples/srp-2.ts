namespace srp2{

    class WatchList {
        name:string;
        genre:string;

        constructor(name:string,genre:string){
            this.name=name;
            this.genre=genre;
        }
      
      
    }

      class EditWatchList {

        
        list: WatchList[] = [];
        add(list:WatchList){
            this.list.push(list);
        }
      }

      class ShowMyList {
        
        show(list: WatchList[]) {
            list.forEach(x => {
                console.log(x);
            })
        }
      }

      var watchList = new WatchList("Little Shop Of Horrors","Musical");
     
      
      

}
