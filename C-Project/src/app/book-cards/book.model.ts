export interface Book{
    id: string,
    mainData :{
        bookTitle: string,
        bookAuthor : string
    },
    secondaryData : {
        bookSynopsis: string,
        bookGenre: string,
        bookStatus: string
    }

}