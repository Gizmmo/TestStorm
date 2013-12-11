Template.question.helpers({
	/**
	 * Finds all projects
	 * @return collection All projects in collection
	 */
	questions: function() {
		foundData = Data.find({}).fetch();
		numLength = foundData.length;
		randomData = [];
		for(i = 0; i < numLength; i++){
			randomNum = Math.floor(Math.random() * foundData.length);
			randomData[i] = foundData[randomNum];
			foundData.splice(randomNum, 1);
		}
		return randomData;
	}
});