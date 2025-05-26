import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';

import { server } from './server';

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
