import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const {canUndo, canRedo, canClose, undoCallback, redoCallback, closeCallback} = this.props;
        let undoButtonClass = "top5-button-disabled";
        let redoButtonClass = "top5-button-disabled";
        let closeButtonClass = "top5-button-disabled";
        if (canUndo) undoButtonClass = "top5-button";
        if (canRedo) redoButtonClass = "top5-button";
        if (canClose) closeButtonClass = "top5-button";
        return (
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    onClick={undoCallback}
                    className={undoButtonClass}>
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    onClick={redoCallback}
                    className={redoButtonClass}>
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    onClick={closeCallback}
                    className={closeButtonClass}>
                        &#x24E7;
                </div>
            </div>
        )
    }
}