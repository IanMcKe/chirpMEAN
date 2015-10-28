chirpApp.factory('PostService', function PostService($resource) {
  return $resource('/api/posts/:id');
});
