import React from 'react'
import Header from '../../shared-components/Header'
import Footer from '../../shared-components/Footer'
import PromoSlot from '../../shared-components/PromoSlot'
import Title from '../../shared-components/Title'
import Options from './Options'

export default () => (
  <div>
    <Header />
    <Options />
    <PromoSlot text="Need Support? Let us guide you through it" url="#" />
    <Footer />
  </div>
)
