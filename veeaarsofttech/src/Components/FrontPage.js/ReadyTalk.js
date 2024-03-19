import React from 'react'
import { Link } from 'react-router-dom'

const ReadyTalk = () => {
    return (
      <>
            <div className="ready-to-talk">
        <div className="container">
          <h3 className="text-center">Ready to talk?</h3>
          <p className="text-center">
            Our team is here to answer your question about Your StartUP
          </p>
          <Link to="/contact-us" className="btn btn-primary">
            Contact Us
          </Link>
          <span>
            <Link to="/contact-us">Or, get started now with a free trial</Link>
          </span>
        </div>
      </div>
      </>
    )
}

export default ReadyTalk
