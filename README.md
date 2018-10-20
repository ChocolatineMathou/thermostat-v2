# Thermostat

## Intro

I decided to go back to this project, working on my own to make sure I was able to create a very basic front-end app. This project was built with **Javascript** and **jQuery**, and **Jasmine** fot the tests, using **TDD**.

## User stories

```
As a User,
So that my flat is always at the right temperature,
I want the thermostat to start at 20 degrees.

As a User,
So that my flat is not cold,
I want to be able to increase the temperature.

As a User,
So that my flat is not hot,
I want to be able to decrease the temperature.

As a User,
So that my flat is not too cold,
I want the minimum temperature sets to 10 degrees.

As a User,
So that I can take care of the planet,
I want Power Saving sets to on by default.

As a User,
So that I can take care of the planet,
I want the maximum temperature to be 25 degrees when Power Saving is on.

As a User,
So that I don't have any surprise when paying my bills,
I want the maximum temperature to be 32 degrees when Power Saving is off.

As a User,
So that I know if I'm using the heating system properly,
I would like the thermostat to provide me the current energy usage.

As a User,
So that I know the current energy usage at one glance,
I would like a nice interface.
```

## Download and run project

```
$ git clone git@github.com:ChocolatineMathou/thermostat-v2.git
$ cd thermostat-v2
$ npm install
$ npm run lint / it will run ESLint in the terminal
$ open SpecRunner.html / it will open the tests in your favourite browser
```

## Approach

Right after setting up the project, I added ESLint to improve my syntax in Javascript. I translated each specification into user stories and started to TDD the logic.

## Specifications

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
* In the challenge where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.
