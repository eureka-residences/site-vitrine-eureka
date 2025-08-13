export type TProcessStatus = 'en_cours' | 'en_processus' | 'traitee';

export type TPriority = 'high' | 'medium' | 'low';

export interface IDocument {
  id: number,
  type: string,
  name: string,
  date: string,
  size: string,
  url: string,
}

export type TIncidentCategory = 'plomberie' | 'electricite' | 'porte' | 'chauffage' | 'internet' | 'securite';
