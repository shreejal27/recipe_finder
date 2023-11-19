import React from "react"
import './index.css';

import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"

export default function Page() {
  
  const APIKey = process.env.REACT_APP_APIKey 
  const APIId = process.env.REACT_APP_APIId 

  return (
    <div>
      <Header />
      <Content apiKey={APIKey} apiId={APIId}/>
      <Footer />
    </div>
  )
}
