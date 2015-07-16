/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the favNum function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



//Code Here for first

var first = function (names, cb) {
	cb(names[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function (firstName) {
	console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for last

function last(names, cb) {
    // 
	cb(names[names.length - 1])
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function (lastName) {
	console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






//Code Here for multiply

function multiply(num1, num2, cb) {
	cb(num1 + num2)
}

multiply(4, 3, function (answer) {
	console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//Code Here for contains

function contains(names, name, cb) {
	if (names.indexOf(name) !== -1) {
		cb(true)
	} else {
		cb(false)
	}
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function (result) {
	if (result === true) {
		console.log('Colt is in the array');
	} else {
		console.log('Colt is not in the array');
	}
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for uniq

function uniq(names, cb) {

    // Iterate backwards through names array
	for (var i = names.length - 1; i >= 0; i--) {

        // Set dupPos to the index of the first occurance of the
        // name we're currently on
		var dupPos = names.indexOf(names[i]);

        // If the dupPos is less than the i position
        // then there are two names
		if (dupPos !== i) {
            // So remove the current name
			names.splice(i, 1)
		}
	}

    // run the callback function with the new array
	cb(names);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan', 'Dan', 'Dan', 'Dan', 'Dan', 'Dan', 'Dan', 'Jake', 'Jake', 'Jake'];
uniq(names, function (uniqArr) {
	console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





	/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




	//Code Here for each

	function each(names, cb) {
		names.forEach(function (item, i, array) {
			cb(item, i)
		})
	}

	var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
	each(names, function (item, indice) {
		console.log('The item in the ' + indice + ' position is ' + item)
	});





	/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





	//code here for getUserById
	function getUserById(users, string, cb) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === string) {
				cb(users[i]);
			}
		}
	}

	var users = [{
		id: '12d',
		email: 'tyler@gmail.com',
		name: 'Tyler',
		address: '167 East 500 North'
	}, {
		id: '15a',
		email: 'cahlan@gmail.com',
		name: 'Cahlan',
		address: '135 East 320 North'
	}, {
		id: '16t',
		email: 'ryan@gmail.com',
		name: 'Ryan',
		address: '192 East 32 North'
	}, ];

	getUserById(users, '16t', function (user) {
		console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
	});
