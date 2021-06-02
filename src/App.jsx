import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currency, setCurrency] = useState({})

  useEffect(async function () {
    const response = await axios.get(
      'http://api.exchangeratesapi.io/v1/latest?access_key=56a4348392b313cd26250dccbcbb645f'
    )
    if (response.status === 200) {
      console.log(response.base)
      setCurrency(response.rate.USD)
    }
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
