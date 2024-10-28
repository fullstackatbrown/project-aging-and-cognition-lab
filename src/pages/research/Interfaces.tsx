export interface APIObject {
  object: DataObject[];
}

export interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

export interface Metadata {
  description: string;
  publications: Publication[];
}

export interface ResearchTopicProps {
  slug: string;
  title: string;
  metadata: Metadata;
}

export interface Publication {
  slug: string;
  title: string;
  metadata: PublicationMetadata;
}

export interface PublicationMetadata {
  title: string;
  description: string;
  image: string;
  isHighlight: boolean;
}

export interface HighlightsProps {
  publications: Publication[];
}

export interface MoreProps {
  publications: Publication[];
}
