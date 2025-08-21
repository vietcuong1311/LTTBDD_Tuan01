export class User {
    private _name: string;

    constructor(name: string) {
        this._name = name
    }

    public get name() {
        return this._name;
    }

    public set name(newName: string) {
        if (!newName || newName.trim() === "") {
            throw new Error("Name cannot be empty.");
        }
        this._name = newName;
    }
}