/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright vaishnavi 2023 All rights reserved
 * @author vaishnavi <vaishnavirivankar14gmail.com>
 */

'use strict';

const api_key ="358d35552f18964c14a07ac474b169de";

/** 
 * fetch data from server
 * @param {string} URL API url
 * @param {function} callback callback
 */
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

