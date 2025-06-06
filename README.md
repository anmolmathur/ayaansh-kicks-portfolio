# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8a319d28-1cdf-4e05-b0d8-3e3f075d7919

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8a319d28-1cdf-4e05-b0d8-3e3f075d7919) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8a319d28-1cdf-4e05-b0d8-3e3f075d7919) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

## How can I run this project with Docker?

This project includes a Docker setup for easy local development and production builds.

**Requirements:**
- Docker and Docker Compose installed on your system
- No external dependencies or environment variables are required by default
- Uses Node.js version `22.13.1` (as specified in the Dockerfile)

**Build and run the app:**

```sh
# Build and start the app using Docker Compose
docker compose up --build
```

This will build the Docker image and start the app in a container named `typescript-app`.

**Ports:**
- The app is exposed on port `4173` (Vite preview server). Access it at [http://localhost:4173](http://localhost:4173).

**Configuration notes:**
- No environment variables are required by default. If you add a `.env` file, uncomment the `env_file` line in `docker-compose.yml`.
- No persistent volumes or additional services are configured by default.
- The app runs as a non-root user for security.

If you need to customize the setup (e.g., add a database or persistent storage), update the `docker-compose.yml` accordingly.
