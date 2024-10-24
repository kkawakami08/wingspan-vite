# Wingspan Web App

An online recreation of the popular board game _Wingspan_, developed using Vite, Tailwind CSS, React, and Jotai for state management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Challenges](#challenges)
- [Installation](#installation)
- [Usage](#usage)
- [Current Progress](#current-progress)
- [Future Goals](#future-goals)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is an attempt to bring the complex and exciting _Wingspan_ board game to the web. The game involves building a collection of birds across different habitats, each offering unique abilities and bonuses. As you take actions like feeding, laying eggs, or drawing bird cards, you'll need to strategize to gain the most points.

The project was initially developed with Next.js, but has since been migrated to Vite for faster builds and a streamlined developer experience. Tailwind CSS is used for styling, and React is the framework for building the interactive UI. Jotai is used for state management, making it easier to manage and update the complex game state across different components.

## Features

- **Bird Cards**: A wide variety of birds, each with unique powers and characteristics.
- **Bird Feeder**: A dice-rolling mechanic that determines the available food for your birds.
- **Habitat Mat**: Perform actions such as gaining food, laying eggs, or drawing bird cards.
- **Game Logic**: The core game mechanics (around 50 of the game logic completed).
- **State Management**: Efficient state handling with Jotai, ensuring smooth gameplay and real-time updates.

## Challenges

One of the most challenging aspects of this project was building the logic for the various components of the game. These include:

- Implementing the bird feeder and the dice-rolling mechanics:
  - Allowing players to re-roll the bird feeder when all remaining food dice show the same face.
  - Taking the number of dice based on how many birds have been played in the forest habitat.
- Programming bird card powers, which vary from card to card.
- Handling the different actions players can take on their habitat mat (playing a bird, gaining food, laying eggs, drawing cards).
- Creating the logic for paying the correct resources to play a bird, which includes:
  - Ensuring the correct number of eggs and food tokens are available.
  - Verifying the bird is placed in the correct habitat.
  - Handling wild resource requirements and using 2 resources to substitute for 1.
- Ensuring the player takes the correct number of resources (e.g., drawing 2 cards and choosing 1).
- Validating egg placement by checking if there is enough space on a bird’s nest to lay eggs.
- Managing state effectively for complex gameplay using Jotai.

Although this was my first time attempting to recreate a board game, I enjoyed the complexity and the logistics behind it.

## Current Progress

- **Game Logic**: Approximately 50% of the game logic has been implemented.
- **UI Design**: The current UI is functional but will be reskinned in future updates to improve aesthetics.
- **State Management**: Jotai is handling the game’s state management efficiently.

## Future Goals

1. **Reskinning**: Redesign the entire user interface to make it more visually appealing.
2. **Complete Game Logic**: Finalize all game mechanics, including handling special bird powers and scoring.
3. **Improved User Experience**: Add animations, smoother transitions, and better visual feedback.
4. **Multiplayer**: Implement the ability for multiple players to compete online in real-time.
