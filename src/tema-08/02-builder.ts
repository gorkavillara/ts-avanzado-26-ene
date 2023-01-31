class RequestBuilder {
    private _url: string = ""
    private _method: "GET" | "POST" | undefined
    private _body: object | null = null
    setUrl(url: string) {
        this._url = url
        return this
    }
    setMethod(method: "GET" | "POST") {
        this._method = method
        return this
    }
    setBody(body: object) {
        this._body = body
        return this
    }
}

const myRequest = new RequestBuilder()
                        .setUrl("https://google.com")
                        .setMethod("POST")
                        .setBody({ myVar: "value" })