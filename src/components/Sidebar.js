import React from "react";
import ListCard from "./ListCard";

export default class Sidebar extends React.Component {
    render() {
        const { heading,
                currentList,
                keyNamePairs,
                createNewListCallback, 
                deleteListCallback, 
                loadListCallback,
                renameListCallback} = this.props;
        return (
            <div id="top5-sidebar">
                <div id="sidebar-heading">
                    <input 
                        type="button" 
                        id="add-list-button" 
                        onClick={createNewListCallback}
                        className="top5-button" 
                        value="+" />
                    {heading}
                </div>
                <div id="sidebar-list">
                {
                    keyNamePairs.map((pair) => (
                        <ListCard
                            key={pair.key}
                            keyNamePair={pair}
                            selected={(currentList !== null) && (currentList.key === pair.key)}
                            deleteListCallback={deleteListCallback}
                            loadListCallback={loadListCallback}
                            renameListCallback={renameListCallback}
                        />
                    ))
                }
                </div>
            </div>
        );
    }
}