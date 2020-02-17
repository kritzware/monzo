# monzo
⚠️ *work in progress*

Unofficial Client Library for Monzo API

```typescript
import Monzo from "monzo"

const monzo = new Monzo({ accessToken: "123" })

// Get account
const [account] = await monzo.accounts.list()

// Get account balance
const balance = await monzo.balance.get(account.id)
console.log(balance)
// 420

// List pots
const pots = await monzo.pots.list()
for (const pot of pots) {
    console.log({ name: pot.name, balance: pot.balance }) 
    // { name: "Savings", balance: 120 }
}
```
