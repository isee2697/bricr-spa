const fetch = require("node-fetch");
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const directoryPath = path.join(__dirname, '..', 'src', 'i18n', 'data');
const apiParam = '?access_token=:accessToken';
const baseUrl = 'https://api.phrase.com/v2/projects/:projectID/locales';
const encoding = 'UTF-8';

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

const saveLocaleFunction = async (value, variables) => {
    const downloadParams = `${apiParam.replace(':accessToken', variables.accessToken)}&file_format=react_simple_json&encoding=${encoding}`;
    const urlWithIds = `${baseUrl.replace(':projectID', variables.projectID)}/${value.id}/download`;
    const url = `${urlWithIds}${downloadParams}`;

    await fetch(url).then(
        res => res.status === 200 ? res.json() : console.error('Failed to retrieve:', res.message)
    ).then(body => {
        const filePath = path.join(directoryPath, `${value.code}.json`);
        fs.writeFileSync(filePath, JSON.stringify(body, null, 2), { encoding, flag: 'w'});
        console.log(`Succesfully generated language: ${value.name}`);
    }).catch((e) => {
        console.error(`Retrieving locale: ${name} with id: ${id} failed`, e);
    });
}

const getLocalesList = async () => {
    try {
        const variables = getVariables();

        console.log(variables);
        const url = `${baseUrl.replace(':projectID', variables.projectID)}${apiParam.replace(':accessToken', variables.accessToken)}`;

        await fetch(url).then(
            res => res.status === 200 ? res.json() : console.error(res.message) )
            .then(body => {
                if (typeof body === 'object') {
                    Object.values(body).forEach(value => saveLocaleFunction(value, variables));
                } else {
                    throw new Error();
                }
            }).catch((e) => {
                console.error('failed to retrieve locales', e);
            });
    } catch (e) {
        console.error('Something went wrong getting the variables', e);
    }
}

getLocalesList();