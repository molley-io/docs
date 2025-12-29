# Installation

This guide covers the installation process for Molley.

## Prerequisites

Before installing Molley, ensure you have:

- Node.js 18.x or higher
- npm or pnpm package manager
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Molley-io/molley.git
cd molley
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using pnpm:
```bash
pnpm install
```

### 3. Configure Environment

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` with your configuration settings.

### 4. Start Development Server

```bash
npm run dev
```

Your application should now be running at `http://localhost:3000`.

## Next Steps

- [Getting Started Guide](/guide/)
- [Configuration](/guide/configuration)
- [API Reference](/api/)
