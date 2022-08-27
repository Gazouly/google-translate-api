import httpClient from '../httpClient';
import { modelingTranslation } from './translate.model';

const translate = async ({ to, from, text }) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append('q', text);
  encodedParams.append('target', to);
  encodedParams.append('source', from);
  const res = await httpClient.post('/translate/v2', encodedParams);
  return modelingTranslation(res.data);
};

// eslint-disable-next-line import/prefer-default-export
export { translate };
