import axios from 'axios';

const LLM_API_URL = process.env.NEXT_PUBLIC_LLM_API_URL || 'http://localhost:4000';
const LLM_API_KEY = process.env.NEXT_PUBLIC_LLM_API_KEY || 'test-key';

if (!LLM_API_URL || !LLM_API_KEY) {
  throw new Error('Missing required environment variables: NEXT_PUBLIC_LLM_API_URL or NEXT_PUBLIC_LLM_API_KEY');
}

export async function queryLLM(prompt: string): Promise<string> {
  try {
    const response = await axios.post(
      LLM_API_URL,
      { prompt, model: 'grok' },
      { headers: { Authorization: `Bearer ${LLM_API_KEY}` } }
    );
    return response.data.reply || response.data;
  } catch (error: any) {
    console.error('LLM Error:', error.response?.data || error.message);
    return 'Yo, something’s off. Try again!';
  }
}