## Repository quick-guide for AI coding agents

This repo contains a few tiny, standalone utilities and a small static site. The goal of these instructions is to make an AI coding agent productive immediately by calling out the repo structure, important commands, and a few project-specific quirks.

- Key files/directories
  - `Journal.py` — small Python utility that creates a dated markdown file in `journal/` (YYYY-MM-DD.md). Example run: `python3 Journal.py`.
  - `journal/` — contains generated daily notes and includes a `journal.yml` workflow. Date-named files follow `YYYY-MM-DD.md`.
  - `AllcFood/` — static front-end demo (HTML/CSS/JS). Preview locally from that folder: `cd AllcFood && python3 -m http.server 8000`.
  - `.github/workflows/` and `workflows/` — GitHub Actions are present; inspect them before changing automation.
  - `README.md` — contains useful, accurate notes about running the scripts (use it as a first reference).

- Repo conventions and important quirks (do not assume defaults)
  - Scripts are intentionally dependency-free (no `requirements.txt`). Prefer plain stdlib solutions unless adding clear value.
  - Filename oddities: the repository contains at least one file whose name has leading `<` characters (README documents `<<<<<<file_Organizer.py`). That file is awkward to run unquoted. Recommended fix: rename it to a normal name (e.g., `file_Organizer.py`) and update references.
  - CSS filename mismatch: `AllcFood/index.html` links `style.css` but the repo shows a file named `style. css` (contains a space). Fixing the filename to `style.css` is a quick, low-risk change that restores styling.

- Typical developer commands (examples)
  - Create today's journal entry:
    - `python3 Journal.py`  # writes `journal/YYYY-MM-DD.md`
  - Run organizer (if present and not renamed):
    - `python3 '<<<<<<file_Organizer.py'`  # quoting required due to leading `<`
    - Recommended: `mv '<<<<<<file_Organizer.py' file_Organizer.py && python3 file_Organizer.py`
  - Preview static site:
    - `cd AllcFood && python3 -m http.server 8000` then open http://localhost:8000

- Architecture and integration notes
  - There is no server-side application or package management. The project is a collection of small scripts and a static frontend — changes are local and file-system oriented.
  - Automation is file/CI-driven via `.github/workflows/` and `journal/journal.yml`. Before editing those workflows, check what triggers they use (push/schedule) to avoid surprising runs.
  - Scripts typically create or modify files in-place (e.g., `Journal.py` writes to `journal/`). When editing, preserve the date-based filename convention.

- Useful patterns to emulate when contributing
  - Keep scripts small and stdlib-only unless adding real functionality that warrants dependencies.
  - When adding new scripts, prefer clear, shell-friendly filenames (avoid leading punctuation and spaces).
  - Add a simple `README.md` or inline comment for any non-obvious script to explain inputs/outputs.

If any section is unclear or you'd like more examples (unit tests, a `requirements.txt`, or automatic rename of odd filenames), tell me which part to expand and I'll update this file accordingly.
