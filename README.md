# Orbit

AI-Powered Communication Workspace

Orbit brings Gmail, Google Calendar, and AI into a single workspace so you can manage communication, scheduling, and productivity without switching between multiple applications.

---

## Overview

Modern professionals spend most of their day switching between email, calendars, and AI tools.

Orbit solves this problem by combining:

* Gmail
* Google Calendar
* AI Assistant

into one unified workspace.

The goal is simple:

> Everything orbits around the user.

Instead of opening multiple tabs and applications, Orbit provides a single interface where users can read emails, manage meetings, schedule events, and interact with AI.

---

## Features

### Authentication

* Google Sign In
* Secure session management
* Protected routes
* Multi-user support

### Gmail Integration

* View inbox emails
* Read complete email threads
* Send emails
* Reply to conversations
* View sent messages
* Thread-based conversations

### Calendar Integration

* View calendar events
* Create events
* Update events
* Delete events
* Monthly calendar view
* Google Calendar synchronization

### AI Assistant

* Ask questions about your emails
* Ask questions about calendar events
* Context-aware responses
* Powered by Gemini

Examples:

* "Summarize my inbox"
* "Do I have meetings tomorrow?"
* "Which emails require action?"
* "Show upcoming events this week"

### User Experience

* Dark mode support
* Responsive layout
* Sidebar navigation
* Modern dashboard
* Unified communication workspace

---

## Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Next.js Route Handlers
* Server Components
* NextAuth

### Database

* PostgreSQL
* Prisma ORM

### Integrations

* Google Gmail API
* Google Calendar API
* Corsair SDK

### AI

* Google Gemini

### Deployment

* Vercel
* Neon PostgreSQL

---

## Architecture

User

↓

Google Authentication

↓

Orbit Application

↓

─────────────────────────

Gmail Integration

Calendar Integration

AI Assistant

─────────────────────────

↓

Gemini + Corsair

↓

Google APIs

---

## Project Structure

app/
api/
calendar/
mail/
ai/
dashboard/

components/
calendar/
inbox/
layout/
ui/

lib/
ai/
gmail/
calendar/
validation/

prisma/

providers/

types/

---

## Environment Variables

Create a .env file.

```env
DATABASE_URL=

AUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

GEMINI_API_KEY=

CORSAIR_API_KEY=
CORSAIR_CLIENT_ID=
CORSAIR_CLIENT_SECRET=
```

## Local Development

Install dependencies

```bash
pnpm install
```

Run database migrations

```bash
pnpm prisma migrate dev
```

Start development server

```bash
pnpm dev
```

Application will be available at:

```txt
http://localhost:3000
```

## Deployment

### Database

Create a PostgreSQL database using Neon.

### Prisma

Generate Prisma Client

```bash
pnpm prisma generate
```

Push schema

```bash
pnpm prisma db push
```

### Vercel

Deploy project

```bash
vercel
```

Add all environment variables in Vercel Dashboard.

---

## Current Status

### Completed

* Google Authentication
* Gmail Integration
* Email Sending
* Email Replies
* Thread View
* Calendar Events
* Create Event
* Update Event
* Delete Event
* Monthly Calendar
* Gemini Integration
* AI Context Pipeline

### In Progress

* AI Action Agent
* Smart Email Summaries
* Meeting Suggestions
* Inbox Prioritization
* AI Search
* AI Workflow Automation

---

## Vision

Orbit is building toward becoming an AI-native communication operating system.

Instead of manually managing email and schedules, users will simply tell Orbit what they want to accomplish, and Orbit will take action across Gmail and Calendar automatically.

Examples:

* Schedule meetings
* Draft replies
* Summarize inboxes
* Find important conversations
* Create calendar events
* Organize daily work

All from a single AI-powered workspace.

---

## Author

Vishal Ray

GitHub:
https://github.com/rayvishal024

Built with Next.js, Prisma, Corsair, Google APIs, and Gemini.
