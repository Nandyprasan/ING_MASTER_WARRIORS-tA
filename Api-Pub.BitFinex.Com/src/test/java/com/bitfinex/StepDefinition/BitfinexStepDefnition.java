package com.bitfinex.StepDefinition;

import com.bitfinex.pages.GetData;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;

public class BitfinexStepDefnition {
	
	GetData getdata=new GetData();
	
	
//	Scenario 1 : single argument request**************************************

	@Given("^Api to get bitfinex for different ticker names$")
	public void api_to_get_bitfinex_for_different_ticker_names(){
	    // Write code here that turns the phrase above into concrete actions
		
		//initalization();
		RestAssured.useRelaxedHTTPSValidation();
		RestAssured.baseURI = getdata.GetBaseURL();
	}

	@When("^user tries to get response for single ticker name$")
	public void user_tries_to_get_response_for_single_ticker_name(){
	    // Write code here that turns the phrase above into concrete actions
	   getdata.GetRequestSingleArgument();
	}

	@Then("^validate the response$")
	public void validate_the_response(){
	    // Write code here that turns the phrase above into concrete actions
	    getdata.GetResponse();
	}
	
//	Scenario 2 : multiple arguments request**************************************
	
	
	@When("^user tries to get response for multiple ticker name$")
	public void user_tries_to_get_response_for_multiple_ticker_name(){
	    // Write code here that turns the phrase above into concrete actions
	   getdata.GetRequestMultipleArguments();
	}

	@Then("^validate the response for multiple argument request$")
	public void validate_the_response_for_multiple_argument_request(){
	    // Write code here that turns the phrase above into concrete actions
	    getdata.GetResponseMultiple();
	}
	
//	Scenario 3 : negative scenarios**************************************

}
