## Development

### Prerequisites

* **Node.js** (v18 or newer recommended)
* **pnpm** (recommended package manager)

Install pnpm if you do not already have it:

```bash
npm install -g pnpm
```

---

### Quick Setup (Recommended)

For a one-command developer setup, use the provided shell script. It will:

* Verify Node.js and pnpm availability
* Install project dependencies
* Initialize git hooks (Husky) if configured

```bash
chmod +x ./scripts/dev-setup.sh
./scripts/dev-setup.sh
```

---

### Manual Setup (Alternative)

If you prefer to set things up manually:

```bash
pnpm install
```

---

### Run dev

```bash
pnpm dev
```

---

### Run project

```bash
pnpm test
```

---

### Test project

```bash
pnpm build
```

---

### Notes

* Ensure `.env` or `.env.local` files are present if required by the application. Please note there is a .env.example
* The setup script is safe to re-run and will skip already completed steps.
