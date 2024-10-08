[
    {
        "id": "c8654dcfa2ea7bf1",
        "type": "ui_text_input",
        "z": "8e18a93c46f9e4b9",
        "name": "Amount",
        "label": "Amount",
        "tooltip": "",
        "group": "f550f4fc8cbb223a",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": true,
        "mode": "number",
        "delay": "0",
        "topic": "amount",
        "sendOnBlur": true,
        "className": "",
        "topicType": "str",
        "x": 120,
        "y": 40,
        "wires": [
            [
                "dced2a2912761687"
            ]
        ]
    },
    {
        "id": "57514eb4bb1b3907",
        "type": "http request",
        "z": "8e18a93c46f9e4b9",
        "name": "Get Exchange Rates",
        "method": "GET",
        "ret": "obj",
        "paytoqs": "ignore",
        "url": "https://v6.exchangerate-api.com/v6/b9fd88c84d60e5369971556e/latest/INR",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 620,
        "y": 100,
        "wires": [
            [
                "8c2e227cdea2fea5"
            ]
        ]
    },
    {
        "id": "8c2e227cdea2fea5",
        "type": "function",
        "z": "8e18a93c46f9e4b9",
        "name": "Calculate Conversion",
        "func": "let amount = flow.get('amount') || 0;\nlet source = flow.get('sourceCurrency') || 'INR';\nlet target = flow.get('targetCurrency') || 'EUR';\nlet rates = msg.payload.conversion_rates;\n\nif (!rates[target]) {\n    node.error(`Exchange rate for ${target} is unavailable.`);\n    return null;\n}\nlet conversionRate = rates[target];\nlet convertedAmount = amount * conversionRate;\nmsg.payload = `Converted amount: ${convertedAmount.toFixed(2)} ${target}`;\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 620,
        "y": 200,
        "wires": [
            [
                "b9b4b073c3452889"
            ]
        ]
    },
    {
        "id": "b9b4b073c3452889",
        "type": "ui_text",
        "z": "8e18a93c46f9e4b9",
        "group": "f550f4fc8cbb223a",
        "order": 7,
        "width": 0,
        "height": 0,
        "name": "Converted Amount",
        "label": "Result",
        "format": "{{msg.payload}}",
        "layout": "col-center",
        "className": "",
        "style": "",
        "font": "",
        "fontSize": "",
        "color": "#000000",
        "x": 550,
        "y": 320,
        "wires": []
    },
    {
        "id": "dced2a2912761687",
        "type": "function",
        "z": "8e18a93c46f9e4b9",
        "name": "Set Amount",
        "func": "flow.set('amount', msg.payload);\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 270,
        "y": 40,
        "wires": [
            [
                "57514eb4bb1b3907"
            ]
        ]
    },
    {
        "id": "73910c8099ef1b91",
        "type": "function",
        "z": "8e18a93c46f9e4b9",
        "name": "Set Source Currency",
        "func": "flow.set('sourceCurrency', msg.payload);\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 140,
        "wires": [
            [
                "57514eb4bb1b3907"
            ]
        ]
    },
    {
        "id": "271881cee0ea249a",
        "type": "function",
        "z": "8e18a93c46f9e4b9",
        "name": "Set Target Currency",
        "func": "flow.set('targetCurrency', msg.payload);\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 220,
        "wires": [
            [
                "57514eb4bb1b3907"
            ]
        ]
    },
    {
        "id": "dropdown-currency-to",
        "type": "ui_dropdown",
        "z": "8e18a93c46f9e4b9",
        "name": "Currency To",
        "label": "To",
        "tooltip": "Select the currency you want to convert to",
        "place": "Select a currency",
        "group": "f550f4fc8cbb223a",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "USD",
                "value": "USD",
                "type": "str"
            },
            {
                "label": "AED",
                "value": "AED",
                "type": "str"
            },
            {
                "label": "AFN",
                "value": "AFN",
                "type": "str"
            },
            {
                "label": "ALL",
                "value": "ALL",
                "type": "str"
            },
            {
                "label": "AMD",
                "value": "AMD",
                "type": "str"
            },
            {
                "label": "ANG",
                "value": "ANG",
                "type": "str"
            },
            {
                "label": "AOA",
                "value": "AOA",
                "type": "str"
            },
            {
                "label": "ARS",
                "value": "ARS",
                "type": "str"
            },
            {
                "label": "AUD",
                "value": "AUD",
                "type": "str"
            },
            {
                "label": "AWG",
                "value": "AWG",
                "type": "str"
            },
            {
                "label": "AZN",
                "value": "AZN",
                "type": "str"
            },
            {
                "label": "BAM",
                "value": "BAM",
                "type": "str"
            },
            {
                "label": "BBD",
                "value": "BBD",
                "type": "str"
            },
            {
                "label": "BDT",
                "value": "BDT",
                "type": "str"
            },
            {
                "label": "BGN",
                "value": "BGN",
                "type": "str"
            },
            {
                "label": "BHD",
                "value": "BHD",
                "type": "str"
            },
            {
                "label": "BIF",
                "value": "BIF",
                "type": "str"
            },
            {
                "label": "BMD",
                "value": "BMD",
                "type": "str"
            },
            {
                "label": "BND",
                "value": "BND",
                "type": "str"
            },
            {
                "label": "BOB",
                "value": "BOB",
                "type": "str"
            },
            {
                "label": "BRL",
                "value": "BRL",
                "type": "str"
            },
            {
                "label": "BSD",
                "value": "BSD",
                "type": "str"
            },
            {
                "label": "BTN",
                "value": "BTN",
                "type": "str"
            },
            {
                "label": "BWP",
                "value": "BWP",
                "type": "str"
            },
            {
                "label": "BYN",
                "value": "BYN",
                "type": "str"
            },
            {
                "label": "BZD",
                "value": "BZD",
                "type": "str"
            },
            {
                "label": "CAD",
                "value": "CAD",
                "type": "str"
            },
            {
                "label": "CDF",
                "value": "CDF",
                "type": "str"
            },
            {
                "label": "CHF",
                "value": "CHF",
                "type": "str"
            },
            {
                "label": "CLP",
                "value": "CLP",
                "type": "str"
            },
            {
                "label": "CNY",
                "value": "CNY",
                "type": "str"
            },
            {
                "label": "COP",
                "value": "COP",
                "type": "str"
            },
            {
                "label": "CRC",
                "value": "CRC",
                "type": "str"
            },
            {
                "label": "CUP",
                "value": "CUP",
                "type": "str"
            },
            {
                "label": "CVE",
                "value": "CVE",
                "type": "str"
            },
            {
                "label": "CZK",
                "value": "CZK",
                "type": "str"
            },
            {
                "label": "DJF",
                "value": "DJF",
                "type": "str"
            },
            {
                "label": "DKK",
                "value": "DKK",
                "type": "str"
            },
            {
                "label": "DOP",
                "value": "DOP",
                "type": "str"
            },
            {
                "label": "DZD",
                "value": "DZD",
                "type": "str"
            },
            {
                "label": "EGP",
                "value": "EGP",
                "type": "str"
            },
            {
                "label": "ERN",
                "value": "ERN",
                "type": "str"
            },
            {
                "label": "ETB",
                "value": "ETB",
                "type": "str"
            },
            {
                "label": "EUR",
                "value": "EUR",
                "type": "str"
            },
            {
                "label": "FJD",
                "value": "FJD",
                "type": "str"
            },
            {
                "label": "FKP",
                "value": "FKP",
                "type": "str"
            },
            {
                "label": "FOK",
                "value": "FOK",
                "type": "str"
            },
            {
                "label": "GBP",
                "value": "GBP",
                "type": "str"
            },
            {
                "label": "GEL",
                "value": "GEL",
                "type": "str"
            },
            {
                "label": "GGP",
                "value": "GGP",
                "type": "str"
            },
            {
                "label": "GHS",
                "value": "GHS",
                "type": "str"
            },
            {
                "label": "GIP",
                "value": "GIP",
                "type": "str"
            },
            {
                "label": "GMD",
                "value": "GMD",
                "type": "str"
            },
            {
                "label": "GNF",
                "value": "GNF",
                "type": "str"
            },
            {
                "label": "GTQ",
                "value": "GTQ",
                "type": "str"
            },
            {
                "label": "GYD",
                "value": "GYD",
                "type": "str"
            },
            {
                "label": "HKD",
                "value": "HKD",
                "type": "str"
            },
            {
                "label": "HNL",
                "value": "HNL",
                "type": "str"
            },
            {
                "label": "HRK",
                "value": "HRK",
                "type": "str"
            },
            {
                "label": "HTG",
                "value": "HTG",
                "type": "str"
            },
            {
                "label": "HUF",
                "value": "HUF",
                "type": "str"
            },
            {
                "label": "IDR",
                "value": "IDR",
                "type": "str"
            },
            {
                "label": "ILS",
                "value": "ILS",
                "type": "str"
            },
            {
                "label": "IMP",
                "value": "IMP",
                "type": "str"
            },
            {
                "label": "INR",
                "value": "INR",
                "type": "str"
            },
            {
                "label": "IQD",
                "value": "IQD",
                "type": "str"
            },
            {
                "label": "IRR",
                "value": "IRR",
                "type": "str"
            },
            {
                "label": "ISK",
                "value": "ISK",
                "type": "str"
            },
            {
                "label": "JEP",
                "value": "JEP",
                "type": "str"
            },
            {
                "label": "JMD",
                "value": "JMD",
                "type": "str"
            },
            {
                "label": "JOD",
                "value": "JOD",
                "type": "str"
            },
            {
                "label": "JPY",
                "value": "JPY",
                "type": "str"
            },
            {
                "label": "KES",
                "value": "KES",
                "type": "str"
            },
            {
                "label": "KGS",
                "value": "KGS",
                "type": "str"
            },
            {
                "label": "KHR",
                "value": "KHR",
                "type": "str"
            },
            {
                "label": "KID",
                "value": "KID",
                "type": "str"
            },
            {
                "label": "KMF",
                "value": "KMF",
                "type": "str"
            },
            {
                "label": "KRW",
                "value": "KRW",
                "type": "str"
            },
            {
                "label": "KWD",
                "value": "KWD",
                "type": "str"
            },
            {
                "label": "KYD",
                "value": "KYD",
                "type": "str"
            },
            {
                "label": "KZT",
                "value": "KZT",
                "type": "str"
            },
            {
                "label": "LAK",
                "value": "LAK",
                "type": "str"
            },
            {
                "label": "LBP",
                "value": "LBP",
                "type": "str"
            },
            {
                "label": "LKR",
                "value": "LKR",
                "type": "str"
            },
            {
                "label": "LRD",
                "value": "LRD",
                "type": "str"
            },
            {
                "label": "LSL",
                "value": "LSL",
                "type": "str"
            },
            {
                "label": "LYD",
                "value": "LYD",
                "type": "str"
            },
            {
                "label": "MAD",
                "value": "MAD",
                "type": "str"
            },
            {
                "label": "MDL",
                "value": "MDL",
                "type": "str"
            },
            {
                "label": "MGA",
                "value": "MGA",
                "type": "str"
            },
            {
                "label": "MKD",
                "value": "MKD",
                "type": "str"
            },
            {
                "label": "MMK",
                "value": "MMK",
                "type": "str"
            },
            {
                "label": "MNT",
                "value": "MNT",
                "type": "str"
            },
            {
                "label": "MOP",
                "value": "MOP",
                "type": "str"
            },
            {
                "label": "MRU",
                "value": "MRU",
                "type": "str"
            },
            {
                "label": "MUR",
                "value": "MUR",
                "type": "str"
            },
            {
                "label": "MVR",
                "value": "MVR",
                "type": "str"
            },
            {
                "label": "MWK",
                "value": "MWK",
                "type": "str"
            },
            {
                "label": "MXN",
                "value": "MXN",
                "type": "str"
            },
            {
                "label": "MYR",
                "value": "MYR",
                "type": "str"
            },
            {
                "label": "MZN",
                "value": "MZN",
                "type": "str"
            },
            {
                "label": "NAD",
                "value": "NAD",
                "type": "str"
            },
            {
                "label": "NGN",
                "value": "NGN",
                "type": "str"
            },
            {
                "label": "NIO",
                "value": "NIO",
                "type": "str"
            },
            {
                "label": "NOK",
                "value": "NOK",
                "type": "str"
            },
            {
                "label": "NPR",
                "value": "NPR",
                "type": "str"
            },
            {
                "label": "NZD",
                "value": "NZD",
                "type": "str"
            },
            {
                "label": "OMR",
                "value": "OMR",
                "type": "str"
            },
            {
                "label": "PAB",
                "value": "PAB",
                "type": "str"
            },
            {
                "label": "PEN",
                "value": "PEN",
                "type": "str"
            },
            {
                "label": "PGK",
                "value": "PGK",
                "type": "str"
            },
            {
                "label": "PHP",
                "value": "PHP",
                "type": "str"
            },
            {
                "label": "PKR",
                "value": "PKR",
                "type": "str"
            },
            {
                "label": "PLN",
                "value": "PLN",
                "type": "str"
            },
            {
                "label": "PYG",
                "value": "PYG",
                "type": "str"
            },
            {
                "label": "QAR",
                "value": "QAR",
                "type": "str"
            },
            {
                "label": "RON",
                "value": "RON",
                "type": "str"
            },
            {
                "label": "RSD",
                "value": "RSD",
                "type": "str"
            },
            {
                "label": "RUB",
                "value": "RUB",
                "type": "str"
            },
            {
                "label": "RWF",
                "value": "RWF",
                "type": "str"
            },
            {
                "label": "SAR",
                "value": "SAR",
                "type": "str"
            },
            {
                "label": "SBD",
                "value": "SBD",
                "type": "str"
            },
            {
                "label": "SCR",
                "value": "SCR",
                "type": "str"
            },
            {
                "label": "SDG",
                "value": "SDG",
                "type": "str"
            },
            {
                "label": "SEK",
                "value": "SEK",
                "type": "str"
            },
            {
                "label": "SGD",
                "value": "SGD",
                "type": "str"
            },
            {
                "label": "SHP",
                "value": "SHP",
                "type": "str"
            },
            {
                "label": "SLE",
                "value": "SLE",
                "type": "str"
            },
            {
                "label": "SLL",
                "value": "SLL",
                "type": "str"
            },
            {
                "label": "SOS",
                "value": "SOS",
                "type": "str"
            },
            {
                "label": "SRD",
                "value": "SRD",
                "type": "str"
            },
            {
                "label": "SSP",
                "value": "SSP",
                "type": "str"
            },
            {
                "label": "STN",
                "value": "STN",
                "type": "str"
            },
            {
                "label": "SYP",
                "value": "SYP",
                "type": "str"
            },
            {
                "label": "SZL",
                "value": "SZL",
                "type": "str"
            },
            {
                "label": "THB",
                "value": "THB",
                "type": "str"
            },
            {
                "label": "TJS",
                "value": "TJS",
                "type": "str"
            },
            {
                "label": "TMT",
                "value": "TMT",
                "type": "str"
            },
            {
                "label": "TND",
                "value": "TND",
                "type": "str"
            },
            {
                "label": "TOP",
                "value": "TOP",
                "type": "str"
            },
            {
                "label": "TRY",
                "value": "TRY",
                "type": "str"
            },
            {
                "label": "TTD",
                "value": "TTD",
                "type": "str"
            },
            {
                "label": "TVD",
                "value": "TVD",
                "type": "str"
            },
            {
                "label": "TWD",
                "value": "TWD",
                "type": "str"
            },
            {
                "label": "TZS",
                "value": "TZS",
                "type": "str"
            },
            {
                "label": "UAH",
                "value": "UAH",
                "type": "str"
            },
            {
                "label": "UGX",
                "value": "UGX",
                "type": "str"
            },
            {
                "label": "UYU",
                "value": "UYU",
                "type": "str"
            },
            {
                "label": "UZS",
                "value": "UZS",
                "type": "str"
            },
            {
                "label": "VES",
                "value": "VES",
                "type": "str"
            },
            {
                "label": "VND",
                "value": "VND",
                "type": "str"
            },
            {
                "label": "VUV",
                "value": "VUV",
                "type": "str"
            },
            {
                "label": "WST",
                "value": "WST",
                "type": "str"
            },
            {
                "label": "XAF",
                "value": "XAF",
                "type": "str"
            },
            {
                "label": "XCD",
                "value": "XCD",
                "type": "str"
            },
            {
                "label": "XDR",
                "value": "XDR",
                "type": "str"
            },
            {
                "label": "XOF",
                "value": "XOF",
                "type": "str"
            },
            {
                "label": "XPF",
                "value": "XPF",
                "type": "str"
            },
            {
                "label": "YER",
                "value": "YER",
                "type": "str"
            },
            {
                "label": "ZAR",
                "value": "ZAR",
                "type": "str"
            },
            {
                "label": "ZMW",
                "value": "ZMW",
                "type": "str"
            },
            {
                "label": "ZWL",
                "value": "ZWL",
                "type": "str"
            }
        ],
        "topic": "",
        "topicType": "str",
        "className": "",
        "x": 110,
        "y": 220,
        "wires": [
            [
                "271881cee0ea249a"
            ]
        ]
    },
    {
        "id": "dropdown-currency-from",
        "type": "ui_dropdown",
        "z": "8e18a93c46f9e4b9",
        "name": "Currency From",
        "label": "From",
        "tooltip": "Select the currency you want to convert from",
        "place": "Select a currency",
        "group": "f550f4fc8cbb223a",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "USD",
                "value": "USD",
                "type": "str"
            },
            {
                "label": "AED",
                "value": "AED",
                "type": "str"
            },
            {
                "label": "AFN",
                "value": "AFN",
                "type": "str"
            },
            {
                "label": "ALL",
                "value": "ALL",
                "type": "str"
            },
            {
                "label": "AMD",
                "value": "AMD",
                "type": "str"
            },
            {
                "label": "ANG",
                "value": "ANG",
                "type": "str"
            },
            {
                "label": "AOA",
                "value": "AOA",
                "type": "str"
            },
            {
                "label": "ARS",
                "value": "ARS",
                "type": "str"
            },
            {
                "label": "AUD",
                "value": "AUD",
                "type": "str"
            },
            {
                "label": "AWG",
                "value": "AWG",
                "type": "str"
            },
            {
                "label": "AZN",
                "value": "AZN",
                "type": "str"
            },
            {
                "label": "BAM",
                "value": "BAM",
                "type": "str"
            },
            {
                "label": "BBD",
                "value": "BBD",
                "type": "str"
            },
            {
                "label": "BDT",
                "value": "BDT",
                "type": "str"
            },
            {
                "label": "BGN",
                "value": "BGN",
                "type": "str"
            },
            {
                "label": "BHD",
                "value": "BHD",
                "type": "str"
            },
            {
                "label": "BIF",
                "value": "BIF",
                "type": "str"
            },
            {
                "label": "BMD",
                "value": "BMD",
                "type": "str"
            },
            {
                "label": "BND",
                "value": "BND",
                "type": "str"
            },
            {
                "label": "BOB",
                "value": "BOB",
                "type": "str"
            },
            {
                "label": "BRL",
                "value": "BRL",
                "type": "str"
            },
            {
                "label": "BSD",
                "value": "BSD",
                "type": "str"
            },
            {
                "label": "BTN",
                "value": "BTN",
                "type": "str"
            },
            {
                "label": "BWP",
                "value": "BWP",
                "type": "str"
            },
            {
                "label": "BYN",
                "value": "BYN",
                "type": "str"
            },
            {
                "label": "BZD",
                "value": "BZD",
                "type": "str"
            },
            {
                "label": "CAD",
                "value": "CAD",
                "type": "str"
            },
            {
                "label": "CDF",
                "value": "CDF",
                "type": "str"
            },
            {
                "label": "CHF",
                "value": "CHF",
                "type": "str"
            },
            {
                "label": "CLP",
                "value": "CLP",
                "type": "str"
            },
            {
                "label": "CNY",
                "value": "CNY",
                "type": "str"
            },
            {
                "label": "COP",
                "value": "COP",
                "type": "str"
            },
            {
                "label": "CRC",
                "value": "CRC",
                "type": "str"
            },
            {
                "label": "CUP",
                "value": "CUP",
                "type": "str"
            },
            {
                "label": "CVE",
                "value": "CVE",
                "type": "str"
            },
            {
                "label": "CZK",
                "value": "CZK",
                "type": "str"
            },
            {
                "label": "DJF",
                "value": "DJF",
                "type": "str"
            },
            {
                "label": "DKK",
                "value": "DKK",
                "type": "str"
            },
            {
                "label": "DOP",
                "value": "DOP",
                "type": "str"
            },
            {
                "label": "DZD",
                "value": "DZD",
                "type": "str"
            },
            {
                "label": "EGP",
                "value": "EGP",
                "type": "str"
            },
            {
                "label": "ERN",
                "value": "ERN",
                "type": "str"
            },
            {
                "label": "ETB",
                "value": "ETB",
                "type": "str"
            },
            {
                "label": "EUR",
                "value": "EUR",
                "type": "str"
            },
            {
                "label": "FJD",
                "value": "FJD",
                "type": "str"
            },
            {
                "label": "FKP",
                "value": "FKP",
                "type": "str"
            },
            {
                "label": "FOK",
                "value": "FOK",
                "type": "str"
            },
            {
                "label": "GBP",
                "value": "GBP",
                "type": "str"
            },
            {
                "label": "GEL",
                "value": "GEL",
                "type": "str"
            },
            {
                "label": "GGP",
                "value": "GGP",
                "type": "str"
            },
            {
                "label": "GHS",
                "value": "GHS",
                "type": "str"
            },
            {
                "label": "GIP",
                "value": "GIP",
                "type": "str"
            },
            {
                "label": "GMD",
                "value": "GMD",
                "type": "str"
            },
            {
                "label": "GNF",
                "value": "GNF",
                "type": "str"
            },
            {
                "label": "GTQ",
                "value": "GTQ",
                "type": "str"
            },
            {
                "label": "GYD",
                "value": "GYD",
                "type": "str"
            },
            {
                "label": "HKD",
                "value": "HKD",
                "type": "str"
            },
            {
                "label": "HNL",
                "value": "HNL",
                "type": "str"
            },
            {
                "label": "HRK",
                "value": "HRK",
                "type": "str"
            },
            {
                "label": "HTG",
                "value": "HTG",
                "type": "str"
            },
            {
                "label": "HUF",
                "value": "HUF",
                "type": "str"
            },
            {
                "label": "IDR",
                "value": "IDR",
                "type": "str"
            },
            {
                "label": "ILS",
                "value": "ILS",
                "type": "str"
            },
            {
                "label": "IMP",
                "value": "IMP",
                "type": "str"
            },
            {
                "label": "INR",
                "value": "INR",
                "type": "str"
            },
            {
                "label": "IQD",
                "value": "IQD",
                "type": "str"
            },
            {
                "label": "IRR",
                "value": "IRR",
                "type": "str"
            },
            {
                "label": "ISK",
                "value": "ISK",
                "type": "str"
            },
            {
                "label": "JEP",
                "value": "JEP",
                "type": "str"
            },
            {
                "label": "JMD",
                "value": "JMD",
                "type": "str"
            },
            {
                "label": "JOD",
                "value": "JOD",
                "type": "str"
            },
            {
                "label": "JPY",
                "value": "JPY",
                "type": "str"
            },
            {
                "label": "KES",
                "value": "KES",
                "type": "str"
            },
            {
                "label": "KGS",
                "value": "KGS",
                "type": "str"
            },
            {
                "label": "KHR",
                "value": "KHR",
                "type": "str"
            },
            {
                "label": "KID",
                "value": "KID",
                "type": "str"
            },
            {
                "label": "KMF",
                "value": "KMF",
                "type": "str"
            },
            {
                "label": "KRW",
                "value": "KRW",
                "type": "str"
            },
            {
                "label": "KWD",
                "value": "KWD",
                "type": "str"
            },
            {
                "label": "KYD",
                "value": "KYD",
                "type": "str"
            },
            {
                "label": "KZT",
                "value": "KZT",
                "type": "str"
            },
            {
                "label": "LAK",
                "value": "LAK",
                "type": "str"
            },
            {
                "label": "LBP",
                "value": "LBP",
                "type": "str"
            },
            {
                "label": "LKR",
                "value": "LKR",
                "type": "str"
            },
            {
                "label": "LRD",
                "value": "LRD",
                "type": "str"
            },
            {
                "label": "LSL",
                "value": "LSL",
                "type": "str"
            },
            {
                "label": "LYD",
                "value": "LYD",
                "type": "str"
            },
            {
                "label": "MAD",
                "value": "MAD",
                "type": "str"
            },
            {
                "label": "MDL",
                "value": "MDL",
                "type": "str"
            },
            {
                "label": "MGA",
                "value": "MGA",
                "type": "str"
            },
            {
                "label": "MKD",
                "value": "MKD",
                "type": "str"
            },
            {
                "label": "MMK",
                "value": "MMK",
                "type": "str"
            },
            {
                "label": "MNT",
                "value": "MNT",
                "type": "str"
            },
            {
                "label": "MOP",
                "value": "MOP",
                "type": "str"
            },
            {
                "label": "MRU",
                "value": "MRU",
                "type": "str"
            },
            {
                "label": "MUR",
                "value": "MUR",
                "type": "str"
            },
            {
                "label": "MVR",
                "value": "MVR",
                "type": "str"
            },
            {
                "label": "MWK",
                "value": "MWK",
                "type": "str"
            },
            {
                "label": "MXN",
                "value": "MXN",
                "type": "str"
            },
            {
                "label": "MYR",
                "value": "MYR",
                "type": "str"
            },
            {
                "label": "MZN",
                "value": "MZN",
                "type": "str"
            },
            {
                "label": "NAD",
                "value": "NAD",
                "type": "str"
            },
            {
                "label": "NGN",
                "value": "NGN",
                "type": "str"
            },
            {
                "label": "NIO",
                "value": "NIO",
                "type": "str"
            },
            {
                "label": "NOK",
                "value": "NOK",
                "type": "str"
            },
            {
                "label": "NPR",
                "value": "NPR",
                "type": "str"
            },
            {
                "label": "NZD",
                "value": "NZD",
                "type": "str"
            },
            {
                "label": "OMR",
                "value": "OMR",
                "type": "str"
            },
            {
                "label": "PAB",
                "value": "PAB",
                "type": "str"
            },
            {
                "label": "PEN",
                "value": "PEN",
                "type": "str"
            },
            {
                "label": "PGK",
                "value": "PGK",
                "type": "str"
            },
            {
                "label": "PHP",
                "value": "PHP",
                "type": "str"
            },
            {
                "label": "PKR",
                "value": "PKR",
                "type": "str"
            },
            {
                "label": "PLN",
                "value": "PLN",
                "type": "str"
            },
            {
                "label": "PYG",
                "value": "PYG",
                "type": "str"
            },
            {
                "label": "QAR",
                "value": "QAR",
                "type": "str"
            },
            {
                "label": "RON",
                "value": "RON",
                "type": "str"
            },
            {
                "label": "RSD",
                "value": "RSD",
                "type": "str"
            },
            {
                "label": "RUB",
                "value": "RUB",
                "type": "str"
            },
            {
                "label": "RWF",
                "value": "RWF",
                "type": "str"
            },
            {
                "label": "SAR",
                "value": "SAR",
                "type": "str"
            },
            {
                "label": "SBD",
                "value": "SBD",
                "type": "str"
            },
            {
                "label": "SCR",
                "value": "SCR",
                "type": "str"
            },
            {
                "label": "SDG",
                "value": "SDG",
                "type": "str"
            },
            {
                "label": "SEK",
                "value": "SEK",
                "type": "str"
            },
            {
                "label": "SGD",
                "value": "SGD",
                "type": "str"
            },
            {
                "label": "SHP",
                "value": "SHP",
                "type": "str"
            },
            {
                "label": "SLE",
                "value": "SLE",
                "type": "str"
            },
            {
                "label": "SLL",
                "value": "SLL",
                "type": "str"
            },
            {
                "label": "SOS",
                "value": "SOS",
                "type": "str"
            },
            {
                "label": "SRD",
                "value": "SRD",
                "type": "str"
            },
            {
                "label": "SSP",
                "value": "SSP",
                "type": "str"
            },
            {
                "label": "STN",
                "value": "STN",
                "type": "str"
            },
            {
                "label": "SYP",
                "value": "SYP",
                "type": "str"
            },
            {
                "label": "SZL",
                "value": "SZL",
                "type": "str"
            },
            {
                "label": "THB",
                "value": "THB",
                "type": "str"
            },
            {
                "label": "TJS",
                "value": "TJS",
                "type": "str"
            },
            {
                "label": "TMT",
                "value": "TMT",
                "type": "str"
            },
            {
                "label": "TND",
                "value": "TND",
                "type": "str"
            },
            {
                "label": "TOP",
                "value": "TOP",
                "type": "str"
            },
            {
                "label": "TRY",
                "value": "TRY",
                "type": "str"
            },
            {
                "label": "TTD",
                "value": "TTD",
                "type": "str"
            },
            {
                "label": "TVD",
                "value": "TVD",
                "type": "str"
            },
            {
                "label": "TWD",
                "value": "TWD",
                "type": "str"
            },
            {
                "label": "TZS",
                "value": "TZS",
                "type": "str"
            },
            {
                "label": "UAH",
                "value": "UAH",
                "type": "str"
            },
            {
                "label": "UGX",
                "value": "UGX",
                "type": "str"
            },
            {
                "label": "UYU",
                "value": "UYU",
                "type": "str"
            },
            {
                "label": "UZS",
                "value": "UZS",
                "type": "str"
            },
            {
                "label": "VES",
                "value": "VES",
                "type": "str"
            },
            {
                "label": "VND",
                "value": "VND",
                "type": "str"
            },
            {
                "label": "VUV",
                "value": "VUV",
                "type": "str"
            },
            {
                "label": "WST",
                "value": "WST",
                "type": "str"
            },
            {
                "label": "XAF",
                "value": "XAF",
                "type": "str"
            },
            {
                "label": "XCD",
                "value": "XCD",
                "type": "str"
            },
            {
                "label": "XDR",
                "value": "XDR",
                "type": "str"
            },
            {
                "label": "XOF",
                "value": "XOF",
                "type": "str"
            },
            {
                "label": "XPF",
                "value": "XPF",
                "type": "str"
            },
            {
                "label": "YER",
                "value": "YER",
                "type": "str"
            },
            {
                "label": "ZAR",
                "value": "ZAR",
                "type": "str"
            },
            {
                "label": "ZMW",
                "value": "ZMW",
                "type": "str"
            },
            {
                "label": "ZWL",
                "value": "ZWL",
                "type": "str"
            }
        ],
        "topic": "",
        "topicType": "str",
        "className": "",
        "x": 120,
        "y": 140,
        "wires": [
            [
                "73910c8099ef1b91"
            ]
        ]
    },
    {
        "id": "f550f4fc8cbb223a",
        "type": "ui_group",
        "name": "currency converter",
        "tab": "11130b2099b2c68d",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "11130b2099b2c68d",
        "type": "ui_tab",
        "name": "conversion",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
]
