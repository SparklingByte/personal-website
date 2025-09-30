---
title: "Gartenzeit"
description: "A Full-Stack Web Application for Collaborative Gardening"
techUsed: ["NextJS", "TailwindCSS", "NextAuth", "Supabase"]
image: "/pictures/gartenzeitTitle.jpg"
status: archived
repoLink: https://github.com/SparklingByte/gartenzeit
---

# Gartenzeit

## How I Got Started

In 2023, I decided to jump into Harvard’s CS50 online Computer Science course. It came with a ton of coding tasks, and the final challenge was to build a big project all on my own. There were no rules, so I had total freedom. That’s why I went for a full-stack web app.

At the time, I was traveling in New Zealand, working on gardening and farming stuff every day. It felt natural to make an app about gardening. I got inspired by WWOOFing - helping families with garden or farm work and getting a place to stay and food in return. I thought this could work in a more flexible way. That’s how I came up with „Gartenzeit.“

## What the App Does & Its Features

Gardeners or landowners can use the app to find helpers for their harvests. They can say what tasks need to be done, how many people they need, and what the reward is. It’s not about getting paid - it’s all about the fun and social vibe of gardening, like letting helpers keep some of the veggies they pick. Other users can check out these events and join the ones they like.

The app has all the basic stuff and is meant as an minimum viable product. Users can sign up and log in with email, customize their profile with a picture, username, and bio, and create, edit, delete, join, or leave harvest events.

![Hello](/pictures/gartenzeit1.jpg)

## How I Built It

For my first big project, I wanted to use a modern tech stack. I needed a front end, back end, database, and a way to store files (like user profile pics).

### Front & Backend

I picked **Next.js**, a popular full-stack framework. It let me keep my front-end and back-end code in one place and stick to one language (**JavaScript/TypeScript**). Plus, it gives you the freedom to choose if pages are built statically (SSG), on the server (SSR), or on the user’s side. For styling my **React** components, I used **TailwindCSS**.

### Database and File Storage

For those, I went with **Supabase**, a Backend-as-a-Service that gives you a free **PostgreSQL** database and a storage bucket. It made setting up and managing those way easier.

Instead of writing SQL queries directly, I used **Prisma**, a tool that lets me handle database queries in a clean, type-safe way. The diagram below shows the database structure.

![Gartenzeit Database Structure](/pictures/gartenzeitDatabase.jpg)

### Authentication

For an easy and flexible way to handle user sign-up, login, and session management, I used **NextAuth.js** (now Auth.js). I kept it simple with just email and password login.

## What I Learned

Taking on a project this big was a real challenge for me, since I only had a bit of coding experience and had never built a web app before. But I grew a ton through it, diving deep into web tech. **JavaScript/TypeScript** was the starting point. Then, using **React** as a front-end library, I got into how reactive libraries work, how they tweak the DOM, and how pages or components get rendered. Figuring out when to render pages statically, on the server, or on the client was a big „aha“ moment for understanding how to make web apps faster.

Besides all the tech skills, I also spent a lot of time learning how to tackle a project from the start. From coming up with the idea, defining features, and making to-do lists, to actually building it. Before coding, I thought through a bunch of stuff, like sketching out design ideas with Figma. It gave me a crazy amount of insight. Looking back, not everything was perfect, of course, but I can use what I learned to make my next project more organized.

## What I’d Improve

### Code Quality & Project Structure
- Be more consistent with naming files/components, using types/schemas, and overall code structure.
- Pull out commonly used functions to reuse them.
- Use global variables/constants so I don’t have to track the same value in multiple spots.
- Cut down on database calls to speed things up.

### Features
- Add maps to search for locations.
- Let users filter and search harvests by name, location, produce, etc.
- Allow following other users to see when they post a harvest.
- Make the UI more responsive for better use on desktop screens.
- Add notifications for updates on harvests you joined or when someone joins yours.
- Add an approval system to accept or reject participants for a harvest.
- Improve editing options for harvests.

## Further Details

The [repository](https://github.com/SparklingByte/gartenzeit) contains a README file where I explain some aspects of the used tech in more detail.
