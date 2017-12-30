describe('Javascipt learnings', function () {
	describe('Arrays', function () {
		describe('daheesArray', function () {
			describe('#1', function () {
				it('should be an array', function () {
					expect(daheesArray).toEqual(jasmine.any(Array));
				});
			});
			describe('#2', function () {
				it('should contain three things', () => {
					expect(daheesArray.length).toEqual(3);
				})
			});
			describe('#3', function () {
				it("#3a should create a new array called 'groceries'", () => {
					expect(groceries).toEqual(jasmine.any(Array));
				})
				it("#3b should have 4 foods inside (Of String type)", () => {
					expect(groceries[0]).toEqual(jasmine.any(String));
					expect(groceries[1]).toEqual(jasmine.any(String));
					expect(groceries[2]).toEqual(jasmine.any(String));
					expect(groceries[3]).toEqual(jasmine.any(String));
				})
			});
			if (!food) {
				describe('#4', function () {
					it("4a groceries should now be the last index of daheesArray", () => {
						expect(daheesArray[4]).toEqual(groceries);
					})
					it("#4b should have 4 foods inside (Of String type)", () => {
						expect(groceries[0]).toEqual(jasmine.any(String));
						expect(groceries[1]).toEqual(jasmine.any(String));
						expect(groceries[2]).toEqual(jasmine.any(String));
						expect(groceries[3]).toEqual(jasmine.any(String));
					})
				});
			}

			describe('#5', function () {
				it("should create new variable called daheesArrayLength", () => {
					expect(daheesArrayLength).toBeDefined();
				})
				it("should be equal to the length of daheesArray", () => {
					expect(daheesArrayLength).toEqual(daheesArray.length);
				})
			});

			describe('#6', function () {
				it("should create new variable called food", () => {
					expect(food).toBeDefined();
				});
				it("should be a string", () => {
					expect(food).toEqual(jasmine.any(String));
				})
				it("should have caused groceries to get shorter", () => {
					expect(daheesArrayLength).toEqual(daheesArray.length);
				})
			});

			describe('#7', function () {
				it("should create new variable called seven", () => {
					expect(seven).toBeDefined();
				});
				it("should be correct", () => {
					expect(seven).toEqual(0);
				})

			});

			describe('#8', () => {
				it("should create new variable called eight", () => {
					expect(eight).toBeDefined();
				});
				it('should be the right answer', () => {
					expect(eight).toEqual('monkey');
				})
			})

		})

	});
	describe('objects', () => {
		describe('#1', () => {
			it("should create new variable called anubis", () => {
				expect(anubis).toBeDefined();
			});
			it('should be an object', () => {
				expect(anubis).toEqual(jasmine.any(Array));
			});
		});

		describe('#2', () => {
			it("anubis should now have key of 'age' and value of 1", () => {
				expect(anubis['age']).toEqual(1);
			});
		});
		if (!anubis.hasOwnProperty('type')) {
			describe('#3', () => {
				it("anubis should now have key of 'type' and value of 'dog'", () => {
					expect(anubis.type).toEqual('dog');
				});
			});
		} else {
			describe('#4', () => {
				it("anubis should no longer have key of age (GOOGLE IT! 'How to remove key from object')", () => {
					expect(anubis.hasOwnProperty('age')).toEqual(false);
				});
			});
		}

	})
	describe('FUNCTIONS', () => {
		describe('#1', () => {
			it("Create a function called addOne", () => {
				expect(addOne).toBeDefined();
			});
			it('should add one to a number', () => {
				expect(addOne(1)).toEqual(2);
				expect(addOne(0)).toEqual(1);
				expect(addOne(10)).toEqual(11);
			});
		});

		describe('#2', () => {
			it("create a function called uppercaser", () => {
				expect(uppercaser).toBeDefined();
			});
			it("create a function called uppercaser", () => {
				expect(uppercaser('dog')).toEqual('DOG');
				expect(uppercaser('banana')).toEqual('BANANA');
			});

		});

		describe('#3', () => {
			it("create a funtion called merger", () => {
				expect(merger).toBeDefined();
			});
			it("should put too arrays together", () => {
				expect(merger([1, 2], ['2'])).toEqual([1, 2, '2']);
			});
		});

		describe('#4', () => {
			it("create a function called puppyMaker", () => {
				expect(puppyMaker).toBeDefined();
			});

			it('puppyMaker should return an object', () => {
				expect(anubis).toEqual(jasmine.any(Array));
			});
			it('the returned object should have a key of name', () => {
				expect(puppyMaker('anubis', 1).hasOwnProperty('name')).toEqual(true)
				it("'name' key should have a string value", () => {
					expect(puppyMaker('anubis', 1)['name']).toEqual('anubis');
				})

			})
			it('the returned object should have a key of age', () => {
				it("'age' key should be a number value", () => {
					expect(puppyMaker('anubis', 1)['age']).toEqual(1);
				});

			})
		});

	})
})