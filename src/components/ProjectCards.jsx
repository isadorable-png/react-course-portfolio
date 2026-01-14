import React from 'react'
import Card from "./Card.jsx";
import Project1Image from '../assets/images/project-thumbnail-1.png'; //importing the project image

function ProjectCards() {
  return (
    <>
      <Card
        title="Anticapture"
        tags="/Financial, branding, UX"
        description="LoanSplit gives financial institutions unlimited access to a commercial loan marketplace where loans of all types can be bought or sold."
        image={Project1Image}
      />
      <Card
        title="LoanSplit"
        tags="/Financial, branding, UX"
        description="LoanSplit gives financial institutions unlimited access to a commercial loan marketplace where loans of all types can be bought or sold."
        image={Project1Image}
      />
      <Card
        title="Swaplace"
        tags="/Financial, branding, UX"
        description="
            LoanSplit gives financial institutions unlimited access to a commercial
            loan marketplace where loans of all types can be bought or sold."
        image={Project1Image}
      />
      <Card
        title="Smart Inventory Financing"
        tags="/Financial, mobile design, ux research"
        description="
                An application designed for e-commerce sellers to manage their
                product inventory, analyze projected sales, and access credit
                when needed to restock and grow their business."
        image={Project1Image}
      />
    </>
)
}

export default ProjectCards