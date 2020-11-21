import React from 'react'
import './SearchHistory.css'

import HistoryItem from '../HistoryItem/HistoryItem'

export default function SearchHistory({ 
    historyList, 
    sethistoryList, 
    setShowHistory, 
    setMouseOnHistory,
    setSearchValue,
    handleSearch
}) {
    return (
        <div className="search__history" tabIndex="0"
        onMouseEnter={e => setMouseOnHistory(true)}
        onMouseLeave={e => setMouseOnHistory(false)}
        onBlur={e => setShowHistory(false)}>
            <ul className="history__ul">
                {historyList.map(SearchValue => {
                    return <HistoryItem key={SearchValue} 
                    SearchValue={SearchValue} 
                    setSearchValue={setSearchValue}
                    handleSearch={handleSearch}
                    sethistoryList={sethistoryList}
                    setShowHistory={setShowHistory}
                    />
                })}
            </ul>
        </div>
    )
}