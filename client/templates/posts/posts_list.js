Template.postsList.helpers({
	posts: function(){
		return Posts.find({author: 'bob-smith', catagory: 'JavaScript'});
	}
});