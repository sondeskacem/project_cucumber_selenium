@connexion
Feature: Authentification - OrangeHRM
  En tant que utilisateur je souhaite m'authentifier

  @cnx
  Scenario: Authentification - OrangeHRM
    Given Je me connecte à l'application OrangeHRM
    When Je saisi Username "Admin"
    And Je saisi Password "admin123"
    And Je click sur le bouton Login
    Then Redirection vers le compte admin "Welcome"
