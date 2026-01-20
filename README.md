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
chmod +x setup.sh
./setup.sh
```

---

### Manual Setup (Alternative)

If you prefer to set things up manually:

```bash
pnpm install
```

---

### Run the Development Server

```bash
pnpm dev
```

> If `pnpm dev` is not available, you can also run:
>
> ```bash
> vite
> ```

---

### Notes

* Ensure `.env` or `.env.local` files are present if required by the application.
* The setup script is safe to re-run and will skip already completed steps.
