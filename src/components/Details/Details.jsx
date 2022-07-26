import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);

    let {id} = useParams();

    console.log('this is movie id', id);

    const returnToMovieList = () => {
        history.push('/');
    }

    // const getDetails= ()=>{
    //     dispatch({type: 'FETCH_DETAILS', payload: id })
    //     dispatch({type: 'FETCH_GENRES', payload: id })
    // }

    useEffect(()=>{
        dispatch({type: 'FETCH_DETAILS', payload: id });
        dispatch({type: 'FETCH_GENRES', payload: id });
    },[])

    // useEffect(()=>{
    //     dispatch({type: 'FETCH_GENRES', payload: id })
    // },[])

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
            <Button 
                variant="outlined" 
                size="medium"
                onClick={returnToMovieList}
                >Return to Movie List
            </Button>
        </div>
    )
}

export default Details;