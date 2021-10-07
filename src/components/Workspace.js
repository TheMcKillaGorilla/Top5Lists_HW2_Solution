import Top5Item from './Top5Item.js';
import React from "react";

export default class Workspace extends React.Component {
    render() {
        const {currentList, moveItemCallback, updateItemCallback} = this.props;
        let editItems = "";
        if (currentList) {
            editItems = 
                <div id="edit-items">
                    {
                        currentList.items.map((item, index) => (
                            <Top5Item 
                                id={'top5-item-' + (index+1)}
                                key={'top5-item-' + (index+1)}
                                text={item}
                                setItemBeingEditedCallback={this.props.setItemBeingEditedCallback}
                                isItemBeingEditedCallback={this.props.isItemBeingEditedCallback}
                                moveCallback={moveItemCallback}
                                updateCallback={updateItemCallback} />
                        ))
                    }
                </div>;
        }
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    {editItems}
                </div>
            </div>
        )
    }
}