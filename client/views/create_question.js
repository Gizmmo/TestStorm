Template.createQuestion.events({
	/**
	 * Creates a datas and inserts it in the data collection
	 * @param  Event event The event of clicking the button
	 * @return void
	 */
	'submit form': function (event) {
		//This will stop the default submitting of the form
		event.preventDefault();

		//Creates a data var that will pass the arg
		//to the database
		var data = {
			question: $(event.target).find('[name=title]').val(),
			answer: $(event.target).find('[name=description]').val()
		};

		//Calls the newly created Data's pafe after creating
		Meteor.call('data', data, function (error, id) {
                //no errors send to the new page
				Meteor.Router.to('question');
        });

	}
});