({
	handleSave : function(component, event, helper) {
		event.preventDefault();
        var ContactField = event.getParam("fields");
        ContactField.AccountId = component.get("v.recordId");
        component.find("editForm").submit(ContactField);
	},
    handleSuccess:function(component, event, helper) {
        var resultToast = $A.get("e.force:showToast");
        resultToast.setParams(
            {
                title : "Contact Saved",
                message : "Contact has been created successfully"
            }
        );
        $A.get("e.force:closeQuickAction").fire();
        resultToast.fire();
        $A.get("e.force:refreshView").fire();
    },
    handleCancel : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
})