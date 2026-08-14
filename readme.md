# 🌟 North Star Retail Co. — Support Deflection MVP

> **Group 84** | Power Learn Project — The Northstar Sprint  
> *A 1-Week Industry Working Simulation*

---

## 📌 Project Problem & Objective

**Northstar Retail Co.** is a mid-size e-commerce company experiencing high support ticket volumes. Their support team is drowning in repetitive customer inquiries across three main categories:
1. **Order status** (*"Where is my order?"* / *"Has this shipped yet?"*)
2. **Returns & refunds** (*"How do I return this?"* / *"When will I get my refund?"*)[cite: 1]
3. **Stock availability** (*"Is this back in stock?"*)[cite: 1]

### 🎯 What Was Asked For
Our pod was hired for **1 week** to build a functional **Support Deflection MVP** that automates/deflects at least **2 of these 3 ticket categories** to relieve manual support handling[cite: 1].

Alongside the prototype, we are delivering:
* A working, demoable end-to-end prototype[cite: 1].
* A 1-page **Go-Live Readiness Note** detailing what works, known edge cases, and handover instructions[cite: 1].
* A traceable **Commit/Edit Audit Trail** proving genuine team collaboration[cite: 1].

---

## 💡 Why We Chose This Solution (Customer Self-Service Dashboard)

After analyzing the brief, Group 84 decided to build a **Customer Self-Service Dashboard**[cite: 2]. 

* **Practical Scope:** Fits comfortably within the tight 1-week sprint timeline without introducing unnecessary backend complexity[cite: 2].
* **Skill Alignment:** Allows group members with web development skills to directly contribute while creating clear, parallel tasks for everyone[cite: 2].
* **User-Centric Deflection:** By placing order tracking and return options directly in front of the customer upon login, we deflect the majority of repetitive inquiries before a support ticket is ever opened[cite: 2].

---

## 🛠️ Tech Stack Selection

To keep the application fast, lightweight, and maintainable, we selected standard web technologies[cite: 2]:

* **HTML5:** Semantic page structures and dynamic form layouts[cite: 2].
* **CSS3:** Custom responsive styling utilizing a dark-mode theme (`#0B0F17` canvas, `#161C27` cards) optimized for both desktop and mobile screens[cite: 2].
* **Native JavaScript (ES6+):** Light interactions, multi-page link handling, and client-side logic[cite: 2].

---

## 🧩 Parts of the MVP

Our application consists of a modular multi-page flow[cite: 2]:

1. **🔑 Login Page (`login.html`):** The customer entry point designed for fast authentication[cite: 2].
2. **🏠 Customer Dashboard (`dashboard.html`):** The central overview providing high-level order statuses, quick-action navigation cards, and recent order history[cite: 2].
3. **📦 Order Status Page (`orders.html`):** Resolves *"Where is my order?"* with interactive delivery progress trackers, ETAs, and carrier details[cite: 2].
4. **🔄 Returns & Refunds Page (`returns.html`):** Resolves *"How do I return this?"* by displaying item return eligibility, return status, and refund trackers[cite: 2].
5. **🎫 File a Ticket Page (`ticket.html`):** A fallback support form for complex issues that cannot be self-resolved[cite: 2].

---

## 👥 Group 84 Team Contributions & Module Breakdown

To ensure full transparency and auditability, here is the breakdown of components assigned across Group 84 members[cite: 1, 2]:

| Team Member Name | Role / Assigned Page | GitHub Username | Key Contributions |
| :--- | :--- | :--- | :--- |
| **Ezra Ssempogo** | Customer Dashboard (`dashboard.html`) | `pogoezra@gmail.com` | Built dashboard shell, quick action grid, recent orders list, and responsive layouts. |
| *[Anab]* | Login Page (`login.html`) | `@` | [Briefly describe task e.g., Login UI form structure and styling] |
| *[Sharon]* | Order Status Page (`orders.html`) | `@` | [Briefly describe task e.g., Progress tracker and shipping details view] |
| *[John]* | Returns & Refunds Page (`returns.html`) | `@` | [Briefly describe task e.g., Return eligibility cards and refund state] |
| *[Jackline]* | File a Ticket Page (`ticket.html`) | `@` | [Briefly describe task e.g., Ticket submission form and category selection] |

---

## 📜 Commit & Collaboration Guidelines

All commits follow the required project convention[cite: 1]:
```bash
<type>: <what changed> - <why it matters>