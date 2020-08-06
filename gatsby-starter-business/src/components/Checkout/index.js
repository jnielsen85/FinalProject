import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const stripePromise = loadStripe("pk_test_51HCyxoEaL020342kRajXoiDTZmuPuY6a39zJ7hX2BscDCiyqWJJ2EFctofrAMxs3gkuRdDvn65RsIfvQnQYeU5Ay00LGL3KhHX")

const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1HCzQnEaL020342kS9uN96hD", quantity: 1 }],
    mode: "payment",
    successUrl: `http://localhost:8000/contact/success`,
    cancelUrl: `http://localhost:8000/contact/cancel`,
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const Checkout = () => {
  return (
    <button style={buttonStyles} onClick={redirectToCheckout}>
      Make Payment
    </button>
  )
}

export default Checkout
