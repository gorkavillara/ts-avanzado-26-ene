export class Client {
    private _data: any

    constructor(data: any) {
        this._data = data
    }

    getData() {
        return this._data
    }

    setData(data: any) {
        this._data = data
    }
}