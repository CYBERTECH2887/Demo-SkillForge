# ⚡ SkillForge

> **"Don't buy a certificate. Earn your credentials."**

SkillForge is a next-generation **Earn-While-You-Learn talent verification platform**. It bridges the gap between theoretical online courses and real-world company demands by evaluating actual coding logic, training weak points, and paying users to solve anonymized micro-tasks.

---

## 🚀 Key Features

* **🧠 AI-Adaptive Skill Assessment:** Tests users through intelligent modules and pinpoints exact knowledge gaps rather than forcing them to restart generic courses.
* **🔒 Anonymized Task Marketplace:** Solves the company-data privacy problem by taking real-world micro-tasks and anonymizing them into equivalent challenges (e.g., Data Cleaning, Bug Fixing) with cash rewards.
* **🛡️ The Skill Passport:** Replaces useless PDF certificates with a cryptographic, verifiable profile tracking star-ratings, tasks completed, and total earnings. Employers can scan and verify authenticity instantly.
* **💸 Dynamic Revenue Sharing:** A sustainable business model where high-skilled tasks yield higher payouts for learners while maintaining platform operational margins.

---

## 🛠️ Tech Stack

* **Frontend & Framework:** Next.js (App Router) / React
* **Styling:** Tailwind CSS (Modern Glassmorphism & Orange Accents)
* **Icons:** Lucide React
* **Language:** TypeScript

---

## 📁 Project Structure

```text
skillforge/
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind & custom styling
│   │   ├── layout.tsx          # Modern Glassmorphic Navbar & Layout
│   │   ├── page.tsx            # Landing Page
│   │   ├── assessment/         # Interactive Skill Check & Gap Analysis
│   │   ├── tasks/              # Anonymized Micro-Task Marketplace
│   │   └── passport/           # The Verifiable Skill Passport
│   └── lib/
│       └── mockData.ts         # Mock database for hackathon simulation
├── package.json
└── README.md
