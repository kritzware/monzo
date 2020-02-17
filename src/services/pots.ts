import HttpClient from "../http"
import { Pot, ClientOptions } from "../types";

export default class Pots extends HttpClient {
    constructor(options: ClientOptions) {
        super(options)
    }

    async list(): Promise<Pot[]> {
        const response = await this.getData<{ pots: Pot[] }>(`/pots`)
        return response.pots
    }

    async deposit(fromAccountID: number, amount: number, dedupeID?: string) { }
    async withdraw(toAccountID: number, amount: number, dedupeID?: string) { }

}