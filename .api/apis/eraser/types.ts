import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type GenerateDiagramFromElementBodyParam = FromSchema<typeof schemas.GenerateDiagramFromElement.body>;
export type GenerateDiagramFromElementResponse200 = FromSchema<typeof schemas.GenerateDiagramFromElement.response['200']>;
export type GenerateDiagramFromPromptBodyParam = FromSchema<typeof schemas.GenerateDiagramFromPrompt.body>;
export type GenerateDiagramFromPromptResponse200 = FromSchema<typeof schemas.GenerateDiagramFromPrompt.response['200']>;
