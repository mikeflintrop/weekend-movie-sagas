import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieListItem ({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const getDetails = () => {
        dispatch({type: 'FETCH_DETAILS', payload: movie})
        dispatch({type: 'FETCH_GENRES', payload: movie.id})
        console.log('in getDetails', movie.id);
        history.push('/details');
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={getDetails} src={movie.poster} alt={movie.title}/>
        </div>
    )
};

export default MovieListItem;