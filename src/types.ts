export interface ClientOptions {
    accessToken: string
}

export interface Account {
    id: string
    closed: boolean
    created: string
    description: string
    type: AccountType
    currency: string // "GBP"
    country_code: string
    owners: AccountOwner[]
    account_number: string
    sort_code: string
    payment_details: {
        locale_uk: {
            account_number: string
            sort_code: string
        }
    }
}

interface AccountOwner {
    user_id: string
    preferred_name: string
    preferred_first_name: string
}

type AccountType = "uk_retail" | "uk_retail_joint"

export type Balance = number

export interface Pot {
    id: string,
    name: string,
    style: string,
    balance: Balance,
    currency: string,
    type: string,
    product_id: string,
    assigned_permissions: {
        user_id: string, permission_type: "owner"
    }[],
    current_account_id: string,
    cover_image_url: string,
    isa_wrapper: string,
    round_up: boolean,
    round_up_multiplier: number,
    is_tax_pot: boolean,
    created: string,
    updated: string,
    deleted: boolean,
    locked: boolean,
    charity_id: string,
    available_for_bills: boolean
}

