import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';

function Details() {

    const history = useHistory();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);

    const returnToMovieList = () => {
        history.push('/');
    }

    return(
        <div>
            {details?.map((detail) => {
                    return (
                        <div key={detail.id} >
                            <h3>{detail.title}</h3>
                            <img src={detail.poster} alt={detail.title}/>
                            <p>{detail.description}</p>
                        </div>
                    );
                })}
                <h4>Genres</h4>
                    {genres.map((genre, i)=>{
                        return(
                            <h5 key={i}>{genre.name}</h5>
                        )
                    })}
            <button onClick={returnToMovieList}>Return to Movie List</button>
        </div>
    )
}

export default Details;