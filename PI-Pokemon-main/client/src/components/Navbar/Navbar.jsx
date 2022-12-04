import React from 'react' ;
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Navbar.module.css'

export default function Navbar(){
    return (
        <nav className={style.nav}>
            
            <Link to="/"><button className={style.poke}><img id="logoPoke" src={`images/palanding.png`} width="90" alt="landing" /></button></Link>
            
            <Link to="/pokemons"><button className={style.create}>New Pokemon +</button></Link>
            
            <SearchBar />
        </nav>
    );
}