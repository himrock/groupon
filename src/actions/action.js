import {ADD_BOOK, REMOVE_BOOK, EDIT_BOOK} from './types';

export const addBook = (name,description,author) =>{
    return {
        type : ADD_BOOK,      // without thunk middleware
        payload : {
            name: name,
            description : description,
            author: author,
        }
    }
}

export const removeBook = (data) =>{
    return {
        type : REMOVE_BOOK,
        payload : {
            id : data
        }
    }
}

export const editBook = (name,description,author,id) =>{
    return {
        type : EDIT_BOOK,
        payload : {
            name: name,
            description : description,
            author: author,
            id : id
        }
    }
}