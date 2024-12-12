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
}
  

  export const getPublicationData = async () => {
    try {
      
      
      const data =
         
      await cosmic.objects.findOne({
        type: "researchpage",
        slug: "researchpage"
      }).props("slug,title,metadata,type")
      .depth(2)
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching research data:', error);
    }
}

export const getNewsData = async () => {
    try {
      
      
      const data =
         
      await cosmic.objects.findOne({
        type: "newspage",
        slug: "main-news-page"
      }).props("slug,title,metadata,type")
      .depth(1)
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching research data:', error);
    }
}

export const getHomeNewsImages = async () => {
    try {
      
      
      const data =
         
      await cosmic.objects.findOne({
        type: "homenews",
        slug: "home-news"
      }).props("slug,title,metadata,type")
      .depth(1)
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching research data:', error);
    }
}

export const getHomePageData = async () => {
    try {
      
      
      const data =
         
      await cosmic.objects.findOne({
        type: "homepages",
        slug: "homepage"
      }).props("slug,title,metadata,type")
      .depth(1)
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching research data:', error);
    }
}

export const getJoinPageData = async () => {
    try {
      
      
      const data =
         
      await cosmic.objects.findOne({
        type: "joinpages",
        slug: "joinpage"
      }).props("slug,title,metadata,type")
      .depth(1)
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching research data:', error);
    }
}
  




