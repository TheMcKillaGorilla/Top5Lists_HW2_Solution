import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const { canUndo,
                canRedo,
                canClose,
                undoCallback, 
                redoCallback, 
                closeCallback,
                title} = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar 
                    canUndo={canUndo}
                    canRedo={canRedo}
                    canClose={canClose}
                    undoCallback={undoCallback}
                    redoCallback={redoCallback}
                    closeCallback={closeCallback} />
            </div>
        );
    }
}