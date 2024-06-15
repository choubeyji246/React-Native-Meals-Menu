import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids:[],
    addFavourite: (id)=>{},
    removeFavourite: (id)=>{}
})

const FavouritesContextProvider = ({children})=>{
const [favMealIds, setFavMealIds] = useState([])

const addFavourite = (id)=>{
    setFavMealIds((currentFavIds)=>[...currentFavIds, id])
}

const removeFavourite = (id)=>{
    setFavMealIds((currentFavIds)=> currentFavIds.filter((mealId)=> id !== mealId ))
}

const value = {
    ids: favMealIds,
    addFavourite:addFavourite,
    removeFavourite:removeFavourite
}
    return <FavouritesContext.Provider value={value}>
        {children}
    </FavouritesContext.Provider>
}

export default FavouritesContextProvider