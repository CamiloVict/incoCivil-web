import axios from 'axios';

const API_KEY = 'AIzaSyALaQ46AviymyKBKe6SUzfR29Lcmd3zBho';
// const ID ='Incocivil+Insumos+Para+La+Construccion+Civil+Sas/@3.433811,-76.5284588,17z/data=!3m1!4b1!4m5!3m4!1s0x8e30a68d572a04d9:0xee211c8a1e110edb!8m2!3d3.4338734!4d-76.5262723?hl=es'
const ID = '406303234073829602';

export async function getBusinessComments(businessId: string, apiKey: string) {
  try {
    // Make a GET request to the Google API to fetch the comments for the specified business
    const response = await axios.get(`https://www.googleapis.com/comments/v1/${businessId}`, {
      params: {
        key: apiKey,
      },
    });

    // Extract the comments from the response data
    const comments = response.data.comments;

    // Do something with the comments here
    console.log(comments);
  } catch (error) {
    // Handle any errors that might occur
    console.error(error);
  }
}

getBusinessComments(ID, API_KEY);
