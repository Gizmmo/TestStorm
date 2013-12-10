Meteor.Router.add({

	//Routes to dashboard Page.
	'/': {
		to: "question"
	},

	"/question" :{
		to: "question"
	},

	'/createQuestion' : {
		to: "createQuestion"
	}


});