import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './HistoryItem.css'

export default function HistoryItem({ 
    SearchValue, 
    setSearchValue,
    handleSearch, 
    sethistoryList, 
    setShowHistory
}) {

    const [ OnRemoveButton, setOnRemoveButton ] = useState(false);

    let handleItemClick = async () => {
        if(!OnRemoveButton){
            await setSearchValue(SearchValue);
            setShowHistory(false);
            handleSearch(SearchValue);
        }
    }

    let handleDeleteItem = () => {
        sethistoryList(prevHistory => prevHistory.filter(historyValue => 
            historyValue !== SearchValue
        ));
    }

    return (
        <li className="history__item"
        onClick={e => handleItemClick()}>
            { SearchValue }
            <Button className="history__item-button"
            onClick={e => handleDeleteItem()}
            onMouseEnter={e => setOnRemoveButton(true)}
            onMouseLeave={e => setOnRemoveButton(false)}>
                REMOVE
            </Button>
        </li>
    )
}