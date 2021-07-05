export default function() {
  // Here we did not mock out the expected response. "Mirage is smart enough to handle them"
  this.get('/bands');
  this.get('/bands/:id');
  this.get('/bands/:id/songs', function(schema, request) {
    const id = request.params.id;

    return schema.songs.where({ bandId: id });
  });
  this.post('/bands');
}
