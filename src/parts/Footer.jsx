import React from "react";

import Button from "../elements/Button";
import IconText from "../parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">We kaboom your beauty holiday instantly and memorable.</p>
          </div>
          <div className="col-12 col-lg-auto mr-5">
            <h6 className="mt-2">For Benginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/carrers">
                  Our Carrers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@staycation.com">
                  Our Carrers
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081050">
                  021-2208-1050
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center copyrights">Copyrights 2023 - All rights reserved | Staycation</div>
        </div>
      </div>
    </footer>
  );
}
