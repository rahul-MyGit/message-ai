# Messgage-AI

## Overview
This application allows users to connect their Instagram and Twitter accounts and create automated triggers for AI-based responses. Users can define keywords that, when mentioned in DMs or comments, will trigger an AI-generated reply within the same conversation. The AI can remember previous conversations, ensuring context-aware responses. Additionally, users can customize AI responses by setting specific prompts.

## Features
- **Social Media Integration**: Connect Instagram and Twitter accounts.
- **Keyword-Based Triggers**: AI replies automatically when specific keywords are mentioned in DMs or comments.
- **Contextual AI Responses**: AI remembers previous conversations for a seamless experience.
- **Customizable AI Prompts**: Users can define how AI should respond based on pre-set prompts.
- **Automated Comment Responses**: AI replies to comments containing specific keywords on posts.

## Tech Stack
- **Frontend AND Backend**: Next.js (TypeScript)
- **Authentication**: Authjs (Nextauth v5)
- **Database**: PostgreSQL
- **AI Integration**: Geminie (for AI-based responses)
- **Social Media API**: Instagram Developer API, Twitter Developer API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. To get auth secret generated automatically:
   ```sh
   pnpm dlx auth secret
   ```

4. Set up environment variables in a `.env` file same as `.env.example`

5. Migrate the database:
   ```sh
   pnpm dlx prisma migrate dev

6. Start the development server:
   ```sh
   pnpm dev
   ```

## Usage
1. **Connect Social Media**: Authenticate with Instagram and Twitter.
2. **Set Triggers**: Define keywords and assign them AI responses.
3. **Engage Automatically**: AI will handle replies to DMs and comments.

