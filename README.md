# ACI Lab — Advanced Construction Intelligence Laboratory

> **Illinois Institute of Technology** · Armour College of Engineering  
> Department of Civil, Architectural, and Environmental Engineering

Official website for the **Advanced Construction Intelligence (ACI) Lab** at IIT Chicago.

🌐 **Live Site:** [kjeon-illinoistech.github.io/kjeon-ACI_Lab.github.io](https://kjeon-illinoistech.github.io/kjeon-ACI_Lab.github.io)

---

## About the Lab

The ACI Lab bridges human expertise with artificial intelligence to revolutionize construction quality management and infrastructure resilience. Our research spans:

- **NLP & Large Language Models** for construction defect management
- **Knowledge Graphs** for structured construction information
- **Building Information Modeling (BIM)** and lifecycle management
- **Predictive Maintenance** for resilient infrastructure
- **Human-AI Collaboration** in built environment systems

**Lab Director:** [Dr. Kahyun Jeon](https://www.iit.edu/directory/people/kahyun-jeon), Assistant Professor  
**Email:** kjeon2@illinoistech.edu  
**Google Scholar:** [scholar.google.com](https://scholar.google.com/citations?user=S28_syUAAAAJ&hl=en)

---

## Site Structure

```
aci-lab/
├── index.html          # Single-page website (7 sections)
├── css/
│   └── style.css       # IIT Scarlet Red theme, responsive layout
├── js/
│   └── main.js         # Navbar, scroll effects, publications toggle
├── images/
│   └── kjeon.jpg       # Lab director photo
└── .nojekyll           # Disables Jekyll processing on GitHub Pages
```

### Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **About** | Lab mission, research keywords, key stats |
| 2 | **Research** | Research areas + current projects |
| 3 | **Members** | Lab director profile + open positions |
| 4 | **Publications** | Journal & conference papers with DOI links |
| 5 | **Teaching** | Courses offered at IIT |
| 6 | **Join Us** | Open positions for PhD, MS, and undergrad |
| 7 | **Contact** | Office info + Google Maps |

---

## Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JS** — no framework dependencies
- **Google Fonts** — Inter + Montserrat
- **Font Awesome 6.5** — icons
- Hosted on **GitHub Pages** (static, zero-cost)

---

## Local Development

No build step needed. Just open the file directly:

```bash
# Option 1 — open directly
open index.html

# Option 2 — serve locally (Python)
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Updating Content

| What to update | Where |
|----------------|-------|
| Publications | `index.html` → `#publications` section |
| Team members | `index.html` → `#members` section |
| Profile photo | Replace `images/kjeon.jpg` |
| Courses | `index.html` → `#teaching` section |
| Research projects | `index.html` → `#research` → Current Projects |
| Colors / fonts | `css/style.css` → `:root` variables |

---

## Deployment

This site is deployed automatically via **GitHub Pages**.  
Any push to the `main` branch updates the live site within ~2 minutes.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Contact

For questions about the website, contact **kjeon2@illinoistech.edu**  
For questions about the research, visit the [IIT directory page](https://www.iit.edu/directory/people/kahyun-jeon).

---

*© 2025 Advanced Construction Intelligence Lab · Illinois Institute of Technology*
