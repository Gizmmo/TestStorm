answer = 0;
current = 1;
index = 0;
chosenAnswers = [];
returnAns = "";
allItems = [];

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
			allItems = Data.find({answer : {$ne : this.answer}}).fetch();

			if (allItems.length >= 3){
				for(i = 0; i < 3; i++){
					randomNum = Math.floor(Math.random() * allItems.length);
					chosenAnswers[i] = allItems[randomNum];
					allItems.splice(randomNum, 1);
				}
			}
			index = 0;
		}
		if (allItems.length >= 3 || chosenAnswers.length >= 3){
			if (current === answer){
				current++;
				returnAns = this.answer;
			} else {
				current++;
				var found = chosenAnswers[index];
				returnAns = found.answer;
				index++;
			}

			if (current === 5){
				answer = 0;
				current = 1;
				index = 0;
				chosenAnswers = [];
				allItems = [];
			}
		} else {
			returnAns = "You need more questions in the system first";
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
			$("#end" + myId).html("The Correct answer is " + this.answer);
		}

	}
});