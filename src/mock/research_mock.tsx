import {
  APIObject,
  DataObject,
  Metadata,
  Publication,
  PublicationMetadata,
} from "../pages/research/Interfaces";

export const mockResearchData: APIObject = {
  object: [
    {
      slug: "topic-1",
      title: "Aging Across the Lifespan",
      metadata: {
        description:
          "This research focuses on the multifaceted challenges of memory retention in older adults. By investigating a combination of behavioral, pharmacological, and technological interventions, the goal is to identify strategies that can effectively mitigate memory decline and promote cognitive resilience throughout aging.",
        publications: [
          {
            slug: "publication-1",
            title:
              "Neuroplasticity and Memory: A Comprehensive Review of Changes in Brain Connectivity During Aging",
            metadata: {
              title:
                "Neuroplasticity in Aging—How Brain Connectivity Evolves with Age and Influences Memory Functions",
              description:
                "Delves deep into the mechanisms of neuroplasticity and its pivotal role in aging brains, exploring therapies to enhance memory retention in older populations.",
              image:
                "https://www.usnews.com/object/image/00000173-4900-dc6b-a1fb-ff0d9c780000/200713-stock.jpg?update-time=1594657702784&size=responsive640",
              isHighlight: true,
              link: "https://example.com/publication-1",
            },
          },
          {
            slug: "publication-2",
            title:
              "Combined EEG and Pupillometry Measures of Language Processing as Markers for Early Detection of Alzheimer’s Disease",
            metadata: {
              title: "EEG and Pupillometry for Early Alzheimer’s Detection",
              description:
                "Combines electrophysiological and pupillometry measures to assess early cognitive changes in Alzheimer’s disease, serving as a novel neurocognitive 'stress test.'",
              image:
                "https://www.usnews.com/object/image/00000173-4900-dc6b-a1fb-ff0d9c780000/200713-stock.jpg?update-time=1594657702784&size=responsive640",
              isHighlight: true,
              link: "https://example.com/publication-2",
            },
          },
          {
            slug: "publication-3",
            title:
              "Computational Modeling of Semantic Decline in Alzheimer’s Disease",
            metadata: {
              title:
                "Understanding Semantic Memory Decline Through Computational Models",
              description:
                "Develops computational models to analyze mechanisms behind semantic memory decline in Alzheimer's patients, aiding interventions and theoretical insights.",
              image:
                "https://www.usnews.com/object/image/00000173-4900-dc6b-a1fb-ff0d9c780000/200713-stock.jpg?update-time=1594657702784&size=responsive640",
              isHighlight: true,
              link: "https://example.com/publication-3",
            },
          },
          {
            slug: "publication-4",
            title:
              "Dietary Patterns and Cognitive Resilience in Aging Populations",
            metadata: {
              title:
                "Dietary Patterns and Cognitive Resilience in Aging Populations",
              description:
                "This study investigates the impact of nutrient-dense diets on preserving memory and executive functions in older adults. By analyzing long-term dietary patterns, it highlights the role of antioxidants, omega-3 fatty acids, and vitamin B in reducing the risk of cognitive impairment.",
              image: "https://example.com/image-3.jpg",
              isHighlight: false,
              link: "https://example.com/publication-3",
            },
          },
          {
            slug: "publication-4",
            title:
              "Behavioral Interventions to Enhance Memory Retention in Aging",
            metadata: {
              title:
                "Behavioral Interventions to Enhance Memory Retention in Aging",
              description:
                "This paper explores the effectiveness of memory training programs designed for seniors, focusing on cognitive behavioral therapy, mindfulness practices, and gamified mental exercises. The study evaluates these methods' success in mitigating age-related memory loss.",
              image: "https://example.com/image-3.jpg",
              isHighlight: false,
              link: "https://example.com/publication-3",
            },
          },
        ],
      },
    },
    {
      slug: "topic-2",
      title: "Novel Neurocognition Markers of Alzheimer’s",
      metadata: {
        description:
          "Exploring the intricate connections between physical activity, brain health, and cognitive decline, this research focuses on exercise-induced neurogenesis and its potential as a non-invasive intervention for age-related cognitive decline.",
        publications: [
          {
            slug: "publication-4",
            title:
              "Aerobic Exercise and Neurogenesis: A Pathway to Cognitive Longevity",
            metadata: {
              title: "Aerobic Exercise as a Catalyst for Cognitive Longevity",
              description:
                "Highlights findings on how aerobic exercise stimulates neurogenesis and enhances cognitive resilience in aging populations.",
              image:
                "https://www.usnews.com/object/image/00000173-4900-dc6b-a1fb-ff0d9c780000/200713-stock.jpg?update-time=1594657702784&size=responsive640",
              isHighlight: true,
              link: "https://example.com/publication-4",
            },
          },
          {
            slug: "publication-5",
            title:
              "Strength Training and Synaptic Plasticity: Neurological Benefits in Older Adults",
            metadata: {
              title: "Strength Training and Neural Growth",
              description:
                "Investigates the impact of resistance exercises on synaptic plasticity and cognition, providing insights into mechanisms driving these changes.",
              image: "https://example.com/image-5.jpg",
              isHighlight: false,
              link: "https://example.com/publication-5",
            },
          },
          {
            slug: "publication-6",
            title:
              "Cognitive Assessment and Prediction to Promote Individualized Capability Augmentation",
            metadata: {
              title: "Cognitive Prediction Using fNIRS in Space Missions",
              description:
                "Evaluates physiological measures for predicting cognitive workload and attentional states, with implications for both astronauts and aging populations.",
              image:
                "https://www.usnews.com/object/image/00000173-4900-dc6b-a1fb-ff0d9c780000/200713-stock.jpg?update-time=1594657702784&size=responsive640",
              isHighlight: true,
              link: "https://example.com/publication-6",
            },
          },
          {
            slug: "publication-6",
            title:
              "Neuroinflammation and Cognitive Decline: Biomarkers for Alzheimer’s Progression",
            metadata: {
              title:
                "Neuroinflammation and Cognitive Decline: Biomarkers for Alzheimer’s Progression",
              description:
                "This publication highlights the emerging role of inflammatory markers in predicting Alzheimer’s disease progression. It discusses how neuroinflammation contributes to cognitive decline and examines potential therapeutic targets for intervention.",
              image: "https://example.com/image-6.jpg",
              isHighlight: false,
              link: "https://example.com/publication-6",
            },
          },
          {
            slug: "publication-6",
            title:
              "Advances in Genetic Markers for Early-Onset Alzheimer’s Disease",
            metadata: {
              title:
                "Advances in Genetic Markers for Early-Onset Alzheimer’s Disease",
              description:
                "A comprehensive review of genetic mutations linked to early-onset Alzheimer’s disease, focusing on APOE variants and other risk factors. The paper explores how these markers are used for early diagnosis and personalized treatment approaches.",
              image: "https://example.com/image-6.jpg",
              isHighlight: false,
              link: "https://example.com/publication-6",
            },
          },
        ],
      },
    },
    {
      slug: "topic-3",
      title: "Neurocognitive Mechanisms of Perception, Memory, and Attention",
      metadata: {
        description:
          "This topic emphasizes the importance of social interaction and emotional health in cognitive functions, examining how loneliness and community engagement influence aging brains.",
        publications: [
          {
            slug: "publication-7",
            title:
              "Combatting Loneliness: The Role of Social Engagement in Cognitive Health",
            metadata: {
              title: "How Social Networks Protect Aging Brains",
              description:
                "Explores protective effects of frequent social interactions, emphasizing the role of community programs in mitigating cognitive decline.",
              image:
                "https://www.usnews.com/object/image/00000173-4900-dc6b-a1fb-ff0d9c780000/200713-stock.jpg?update-time=1594657702784&size=responsive640",
              isHighlight: true,
              link: "https://example.com/publication-7",
            },
          },
          {
            slug: "publication-8",
            title:
              "The Emotional Brain: Emotional Resilience and Cognitive Health",
            metadata: {
              title: "Emotional Resilience in Aging",
              description:
                "Examines interactions between emotional health and cognitive resilience, highlighting neural benefits of positive emotional states.",
              image: "https://example.com/image-8.jpg",
              isHighlight: false,
              link: "https://example.com/publication-8",
            },
          },
          {
            slug: "publication-8",
            title:
              "Multisensory Integration in Aging: Implications for Cognitive Load and Attention",
            metadata: {
              title:
                "Multisensory Integration in Aging: Implications for Cognitive Load and Attention",
              description:
                "This study examines how older adults integrate visual, auditory, and tactile stimuli to maintain cognitive performance. The research identifies specific deficits in multisensory integration and proposes targeted cognitive training strategies.",
              image: "https://example.com/image-8.jpg",
              isHighlight: false,
              link: "https://example.com/publication-8",
            },
          },
          {
            slug: "publication-8",
            title:
              "The Role of Emotional Regulation in Enhancing Memory and Attention in Older Adults",
            metadata: {
              title:
                "The Role of Emotional Regulation in Enhancing Memory and Attention in Older Adults",
              description:
                "Investigating the intersection of emotion and cognition, this paper focuses on how positive emotional states influence neural connectivity and reduce memory errors in aging populations. It emphasizes techniques like mindfulness and gratitude practices for cognitive health.",
              image: "https://example.com/image-8.jpg",
              isHighlight: false,
              link: "https://example.com/publication-8",
            },
          },
        ],
      },
    },
    {
      slug: "More",
      title: "More",
      metadata: {
        description: "",
        publications: [
          {
            slug: "publication-9",
            title: "Sleep Quality and Cognitive Decline in Aging Populations",
            metadata: {
              title: "Sleep and Aging Brains",
              description:
                "Investigates the relationship between sleep disruptions and accelerated cognitive decline, proposing sleep hygiene interventions.",
              image: "https://example.com/image-9.jpg",
              isHighlight: false,
              link: "https://example.com/publication-9",
            },
          },
          {
            slug: "publication-9",
            title:
              "Technological Innovations in Cognitive Rehabilitation for Seniors",
            metadata: {
              title:
                "Technological Innovations in Cognitive Rehabilitation for Seniors",
              description:
                "This publication explores advancements in virtual reality (VR) and augmented reality (AR) tools for cognitive rehabilitation. It provides evidence on how these tools enhance spatial memory and attention in aging individuals.",
              image: "https://example.com/image-9.jpg",
              isHighlight: false,
              link: "https://example.com/publication-9",
            },
          },
          {
            slug: "publication-9",
            title: "Social Robotics and Cognitive Support in Elderly Care",
            metadata: {
              title: "Social Robotics and Cognitive Support in Elderly Care",
              description:
                "A study on the integration of social robotics in caregiving for older adults, focusing on how these technologies promote social engagement and alleviate loneliness, indirectly supporting cognitive resilience.",
              image: "https://example.com/image-9.jpg",
              isHighlight: false,
              link: "https://example.com/publication-9",
            },
          },
        ],
      },
    },
  ],
};
