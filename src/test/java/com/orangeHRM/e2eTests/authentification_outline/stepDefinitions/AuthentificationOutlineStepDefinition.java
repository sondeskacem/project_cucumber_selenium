package com.orangeHRM.e2eTests.authentification_outline.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommunMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AuthentificationOutlineStepDefinition {
	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage();
	private CommunMethods communMethods = new CommunMethods();
	
	public AuthentificationOutlineStepDefinition() {
		driver = Setup.driver;
	}
	
	@Given("^je me connecte à l'application OrangeHRM$")
	public void jeMeConnecteÀLApplicationOrangeHRM() throws Throwable {
		communMethods.openApplicationWithConfigFile("url_test");
	}

	@When("^je saisi Username \"([^\"]*)\"$")
	public void jeSaisiUsername(String name) throws Throwable {
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.fillUserName(name);
	}

	@When("^je saisi Password \"([^\"]*)\"$")
	public void jeSaisiPassword(String password) throws Throwable {
		authentificationPage.fillPassword(password);

	}

	@When("^je click sur le bouton Login$")
	public void jeClickSurLeBoutonLogin() throws Throwable {
		authentificationPage.clickButtonLogin();

	}
}
