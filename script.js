// ==UserScript==
// @name         Make points not jarring
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.coursera.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coursera.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout( () => {
        let p = document.querySelector("[aria-label$='pts']");
        p.style.backgroundColor = '#f0f0f0';}
                , 5000);
})();
