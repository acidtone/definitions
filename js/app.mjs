fetch('http://localhost:3000/api/definitions')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  });
