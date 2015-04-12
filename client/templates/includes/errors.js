Template.errors.helpers({
	errors: function () {
		return Errors.find();
	}
});

// Remove errors from collection after 3 seconds (when they are finished displaying)
Template.error.rendered = function () {
	var error = this.data;
	Meteor.setTimeout(function() {
		Errors.remove(error._id);
	}, 3000);
};