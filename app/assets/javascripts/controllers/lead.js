App.LeadController = Ember.ObjectController.extend({
  actions: {
    saveChanges: function() {
      if (this.get('model.isDirty')) this.get('model').save();
    }
  }
});
