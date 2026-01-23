## Development

### Prerequisites

* **Node.js** (v20 or newer recommended)
* **pnpm** (recommended package manager)
* **Docker** (for containerized development or production)

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

### Docker

Build and start the development container
```bash
docker-compose -f docker-compose.yaml up --build
```
Build the production image
```bash
docker build -f Dockerfile -t learniverse-app:prod .
```
Run the production container
```bash
docker run -d -p 80:80 learniverse-app:prod
```
Open the browser
```bash
http://localhost
```

---

### Notes

* Ensure `.env` or `.env.local` files are present if required by the application. Please note there is a `.env.example`
* The setup script is safe to re-run and will skip already completed steps.
