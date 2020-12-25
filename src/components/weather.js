import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("patna");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=957d733f35528020b4d19934a82fcb97`;
            const response = await fetch(url)
            
            const resJon = await response.json();
            setCity(resJon.main);
        }
        fetchApi();
    },[search]);

    return(
        <>
            <div className="card border border-success shadow">
                
                <div className="inputData">
                    <input type="search" className="inputField" onChange={ (event) => {
                        setSearch(event.target.value)
                    }}></input>
                </div>
              
            {!city ? (
                <div className="warning">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                <p>No Data Found</p>
                </div>
            ) : (
            <div>  
            <div className="info">
            <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
                {city.temp}&deg;C
            </h1>
            <h3 className="minmax">min temp : {city.temp_min}&deg;C | max temp : {city.temp_max}&deg;C</h3>
        </div>
        </div>
            )
        }  
            


            {/* <div className="wave one"></div>
            <div className="wave two"></div>
            <div className="wave three"></div> */}
            </div>
        </>
    );
};

export default Weather;