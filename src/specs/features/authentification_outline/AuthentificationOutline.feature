@outline
Feature: Authentification Outline - OrangeHRM
  En tant que utilisateur je souhaite m'authentifier avec un scenario outline

  Background: 
    Given je me connecte à l'application OrangeHRM

  @cnx-outline
  Scenario Outline: Authentification Outline - OrangeHRM
    When je saisi Username "<name>"
    And je saisi Password "<password>"
    And je click sur le bouton Login

    Examples: 
      | name   | password  |
      | Admin  | admin123  |
      | Safe   | Safe123   |
      | Imen   | imen123   |
      | Sondes | Sondes123 |
      | Hanene | Hanene123 |
