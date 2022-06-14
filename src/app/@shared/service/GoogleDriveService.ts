import { Injectable } from '@angular/core';
import * as fs from "fs";
import { google } from "googleapis";

@Injectable({ providedIn: 'root' })
export class GoogleDriveService {

    constructor() { }

    // updateFileToDrive = async () => {
    //     const title = 'asdsad';
    //     const credentials = require('./credentials.json');
    //     const scopes = ['https://www.googleapis.com/auth/drive'];
    //     const auth = new google.auth.JWT(credentials.client_email, '', credentials.private_key, scopes);
    //     const drive = google.drive({ version: 'v3', auth });
    //     const sheets = google.sheets({ version: 'v4', auth });

    //     const resource = {
    //         properties: {
    //             title,
    //         },
    //     };

    //     const spssreadsheet = sheets.spreadsheets.create({
    //         resource,
    //         fields: 'spreadsheetId',
    //     });
    //       console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
    //       return spreadsheet.data.spreadsheetId;
      


    //     let res = await drive.files.list({ pageSize: 20, fields: 'files(name,fullFileExtension,webViewLink)', orderBy: 'createdTime desc' });
    //     const spreadsheet = sheets.spreadsheets.create({ resource, fields: 'spreadsheetId' });




    //     let newSheet = sheets.spreadsheets.create({ resource: { properties: { title: 'Another Day, Another Spreadsheet' } } });

    //     const updatedSheet = await drive.files.update({
    //         fileId: newSheet.data.spreadsheetId,
    //         addParents: '1Kyd0SwMUuDaIhs03XtKG849-d6Ku_hRE',
    //         fields: 'id, parents'
    //     });

    //     drive.permissions.create({
    //         fileId: newSheet.data.spreadsheetId,
    //         transferOwnership: 'true',
    //         resource: { role: 'owner', type: 'user', emailAddress: 'youremail@gmail.com' }
    //     });

    //     let sheetData = [['File Name', 'URL']];

    //     res.data.files.map((entry: { name: any; webViewLink: any; }) => {
    //         const { name, webViewLink } = entry;
    //         sheetData.push([name, webViewLink]);
    //     });

    //     sheets.spreadsheets.values.append({
    //         spreadsheetId: newSheet.data.spreadsheetId,
    //         valueInputOption: 'USER_ENTERED',
    //         range: 'A1',
    //         resource: {
    //             range: 'A1',
    //             majorDimension: 'ROWS',
    //             values: sheetData,
    //         },
    //     });

    //     // Add styling to the first row
    //     sheets.spreadsheets.batchUpdate({
    //         spreadsheetId: newSheet.data.spreadsheetId,
    //         resource: {
    //             requests: [
    //                 {
    //                     repeatCell: {
    //                         range: {
    //                             startRowIndex: 0,
    //                             endRowIndex: 1
    //                         },
    //                         cell: {
    //                             userEnteredFormat: {
    //                                 backgroundColor: {
    //                                     red: 0.2,
    //                                     green: 0.2,
    //                                     blue: 0.2
    //                                 },
    //                                 textFormat: {
    //                                     foregroundColor: {
    //                                         red: 1,
    //                                         green: 1,
    //                                         blue: 1
    //                                     },
    //                                     bold: true,
    //                                 }
    //                             }
    //                         },
    //                         fields: 'userEnteredFormat(backgroundColor,textFormat)'
    //                     }
    //                 },
    //             ]
    //         }
    //     });

    //     // Back-up data locally
    //     let data = 'Name,URL\n';

    //     res.data.files.map((entry: { name: any; webViewLink: any; }) => {
    //         const { name, webViewLink } = entry;
    //         data += `${name},${webViewLink}\n`;
    //     });

    //     fs.writeFile('data.csv', data, (err: any) => {
    //         if (err) throw err;
    //     });
    // };

}
