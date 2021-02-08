package com.orangeHRM.e2eTests.check_box_and_radio_box.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class CheckBoxAndRadioBoxPage {

	/*Locators*/
	final static String HOBBIE_XPATH = "//*[@id=\"hobbiesWrapper\"]/div[2]/div[1]/label')]";
	final static String GENDER_XPATH = "//*[@id=\"genterWrapper\"]/div[2]/div[2]/label";

	
	/*FindBy*/
	@FindBy(how=How.XPATH, using=HOBBIE_XPATH)
	public static WebElement Hobbie;
	@FindBy(how=How.XPATH, using=GENDER_XPATH)
	public static WebElement Gender;

	/*Methods*/
	public void slelectGender() {
		Select radio = new Select(Gender);
		radio.selectByValue("Male");
	}
	public void clickButtonHobbie() {
		Hobbie.click();
	}
}
