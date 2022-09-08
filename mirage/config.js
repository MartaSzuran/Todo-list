export default function () {
  this.get('/tasts');
  this.post('/tasks');
  this.get('/tasks/:id');
  this.put('/tasks/:id');
  this.del('/tasks/:id');
}
