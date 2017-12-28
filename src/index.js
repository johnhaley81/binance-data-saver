#!/usr/bin/env node
// @flow

import { argv } from 'yargs';
import { BinanceWS } from 'binance';
import jsonfile from 'jsonfile';

const symbol = argv.symbol || 'XRPBTC';
const binanceWS = new BinanceWS();

const appendDataToFile = fileName => data =>
  jsonfile.writeFileSync(fileName, data, { flag: 'a' });

binanceWS.onDepthUpdate(symbol, appendDataToFile('./depth.json'));

binanceWS.onAggTrade(symbol, appendDataToFile('./aggTrade.json'));

binanceWS.onKline(symbol, '1m', appendDataToFile('./kline1m.json'));
