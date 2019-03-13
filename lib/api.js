function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { query } from './query';
/**
 * Gets the boolean value if the server is running
 * or not
 * 
 * @returns {Promise.<string>} true = running
 */

export var isServerRunning =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return query('server_status');

          case 2:
            resp = _context.sent;
            return _context.abrupt("return", resp.running);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function isServerRunning() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Gets the status object of the server
 *
 * @returns {Promise.<object>} server status object {running:boolean, message:string}
 */

export var serverStatus =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return query('server_status');

          case 2:
            resp = _context2.sent;
            return _context2.abrupt("return", resp);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function serverStatus() {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Gets the time from the server 
 *
 * @returns {Promise.<string>} time as string
 */

export var serverTime =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var resp;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return query('time');

          case 2:
            resp = _context3.sent;
            return _context3.abrupt("return", resp);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function serverTime() {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Gets unique array of all first letters of stations
 *
 * @returns {Promise.<array>} first letters of all stations
 */

export var letters =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var resp;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return query('letters');

          case 2:
            resp = _context4.sent;
            return _context4.abrupt("return", resp);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function letters() {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Determines if any stations starts with a certain letter
 *
 * @param {string} letter - letter to test
 * @returns {Promise.<boolean>} if a station begins with the given letter
 */

export var hasLetter =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(letter) {
    var resp;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return query('letters');

          case 2:
            resp = _context5.sent;
            return _context5.abrupt("return", resp.indexOf(letter) !== -1);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function hasLetter(_x) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Get all genres available
 *
 * @returns {Promise.<array>} all genres
 */

export var genres =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var resp;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return query('genres');

          case 2:
            resp = _context6.sent;
            return _context6.abrupt("return", resp.map(function (g) {
              return g.name;
            }));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function genres() {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Gets raw object of all genres
 *
 * @return {Promise.<array>} array of genre objects {name:string, score:number, related:[string,...]}
 */

export var genresRaw =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var resp;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return query('genres');

          case 2:
            resp = _context7.sent;
            return _context7.abrupt("return", resp);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function genresRaw() {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Gets raw genres objects related to another genre
 *
 * @param {string} genre - an existing genre
 * @returns {Promise.<array>} array of raw related genres objects {name:string, score:number, related:[string, ...]}
 */

export var genre =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(_genre) {
    var resp, selGen;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return query('genres');

          case 2:
            resp = _context8.sent;
            selGen = resp.filter(function (g) {
              return g.name === _genre;
            });
            return _context8.abrupt("return", selGen[0]);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function genre(_x2) {
    return _ref8.apply(this, arguments);
  };
}();
/* Gets all genres related to antother genre
 *
 * @param {string} genre - an existing genre
 * @returns {Promise.<array>} genres
 */

export var relatedGenres =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(genre) {
    var resp, selGen;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return query('genres');

          case 2:
            resp = _context9.sent;
            selGen = resp.filter(function (g) {
              return g.name === genre;
            });
            return _context9.abrupt("return", selGen[0].related);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function relatedGenres(_x3) {
    return _ref9.apply(this, arguments);
  };
}();
/**
 * Gets all station names
 *
 * @returns {Promise.<array>} all station names
 */

export var stationNames =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10() {
    var resp;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return query('station_names');

          case 2:
            resp = _context10.sent;
            return _context10.abrupt("return", resp);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function stationNames() {
    return _ref10.apply(this, arguments);
  };
}();
/**
 * Indicates if a station exists
 *
 * @param {string} station - station to test
 * @returns {Promise.<boolean>} if station tested exists
 */

export var hasStation =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(station) {
    var resp;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return query('station_names');

          case 2:
            resp = _context11.sent;
            return _context11.abrupt("return", resp.indexOf(station) !== -1);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function hasStation(_x4) {
    return _ref11.apply(this, arguments);
  };
}();
/**
 * Gets total number of listeners
 *
 * @returns {Promise.<number>} number of current listeners
 */

export var allListeners =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12() {
    var resp, sum, key;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return query('listeners');

          case 2:
            resp = _context12.sent;
            sum = 0;

            for (key in resp) {
              sum += parseInt(resp[key]);
            }

            return _context12.abrupt("return", sum);

          case 6:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function allListeners() {
    return _ref12.apply(this, arguments);
  };
}();
/**
 * Gets listeners for a particular station
 *
 * @param {string} station - station to get listeners for
 * @returns {Promise.<number>} number of listeners for station
 */

export var listeners =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13(station) {
    var resp;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return query('listeners');

          case 2:
            resp = _context13.sent;
            return _context13.abrupt("return", resp[station]);

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function listeners(_x5) {
    return _ref13.apply(this, arguments);
  };
}();
/**
 * Get raw objects of all stations broadcasting live
 *
 * @returns {Promise.<array>} array of station objects broadcasting live
 */

export var liveStationsRaw =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14() {
    var resp;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return query('stations/live');

          case 2:
            resp = _context14.sent;
            return _context14.abrupt("return", resp);

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function liveStationsRaw() {
    return _ref14.apply(this, arguments);
  };
}();
/**
 * Get names of all stations broadcasting live
 *
 * @returns {Promise.<array>} all stations broadcasting live
 */

export var liveStations =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15() {
    var resp;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return query('stations/live');

          case 2:
            resp = _context15.sent;
            return _context15.abrupt("return", resp.map(function (s) {
              return s.name;
            }));

          case 4:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function liveStations() {
    return _ref15.apply(this, arguments);
  };
}();
/**
 * Determine if a station is currently broadcasting live
 *
 * @param {string} station - station to test
 * @returns {Promise.<boolean>} if station is broadcasting live
 */

export var stationIsLive =
/*#__PURE__*/
function () {
  var _ref16 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee16(station) {
    var resp;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return query('stations/live');

          case 2:
            resp = _context16.sent;
            return _context16.abrupt("return", resp.filter(function (s) {
              return s.name === station;
            }).length !== 0);

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function stationIsLive(_x6) {
    return _ref16.apply(this, arguments);
  };
}();
/**
 * Indicate how many stations are broadcasting live
 *
 * @returns {Promise.<number>} number of stations broadcasting live
 */

export var numLiveStations =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee17() {
    var resp;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return query('stations/live');

          case 2:
            resp = _context17.sent;
            return _context17.abrupt("return", resp.length);

          case 4:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function numLiveStations() {
    return _ref17.apply(this, arguments);
  };
}();

var assignOptions = function assignOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var allowedKeys = ['lat', 'long', 'offset', 'limit'];

  if (!(options instanceof Object)) {
    throw 'not an Object';
  }

  if (options.lat && !options.long || options.long && !options.lat) {
    throw 'both lat and long are required';
  }

  if (options.offset && !options.limit) {
    throw 'offset requires limit';
  }

  for (var key in options) {
    if (!allowedKeys.includes(key)) {
      throw "".concat(key, " is not an allowed option");
    }
  }

  return options;
};

var formatResult = function formatResult(resp) {
  if (resp.items) {
    var _stations = resp.items,
        pagination = _objectWithoutProperties(resp, ["items"]);

    return {
      stations: _stations,
      pagination: pagination
    };
  } else {
    return resp;
  }
};
/**
 * Gets all Stations
 *
 * @param {object} options - {limit:number, offset:number, lat:number, long:number}
 * @returns {Promise.<array>} an array of station objects
 */


export var allStations =
/*#__PURE__*/
function () {
  var _ref18 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee18() {
    var options,
        cops,
        resp,
        _args18 = arguments;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            options = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : {};
            cops = assignOptions(options);
            _context18.next = 4;
            return query('/stations', cops);

          case 4:
            resp = _context18.sent;
            return _context18.abrupt("return", formatResult(resp));

          case 6:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function allStations() {
    return _ref18.apply(this, arguments);
  };
}();
/**
 * Get stations beginning with a certain letter or number
 *
 * @param {(string|number)} startw - station starts with
 * @param {object} options - {limit:number, offset:number, lat:number, long:number}
 * @returns {Promise.<array>} array of station objects
 */

export var stationStartsWith =
/*#__PURE__*/
function () {
  var _ref19 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee19(startw) {
    var options,
        cops,
        resp,
        filteredResults,
        _resp,
        _args19 = arguments;

    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            options = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : {};
            cops = assignOptions(options);

            if (!parseInt(startw)) {
              _context19.next = 10;
              break;
            }

            _context19.next = 5;
            return query('/stations/numbers', cops);

          case 5:
            resp = _context19.sent;
            filteredResults = resp.filter(function (s) {
              return s.name[0] == startw;
            });
            return _context19.abrupt("return", formatResult(filteredResults));

          case 10:
            _context19.next = 12;
            return query("/stations/letter/".concat(startw), cops);

          case 12:
            _resp = _context19.sent;
            return _context19.abrupt("return", formatResult(_resp));

          case 14:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function stationStartsWith(_x7) {
    return _ref19.apply(this, arguments);
  };
}();
/**
 * Gets information for specific stations
 *
 * @param {array} stations - array of station names
 * @param {object} options - {lat:number, long:number}
 * @returns {Promise.<array>} array of station objects
 */

export var stations =
/*#__PURE__*/
function () {
  var _ref20 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee20(_stations2) {
    var options,
        cops,
        resp,
        _args20 = arguments;
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            options = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : {};

            if (!(options.offset || options.limit)) {
              _context20.next = 3;
              break;
            }

            throw 'can not use limit and/or offset with this list';

          case 3:
            cops = assignOptions(options);
            _context20.next = 6;
            return query("stations/".concat(_stations2), cops);

          case 6:
            resp = _context20.sent;
            return _context20.abrupt("return", resp);

          case 8:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function stations(_x8) {
    return _ref20.apply(this, arguments);
  };
}();
/**
 * Get all stations of a particular genre
 * @todo not implemented yet
 *
 * @param {string} genre - genre to search for
 * @param {object} options - {limit:number, offset:number, lat:number, long:number}
 * @returns {Promise.<array>} array of station objects
 */

export var stationsByGenre = function stationsByGenre(genre) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
};
/**
 * Search
 * (?-mix:\A\/station\/([\w\d_\-]+)\/images\/([\w\d_\-]+)\Z)
 * @todo not implemented yet
 */

/**
 * Song Change JSON Stream
 * /song_change.stream.json
 * @todo not implemented yet
 */

/**
 * Song Change WebSocket
 * /song_change.ws.json
 * @todo not implemented yet
 */

/**
 * Song Change Chunks (last 50)
 * /song_change.chunk.json
 * {Song, ...}
 * @todo not implemented yet
 */

/**
 * Teaser
 * /teaser
 * [{headline: String, schedule:[], link:String, img_l: String, img_m: String, img_s: String}, ...]
 * @todo not implemented yet
 */