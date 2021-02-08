package com.orangeHRM.e2eTests.authentification.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommunMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinition extends CommunMethods{
	
	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage();
	private CommunMethods communMethods = new CommunMethods();
	
	public AuthentificationStepDefinition() {
		driver = Setup.driver;
	}
	

	@Given("^Je me connecte à l'application OrangeHRM$")
	public void jeMeConnecteÀLApplicationOrangeHRM() throws Throwable {
		logger.info("Je me connecte à l'application OrangeHRM");
		communMethods.openApplicationWithConfigFile("url_test");
	}

	@When("^Je saisi Username \"([^\"]*)\"$")
	public void jeSaisiUsername(String name) throws Throwable {
		logger.info("Je saisi Username");
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.fillUserName(name);
	}

	@When("^Je saisi Password \"([^\"]*)\"$")
	public void jeSaisiPassword(String password) throws Throwable {
		logger.info("Je saisi Password");
		authentificationPage.fillPassword(password);
	}

	@When("^Je click sur le bouton Login$")
	public void jeClickSurLeBoutonLogin() throws Throwable {
		logger.info("Je click sur le bouton Login");
		authentificationPage.clickButtonLogin();
	}

	@Then("^Redirection vers le compte admin \"([^\"]*)\"$")
	public void redirectionVersLeCompteAdmin(String message) throws Throwable {
		logger.info("Redirection vers le compte admin");
		String welcomeMessage = AuthentificationPage.messageWelcome.getText();
		Assert.assertTrue(welcomeMessage.contains(message));
	}
}
