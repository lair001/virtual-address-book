# Virtual Address Book

`Virtual Address Book` is a contacts tracking system built on `Ruby on Rails` and `AngularJS`.

## Installation

This web app can be installed by cloning the GitHub [repository](https://github.com/lair001/virtual-address-book) to your system.  You may also host it live on your own server or a hosting service such as [Heroku](https://www.heroku.com/) or [Amazon Web Services](https://aws.amazon.com/).

## Usage

If you have cloned the GitHub repository to your system, you can start the app by navigating to the directory containing the repository and running `rails s`.  You can then view the web app's homepage by navigation to http://localhost:3000 in your browser of choice.

### Signing Up and Signing In

The user may sign up or sign in by following links at the bottom of the welcome view.  Following either link will take the user to a form for the chosen action.  Successful sign up or sign in will take the user to the contacts view.

### Contacts View

The jumbotron at the top of the contacts view has links to the user's accounts show view, to the contacts view, and to sign out.  The link back on to the contacts view may seem counter-intuitive, but it is to help the user when viewing the new, show, and edit views to are nested within the contacts view.  At the top of the next jumbtron is a link to the contacts new view.

Below this link are input fields for various search criteria to filter a list of the user's contacts found below the input fields.  This list is sorted alphabetically by last name.  Each name in the list is a link to that contact's contacts show view.

If the user navigates to either the contacts show view or contacts new view, the view will be rendered between the new contacts link and the input fields.

### Contacts New View

This view consists of a form to submit a new contact for the user.  If the form is submitted and a contact is successfully created, the view will close.

### Contacts Show View

This view displays information regarding the chosen contact.  At the bottom, there are links to edit or delete the contact.  If the user choses to edit the contact, the contacts show edit view will be rendered to the right.  Choosing to delete the contact will present a dialog box to confirm the action.

### Contacts Show Edit View

This view consists of a form to edit the chosen contact.  The changes made can be seen immediately in the contacts show view.  However, the changes will not be persisted until the form is successfully submitted.  Upon a successful submit, this view will close.

### Accounts Show View

This view displays the user's account information.  There are links to edit or delete the account below.  If the user follows either of these links, the accounts show edit view or the accounts show delete view will be rendered to the right.

### Accounts Show Edit View

This view consists of a form to edit the user's account.  The changes made can be seen immediately in the accounts show view.  However, the changes will not be persisted until the form is successfully submitted.  For security reasons, the user is required to provide their current password and they must change their password whenever they edit their account.  Upon a successful submit, this view will close.

### Accounts Show Delete View

For security reasons, the user must submit their current password when deleting their account.  This view provides a form to do this.  When the user clicks the form's submit button, they are presented with a dialog box to confirm that they want to send the delete request.  Upon successful account deletion, the user is redirected to the welcome view.

### Creating Administrators

For security reasons, it is only possible to set adminstrator permissions through `rails console` or a database editor.  To do it with `rails console`, navigate to the directory where the respository is cloned and run `rails c`.  This takes you to rails console's command line.  

To set administrator permissions, run `User.find_by(username: "[username]").update(role: "administrator")`.  To remove moderator permissions, run `User.find_by(username: "[username]").update(role: "free")`.

For example, `User.find_by(username: "The One").update(role: "administrator")`will grant moderator permissions to the user whose username is `The One`.

You may exit the `rails console` command line by running `exit`.

## Contributing

If you want to contribute, feel free to fork the `virtual-address-book`repository and submit a pull request.  You may also email Samuel Lair at lair002@gmail.com.

## License

This gem is open source under the [MIT license](https://github.com/lair001/virtual-address-book/blob/master/LICENSE).