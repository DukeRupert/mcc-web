import { createDirectus, rest } from '@directus/sdk';
import type { Schema } from './types';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

const client = createDirectus<Schema>(PUBLIC_DIRECTUS_URL).with(rest());

export default client
