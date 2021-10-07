import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class MoveItem_Transaction extends jsTPS_Transaction {
    constructor(initApp, initOldIndex, initNewIndex) {
        super();
        this.app = initApp;
        this.oldItemIndex = initOldIndex;
        this.newItemIndex = initNewIndex;
    }

    doTransaction() {
        this.app.moveItem(this.oldItemIndex, this.newItemIndex);
    }
    
    undoTransaction() {
        this.app.moveItem(this.newItemIndex, this.oldItemIndex);
    }
}