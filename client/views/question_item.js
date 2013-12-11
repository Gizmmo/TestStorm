answer = 0;
current = 1;
returnAns = "";

Template.questionItem.helpers({
	getNum: function () {
		return 0;
	},

	getTotal: function () {
		return 1;
	},

	getAnswer: function () {
		returnAns = "";
		if (answer === 0){
			answer = Math.floor((Math.random()*4)+1);
		}
		console.log("Current: " + current + " Answer: " + answer);
		if (current === answer){
			current++;
			returnAns = this.answer;
		} else {
			current++;
			var items = Data.find({answer : {$ne : this.answer}}).fetch();
			var found = items[Math.floor(Math.random() * items.length)];
			returnAns = found.answer;
		}

		if (current === 5){
			current = 1;
			answer = 0;
		}

		return returnAns;
	},

	getAnswerAgain: function () {
		return returnAns;
	}
});

Template.questionItem.events({
'submit form': function (event, template) {
		//This will stop the default submitting of the form
		event.preventDefault();

		var clickedElement = event.target;
		var myId = $(clickedElement).attr('id');

		var chosen = template.find('input:radio[name=' + myId + ']:checked');
		
		if ($(chosen).val() === this.answer){
			$("#end" + myId).html("You are Correct!");
		} else {
			$("#end").html("The Correct answer is " + this.answer);
		}

	}
});