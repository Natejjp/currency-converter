import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currency, setCurrency] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  useEffect(async function () {
    const response = await axios.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=1b2897f6810c52c1b0c6f9a085306523'
    )

    setCurrency(response.data)
  }, [])

  return (
    <main>
      <h1>Currency Converter</h1>
      <ul>
        <li>Enter Amount USD </li>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button>Convert</button>
        {Object.entries(currency.rates).map(
          ([currencyCode, currencyDetails]) => {
            return (
              <li key={currencyCode}>
                {currencyCode}: {(currencyDetails * amount).toFixed(2)}
              </li>
            )
          }
        )}
      </ul>
    </main>
  )
}
