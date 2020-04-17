import React, { Component } from 'react'

export default class WorkHistory extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="work-title">
          <h1>Work History</h1>
        </div>

        <div className="work-position">
          <h3>ThredUP Inc. -Merchandiser</h3>
          <p>Libertyville, IL</p>
          <p>01/2018 - Current</p>
          <ul>
            <li>
              Own / take lead in a new company initiative / test demonstrating leadership, 
              thoughtful problem solving, communication and recapping.
            </li>
            <li>
              Responsible for auditing inventory based on characteristics, 
              attributes, gender, and styling in order to ensure item accuracy and 
              overall elevated site aesthetic.
            </li>
            <li>
              Own / take lead in a new company initiative / test demonstrating leadership, 
              thoughtful problem solving, communication and recapping.
            </li>
          </ul>
        </div>


        <div className="work-position">
          <h3>Brightstar - Phone Receiving Associate</h3>
          <p>Libertyville, IL</p>
          <p>07/2016 - 07/ 2017</p>
          <ul>
            <li>
              Record shipment data, such as weight, charges, space availability, damages, 
              or discrepancies, for reporting, accounting, or recordkeeping purposes.
            </li>
            <li>
              Confer or correspond with establishment representatives to rectify problems, 
              such as damages, shortages, or nonconformance to specifications.
            </li>
            <li>
              Compute amounts, such as space available, shipping, storage, 
              or demurrage charges, using computer or price list.
            </li>
          </ul>
        </div>

      </div>
    )
  }
}