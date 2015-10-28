chirpApp.controller('MainController', function MainController(PostService, UserService){
  var vm = this;
  vm.posts = PostService.query();
  vm.newPost = {created_by: '', text: '', created_at: ''};
  vm.UserService = UserService;

  vm.post = function() {
    vm.newPost.created_by = UserService.current_user;
    vm.newPost.created_at = Date.now();
    PostService.save(vm.newPost, function() {
      vm.posts = PostService.query();
      vm.newPost = {created_by: '', text: '', created_at: ''};
    });
  };
});
