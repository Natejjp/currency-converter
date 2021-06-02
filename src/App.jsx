import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currency, setCurrency] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  useEffect(async function () {
    const response = await axios.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=1b2897f6810c52c1b0c6f9a085306523'
    )

    console.log(response.data)
  }, [])

  return (
    <main>
      <h1>Currency Converter</h1>
      <ul>
        <li>Enter Amount USD </li>
        <input type="text" />

        <button>Convert</button>
        <li>AUD value</li>
        <li>CAD value</li>
        <li>CHF value</li>
        <li>CNY value</li>
        <li>JPY value</li>
        <li>USD value</li>
      </ul>
    </main>
  )
}
