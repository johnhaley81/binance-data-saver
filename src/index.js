#!/usr/bin/env node
// @flow

import { argv } from 'yargs';
import { BinanceWS } from 'binance';
import jsonfile from 'jsonfile';

const symbol = argv.symbol || 'XRPBTC';
const binanceWS = new BinanceWS();

const appendDataToFile = fileName => data =>
  jsonfile.writeFileSync(fileName, data, { flag: 'a' });

binanceWS.onDepthUpdate(symbol, appendDataToFile('./data/depth.json'));

binanceWS.onAggTrade(symbol, appendDataToFile('./data/aggTrade.json'));

binanceWS.onKline(symbol, '1m', appendDataToFile('./data/kline1m.json'));
