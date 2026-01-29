# Frontend Interview Test

This repository contains the frontend take-home assignment for the technical interview.

## Instructions

Complete the assignment according to the requirements provided separately. Submit your solution by pushing your code to this repository.

## Setup

Instructions for running the project locally will depend on the tech stack you choose. Document your setup steps here once the project is initialized.

# Front End Take-Home Project

## Time Expectation
Please spend **no more than 2–3 hours** on this exercise.

We care more about **clarity and reasoning** than polish or completeness.

---

## The Task
This repo contains a very basic product listing page.

Your goal is to **extend and improve it**.

### Requirements
- Add filtering (category or type)
- Add sorting by price (low → high, high → low)
- Improve accessibility (semantic HTML, keyboard support)
- Make reasonable responsive layout improvements
- Handle edge cases (empty results, missing data, etc.)

You may refactor the existing structure or add new components as needed.

---

## What’s Not Required
- Backend work
- Authentication
- Pixel-perfect design
- Full test coverage

---

## Deliverables
- Your completed solution
- A short README section answering:
  - What you prioritized
  - Tradeoffs you made
  - What you’d improve with more time
  - Any assumptions you made

---

## Getting Started
```bash
npm install
npm run dev

```

## Implementation notes

- What I prioritized: Added client-side filtering by `category` and `type`, sorting by price (low → high, high → low), improved semantic markup and keyboard focusability, responsive control layout, and empty-state handling.
- Tradeoffs: Kept changes minimal and dependency-free (no UI library) to stay within time; complex UX (multi-select, pagination) was not added.
- What I'd improve with more time: Add unit tests, persist filters to the URL, add product images and better empty-state UX, and refine ARIA attributes for richer semantics.
- Assumptions: Data is static JSON and product `category`, `type`, and `price` fields can be missing; app should work without backend changes.
