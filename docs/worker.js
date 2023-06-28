var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var ECOM_DB_NAME = 'ecomposer';
var ECOM_DB_VERSION = 1;
var ECOM_DB_TABLE = 'revisions';
var DB = {
    connection: null,
    getDb: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.connection) {
                            return resolve(_this.connection);
                        }
                        var request = indexedDB.open(ECOM_DB_NAME, ECOM_DB_VERSION);
                        if (!indexedDB) {
                            var message = "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.";
                            console.log(message);
                            reject(message);
                        }
                        request.onerror = function (e) {
                            console.log('Error opening db', e);
                            reject('Error');
                        };
                        request.onsuccess = function (e) {
                            _this.connection = request.result;
                            resolve(_this.connection);
                        };
                        request.onupgradeneeded = function (e) {
                            console.log('onupgradeneeded');
                            var db = e.target;
                            db.result.createObjectStore(ECOM_DB_TABLE, { keyPath: 'id' });
                        };
                    })];
            });
        });
    },
    "delete": function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDb()];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                var trans = db.transaction([ECOM_DB_TABLE], 'readwrite');
                                trans.oncomplete = function (res) {
                                    resolve(res);
                                };
                                var store = trans.objectStore(ECOM_DB_TABLE);
                                store["delete"](params.id);
                            })];
                }
            });
        });
    },
    deleteByKeys: function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var rows, db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(key)];
                    case 1:
                        rows = _a.sent();
                        return [4 /*yield*/, this.getDb()];
                    case 2:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                var trans = db.transaction([ECOM_DB_TABLE], 'readwrite');
                                var store = trans.objectStore(ECOM_DB_TABLE);
                                rows.forEach(function (element) {
                                    store["delete"](element.id);
                                });
                                resolve('');
                            })];
                }
            });
        });
    },
    getAll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDb()];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                var data = [];
                                var trans = db.transaction([ECOM_DB_TABLE], 'readonly');
                                trans.oncomplete = function () {
                                    resolve(data);
                                };
                                var store = trans.objectStore(ECOM_DB_TABLE);
                                store.openCursor().onsuccess = function (e) {
                                    var cursor = e.target.result;
                                    if (cursor) {
                                        data.push(cursor.value);
                                        cursor["continue"]();
                                    }
                                };
                            })];
                }
            });
        });
    },
    find: function (key, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDb()];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                var data = [];
                                var count = 0;
                                var trans = db.transaction([ECOM_DB_TABLE], 'readonly');
                                trans.oncomplete = function () {
                                    resolve(data);
                                };
                                var store = trans.objectStore(ECOM_DB_TABLE);
                                store.openCursor().onsuccess = function (e) {
                                    var cursor = e.target.result;
                                    if (cursor) {
                                        if (key && cursor.value.key !== key) {
                                            cursor["continue"]();
                                            return false;
                                        }
                                        if (limit && count >= limit) {
                                            cursor["continue"]();
                                            return false;
                                        }
                                        count++;
                                        data.push(cursor.value);
                                        cursor["continue"]();
                                    }
                                };
                            })];
                }
            });
        });
    },
    update: function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDb()];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                var trans = db.transaction([ECOM_DB_TABLE], 'readwrite');
                                trans.oncomplete = function (res) {
                                    resolve(res);
                                };
                                trans.objectStore(ECOM_DB_TABLE).put(params);
                            })];
                }
            });
        });
    },
    add: function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDb()];
                    case 1:
                        db = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                var trans = db.transaction(ECOM_DB_TABLE, 'readwrite').objectStore(ECOM_DB_TABLE).add(params);
                                trans.oncomplete = function (res) {
                                    resolve(res);
                                };
                                trans.onerror = function (e) {
                                    console.log(e);
                                };
                            })];
                }
            });
        });
    }
};
onmessage = function (e) { return __awaiter(_this, void 0, void 0, function () {
    var data, result, status, _a, form, headers, key, res, e_1;
    var _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                data = e.data;
                result = null;
                status = 'success';
                _a = data.action;
                switch (_a) {
                    case 'getAll': return [3 /*break*/, 1];
                    case 'delete': return [3 /*break*/, 3];
                    case 'deleteByKeys': return [3 /*break*/, 5];
                    case 'update': return [3 /*break*/, 7];
                    case 'add': return [3 /*break*/, 9];
                    case 'find': return [3 /*break*/, 11];
                    case 'fetch': return [3 /*break*/, 13];
                }
                return [3 /*break*/, 18];
            case 1: return [4 /*yield*/, DB.getAll()];
            case 2:
                result = _d.sent();
                return [3 /*break*/, 19];
            case 3: return [4 /*yield*/, DB["delete"](data.params)];
            case 4:
                result = _d.sent();
                return [3 /*break*/, 19];
            case 5: return [4 /*yield*/, DB.deleteByKeys(data.params)];
            case 6:
                result = _d.sent();
                return [3 /*break*/, 19];
            case 7: return [4 /*yield*/, DB.update(data.params)];
            case 8:
                result = _d.sent();
                return [3 /*break*/, 19];
            case 9: return [4 /*yield*/, DB.add(data.params)];
            case 10:
                result = _d.sent();
                return [3 /*break*/, 19];
            case 11: return [4 /*yield*/, DB.find(data.params.key, data.params.limit)];
            case 12:
                result = _d.sent();
                return [3 /*break*/, 19];
            case 13:
                _d.trys.push([13, 16, , 17]);
                form = null;
                headers = {
                    Accept: 'application/json'
                };
                if (data.isForm && data.method === 'POST' && data.params) {
                    form = new FormData();
                    for (key in data.params) {
                        form.append(key, data.params[key]);
                    }
                }
                else if (data.params) {
                    form = JSON.stringify(data.params);
                    headers['Content-Type'] = 'application/json';
                }
                return [4 /*yield*/, fetch(data.route, {
                        method: (_c = data.method) !== null && _c !== void 0 ? _c : 'GET',
                        headers: headers,
                        credentials: 'include',
                        mode: 'cors',
                        body: form
                    })];
            case 14:
                res = _d.sent();
                _b = {};
                return [4 /*yield*/, res.json()];
            case 15:
                result = (_b.data = _d.sent(),
                    _b);
                return [3 /*break*/, 17];
            case 16:
                e_1 = _d.sent();
                status = 'error';
                result = e_1.message;
                return [3 /*break*/, 17];
            case 17: return [3 /*break*/, 19];
            case 18: return [3 /*break*/, 19];
            case 19:
                postMessage({
                    id: data.id,
                    result: result && typeof result === 'object' ? JSON.parse(JSON.stringify(result)) : result,
                    status: status
                });
                return [2 /*return*/];
        }
    });
}); };
