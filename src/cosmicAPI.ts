import { createBucketClient } from '@cosmicjs/sdk';

// Initialize the Cosmic SDK
const cosmic = createBucketClient({
  bucketSlug: 'aging-and-cognition-lab-production',  // replace with your actual bucket slug
  readKey: 'haR9elOQurWT9DwEd4U0SoxksrTtWNLSJlVuWSbEW6Jkzv943z', // replace with your bucket's read key if needed
});

// Function to fetch research data
export const getResearchData = async () => {
  try {
    
    
    const data = await cosmic.objects.findOne({
      type: "researchpage",
      slug: "testing-research"
    }).props("slug,title,metadata,type")
    .depth(1)
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching research data:', error);
  }
};

export const getMemberData = async () => {
  try {
    
    
    const data = await cosmic.objects.findOne({
      
        type: "lab-member",
        slug: "bronx-researcher"
      }).props("slug,title,metadata,type")
      .depth(1)
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching research data:', error);
  }
};

export const getMemberPageData = async () => {
  try {
    
    
    const data =
       
    await cosmic.objects.findOne({
      type: "labmembers",
      slug: "labmembers"
    }).props("slug,title,metadata,type")
    .depth(1)
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching research data:', error);
  }
};

