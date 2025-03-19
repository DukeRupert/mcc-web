import { createDirectus, rest } from '@directus/sdk';
import type { Schema } from './types';

const client = createDirectus<Schema>(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest());

export default client
