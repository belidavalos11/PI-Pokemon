import React, { useEffect } from 'react';
import { getPokemons, getTypes } from '../../actions';
import { useDispatch } from 'react-redux' ;
import { Link } from "react-router-dom";
import style from './LandingPage.module.css';


export default function LandingPage(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
        dispatch(getPokemons());
    }, [dispatch])

    return(
        <div className={style.position}>
            <div style={{flexDirection:'column', display:'flex', flexFlow: 'column', alignItems: 'center', justifyContent:'center'}}>
                <img src='images/logo.png'alt="Pokemon" width='550px'/>
                <Link to='/home'>
                    <button className={style.boton}>Home</button>
                </Link>
                <div style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <img src='images/portada.png'alt="Loading.." width='200px'/>
                    <img src='images/squirtle.png'alt="Loading.." width='200px'/>
                    <img src='images/charizard.png'alt="Loading.." width='200px'/>
                    <img src='images/ivysaur.png'alt="Loading.." width='200px'/>
                </div>
            </div>
        </div>
    ) 
}