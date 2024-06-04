import fm from 'front-matter';

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
  // generate vector
};

handleDocs('get-started/start-developing');
