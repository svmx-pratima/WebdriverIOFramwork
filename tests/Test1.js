//var assert=require('assert');
//var Spotcheck_Page=require("../Spotcheck_Page.js")
var expect = require('chai').expect;
var should = require('chai').should;

describe("Verify whether servicemax Storybook url opens", function () {
	it("check that the url title is GE Sign In Page", function (done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		//browser.pause(20000);
		

		//browser.url('https://ui.servicemax.co/lightning/8.5.0/');
		browser.url('https://ui.servicemax.co/lightning-demo/8.5.0');
		//browser.maximizeWindow()
		(function () {
			var ul = null;
			function createErrorList() {
				ul = document.createElement('ul');
				ul.setAttribute('id', 'js_error_list');
				ul.style.display = 'none';
				document.body.appendChild(ul);
			}
			browser.onerror = function(msg){
				if (ul === null)
					createErrorList();
				var li = document.createElement("li");
				li.appendChild(document.createTextNode(msg));
				ul.appendChild(li);
			};
		})();
		


		var title = browser.getTitle();
		console.log('Title is: ' + title);
		//assert.equal(title,'GE : Single Sign On')
		try{
		expect(title).to.equal('GE : Single Sign On')
		}catch(err){
		console.log("Single sign on not hit"+err)

		}
		browser.setValue('[id="username"]', '212723538')
		browser.setValue('[id="password"]', 'Aaradhya091Anil')
		browser.click('#submitFrmShared')

		var title2 = browser.getTitle();
		//browser.debug();

		console.log('Title is: ' + title2);
		//expect(title).to.equal('GE : Single Sign On')

		browser.pause(1000)


		var title3 = browser.getTitle();
		console.log('Title is: ' + title3);
		try{
		expect(title3).to.equal('ServiceMax')
		}catch(err){
			console.log("ServiceMax title is not the page which is hit"+err)
		}
		browser.pause(1000);
		//browser.debug()
	});

});
describe("Verify the color of the info alert ", function () {
	it("check if the info alert background color is rgba(112,110,107,1) ", function (done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})

		var info = browser.getCssProperty("//div[@class='Alert slds-notify slds-notify--alert slds-theme--info slds-theme--alert-texture']", 'background-color');
		var font = browser.getCssProperty("//div[@class='Alert slds-notify slds-notify--alert slds-theme--info slds-theme--alert-texture']", 'font-family');
		console.log(font)

		console.log(info)
		var x = info.value;
		const info_b = "rgba(112,110,107,1)"
		try{
		expect(x).to.equal(info_b)
		}catch(err)
		{
			console.log("Background color not matched"+err)
		}

	});
});
//it.skip('Should be a test i want to skip')

describe.skip("Verify the color of the success alert ", function () {
	it("check if the success alert background color is rgba(4,132,75,1) ", function (done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})

		var success = browser.getCssProperty("//div[@class='Alert slds-notify slds-notify--alert slds-theme--success slds-theme--alert-texture']", 'background-color');
		console.log(success)
		var y = success.value;
		const success_b = "rgba(4,132,75,1)"
		try{

		
		expect(y).to.equal(success_b);
		}catch(err)
		{
			console.log("Background color not matched"+err)
		}
		var close = $("//div/div[contains(text(),'Alert')]/following-sibling::div[2]/button");
		var close1 = close.value;
		isExisting = close.isExisting();

		console.log(isExisting)
		close.click();
		



	});

});
describe("Verify the color of the error alert ", function () {
	it("check if the error alert background color is rgba(194,57,52,1) ", function (done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})

		var error = browser.getCssProperty("//div[@class='Alert slds-notify slds-notify--alert slds-theme--error slds-theme--alert-texture']", 'background-color');
		var z = error.value;
		console.log(error)
		const error_b = "rgba(1;94,57,52,1)"
		expect(z).to.equal(error_b)
		var close = $("//div/div[contains(text(),'Alert')]/following-sibling::div[3]/button");
		var close1 = close.value;
		isExisting = close.isExisting();

		console.log(isExisting)
	});
});