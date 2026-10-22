---
title: 'The Cognitive Assistant — Local AI Support for Neurodivergent Students'
description: 'A privacy-first, local AI assistant (RAG + Llama 3.2) designed to reduce cognitive load and task paralysis for students with ADHD or high sensitivity.'
pubDate: 'Jun 15 2026'
heroImage: '../../assets/projects/cognitieve-assistent/desk-preview.jpg'
hideHero: true
hasBottomDemo: true
---

<div class="lang-en">

## The Problem

Students with ADHD or high sensitivity (HSP) often face **task paralysis** — a cognitive freeze where the brain knows it must start, but simply can't. Opening a 47-page syllabus, three deadlines and a list of professor requirements all at once is enough to trigger a full shutdown. Not laziness. A neurological response.

Existing tools don't solve this. ChatGPT doesn't know your syllabus. Notion asks you to build your own structure from scratch — which is itself exhausting. Goblin Tools breaks down tasks but with zero context.

## My Solution

**The Cognitive Assistant** is a 100% local, privacy-first AI assistant that transforms course syllabi into manageable micro-steps — running entirely on the student's own device. No cloud. No data leaving the laptop.

### How It Works

```text
Input              Processing                    Output
PDF syllabus   →   LangChain + ChromaDB     →   Relevant course context
                                                ↓
                    FastAPI + local Llama 3.2
                                                ↓
React interface ←   WWHW prompt structure   ←   Actionable guidance
```

The assistant retrieves relevant information from the uploaded syllabus and transforms it into a structured WWHW action plan through a local RAG pipeline.

| Layer | Technology |
| :--- | :--- |
| Local AI Model | Ollama + Llama 3.2 (3B) |
| RAG Pipeline | FastAPI + LangChain + ChromaDB + Python |
| Frontend | React (low-stimulus UI) |
| Privacy | 100% on-device, zero cloud |

### Core Features

- 📋 **Daily Briefing** — energy-sensitive WWHW action plan (tuned via Spoon Theory slider 1–5)
- ✂️ **Task Breakdown** — syllabus-aware in-line micro-step generation
- 📖 **Plain Reading Mode** — complex academic text → accessible language
- 🧠 **RAG Chat** — ask questions about your uploaded course with zero hallucinations
- 💬 **AI Coach** — reframes failure and setbacks without judgment
- 🔒 **100% Privacy** — no data leaves the device, ever

### Benchmark Results

Five local models tested on consumer hardware:

| Model | Avg. Response | Result |
| :--- | :--- | :--- |
| **Llama 3.2 (3B)** | **27.4 s** | 🏆 Winner — fast, accurate, zero hallucinations |
| Gemma 3 (4B) | 52.2 s | Accurate, slightly slower |
| Mistral (7B) | 86.9 s | Good quality, heavy on battery |

### Research & My Contribution

**Research question:** How can a local AI assistant reduce cognitive load and task paralysis for neurodivergent students?

I developed the concept, designed the low-stimulus user experience, built the RAG architecture and React frontend, integrated the local AI model and worked on the prompt-engineering approach.

The system was validated by comparing five local models and testing the core features with realistic student scenarios. **Llama 3.2 (3B)** provided the best balance between response time, quality and local privacy.

</div>

<div class="lang-nl">

## Het Probleem

Studenten met ADHD of hoogsensitiviteit (HSP) lopen regelmatig vast aan **cognitieve blokkades** — het brein wéét dat het moet beginnen, maar kan de eerste stap niet zetten. Een map met 47 pagina's richtlijnen, drie deadlines en een lijst van de promotor is genoeg voor een volledige shutdown. Geen luiheid. Een neurologische reactie.

Bestaande tools lossen dit niet op. ChatGPT kent jouw syllabus niet. Notion vraagt dat je zelf een systeem opbouwt — wat op zich al energie kost. Goblin Tools splitst taken op, maar volledig zonder context.

## Mijn Oplossing

**De Cognitieve Assistent** is een 100% lokale, privacy-first AI-assistent die syllabi omzet in behapbare micro-stappen — volledig op het eigen toestel van de student. Geen cloud. Geen data die het laptop verlaat.

### Hoe Het Werkt

```text
Input              Verwerking                    Output
PDF syllabus   →   LangChain + ChromaDB     →   Relevante cursuscontext
                                                ↓
                    FastAPI + lokaal Llama 3.2
                                                ↓
React-interface ←   WWHW-promptstructuur   ←   Haalbare begeleiding
```

De assistent haalt relevante informatie uit de geüploade syllabus en zet die via een lokale RAG-pipeline om in een gestructureerd WWHW-actieplan.

| Laag | Technologie |
| :--- | :--- |
| Lokaal AI-model | Ollama + Llama 3.2 (3B) |
| RAG Pipeline | FastAPI + LangChain + ChromaDB + Python |
| Frontend | React (prikkelarme UI) |
| Privacy | 100% lokaal, geen cloud |

### Kernfunctionaliteiten

- 📋 **Dagelijkse Briefing** — energie-gevoelig WWHW-actieplan (via Spoon Theory slider 1–5)
- ✂️ **Taakopsplitsing** — syllabus-bewuste in-line micro-stapgeneratie
- 📖 **Begrijpelijk Lezen** — complexe academische tekst → toegankelijke taal
- 🧠 **RAG Chat** — stel vragen over jouw cursus zonder hallucinaties
- 💬 **AI Coach** — herkadering van falen en tegenslagen zonder oordeel
- 🔒 **100% Privacy** — geen data verlaat het apparaat

### Benchmark Resultaten

Vijf lokale modellen getest op consumentenhardware:

| Model | Gemiddeld | Resultaat |
| :--- | :--- | :--- |
| **Llama 3.2 (3B)** | **27,4 s** | 🏆 Winnaar — snel, nauwkeurig, nul hallucinaties |
| Gemma 3 (4B) | 52,2 s | Nauwkeurig, iets trager |
| Mistral (7B) | 86,9 s | Goede kwaliteit, zwaarder voor batterij |

### Onderzoek & Mijn Bijdrage

**Onderzoeksvraag:** Hoe kan een lokale AI-assistent de cognitieve belasting en taakblokkades bij neurodiverse studenten verminderen?

Ik ontwikkelde het concept, ontwierp de prikkelarme gebruikerservaring, bouwde de RAG-architectuur en React-frontend, integreerde het lokale AI-model en werkte de prompt-engineering aanpak uit.

Het systeem werd gevalideerd door vijf lokale modellen te vergelijken en de kernfunctionaliteiten te testen met realistische studentenscenario's. **Llama 3.2 (3B)** bood de beste balans tussen responstijd, kwaliteit en lokale privacy.

</div>

---

<div class="lang-en" style="margin: 2rem 0; padding: 1.5rem; border-left: 3px solid var(--accent); background: rgba(89,106,255,0.05); border-radius: 0 8px 8px 0;">

**Curious about the full benchmark results, prompt-engineering techniques, or the academic research paper?**  
Feel free to reach out — I'm happy to walk you through a demo or share the full thesis.

→ [Get in touch](/contact)

</div>

<div class="lang-nl" style="margin: 2rem 0; padding: 1.5rem; border-left: 3px solid var(--accent); background: rgba(89,106,255,0.05); border-radius: 0 8px 8px 0;">

**Nieuwsgierig naar de volledige benchmarkresultaten, prompt-engineering technieken of het academisch onderzoeksrapport?**  
Neem gerust contact op — ik loop graag door een demo of deel de volledige bachelorproef.

→ [Neem contact op](/contact)

</div>

---

<section id="demo">
	<h2>
		<span class="lang-en">Live Demo</span>
		<span class="lang-nl">Live Demo</span>
	</h2>
	<p class="lang-en">
		Watch the Cognitive Assistant in action — onboarding flow, in-line RAG task breakdown, Spoon-based daily briefing, AI Coach and plain reading mode:
	</p>
	<p class="lang-nl">
		Bekijk de Cognitieve Assistent in actie — onboarding, in-line RAG opsplitsing, dagelijkse briefing, AI Coach en begrijpelijk lezen:
	</p>
	<video controls width="100%" poster="../../assets/projects/cognitieve-assistent/slide-11.png" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); margin-top: 1rem;">
		<source src="/projects/cognitieve-assistent/demo/demo.mp4" type="video/mp4" />
		<span class="lang-en">Your browser does not support HTML5 video playback.</span>
		<span class="lang-nl">Uw browser ondersteunt geen HTML5 videoweergave.</span>
	</video>
	<p class="demo-back">
		<a href="#project-top" aria-label="Back to top">↑</a>
	</p>
</section>
