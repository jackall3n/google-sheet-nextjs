function doGet(){
    const data = getData();

    return ContentService
        .createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
}

function getData() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet()
    const sheets = sheet.getSheets();

    const result = {};

    for (const sheet of sheets) {
        const [headers, ...rows] = sheet.getDataRange().getValues();

        const data = {}

        for (const row of rows) {
            const datum = {};

            headers.forEach((header, index) => {
                if (!header) {
                    return;
                }

                const value = row[index];

                if  (!value) {
                    return;
                }

                datum[header] = value
            })

            if (!row[0]) {
                continue;
            }

            data[row[0]] = datum
        }

        result[sheet.getName()] = data
    }

    return result
}