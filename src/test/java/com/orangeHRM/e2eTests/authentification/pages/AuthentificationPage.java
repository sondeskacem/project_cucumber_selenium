package com.orangeHRM.e2eTests.authentification.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class AuthentificationPage {

	/*Locators*/
	final static String USERNAME_ID = "txtUsername";
	final static String USERPASSWORD_ID = "txtPassword";
	final static String BUTTON_LOGIN_ID = "btnLogin";
	final static String MESSAGE_WELCOME_ID = "welcome";
	
	/*FindBy*/
	@FindBy(how=How.ID, using=USERNAME_ID)
	public static WebElement UserName;
	@FindBy(how=How.ID, using=USERPASSWORD_ID)
	public static WebElement UserPassword;
	@FindBy(how=How.ID, using=BUTTON_LOGIN_ID)
	public static WebElement BtnLogin;
	@FindBy(how=How.ID, using=MESSAGE_WELCOME_ID)
	public static WebElement messageWelcome;
	
	/*Methods*/
	public void fillUserName(String name) {
		UserName.sendKeys(name);
	}
	public void fillPassword(String password) {
		UserPassword.sendKeys(password);
	}
	public void clickButtonLogin() {
		BtnLogin.click();
	}
}
