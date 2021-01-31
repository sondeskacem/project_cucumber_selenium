$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m\u0027authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 6517715900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisi Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je click sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers le compte admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 499867000,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeSaisiUsername()"
});
formatter.result({
  "duration": 58900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeSaisiPassword()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeClickSurLeBoutonLogin()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.after({
  "duration": 974361500,
  "status": "passed"
});
});