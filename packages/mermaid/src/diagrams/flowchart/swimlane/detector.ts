import type { MermaidConfig } from '../../../config.type.js';
import type { ExternalDiagramDefinition, DiagramDetector } from '../../../diagram-api/types.js';

const id = 'swimlane';

const detector: DiagramDetector = (txt: string, config?: MermaidConfig): boolean => {
  if (txt.match(/^\s*swimlane/)) {
    return true;
  }
  return false;
};

const loader = async () => {
  const { diagram } = await import('./swimlane-definition.js');
  return { id, diagram };
};

const plugin: ExternalDiagramDefinition = {
  id,
  detector,
  loader,
};

export default plugin;
