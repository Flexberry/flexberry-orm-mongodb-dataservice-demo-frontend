import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'ember-flexberry-dummy-comment-vote+applicationUser':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'applicationUser',
            projection: 'ApplicationUserL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
