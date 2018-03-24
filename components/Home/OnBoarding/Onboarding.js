import React from "react"
import { LargeButton } from "../../../shared-components/Button"
import { FullWidthColumn } from "../../../shared-components/Column"

export default () => (
  <section className="text-center">
    <div className="container">
      <div className="row">
        <FullWidthColumn>
          <h1>Welcome to <span className="color--primary">Contractex.</span>
            <br className="hidden-xs hidden-sm" />Finding Experienced Contractors
            <br className="hidden-xs hidden-sm" />In Seconds</h1>
          <LargeButton text="Get Started For Free" url="/search" />
          <span className="block type--fine-print">
            Or see <a href="#">how it works</a>
          </span>
        </FullWidthColumn>
      </div>
    </div>
  </section>
)
