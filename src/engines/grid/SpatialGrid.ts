import { ITransform } from "../../interfaces/ITransform";

export class SpatialGrid {
    gridSize: number;
    grid: any[][];
    constructor(worldWidth: number, worldHeight: number, gridSize: number) {
        this.gridSize = gridSize;
        // Initialize grid based on world dimensions
        this.grid = this.createGrid(worldWidth, worldHeight);
    }

    createGrid(worldWidth: number, worldHeight: number): any[][][] {
        let grid = [];
        for (let x = 0; x < worldWidth / this.gridSize; x++) {
            grid[x] = [];
            for (let y = 0; y < worldHeight / this.gridSize; y++) {
                grid[x][y] = [];
            }
        }
        return grid;
    }

    getGridPosition(x: number, y: number) {
        return {
            gx: Math.floor(x / this.gridSize),
            gy: Math.floor(y / this.gridSize)
        };
    }

    addObjectToGrid(object: ITransform) {
        const pos = this.getGridPosition(object.position.x, object.position.y);
        this.grid[pos.gx][pos.gy].push(object);
    }

    removeObjectFromGrid(object: ITransform) {
        const pos = this.getGridPosition(object.position.x, object.position.y);
        this.grid[pos.gx][pos.gy] = this.grid[pos.gx][pos.gy].filter((obj: ITransform) => obj.sessionId !== object.sessionId);
    }

    moveObjectInGrid(object: ITransform, newX: number, newY: number) {
        this.removeObjectFromGrid(object);
        object.position.x = newX; // Correctly assign newX to position.x
        object.position.y = newY; // Correctly assign newY to position.y
        this.addObjectToGrid(object);
        
    }

    getObjectsInCell(x: number, y: number) {
        const pos = this.getGridPosition(x, y);
        const objects: ITransform[] = [];

        // Define the range of cells to check
        const cellsToCheck = [
            [pos.gx, pos.gy], // Current cell
            // Add adjacent cells as needed, for example:
            // [pos.gx - 1, pos.gy],
            // [pos.gx + 1, pos.gy],
            // [pos.gx, pos.gy - 1],
            // [pos.gx, pos.gy + 1]
            // ... Consider diagonal cells or further cells based on your needs
        ];

        cellsToCheck.forEach(([gx, gy]) => {
            if (gx >= 0 && gx < this.grid.length && gy >= 0 && gy < this.grid[gx].length) {
                objects.push(...this.grid[gx][gy]);
            }
        });

        return objects;
    }

    checkCollision(transform: ITransform, callback: Function) {
        // Get objects in same cell as object
        const objects = this.getObjectsInCell(transform.position.x, transform.position.y);
        //console.log(objects.length);

        // Check for collisions with each object
        objects.forEach(object => {
            if (object.sessionId !== transform.sessionId) { // this should include the actual collision check
                if(callback) callback(object);
            }
        });
    }
}
