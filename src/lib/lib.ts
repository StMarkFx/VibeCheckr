import axios from 'axios';

export async function queryLLM(prompt: string): Promise<string> {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_LLM_API_URL!,
      { prompt, model: 'grok' },
      { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_LLM_API_KEY}` } }
    );
    return response.data.reply || response.data;
  } catch (error) {
    console.error('LLM Error:', error);
    return 'Yo, something’s off. Try again!';
  }
}