const router = require('express').Router();
const Post=require("../model/models");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const home=new Post({
  title:"Home",
  content: homeStartingContent,
});
const about=new Post({
  title:"About",  
  content:aboutContent
});
const contact=new Post({
  title:"Contact", 
  content:contactContent
});

router.get("/", function(req, res){
    Post.find({},function(err,posts){
      if(!err){
        res.render("home",{
          start:homeStartingContent,
          home:posts
        });
      }
    });
    
    
  }); 
  router.get("/about", function(req, res){
  
    res.render("about",{content:aboutContent});
  });
  router.get("/contact", function(req, res){
    res.render("contact",{contact:contactContent});
  });
  router.get("/compose", function(req, res){
    
    res.render("compose");
  });
  router.post("/compose", function(req, res){
    let val=req.body.input; 
    let val2=req.body.post;  
    const obj=new Post({
      title:val,
      content:val2
    });
    obj.save(async function(err){
      if(!err){
        await res.redirect("/");
      }
    });
    
    
  });
  router.get("/posts/:postid", function(req, res){
    let v=req.params.postid;
    const value=v.substring(1,v.length);
    
    Post.find({_id:value},function(err,posts){
      if(!err){
       
          res.render("post",{val:posts[0].title, content:posts[0].content});
        }
    });
  });

  module.exports=router