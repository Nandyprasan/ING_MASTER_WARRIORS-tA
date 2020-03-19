$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/com/bitfinex/Features/bitfinexApi.feature");
formatter.feature({
  "line": 1,
  "name": "pub bitfinex feature",
  "description": "",
  "id": "pub-bitfinex-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Api to get bitfinex for different ticker names",
  "keyword": "Given "
});
formatter.match({
  "location": "BitfinexStepDefnition.api_to_get_bitfinex_for_different_ticker_names()"
});
formatter.result({
  "duration": 745355590,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "validate bitfinex get request APIs for single argument",
  "description": "",
  "id": "pub-bitfinex-feature;validate-bitfinex-get-request-apis-for-single-argument",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user tries to get response for single ticker name",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate the response",
  "keyword": "Then "
});
formatter.match({
  "location": "BitfinexStepDefnition.user_tries_to_get_response_for_single_ticker_name()"
});
formatter.result({
  "duration": 1511962030,
  "status": "passed"
});
formatter.match({
  "location": "BitfinexStepDefnition.validate_the_response()"
});
formatter.result({
  "duration": 297853809,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Api to get bitfinex for different ticker names",
  "keyword": "Given "
});
formatter.match({
  "location": "BitfinexStepDefnition.api_to_get_bitfinex_for_different_ticker_names()"
});
formatter.result({
  "duration": 240071,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "validate bitfinex get request APIs for multiple argument",
  "description": "",
  "id": "pub-bitfinex-feature;validate-bitfinex-get-request-apis-for-multiple-argument",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user tries to get response for multiple ticker name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "validate the response for multiple argument request",
  "keyword": "Then "
});
formatter.match({
  "location": "BitfinexStepDefnition.user_tries_to_get_response_for_multiple_ticker_name()"
});
formatter.result({
  "duration": 1275159118,
  "status": "passed"
});
formatter.match({
  "location": "BitfinexStepDefnition.validate_the_response_for_multiple_argument_request()"
});
formatter.result({
  "duration": 10667239,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Api to get bitfinex for different ticker names",
  "keyword": "Given "
});
formatter.match({
  "location": "BitfinexStepDefnition.api_to_get_bitfinex_for_different_ticker_names()"
});
formatter.result({
  "duration": 264533,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validate negative flows",
  "description": "",
  "id": "pub-bitfinex-feature;validate-negative-flows",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user tries to get response for invalid request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "validate the response for invalid request",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "validate the response for null request",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate the response for special characters in request",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});