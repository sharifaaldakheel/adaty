# adaty

# TEAM 1

Wahaj Alshahran, Sharifah AlDakheel, Ghada Alaidi, Ranya Alsagabi, Luluwah Alhussaini, Ghadi Algethami, Ghaida Aldossary, Razan ALAnizi, Wasaif alotaibi.

SDAIA Academy Program: [Vibe Coding]  
SDAIA Academy GitHub: https://github.com/SDAIA-Academy

## About the Project

An Arabic web application that measures a user's knowledge of AI tools and concepts. The user takes a 12-question assessment covering four areas, then receives a breakdown of their performance per area along with learning suggestions targeted at their weakest areas.

No account or sign-in is required — the user can start the test immediately.

## Features

- 12-question assessment covering four knowledge areas
- One question per screen with four answer options
- Back and next navigation with progress indicator
- Per-area scoring with circular indicators
- Personalized learning suggestions based on weak areas
- Arabic interface with full RTL layout
- Animated background and responsive design

## How It Works

The question bank is stored locally with each question mapped to one of four areas:

| Area | Coverage |
|------|----------|
| أساسيات الذكاء الاصطناعي | LLMs, tokens, hallucination, training vs. inference |
| صياغة التوجيهات | Writing effective prompts, iterating, giving context |
| الأدوات والمنظومة | Which tool for which task |
| الاستخدام المسؤول | Privacy, verifying output, knowing limits |

Answers are collected as the user progresses. On completion, a scoring function calculates the percentage per area and identifies strengths and gaps. Suggestions are generated for the areas where the user scored lowest.

## User Flow

1. Landing page — user reads the introduction and presses start
2. Assessment — 12 questions, one at a time, with back and next navigation
3. Results — per-area scores displayed as circular indicators, with learning suggestions
4. Restart — user can retake the assessment from the beginning

## Technologies Used

- **React** — Application framework
- **Vite** — Build tool and dev server
- **CSS** — Custom styling with CSS variables, no UI library
- **GitHub** — Version control and project hosting

## Live Demo

[https://adaty-rho.vercel.app/]

## Repository

[https://github.com/sharifaaldakheel/adaty]

## Running Locally

```bash
git clone [https://github.com/sharifaaldakheel/adaty]
cd [adaty]
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Deployment

Deployed on Vercel.
