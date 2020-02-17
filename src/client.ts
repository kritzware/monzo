import { ClientOptions } from "./types"

// Services
import Accounts from "./services/accounts"
import AccountBalance from "./services/balance"
import Pots from "./services/pots"

interface MonzoClient {
    accounts: Accounts
    balance: AccountBalance
    pots: Pots
}

export default class Monzo implements MonzoClient {
    private readonly options: ClientOptions

    // Services
    public accounts: Accounts
    public balance: AccountBalance
    public pots: Pots

    constructor(options: ClientOptions) {
        this.options = options

        // Services
        this.accounts = new Accounts(this.options)
        this.balance = new AccountBalance(this.options)
        this.pots = new Pots(this.options)
    }
}