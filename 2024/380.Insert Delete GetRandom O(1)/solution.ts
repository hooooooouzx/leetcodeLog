class RandomizedSet {
    private list: number[]; // Make list a class property
    private map: Map<number, number>; // Use the Map class for better performance

    constructor() {
        this.list = [];
        this.map = new Map(); // Initialize the map
    }

    insert(val: number): boolean {
        // Check if the number is already in the map
        if (this.map.has(val)) {
            return false; // Return false if it already exists
        }

        // Insert the value
        this.list.push(val); // Use push to add to the end of the list
        this.map.set(val, this.list.length - 1); // Map the value to its index in the list
        return true; // Return true after insertion
    }

    remove(val: number): boolean {
        // Check if the number exists in the map
        if (!this.map.has(val)) {
            return false; // Return false if it doesn't exist
        }

        // Get the index of the value to be removed
        const index: number = this.map.get(val)!; // Use '!' to assert non-null

        // Move the last element to the index of the element to remove
        const lastElement: number = this.list[this.list.length - 1];
        this.list[index] = lastElement;
        this.map.set(lastElement, index); // Update the index of the last element

        // Remove the last element from the list
        this.list.pop();
        this.map.delete(val); // Remove the value from the map
        return true; // Return true after removal
    }

    getRandom(): number {
        const randomIndex: number = Math.floor(Math.random() * this.list.length); // Use Math.floor for an integer
        return this.list[randomIndex]; // Return a random element from the list
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet();
 * var param_1 = obj.insert(val);
 * var param_2 = obj.remove(val);
 * var param_3 = obj.getRandom();
 */
