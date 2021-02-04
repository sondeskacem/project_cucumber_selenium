$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("background/Background.feature");
formatter.feature({
  "line": 2,
  "name": "Background - OrangeHRM",
  "description": "En tant que utilisateur je souhaite verifier la focntionnement du Background",
  "id": "background---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@background"
    }
  ]
});
formatter.before({
  "duration": 6008671000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "background---orangehrm;authentification---orangehrm",
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
  "name": "Je saisi Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je click sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3644869900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUsername(String)"
});
formatter.result({
  "duration": 116505900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPassword(String)"
});
formatter.result({
  "duration": 64068900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeClickSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3681978200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 34
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 44728400,
  "status": "passed"
});
formatter.after({
  "duration": 817761600,
  "status": "passed"
});
formatter.before({
  "duration": 5329811600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Cliquer sur le module BUZZ",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Je saisi Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je click sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Je clique sur le module BUZZ",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3244959600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUsername(String)"
});
formatter.result({
  "duration": 77874000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPassword(String)"
});
formatter.result({
  "duration": 73490900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeClickSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3251463100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 34
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 39125300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 750450300,
  "status": "passed"
});
formatter.before({
  "duration": 5328556600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Cliquer sur le module Recruitment",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@rec"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Je saisi Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Je click sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3141807600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUsername(String)"
});
formatter.result({
  "duration": 67347000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPassword(String)"
});
formatter.result({
  "duration": 75271700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeClickSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3351558200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 34
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 51147100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 745580600,
  "status": "passed"
});
});