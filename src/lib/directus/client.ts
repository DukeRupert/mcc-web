import { createDirectus, rest } from '@directus/sdk';
import type { Schema } from './types';

const client = createDirectus<Schema>('https://content.manifoldcollective.com').with(rest());

export default client
