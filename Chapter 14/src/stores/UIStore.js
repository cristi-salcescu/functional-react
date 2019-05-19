import { observable, action } from "mobx";

export default function UIStore(){
    const state = observable.object({
        query : { 
            text : ""
        }
    });

    function getQuery(){
        return state.query;
    }
    
    const setQuery = action(function(query){
        state.query = query;
    });

    return Object.freeze({
        getQuery,
        setQuery
    });
}


