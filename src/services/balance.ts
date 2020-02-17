import HttpClient from "../http"
import { Balance, ClientOptions } from "../types";

export default class AccountBalance extends HttpClient {
    constructor(options: ClientOptions) {
        super(options)
    }

    async get(accountID: string): Promise<Balance> {
        const response = await this.getData<{ balance: Balance }>(`/balance`, {
            account_id: accountID
        })
        return response.balance
    }

}