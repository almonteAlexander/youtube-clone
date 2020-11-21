import React from 'react'
import { ReactComponent as MainLoupeLogo } from '../../img/main__loupe.svg'
import './Welcome.css'

export default function Welcome(){
    return(
        <div className="search__welcome">
            <MainLoupeLogo />
            <h1 className="welcome__text">Welcome! </h1>
            <h2 className="welcome__subtitle">Search Something...</h2>
        </div>
    );
}