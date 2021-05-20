import { sleep } from "k6";

import { navigateHomepage } from "./navigateHomepage.js";
import { addToCart } from "./addToCart.js";
import { navigateToCart } from "./navigateToCart.js";
import { navigateToCheckout } from "./navigateToCheckout.js";
import { updateAddress } from "./updateAddress.js";
import { submitCheckout } from "./submitCheckout.js";

export const options = {
  stages: [
    { target: 50, duration: "1m"  },
    { target: 50, duration: "2m" },
    { target: 0, duration: "1m" }
 ],
 thresholds: {
     "http_req_duration": ["p(95)<500"]
 },
 ext: {
     loadimpact: {
         projectID: 3113635, //3481255
         name: "Woocommerce example",
         distribution: {
             scenarioLabel1: { loadZone: "amazon:ie:dublin", percent: 50 },
             scenarioLabel2: { loadZone: "amazon:us:ashburn", percent: 50 }
         }
     }
 }
};

const vars = [];

const isDebug = true; // true for additonal debug

export default function main() {
  // navigateHomepage();
  // sleep(getRandom(2, 5));
  addToCart();
  sleep(getRandom(2, 5));
  navigateToCart();
  sleep(getRandom(2, 5));
  navigateToCheckout();
  sleep(getRandom(2, 5));
  updateAddress();
  sleep(getRandom(2, 5));
  submitCheckout();
  sleep(getRandom(2, 5));
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}