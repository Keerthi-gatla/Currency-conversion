# Currency Converter Dashboard

This Node-RED flow allows users to convert amounts from one currency to another using the ExchangeRate-API. The flow includes a user interface for inputting the amount and displaying the converted result.

## Flow Description

1. **Amount Input**: A text input node where users can enter the amount they wish to convert.
2. **Currency Selection**: Dropdowns for selecting the source and target currencies.
3. **HTTP Request**: Fetches the latest exchange rates from the ExchangeRate-API.
4. **Calculate Conversion**: A function node that calculates the converted amount based on the fetched exchange rates.
5. **Display Result**: A text node that displays the converted amount.

## Nodes

- **ui_text_input (Amount)**: 
  - **Type**: `ui_text_input`
  - **Label**: Amount
  - **Mode**: Number
  - **Topic**: amount
  - **Wires**: Connects to the `Set Amount` function node.

- **ui_dropdown (Currency From)**: 
  - **Type**: `ui_dropdown`
  - **Label**: From
  - **Tooltip**: Select the currency you want to convert from
  - **Options**: USD, AED, AFN, etc.
  - **Wires**: Connects to the `Set Source Currency` function node.

- **ui_dropdown (Currency To)**: 
  - **Type**: `ui_dropdown`
  - **Label**: To
  - **Tooltip**: Select the currency you want to convert to
  - **Options**: USD, AED, etc.
  - **Wires**: Connects to the `Set Target Currency` function node.

- **http request (Get Exchange Rates)**: 
  - **Type**: `http request`
  - **Method**: GET
  - **URL**: `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/INR`
  - **Wires**: Connects to the `Calculate Conversion` function node.

- **function (Calculate Conversion)**: 
  - **Type**: `function`
  - **Function**: Calculates the converted amount using the exchange rates.
  - **Wires**: Connects to the `Converted Amount` text node.

- **ui_text (Converted Amount)**: 
  - **Type**: `ui_text`
  - **Label**: Result
  - **Format**: `{{msg.payload}}`

- **function (Set Amount)**: 
  - **Type**: `function`
  - **Function**: Sets the amount in the flow context.
  - **Wires**: Connects to the `Get Exchange Rates` HTTP request node.

- **function (Set Source Currency)**: 
  - **Type**: `function`
  - **Function**: Sets the source currency in the flow context.
  - **Wires**: Connects to the `Get Exchange Rates` HTTP request node.

- **ui_group (Currency Converter)**: 
  - **Type**: `ui_group`
  - **Name**: currency converter
  - **Tab**: conversion
  - **Order**: 1
  - **Width**: 6
  - **Collapse**: false

- **ui_tab (Conversion)**: 
  - **Type**: `ui_tab`
  - **Name**: conversion
  - **Icon**: dashboard
  - **Disabled**: false
  - **Hidden**: false

## Setup

1. **Install Node-RED**: Follow the [Node-RED installation guide](https://nodered.org/docs/getting-started/).
2. **Import Flow**: Copy the flow JSON and import it into your Node-RED editor.
3. **API Key**: Replace `YOUR_API_KEY` in the HTTP request node with your ExchangeRate-API key.
4. **Deploy**: Deploy the flow and open the dashboard to start using the currency converter.

## Usage

1. Enter the amount you wish to convert.
2. Select the source and target currencies.
3. The converted amount will be displayed in the result section.

## Contact

For any queries or support, feel free to reach out:

- **Email**: [keerthi.ece.software@gmail.com](mailto:keerthi.ece.software@gmail.com)
