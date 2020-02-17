import https from "https"
import { OutgoingHttpHeaders } from "http"
import { ClientOptions } from "./types"

const MONZO_BASE_URL = "api.monzo.com"

interface QueryParams { [header: string]: string | number }

export default class HttpClient {
    private readonly options: ClientOptions

    constructor(options: ClientOptions) {
        this.options = options
    }

    private request(method: "GET" | "POST", path: string, headers?: OutgoingHttpHeaders): Promise<Buffer> {
        const options = {
            hostname: MONZO_BASE_URL,
            port: 443,
            path,
            method,
            headers,
        }

        let data: Buffer

        return new Promise((resolve, reject) => {
            const req = https.request(options, res => {
                res.on("data", data => {
                    resolve(data)
                })
            })

            req.on("error", err => {
                reject(err)
            })

            req.end()
        })
    }

    private _get(path: string) {
        return this.request("GET", path, {
            "Authorization": `Bearer ${this.options.accessToken}`
        })
    }

    private _post(path: string) {
        return this.request("POST", path, {
            "Authorization": `Bearer ${this.options.accessToken}`
        })
    }

    protected async getData<T>(path: string, params?: QueryParams): Promise<T> {
        const response = await this._get(params ? this.buildPath(path, params) : path)
        const data: T = JSON.parse(response.toString())
        return data
    }

    buildPath(path: string, params: QueryParams): string {
        let queryParams = []
        for (const key in params) {
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        }
        return `${path}?${queryParams.join('&')}`
    }
}