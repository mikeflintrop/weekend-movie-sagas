import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
            <Card className='movieCard' sx={{ maxWidth: 345 }} onClick={getDetails}>
				<CardActionArea>
					<CardMedia
						className='movieImage'
						component='img'
						height='160'
						image={movie.poster}
						alt={movie.title}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{movie.title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
        </div>
    )
};

export default MovieListItem;