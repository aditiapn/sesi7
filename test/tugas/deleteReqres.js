const assert = require('assert');

describe('API AUTOMATION', function() {
    it('Delete user should be success', async function () {
        this.timeout(5000);
        const url = 'https://reqres.in/api/users/2';
        const response = await fetch(url, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        });
      
        //console.log("Response Status : " + response.status);
        assert.strictEqual(response.status, 204, "Status harus 204");

    });
});