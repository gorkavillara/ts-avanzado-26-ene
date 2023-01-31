import { Client } from "../models/client";
import { ClientView } from "../views/clientView";

export class ClientController {
    private _client: Client
    private _view: ClientView

    constructor(client: Client, view: ClientView) {
        this._client = client
        this._view = view
    }

    updateView() {
        console.log("Updating view")
        this._view.render()
    }

    updateModel(data: any) {
        this._client.setData(data)
        this.updateView()
    }
}