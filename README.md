# Binance Data Saver

This is a simple utility that will grab data streams from Binance and appends them to files for later use.

## Usage

`yarn start`

To grab data for a specific symbol use:

`yarn start --symbol={symbolName}`

## Docker

```
docker build -t binance-data-saver .
docker run -v $(pwd)/data:/app/data binance-data-saver
```
