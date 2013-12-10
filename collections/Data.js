Data = new Meteor.Collection('data');

Meteor.methods({
	/**
	 * This function will data validate the new data being passed
	 * and then if no errors occur, place this new data in
	 * the Data collection
	 * @param  {[object]} dataAttributes [A prelimeanry data object, containg the title, description, and url]
	 * @return {[string]}                   [A String of its ID in the collection]
	 */
	data: function(dataAttributes){

		//Inserts new data into collection
		var dataID = Data.insert(dataAttributes);

		//returns the ID of the new data
		return dataID;
	}
});