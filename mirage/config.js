export default function () {
  this.get('/tasks');
  this.post('/tasks');
  this.get('/tasks/:id');
  this.put('/tasks/:id');
  this.del('/tasks/:id');
}
