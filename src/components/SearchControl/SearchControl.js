import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as LoupeSvg } from '../../img/search__loupe.svg'
import { Button } from '@material-ui/core'
import { getVideos } from '../../services/video__services'
import './SearchControl.css'

import SearchHistory from '../SearchHistory/SearchHistory'

export default function SearchControl({ 
    setVideoList, 
    setIsLoading, 
    SearchValue,
    setSearchValue}) {
        
    const [ historyList, sethistoryList ] = useState( 
        JSON.parse(localStorage.getItem('historyList')) || []
    );
    const [ ShowHistory, setShowHistory ] = useState(false);
    const [ MouseOnHistory, setMouseOnHistory ] = useState(false);
    const history = useHistory();

    let handleSearch = async (SearchValue) => {
        setShowHistory(false);
        setIsLoading(true);
        history.push(`results?search_query=${SearchValue}`);
        if(SearchValue && !historyList.includes(SearchValue)){
            sethistoryList(prevHistory => [...prevHistory, SearchValue]);
        } 
        await getVideos(SearchValue, setVideoList);
        setIsLoading(false);
    }

    let handleFormSubmit = (event) => {
        event.preventDefault();
        if(SearchValue) handleSearch(SearchValue);
    }

    let handleInputOnBlur = () => {
        if(MouseOnHistory) return;
        setShowHistory(false);
    }

    useEffect(() => {
        localStorage.setItem('historyList', JSON.stringify(historyList));
    }, [historyList])

    return (
        <form className="search__control" onSubmit={e => handleFormSubmit(e)}>

            <input type="text" className="search__input" value={SearchValue || ''} placeholder="Search..."
            onChange={e => setSearchValue(e.target.value)} 
            onFocus={e => setShowHistory(true)}
            onBlur={e => handleInputOnBlur()}/>

            {ShowHistory && historyList.length > 0 && 
            <SearchHistory 
            historyList={historyList.slice(0, 10)} 
            sethistoryList={sethistoryList}
            setShowHistory={setShowHistory}
            setMouseOnHistory={setMouseOnHistory}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch} />}
            
            <Button className="search__button"
            onClick={e => {if(SearchValue) handleSearch(SearchValue)}}>
                <LoupeSvg className="loupe__svg" />
            </Button>
        </form>
    )
}