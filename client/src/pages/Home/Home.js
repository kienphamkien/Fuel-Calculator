import React, { Component } from "react";
export default class Hero extends Component {
  render() {
    return (
      <section className="hero" id="hero">
        <div className="px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
                
              <h1 className="mx-auto mb-1 text-uppercase">INSTAFUEL</h1>
              <h3 className="mx-auto mt-2 mb-5">
                Drive more. Worry less. 
              </h3>
              <h4 className="mx-auto mt-2 mb-5">
                AI-driven Fuel Quote Generator. 
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
