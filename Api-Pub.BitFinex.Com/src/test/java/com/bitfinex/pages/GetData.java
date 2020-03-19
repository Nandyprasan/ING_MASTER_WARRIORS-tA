package com.bitfinex.pages;

import static io.restassured.RestAssured.given;

import org.testng.Assert;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class GetData {
	
	String BASE_URI;
	Response response;
	JsonPath jsonpath;
	
	public String GetBaseURL(){
		return BASE_URI = "https://api-pub.bitfinex.com/v2/tickers?symbols=";
	}
	
	public void GetRequestSingleArgument() {
		response = given().when().get(BASE_URI + "tBTCUSD");
	}
	
	public void GetRequestMultipleArguments() {
		response = given().when().get(BASE_URI + "tBTCUSD,tLTCBTC");
	}
	
	public void GetInvalidRequest(){
		response = given().when().get(BASE_URI + "tBTCUSD!@#");
	}
	public void GetNullRequest(){
		response = given().when().get(BASE_URI + "");
	}
	public void GetRequestNegativeSpecialChars(){
		response = given().when().get(BASE_URI + "@#$Z%Z%%%");
	}

	public void GetResponse(){
		String tickerResponse = response.andReturn().asString();
		JsonPath json = new JsonPath(tickerResponse);
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode,200);
		String actual = json.get("[0][0]");
		Assert.assertEquals(actual, "tBTCUSD");
	}
	
	public void GetResponseMultiple(){
		String tickerResponse = response.andReturn().asString();
		JsonPath json = new JsonPath(tickerResponse);
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode,200);
		String actual = json.get("[1][0]");
		Assert.assertEquals(actual, "tLTCBTC");
	}

	public void GetResponseInvalid(){
		String tickerResponse = response.andReturn().asString();
		JsonPath json = new JsonPath(tickerResponse);
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode,200);
		String actual = json.get("[1][0]");
		Assert.assertEquals(actual, "[]");
	}

}
