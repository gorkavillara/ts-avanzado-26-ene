import { Client } from "../models/client";

export class ClientView {
    private _client: Client
    
    constructor(client: Client) {
        this._client = client
    }

    render() {
        // Renderizar la info del modelo
        console.log(this._client.getData())
    }
}