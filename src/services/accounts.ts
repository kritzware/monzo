import HttpClient from "../http"
import { Account, ClientOptions } from "../types";

export default class Accounts extends HttpClient {
    constructor(options: ClientOptions) {
        super(options)
    }

    async list(): Promise<Account[]> {
        const response = await this.getData<{ accounts: Account[] }>("/accounts")
        return response.accounts
    }

}