import { useEffect, useState } from 'react';
import './App.css';
import { mockHomeData } from './mock/example_mock_data';

interface APIObject {
  object: DataObject;
}

interface DataObject {
  slug: string;   
  title: string;   
  metadata: Metadata;
}

interface Metadata {
  heading: string; 
  subheading: string; 
  image: Image;
}

interface Image {
  url: string;     
  imgix_url: string;
}



function App() {

  const [data, setData] = useState<APIObject>();

  async function fetchMockData() {
    return mockHomeData;
  }

  async function fetchData() {
    //this would be the actuall call to the API where we input our query and get the response back.
  }

  useEffect(() => {
    //here we are mocking the API call
    fetchMockData()
    .then((jsonData) => {
      setData(jsonData);
    })
    .catch((error) => {
      console.log('Error fetching the data:', error);
      //error handle on the front end
    })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>This is our super cool website lol</h1>
      </div>
      <div>
        {data ? (
            <>
              <h2>{data.object.metadata.heading}</h2>
              <h3>{data.object.metadata.subheading}</h3>
              {data.object.metadata.image.url && (
                <img src={data.object.metadata.image.url} alt={data.object.metadata.heading} />
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
      </div>
    </div>
  );
}

export default App;
