import { Link } from "gatsby"
import React from "react"
import Seo from "../components/seo"
import { Button, Purchase } from "../styles/components"

export default function gracias() {
  return (
    <div>
      <Seo title="Compra Exitosa" />
      <Purchase>
        <h2>Compra exitosa</h2>
        <p>Espero que disfrutes tu swag, usalo con orgullo</p>
        <p>Nuca pares de aprender!!!</p>
        <span rol="img" area-aria-label="emoji">
          🙂
        </span>
        <Link to="/">
          <Button>Return</Button>
        </Link>
      </Purchase>
    </div>
  )
}
