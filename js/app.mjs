fetch('https://json-express.herokuapp.com/api/definitions')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  });
