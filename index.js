import fm from 'front-matter';
import OpenAI from 'openai';

const openai = new OpenAI();

// on github:  https://raw.githubusercontent.com/expo/expo/main/docs/pages/get-started/start-developing.mdx
// public page: https://docs.expo.dev/get-started/start-developing

const parseExpoDocs = async (slug) => {
  const url = `https://raw.githubusercontent.com/expo/expo/main/docs/pages/${slug}.mdx`;
  const response = await fetch(url);
  const content = await response.text();

  const data = fm(content);

  return data;
};

const handleDocs = async (slug) => {
  const data = parseExpoDocs(slug);
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(completion.choices[0]);
  // generate vector
};

handleDocs('get-started/start-developing');
