//Single Responsibility Principle (SRP)

namespace srp1{

    class Book {
        name: string;
        author:string;
        numberOfPages: number;

        constructor(name: string, author: string, numberOfPages:number) {
            this.name = name;
            this.author = author;
            this.numberOfPages=numberOfPages;
        }
    }

    let bookList: Book[] = [];
     class CreateMyReadingChallenge{
        
        add(): Book[] {
       
            bookList.push(new Book('Pride and Prejudice', "Jane Austen", 424));
            bookList.push(new Book('The Picture of Dorian Gray', "Oscar Wilde",280));
            bookList.push(new Book('Letter from an Unknown Woman', "Stefan Zweig",80));
            bookList.push(new Book('Martin Eden', "Jack London",520));
            bookList.push(new Book('The Ginza Ghost', "Keikichi Osaka",204));

            return bookList;
    
        }
                   
     }
    class WriteMyReadingChallenge {

        writeToConsole(bookList: Book[]) {
            bookList.forEach(x => {
              console.log( `Kitap adı: ${x.name} , Yazar: ${x.author} , Sayfa Sayısı: ${x.numberOfPages}`) ;
              
            })
        }
    }

    
    let myReadingChallenge = new CreateMyReadingChallenge();
    myReadingChallenge.add();
    let write1 = new WriteMyReadingChallenge()
    write1.writeToConsole(bookList);
    



}