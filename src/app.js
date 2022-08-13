/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

window.onload = function() {
  //write your code here
  // MAP
  const domains = pronoun.flatMap(a =>
    adj.flatMap(b => noun.flatMap(c => extensions.map(d => `${a}${b}${c}${d}`)))
  );

  console.log(domains);
};
