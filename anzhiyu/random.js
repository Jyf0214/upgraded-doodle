var posts=["2024/11/30/Free-Domains/","2026/01/03/web-dl-manager/","2026/01/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };