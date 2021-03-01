import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from '../actions/types';

const initialState={
    books : [
        {name : 'Name Of The Wind', description: 'Random Description Text about the book', author : 'Patrix', count : 2, id : 1},
        {name : 'The Final Empire', description: 'Random Description Text about the book', author : 'Brandon', count : 4, id : 2}
    ]
}


const BookReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_BOOK:
            return {
                ...state ,
                 books : [...state.books, {
                                            name : action.payload.name,
                                            description : action.payload.description,
                                            author : action.payload.author,
                                            count : 1,
                                            id : uuidv4()
                                        }
                        ]
                }

        case REMOVE_BOOK:
            return {
                ...state,
                books : [...state.books.filter(book=>book.id!==action.payload.id)]
                
            }
        
        case EDIT_BOOK:
            const elementsIndex = state.books.findIndex(element => element.id === action.payload.id )
            let newArray = [...state.books]
            newArray[elementsIndex] = {...newArray[elementsIndex], name: action.payload.name, description: action.payload.description, author: action.payload.author}
            return {...state, books : newArray}

        default : 
            return state;
    }
}

export default BookReducer;