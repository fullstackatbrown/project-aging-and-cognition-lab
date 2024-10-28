interface APIObject {
  object: DataObject[];
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  description: string;
  publications: Publication[];
}

interface Publication {
  slug: string;
  title: string;
  metadata: PublicationMetadata;
}

interface PublicationMetadata {
  title: string;
  description: string;
  image: string;
  isHighlight: boolean;
}

export const mockResearchData: APIObject = {
  object: [
    {
      slug: "topic-1",
      title: "Topic 1",
      metadata: {
        description: "Topic 1 Description",
        publications: [
          {
            slug: "publication-1",
            title: "Publication 1",
            metadata: {
              title: "Highlight Title 1",
              description: "Highlighted Description 1.",
              image: "1.jpg",
              isHighlight: true,
            },
          },
          {
            slug: "publication-2",
            title: "Publication 2",
            metadata: {
              title: "Non Highlighted Title 1",
              description: "Description 1.",
              image: "2.jpg",
              isHighlight: false,
            },
          },
          {
            slug: "publication-3",
            title: "Publication 3",
            metadata: {
              title: "Non Highlighted Title 2",
              description: "Description 2.",
              image: "3.jpg",
              isHighlight: false,
            },
          },
        ],
      },
    },
    {
      slug: "topic-2",
      title: "Topic 2",
      metadata: {
        description: "Topic 2 Description",
        publications: [
          {
            slug: "publication-4",
            title: "Publication 4",
            metadata: {
              title: "Highlight Title 2",
              description: "Highlighted Description 2.",
              image: "4.jpg",
              isHighlight: true,
            },
          },
          {
            slug: "publication-5",
            title: "Publication 5",
            metadata: {
              title: "Non Highlighted Title 3",
              description: "Description 3.",
              image: "5.jpg",
              isHighlight: false,
            },
          },
        ],
      },
    },
    {
      slug: "topic-3",
      title: "Topic 3",
      metadata: {
        description: "Topic 3 Description",
        publications: [
          {
            slug: "publication-6",
            title: "Publication 6",
            metadata: {
              title: "Highlight Title 3",
              description: "Highlighted Description 3.",
              image: "6.jpg",
              isHighlight: true,
            },
          },
        ],
      },
    },
  ],
};
