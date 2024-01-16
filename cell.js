export class Cell{
    constructor(gridElement, x, y) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }

    unlinkTile(){
        this.linkedTile = null;
    }
    linkTile(tile){
        tile.setXY(this.x, this.y);
        this.linkedTile = tile;
    }
    linkTileForMerge(tile){
        tile.setXY(this.x, this.y);
        this.linkedTileForMerge = tile;
    }
    unlinkTileForMerge(){
        this.linkedTileForMerge = null;
    }
    isEmpty(){
        return !this.linkedTile;
    }
    hasTileForMerge(){
        return !!this.linkedTileForMerge;
    }
    canAccept(newTile){
        return (
            this.isEmpty() ||
            (!this.hasTileForMerge() && this.linkedTile.value === newTile.value)
        );
    }
    mergeTiles(){
        this.linkedTile.setValue(this.linkedTile.value + this.linkedTileForMerge.value);
        this.linkedTileForMerge.removeFromDOM();
        this.unlinkTileForMerge();
    }
}