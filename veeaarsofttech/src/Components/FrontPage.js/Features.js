import React from 'react'
import featuresData from './Featcher'

const Features = () => {
    return (
       <>
         <div className="features-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p className="text-center">
              An IT company offers a myriad of features and services designed to
              support businesses in their digital endeavors. Here are some key
              points and a paragraph highlighting these features:
            </p>
          </div>

          <div className="row">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-features">
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.content.slice(0, 140)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       </>
    )
}

export default Features
