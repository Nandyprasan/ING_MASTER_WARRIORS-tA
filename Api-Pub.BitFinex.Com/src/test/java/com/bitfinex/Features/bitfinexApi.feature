Feature: pub bitfinex feature

Background: 
Given Api to get bitfinex for different ticker names

Scenario: validate bitfinex get request APIs for single argument
When user tries to get response for single ticker name
Then validate the response



Scenario: validate bitfinex get request APIs for multiple argument
When user tries to get response for multiple ticker name
Then validate the response for multiple argument request

Scenario: validate negative flows
When user tries to get response for invalid request
Then validate the response for invalid request
Then validate the response for null request
Then validate the response for special characters in request
