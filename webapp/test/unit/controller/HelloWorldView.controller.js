/*global QUnit*/

sap.ui.define([
	"hraxianshelloworld/hello_world/controller/HelloWorldView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HelloWorldView Controller");

	QUnit.test("I should test the HelloWorldView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
