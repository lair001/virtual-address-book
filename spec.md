# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app
	In particular I am using Ruby on Rails to serve an Angular-based front-end.  The Angular front-end makes HTTP requests to the Rails backend, and the backend renders JSON-based responses.
- [x] Must contain some sort of nested views
	The Angular front-end is structured as a series of nested states.  Everything is nested within an index state, which renders the credit box.  The visitor and signed in states branch off the index state.  The visitor state branches into welcome, sign up, and sign in states.  The signed in state branches into accounts and contacts states.  Both accounts and contacts states have show substates.
- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
	The contacts state orders contacts alphabetically by last name.  It also provides search functions to filter contacts by first name, last name, occupation, employer, e-mail, state, city, and/or zip code.
- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
	Both the accounts and contacts branches allow the user to edit their account or one of their contacts while seeing their account or contact update within the show view.
- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
	All links in the Angular front end point toward a state.
- [x] Data should be validated in Angular before submission
	All forms draw from stock Angular validations as well as 13 custom validation directives.
- [x] Must talk to the Rails backend using $http and Services. **you may not use $resource**
	The Angular front-end makes HTTP requests using $http.  The user's account and contacts information provided by the server is stored on $rootScope.
- [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code
	See READ.md for more details.

Confirm
- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message