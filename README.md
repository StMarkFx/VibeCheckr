# VibeCheckr

VibeCheckr is your ultimate AI-powered assistant for validating ideas and planning MVPs (Minimum Viable Products). Whether you're brainstorming or ready to build, VibeCheckr helps you refine your ideas, validate them based on key factors, and generate scalable MVP plans with a robust tech stack.

## Features

- **Idea Validation**: Get feedback on your ideas based on pain points, feasibility, and revenue potential.
- **MVP Planning**: Skip validation and directly generate a detailed MVP plan with a tight tech stack, modular structure, and sample code.
- **AI-Powered Insights**: Powered by a custom LLM (Language Learning Model) for intelligent and vibey responses.
- **Interactive Chat**: Engage with VibeCheckr through a conversational interface.
- **Export Plans**: Generate and export detailed MVP plans for your ideas.
- **Idea History**: View and manage your previously validated ideas.
- **Customizable Settings**: Choose your default mode (validation or planning) for a personalized experience.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/vibecheckr.git
   cd vibecheckr
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_LLM_API_URL=http://localhost:4000
   NEXT_PUBLIC_LLM_API_KEY=test-key
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Project Structure

- **Frontend**: Built with Next.js and Tailwind CSS for a modern, responsive UI.
- **Backend**: API routes powered by Next.js serverless functions.
- **Database**: Supabase for real-time data and secure storage.
- **AI Integration**: Custom LLM for generating responses and plans.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to style your app with Tailwind.
- [Supabase Documentation](https://supabase.com/docs) - Learn about the database and real-time features.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve VibeCheckr.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
