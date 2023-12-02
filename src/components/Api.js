import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Api() {

    const [apiResult, setApiResult] = useState(null)

    useEffect(() => {
      getFood()
    }, [])
    
    const getFood = async()=> {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
            params: {
                query: 'pasta',
                offset: '0',
                number: '10',
                limitLicense: 'false',
                ranking: '2'
            },
            headers: {
                'X-RapidAPI-Key': 'fcb59f5dc5msha2d7d10cd158ad2p19f5bfjsneda06ec79017',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                // const resultString = JSON.stringify(response.data.results)
                // console.log(resultString)
                setApiResult(response.data.results)
            } catch (error) {
                console.error(error);
        }
    }





  return (
    <div>Api

   {!apiResult && <p>data is null</p>}

    {apiResult && apiResult.map((item)=> <ul> {item.title}</ul>)}
    
    </div>
  )
}


