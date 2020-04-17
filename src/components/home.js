import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Header from "./header";
import Summary from "./summary";
import WorkHistory from "./workhistory";
import Skills from "./skills";
import Education from "./education";
import Certifaciations from "./certifications";

export default class Home extends Component {

  render() {
    const StyledButton = styled.button`
      background-color: gray;
      border: 1px solid black;
      padding: 4px 10px;
      border-radius: 6px;

      ${ props => 
           props.primary && 
           css`
             background: red;
             color: white;
           `
      }
    `
    return (
      <div className="home-container">
        <div className="grid-container">
          <div className="">
            <Header />
          </div>

          <div className="flex-direction">
            <div className="flex-container">
              <div className="left-column">
                <div className="border-control">
                  <Summary />
                </div>
              <br />
                <div className="border-control">
                  <WorkHistory />
                </div>
              </div>
            </div>

            <div className="flex-container">
              <div className="right-column">
                <div className="border-control">
                  <Skills />
                </div>
              <br />
                <div className="border-control">
                  <Education />
                </div>
              <br />
                <div className="border-control">
                  <Certifaciations />
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <StyledButton>Style component Button </StyledButton>
          </div> */}

        </div>
      </div>
    )
  }
}
