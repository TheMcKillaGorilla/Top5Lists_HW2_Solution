import React from "react";

export default class Top5Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("item", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("item");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    handleToggleEdit = () => {
        this.props.setItemBeingEditedCallback(this.getItemNum());
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur(event);
        }
    }
    handleBlur = (event) => {
        let num = this.getItemNum();
        let index = num-1;        
        let textValue = event.target.value;
        this.props.updateCallback(index, textValue);
    }
    getItemNum = () => {
        return this.props.id.substring("top5-item-".length);
    }
    render() {
        const { text } = this.props;
        let num = this.getItemNum();

        if (this.props.isItemBeingEditedCallback(num)) {
            return (
                <input
                    id={"item-" + num}
                    className='top5-item'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    defaultValue={text}
                />)
        }
        else {
            let itemClass = "top5-item";
            if (this.state.draggedTo) {
                itemClass = "top5-item-dragged-to";
            }
            return (
                <div
                    id={'item-' + num}
                    className={itemClass}
                    onDragStart={this.handleDragStart}
                    onDragOver={this.handleDragOver}
                    onDragEnter={this.handleDragEnter}
                    onDragLeave={this.handleDragLeave}
                    onDrop={this.handleDrop}
                    draggable="true"
                    onClick={this.handleToggleEdit}
                >
                    {text}
                </div>)
        }
    }
}