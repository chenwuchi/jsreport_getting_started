const url = "";
const username = "";
const password = "";

const fs = require('fs');

const client = require('jsreport-client')(url, username, password);

async function render() {
    const res = await client.render({
        template: {
            shortid: '',
            engine: 'handlebars',
            recipe: 'chrome-pdf'
        },
        data: {
            items: [
                {
                    "id": 1,
                    "description": "Sweet and savory sauces relishes spreads and seasonings",
                    "name": "Condiments"
                },
                {
                    "id": 2,
                    "description": "Soft drinks coffees teas beers and ales",
                    "name": "Beverages"
                },
                {
                    "id": 3,
                    "description": "Desserts candies and sweet breads",
                    "name": "Confections"
                }
            ]
        }
    })

    const bodyBuffer = await res.body();

    fs.writeFileSync("temp.pdf", bodyBuffer,
        {
            encoding: 'base64',
        }
    );
}

render().catch(console.error);
