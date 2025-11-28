# Live Hindustan Clone - Next.js Assignment Submission

**Name:** Geetanshu Kumar Kushwaha 
**Course:** B.Tech CSE (Final Year)  
**Subject:**  Next.js Assignment

---

## 📝 Project Overview
For this assignment, I built a simplified front-page clone of the *LiveHindustan* news portal. The goal was to demonstrate core Next.js concepts like **Dynamic Routing**, **ISR (Incremental Static Regeneration)**, and **Image Optimization** in a real-world scenario.

I focused on making the UI clean and responsive (Mobile + Desktop) while ensuring the backend logic for data fetching is solid.

### 🚀 Key Features
* **Hero Section:** Highlights the top story with a gradient overlay (looks like the real site).
* **Responsive Grid:** Switches from a 3-column layout on laptops to a vertical stack on mobile.
* **Dynamic News Pages:** Clicking any card routes you to `/news/[id]` where the full article loads.
* **Trending Sidebar:** A static sidebar to give that "busy news portal" feel.
* **Robust Error Handling:** The app doesn't crash if data is missing or images fail to load.

---

## 🛠️ Tech Stack & Decisions

### 1. Next.js (Pages Router)
I chose the **Pages Router** over the App Router because the assignment specifically asked for `getStaticProps`. It was a good refresher on how Next.js handles server-side logic before rendering.

### 2. Data Fetching: ISR
I used **Incremental Static Regeneration (ISR)** with `revalidate: 60`.
* *Why?* A news site needs to be fast (static HTML) but can't be stale.
* *Trade-off:* SSR would be too slow for every request, and pure Static Generation would require a full rebuild for every breaking news. ISR is the perfect middle ground.

### 3. Styling: Tailwind CSS
Used Tailwind to quickly prototype the grid layouts. It made handling the responsive "hidden md:block" logic for the sidebar very easy.

### 4. Mock Data vs Real API
I decided to use a **local JSON mock file** (`src/data/mockNews.js`) instead of an external API (like NewsAPI).
* *Reason:* Public APIs often have strict rate limits that block you during development testing. Mock data allowed me to test specific edge cases (like long titles or missing summaries) without worrying about API keys expiring.

---

## 🐛 Challenges & Learning Function
**1. The "Project inside a Project" Mess:**
At the start, I accidentally initialized the Next.js app inside my assignment folder, creating a nested structure. This caused "Module not found" errors. I fixed this by restructuring the `src` folder and moving components to the correct level.

**2. Image Optimization Issues:**
Next.js `<Image />` component is strict! It blocked my Unsplash URLs initially. I had to learn how to configure `next.config.mjs` to whitelist the `images.unsplash.com` domain.

---

## 🤖 AI Usage & Reflection (Part D)

I used AI tools (like ChatGPT/Gemini) to speed up the development process. Here is the breakdown:

* **What AI did well:**
    * Generating the **Mock Data**: Writing 5 fake news articles with titles, dates, and summaries is boring. AI generated the JSON array instantly.
    * **Tailwind Classes:** I asked AI for "a 3-column grid that collapses on mobile," and it gave me the `grid-cols-1 md:grid-cols-3` logic, which saved time.

* **Where AI failed / I had to step in:**
    * **Folder Structure:** The AI assumed a generic folder structure. It didn't know I was using `src/` directory preferences, so I had to manually fix the import paths (`../components/` vs `./components/`).
    * **Broken Images:** The AI initially gave me placeholder image URLs that timed out. I had to manually go to Unsplash, find working image links, and update the data file myself.

---

## 🧪 How to Run
1.  Clone the repo.
2.  Install dependencies: `npm install`
3.  Run the dev server: `npm run dev`
4.  Open `http://localhost:3000`