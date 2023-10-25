var express		= require("express"),
	app			= express(),
	bodyparser 	= require("body-parser"),
	mongoose	= require("mongoose"),
	MethodOverride= require("method-override"),
	sanitizer	= require("express-sanitizer");

	//COMMENT THIS TO RUN WEBSITE!


	const routes = require('./routes/routes');


mongoose.connect("mongodb://127.0.0.1:27017/blog_main_DB", { useNewUrlParser: true ,  useFindAndModify: false ,useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
app.use(MethodOverride("_method"));
app.use(sanitizer());
app.use(express.json())

//COMMENT THIS TO RUN WEBSITE!


app.use('/api', routes)

//blogSchema

// var blogSchema= new mongoose.Schema({
// 	title: String,
// 	image: String,
// 	body: String,
// 	created: {type: Date, default: Date.now}
// });

// // creating a new collection
// var Blog= mongoose.model("Blog", blogSchema);



// app.get("/",function(req,res){
// 	Blog.find({},function(err,blogs){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.render("index",{blogs: blogs});
// 		}
// 	})	
// })

// //Restful Routes
// app.get("/blogs",function(req,res){
// 	Blog.find({},function(err,blogs){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.render("index",{blogs: blogs});
// 		}
// 	})	
// })

// const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";

// app.get("/about", function(req, res){
// 	res.render("about", {aboutContent: aboutContent});
//   });

// //Route for opening the form to add new blog
// app.get("/blogs/new",function(req,res){
// 	res.render("new");
// });

// //create route for new blog
// // app.post("/blogs",function async(req,res){

// // });


// app.post("/blogs",function async(req,res){

// 	req.body.blog.body= req.sanitize(req.body.blog.body);
// 	Blog.create(req.body.blog,function(err,newBlog){
// 		if (err) {
// 			console.log(err);
// 			res.render("new");
// 		} else {
// 			res.redirect("blogs");
// 		}
// 	})

// });

// //show route for specific details of a blog
// app.get("/blogs/:id",function(req,res){
// 	Blog.findById(req.params.id,function(err,foundBlog){
// 			if (err) {
// 				console.log(err);
// 				res.redirect("/blogs");
// 			} else {
// 				res.render("show",{blog:foundBlog});
// 			}
// 	})
// });

// //edit route that opens the form to edit a post
// app.get("/blogs/:id/edit",function(req,res){
// 	Blog.findById(req.params.id,function(err,foundBlog){
// 		if (err) {
// 			console.log(err);
// 			res.redirect("/blogs");
// 		} else {
// 			res.render("edit",{blog: foundBlog});
// 		}
// 	})
// });

// //Update route to update database with the new data
// app.put("/blogs/:id",function(req,res){
// 	req.body.blog.body= req.sanitize(req.body.blog.body);
// 	Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedblog){
// 		if (err) {
// 			console.log(err)
// 			res.redirect("/blogs");
// 		} else {
// 			res.redirect("/blogs/"+req.params.id);
// 		}
// 	})

// });

// app.delete("/blogs/:id",function(req,res){
// 	Blog.findByIdAndRemove(req.params.id,function(err){
// 		if (err) {
// 			console.log(err);
// 			res.redirect("/blogs");
// 		}else{
// 			res.redirect("/blogs");
// 		}
// 	})
// });




//DOnt comment listen while postman 

app.listen(3000,function(){
	console.log("Server is running...")
});




























// Blog.create({
// 	title: "Stack Exchange",
// 	image: "https://images.unsplash.com/photo-1481121749114-c5488c93b0d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
// 	body: "Knowing the concept of stack exchange is a must this days.",
// },function(err,newblog){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("New blog added:");
//  		console.log(newblog);
// 	}
// });