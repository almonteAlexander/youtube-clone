import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as YoutubeLogo } from '../../img/youtube__logo.svg'
import './Header.css'

import SearchControl from '../SearchControl/SearchControl'

export default function Header({ 
    setVideoList, 
    setIsLoading,
    SearchValue,
    setSearchValue}) {
    return (
        <header className="search__header">
            <Link to="/">
                <YoutubeLogo className="youtube__logo" />
            </Link>
            <SearchControl 
            setVideoList={setVideoList}
            setIsLoading={setIsLoading}
            SearchValue={SearchValue}
            setSearchValue={setSearchValue}/>
        </header>
    )
}