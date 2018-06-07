const apikey = 'MOHoNY5w8GWN3EohGBldnjE_vImBOBErMUgBHGES0M_NHdyK-4iosZf0bne3-quFAK5R3EtVnoTNkL1qPAAFAyKMuUCLpLDFALaoWFBGnNDclinl1tSEQEn-riEMW3Yx';

let Yelp = {
  search: function(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers:{
          Authorization: `Bearer ${apikey}`
        }
    }).then(response => {
      return response.json();
    }).then(jsonResponse =>{
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
};
module.exports = Yelp;
