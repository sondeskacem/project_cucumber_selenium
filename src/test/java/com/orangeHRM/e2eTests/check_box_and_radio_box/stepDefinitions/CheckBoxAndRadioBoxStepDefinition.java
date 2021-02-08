package com.orangeHRM.e2eTests.check_box_and_radio_box.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.check_box_and_radio_box.pages.CheckBoxAndRadioBoxPage;
import com.orangeHRM.e2eTests.utils.CommunMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class CheckBoxAndRadioBoxStepDefinition {

	public WebDriver driver;
	private CheckBoxAndRadioBoxPage checkBoxAndRadioBoxPage = new CheckBoxAndRadioBoxPage();
	private CommunMethods communMethods = new CommunMethods();
	
	public CheckBoxAndRadioBoxStepDefinition() {
		driver = Setup.driver;
	}
	
	@Given("^Je me connecte à l'application DemoQA$")
	public void jeMeConnecteÀLApplicationDemoQA() throws Throwable {
		communMethods.openApplicationWithConfigFile("url_demoqa");

	}

	@When("^Je clique sur le Hobbie Sport$")
	public void jeCliqueSurLeHobbieSport() throws Throwable {
		PageFactory.initElements(driver, CheckBoxAndRadioBoxPage.class);
		checkBoxAndRadioBoxPage.clickButtonHobbie();
	}

	@When("^Je clique sur Male$")
	public void jeCliqueSurMale() throws Throwable {
		checkBoxAndRadioBoxPage.slelectGender();
	}

}
