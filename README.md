## Daily-Journal

Small personal journal utilities and example workflows. This repository contains simple Python helpers to create daily Markdown journal entries and a small file organizer script, plus a couple of GitHub Actions/workflow files.

## Contents

- `Journal.py` - Creates a new markdown file in the `journal/` folder named with today's date (YYYY-MM-DD) and seeds it with a short template.
- `<<<<<<file_Organizer.py` - A simple script to move files into folders grouped by extension. Note: this filename contains leading `<` characters which can make it awkward to call from a shell; see the "Notes" section below.
- `journal/` - Example journal entries and a `journal.yml` workflow file.
- `.github/workflows/` - CI/workflow files (may include automation for journal or other tasks).
- `LICENSE` - Project license.

## Requirements

- Python 3.8 or newer

## Quick start

1. Clone the repo (if you haven't already):

```bash
git clone <repo-url>
cd Daily-Journal
```

2. Create today's journal entry with the included script:

```bash
python3 Journal.py
```

This will create (or notify you if it already exists) a file at `journal/YYYY-MM-DD.md` and write a short template header.

3. Organize files by extension

The repository currently contains a file named `<<<<<<file_Organizer.py`. Because the filename starts with `<` characters it can be awkward to run directly from a shell without quoting or renaming.

Safe options:

- Run it by quoting the filename (works but looks ugly):

```bash
python3 '<<<<<<file_Organizer.py'
```

- Recommended: rename it to a cleaner name once, then run normally:

```bash
mv '<<<<<<file_Organizer.py' file_Organizer.py
python3 file_Organizer.py
```

The organizer will prompt for a folder path when executed (it uses input()). It moves files from the provided folder into subfolders named like `txt_files`, `py_files`, etc., based on their extension.

## GitHub Actions / Workflows

There are workflow files under `.github/workflows/` and `journal/workflows/`. Inspect them for details about automated tasks (the repo also contains a small shell snippet saved as a file that shows a `mkdir -p data/images data/annotations data/splits \` command — that looks like a helper snippet and not an executable workflow by itself).

## Notes & Troubleshooting

- If `python3` points to an older interpreter on your machine, use the path for the desired Python version (for example, `python3.11`).
- If you rename `<<<<<<file_Organizer.py`, remember to update any references to that filename.
- The scripts are intentionally small and dependency-free. If you want to expand them, consider adding a `requirements.txt` and unit tests.

## License

See the `LICENSE` file in this repository.

---

If you'd like, I can:

- Rename `<<<<<<file_Organizer.py` to `file_Organizer.py` and update any references.
- Add a minimal `requirements.txt` or a small test harness for the scripts.

Tell me which of the above you'd like me to do next.


# Removing wrong extra folder(Delete the wrong folder github/workflows)

Make sure your terminal prompt looks something like:
hessam@Hessams-Air Daily-Journal %

# go to your main repo root just in case
hessam@Hessams-Air Daily-Journal %

# check that folder exists
ls github

# if you see "workflows" there, delete it
rm -rf github

