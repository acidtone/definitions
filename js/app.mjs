fetch('https://json-express.herokuapp.com/api/v0/definitions')
  .then(function(response){
    if (!response.ok) throw new Error('not 200');
    
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
