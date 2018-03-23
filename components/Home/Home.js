import React from 'react'
import Header from '../../shared-components/Header'
import PromoSlot from '../../shared-components/PromoSlot'
import Footer from '../../shared-components/Footer'
import RowFeature from '../../shared-components/RowFeature'
import Onboarding from './Onboarding'

export default () => (
  <div>
    <Header />
    <Onboarding />
    <RowFeature />
    <PromoSlot text="Ready to get started? Click here" url="#" />
    <Footer />
  </div>
)
