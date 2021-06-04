/* eslint-disable */

let PRODUCTION = "PRODCUTION";
let TEST = "PRODCUTION_TEST";
let DEV = "DEVELOP";
let DEVTEST = "DEVTEST";

let NODE_ENV = DEV;

function init() {
    switch (NODE_ENV) {
        case PRODUCTION:
            // for production domain
            return {
                api_path: "URL backend",
                url: "URL home",
            };
        case TEST:
            // for production_test domain
            return {
                   api_path: "URL backend",
                url: "URL home",
            };
        case DEV:
            // for dev domain
            return {
                api_path: "http://localhost:3000",
                url: "http://localhost:8080/",
            };
        // change to ipv4 for test 
        case DEVTEST:
            return {
                api_path: "http://192.168.250.177:3000",
                url: "http://192.168.250.177:8080/",
            };
    }
}

let TEMP_CONST = init();

module.exports = TEMP_CONST;