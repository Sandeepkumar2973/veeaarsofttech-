import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div>
      <Navbar />
      <div className="header-container">
      <p className="text-data">Terms & Conditions</p>
      </div>
            <div>
        {/* Start Terms & Conditions Area */}
        <div className="terms-conditions-area ptb-80">
          <div className="container">
            <div className="terms-conditions-content">
              <h1 className="text-center" style={{marginTop:"13px"}}>Overview</h1>
              <p className="text-center">
                We may collect personal identification information from Users in
                a variety of ways, including, but not limited to, when Users
                visit our site, subscribe to the newsletter, fill out a form,
                and in connection with other activities, services, features or
                resources we make <Link to="/">available </Link> on our Site. Users
                may be asked for, as appropriate, name, email address, mailing
                address, phone number, company name. We will collect personal{" "}
                <strong>identification</strong> information from Users only if
                they voluntarily consent such information to us. Users can
                always refuse to supply personally identification information,
                except that it may prevent them from engaging in certain Site
                related activities.
              </p>
              <h2 className="text-center">General permission to use and access and use limitations</h2>
              <p>
                This site is provided by <strong>StartP</strong>.{" "}
                <strong>StartP</strong> collects information in several ways
                from different parts of this site.
              </p>
              <p>
                <strong>1.</strong> Complimentary ground shipping within 1 to 7
                business days
                <br />
                <strong>2.</strong> In-store collection available within 1 to 7
                business days
                <br />
                <strong>3.</strong> Next-day and Express delivery options also
                available
                <br />
                <strong>4.</strong> Purchases are delivered in an orange box
                tied with a Bolduc ribbon, with the exception of certain items
                <br />
                <strong>5.</strong> See the delivery FAQs for details on
                shipping methods, costs and delivery times
              </p>
              <h3 className="text-center">Confidential information</h3>
              <p>
                <strong>StartP</strong> accepts the following payment methods:
              </p>
              <ul>
                <li>
                  Credit Card: <strong>Visa</strong>,{" "}
                  <strong>MasterCard</strong>, <strong>Discover</strong>,{" "}
                  <strong>American Express</strong>, <strong>JCB</strong>,{" "}
                  <strong>Visa Electron</strong>. The total will be charged to
                  your card when the order is shipped.
                </li>
                <li>
                  <strong>StartP</strong> features a Fast Checkout option,
                  allowing you to securely save your credit card details so that
                  you don't have to re-enter them for future purchases.
                </li>
                <li>
                  PayPal: Shop easily online without having to enter your credit
                  card details on the website.Your account will be charged once
                  the order is completed. To register for a PayPal account,
                  visit the website{" "}
                  <Link to="/" target="_blank">
                    paypal.com.
                  </Link>
                </li>
              </ul>
              <h4 className="text-center">Linking to this Site</h4>
              <p>
                Items returned within 14 days of their original shipment date in
                same as new condition will be eligible for a full refund or
                store credit. Refunds will be charged back form of payment used
                for purchase. Customer is responsible for shipping charges when
                making returns and shipping/handling fees of original purchase
                is non-refundable.
              </p>
              <h4 className="text-center">Intellectual property</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget euismod erat, sit amet vulputate enim. Etiam enim tellus,
                maximus vel augue sed, pharetra hendrerit orci. Vivamus sed
                massa in nibh imperdiet mattis quis sed augue. Pellentesque erat
                metus, vestibulum nec nisl.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget euismod erat, sit amet vulputate enim. Etiam enim tellus.
              </p>
              <h4 className="text-center">Security and storage</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget euismod erat, sit amet vulputate enim. Etiam enim tellus.
              </p>
              <ol>
                <li>
                  Credit Card: <strong>Visa</strong>,{" "}
                  <strong>MasterCard</strong>, <strong>Discover</strong>,{" "}
                  <strong>American Express</strong>, <strong>JCB</strong>,{" "}
                  <strong>Visa Electron</strong>. The total will be charged to
                  your card when the order is shipped.
                </li>
                <li>
                  <strong>StartP</strong> features a Fast Checkout option,
                  allowing you to securely save your credit card details so that
                  you don't have to re-enter them for future purchases.
                </li>
                <li>
                  PayPal: Shop easily online without having to enter your credit
                  card details on the website.Your account will be charged once
                  the order is completed. To register for a PayPal account,
                  visit the website{" "}
                  <Link to="#" target="_blank">
                    paypal.com.
                  </Link>
                </li>
              </ol>
              <p className="text-center">Last updated: June 30, 2021 at 24:00 pm</p>
            </div>
          </div>
        </div>
        {/* End Terms & Conditions Area */}
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
