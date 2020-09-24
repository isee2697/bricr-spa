const fetch = require("node-fetch");
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const directoryPath = path.join(__dirname, '..', 'src', 'i18n', 'data');
const apiParam = `?access_token=:accessToken`;
const baseUrl = `https://api.phrase.com/v2/projects/:projectID/locales`


const getVariables = () => {
    let accessToken = process.env.PHRASE_ACCESS_TOKEN;
    let projectID = process.env.REACT_APP_PHRASE_PROJECT;
    if (!accessToken && process.argv.length > 0) {
        const argvAccessKeyMatchString = '--accessToken=';
        const accessKey = process.argv.find(item => item.includes(argvAccessKeyMatchString));

        if (!!accessKey) {
            accessToken = accessKey.replace(argvAccessKeyMatchString, '');
        } else {
            throw Error('No AccesToken found');
        }
    }

    if (!projectID && process.argv.length > 0) {
        const argvProjectMatchString = '--projectID=';
        const projectIDArg = process.argv.find(item => item.includes(argvProjectMatchString));

        if (!!projectIDArg) {
            projectID = projectIDArg.replace(argvProjectMatchString, '');
        } else {
            throw new Error('No Project ID found');
        }
    }

    return { projectID, accessToken }
}

const saveLocaleFunction = async (id, name, variables) => {

    const url = `${baseUrl.replace(':projectID', variables.projectID)}/${id}/download${apiParam.replace(':accessToken', variables.accessToken)}&file_format=react_simple_json`;
    // const url = baseUrl.replace(':projectID', variables.projectID) `${baseUrl}/${id}/download${apiParam}&file_format=react_simple_json`;
    console.log(url);
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
        const variables = getVariables();

        const url = `${baseUrl.replace(':projectID', variables.projectID)}${apiParam.replace(':accessToken', variables.accessToken)}`;

        await fetch(url).then(res => res.json()).then(body => {
            if (typeof body === 'object') {
                Object.values(body).forEach(value => saveLocaleFunction(value.id, value.name, variables));
            }
        });
    } catch (e) {
        console.error('Something went wrong fetching the locales', e);
    }
}

getLocalesList();