import React, { useEffect, useState } from 'react';

const GameFishView = () => {


    const [gameFish, SetGameFish] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/game-fish-get')
        .then(res=> res.json())
        .then(data => SetGameFish(data))
    }, [])

    return (
        <div>
           {
            gameFish.map(game => {
                return (
                    <div className='p-5'>
                        <img className='h-60' src={'https://'+game.img} alt="" />
                        <div>
                            <h1>{game.fishName}</h1>
                            
                        </div>
                    </div>
                )
            })
           }
        </div>
    );
};

export default GameFishView;