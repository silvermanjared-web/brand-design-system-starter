# Brand Design System Starter Wiki

This wiki explains how to use the Brand Design System Starter as a portable implementation layer for brand-consistent front-end work.

The repo is designed for situations where brand guidance, design references, Figma notes, code examples, and assets exist in different places, but teams still need a repeatable way to turn that material into usable design-system structure.

## What this project does

Brand Design System Starter converts brand context into:

- design tokens
- CSS custom properties
- color, typography, spacing, and accessibility foundations
- component documentation
- AI-assisted handoff instructions
- reusable examples for front-end implementation

The goal is not to replace a mature design system. The goal is to create a practical starter structure that makes brand execution easier to repeat.

## How it fits with Brand Context System

This project pairs with Brand Context System.

Use the two repos together like this:

1. Brand Context System gathers the inputs: brand rules, voice, Figma references, front-end code, assets, and examples.
2. Brand Design System Starter turns those inputs into implementation-ready structure: tokens, foundations, components, CSS variables, examples, and AI handoff guidance.

In simple terms: Brand Context System is the intake layer; Brand Design System Starter is the implementation layer.

## Recommended workflow

1. Start with the README to understand the system map.
2. Review the design token source file for the source token structure.
3. Review the generated CSS variables.
4. Read the foundation files for color, typography, spacing, and accessibility rules.
5. Review component specs for implementation guidance.
6. Use the Claude handoff file when working with an AI coding assistant.
7. Use the examples folder to understand the expected output shape.

## Token workflow

The token source of truth is the JSON token file. The CSS variables file is the implementation-facing output.

The optional build script converts source tokens into CSS variables. The validation script checks that the expected repo structure is present.

## Component workflow

Each component spec should explain:

- purpose
- usage guidance
- token dependencies
- accessibility notes
- content rules
- implementation considerations

The starter currently includes Button, Card, Hero, and Form component specs. Additional components can follow the same pattern.

## AI handoff workflow

Use the Claude handoff file as the operating instructions for AI-assisted work. It tells the assistant how to read the repo, respect the token system, avoid inventing unsupported brand rules, and keep implementation aligned with the documented foundations.

A good AI handoff should include:

- what brand or product the system is for
- what files should be treated as source of truth
- what component or layout needs to be built
- what assets are official
- what constraints must be preserved
- what output format is expected

## What good looks like

A strong implementation should be brand-consistent, token-aware, accessible by default, easy to inspect, easy to hand off, and clear enough for both humans and AI tools.

The practical test: someone should be able to open the repo and understand how to build a small branded front-end surface without needing a long verbal explanation.

## Relationship to Growth Architecture OS

This repo is part of a broader public operating-system portfolio.

Growth Architecture OS explains the larger leadership and operating model. Brand Design System Starter shows one concrete implementation layer: turning fragmented brand and design context into repeatable front-end structure.

That is the throughline: make the system visible, governable, and repeatable.