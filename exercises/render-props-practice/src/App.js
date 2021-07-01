import React from "react"
import DataFetcher from "./DataFetcher"

function App() {
    return (
        <div>
            <DataFetcher url="https://swapi.dev/api/people/1" render={function (data, loading, error) {
                return (

                    error ? <h1>couldn't retrieve data</h1>
                    :

                    loading ?                       
                        <h2>loading...</h2>
                        :
                        <h2>Hello how are you {data?.name} ?</h2>
                )
            }} >

            </DataFetcher>
        </div>

    )
}


export default App