namespace srp2 {

    class Film {
        name: string;
        genre: string;
        director:string;

        constructor(name: string, genre: string, director:string) {
            this.name = name;
            this.genre = genre;
            this.director=director;
        }
    }

    let watchList: Film[] = [];
     class CreateWatchList{
        
        add(): Film[] {
       
            watchList.push(new Film('Little Shop Of Horrors', "Musical/Horror","Frank Oz"));
            watchList.push(new Film('Coraline', "Fantasy","Henry Selick"));
            watchList.push(new Film('Amadeus', "Drama/Musical"," Miloš Forman"));
            watchList.push(new Film('Back to the Future', "Sci-fi"," Robert Zemeckis"));
            watchList.push(new Film('Scream 5', "Horror"," Tyler Gillett"));
            watchList.push(new Film('Knives Out', "Mystery"," Rian Johnson"));

            return watchList;
    
        }
                   
     }
    class ShowMyWatchList {

        show(watchList: Film[]) {
            watchList.forEach(x => {
              console.log( `Film adı: ${x.name} - Tür: ${x.genre} - Yönetmen: ${x.director}`) ;
              
            })
        }
    }

    
    let myList = new CreateWatchList();
    myList.add();
    let show1 = new ShowMyWatchList()
    show1.show(watchList);
    

}
