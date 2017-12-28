#!/usr/bin/env node
// @flow

import fs from 'fs';

import { argv } from 'yargs';
import { BinanceWS } from 'binance';
import jsonfile from 'jsonfile';

const symbol = argv.symbol || 'XRPBTC';
const binanceWS = new BinanceWS();

const normalizeDateSection = dateSection =>
  dateSection > 9 ? dateSection.toString() : `0${dateSection}`;

const getHourBucketFolder = date =>
  `${date.getFullYear()}${normalizeDateSection(
    date.getMonth()
  )}${normalizeDateSection(date.getDate())}${normalizeDateSection(
    date.getHours()
  )}`;

const getFolderPath = () => `./data/${getHourBucketFolder(new Date())}`;

const ensureDir = (folderPath: string) => {
  try {
    fs.mkdirSync(folderPath);
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e;
    }
  }
};

const appendDataToFile = fileName => (data: {}) => {
  const folderPath = getFolderPath();

  try {
    ensureDir(folderPath);
    jsonfile.writeFileSync(`${folderPath}/${fileName}`, data, { flag: 'a' });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

binanceWS.onDepthUpdate(symbol, appendDataToFile('depth.json'));

binanceWS.onAggTrade(symbol, appendDataToFile('aggTrade.json'));

binanceWS.onKline(symbol, '1m', appendDataToFile('kline1m.json'));
