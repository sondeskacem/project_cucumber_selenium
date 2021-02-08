@checkboxradiobox
Feature: CheckBox-RadioBox - DemoQA
  En tant que utilisateur je souhaite cliquer sur le checkbox et le radiobox

  Background: 
    Given Je me connecte à l'application DemoQA

  @checkbox
  Scenario: Cliquer sur le Hobbie Sport
    When Je clique sur le Hobbie Sport

  @radiobox
  Scenario: Cliquer sur Male
    When Je clique sur Male
