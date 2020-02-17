// Client
import Monzo from "./client"

// Types
import { Account } from "./types"

async function main() {
    const monzo = new Monzo({ accessToken: "123" })

    // Get account
    const [account] = await monzo.accounts.list()

    // Get account balance
    const balance = await monzo.balance.get(account.id)
    console.log({ balance })

    // List pots
    const pots = await monzo.pots.list()
    for (const pot of pots) {
        console.log({ name: pot.name, balance: pot.balance })
    }
}

try {
    main()
} catch (err) {
    console.log(err);
}