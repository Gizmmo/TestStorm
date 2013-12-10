Template.question.helpers({
	/**
	 * Finds all projects
	 * @return collection All projects in collection
	 */
	questions: function() {
		return Data.find({});
	}
});