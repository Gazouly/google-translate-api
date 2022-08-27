const modelingTranslation = (res) => {
  const { data } = res;
  const { translations } = data;
  const [translatedObject] = translations;
  const { translatedText } = translatedObject;
  return translatedText;
};

// eslint-disable-next-line import/prefer-default-export
export { modelingTranslation };
