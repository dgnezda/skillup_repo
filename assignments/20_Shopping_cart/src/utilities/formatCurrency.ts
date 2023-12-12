const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"}) // the 'undefined' is so the Intl. automatically determines the locale of the viewer

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}