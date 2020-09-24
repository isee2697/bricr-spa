const fetch = require("node-fetch");
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const directoryPath = path.join(__dirname, '..', 'src', 'i18n', 'data');
const apiParam = `?access_token=${process.env.PHRASE_ACCESS_TOKEN}`;
const baseUrl = `https://api.phrase.com/v2/projects/${process.env.REACT_APP_PHRASE_PROJECT}/locales`

console.log(process);
const saveLocaleFunction = async (id, name) => {
    const url = `${baseUrl}/${id}/download${apiParam}&file_format=react_simple_json`;

    try {
        await fetch(url).then(res => res.json()).then(body => {
            const filePath = path.join(directoryPath, `${name}.json`);
            fs.writeFileSync(filePath, JSON.stringify(body, null, 2), {encoding: 'utf8', flag: 'w'});
            console.log(`Succesfully generated language: ${name}`);
        });
    } catch (e) {
        console.error(`Retrieving locale: ${name} with id: ${id} failed`, e);
    }
}

const getLocalesList = async () => {
    try {
        if(!process.env.PHRASE_ACCESS_TOKEN || !process.env.REACT_APP_PHRASE_PROJECT) {
            throw Error('Environment not set');
        }

        await fetch(`${baseUrl}${apiParam}`).then(res => res.json()).then(body => {
            if (typeof body === 'object') {
                Object.values(body).forEach(value => saveLocaleFunction(value.id, value.name));
            }
        });
    } catch (e) {
        console.error('Something went wrong fetching the locales', e);
    }
}

getLocalesList();