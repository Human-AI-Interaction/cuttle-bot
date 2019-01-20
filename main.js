(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Cuttle Bot';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _hand_hand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hand/hand.component */ "./src/app/hand/hand.component.ts");
/* harmony import */ var _scrap_view_scrap_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrap-view/scrap-view.component */ "./src/app/scrap-view/scrap-view.component.ts");
/* harmony import */ var _deck_view_deck_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deck-view/deck-view.component */ "./src/app/deck-view/deck-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
                _hand_hand_component__WEBPACK_IMPORTED_MODULE_4__["HandComponent"],
                _scrap_view_scrap_view_component__WEBPACK_IMPORTED_MODULE_5__["ScrapViewComponent"],
                _deck_view_deck_view_component__WEBPACK_IMPORTED_MODULE_6__["DeckViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-all {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: left;;\r\n}\r\n\r\n.flex-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\r\n}\r\n\r\n.flex1 {\r\n\theight: 15%;\r\n}\r\n\r\n#side {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin: auto 10px;\r\n}\r\n\r\n#undo {\r\n    /* position: absolute; */\r\n\tdisplay: inline-block;\r\n\theight: 8%;\r\n    max-height: 64px;\r\n}\r\n\r\n#botHand, #yourHand {\r\n\t/* position: absolute; */\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\twidth: 80%;\r\n\t/* height: 15%; */\r\n\t/* top: 10%; */\r\n}\r\n\r\n#indicator {\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 2em;\r\n}\r\n\r\n/* #yourHand { */\r\n\r\n/* position: absolute; */\r\n\r\n/* display: block; */\r\n\r\n/* width: 100%; */\r\n\r\n/* max-height: 200px;\r\n\twidth: 80%;\r\n\theight: 15%; */\r\n\r\n/* bottom: 10%; */\r\n\r\n/* } */\r\n\r\n#deck {\r\n\t/* position: absolute; */\r\n\t/* display: inline-block; */\r\n\theight: 20%;\r\n\t/* top: 28%; */\r\n\t/* margin-left: 2%; */\r\n}\r\n\r\n#scrap {\r\n\t/* position: absolute; */\r\n\t/* display: inline-block; */\r\n\theight: 20%;\r\n\t/* top: 49%; */\r\n\r\n}\r\n\r\n#field {\r\n\tposition: relative;\r\n\tjustify-content: center;\r\n\t/* display: inline-block; */\r\n\tborder: 2px solid black;\r\n\tmin-width: 1200px;\r\n\twidth: 100%;\r\n\tmin-height: 400px;\r\n\tmax-height: 600px;\r\n\r\n}\r\n\r\n.field {\r\n\t/* display: block; */\r\n\tposition: relative;\r\n\theight: 50%;\r\n}\r\n\r\n.fieldArea {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\t/* height: 100%; */\r\n\t/* width: 50%;  */\r\n\tmin-height: 200px;\r\n\t\r\n}\r\n\r\n#yourField {\r\n\tmin-height: 200px;\r\n}\r\n\r\n#botField {\r\n\tmin-height: 200px;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n.yourPointCard {\r\n\t/* height: 80%; */\r\n\t/* margin-top: 1%;\r\n\t/* margin-left: 1%; */\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.pointCardImg {\r\n\tdisplay: inline-block;\r\n\t/* position: relative; */\r\n\t/* height: 100%; */\r\n\tmax-height: 200px;\r\n}\r\n\r\n.jack {\r\n\t/* display: block; */\r\n    /* position: fixed; */\r\n\tmax-height: 200px;\r\n\tposition: relative;\r\n\tmargin-left: -90px;\r\n\tmargin-right: 10px;\r\n\r\n    /* top: -104%; */\r\n    /* left: 7%; */\r\n}\r\n\r\n.legalMove {\r\n\t/* min-height: 100%; */\r\n\tbackground-color: rgb(91, 194, 69);\r\n}\r\n\r\n.validTarget {\r\n\tborder: 3px solid rgb(91, 194, 69);\r\n}\r\n\r\n/*Scrap view overlaying field*/\r\n\r\napp-scrap-view {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground-color: #FFF;\r\n\tz-index: 3;\r\n}\r\n\r\napp-deck-view {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\tmargin-left: 50%;\r\n\tbackground-color: #FFF;\r\n\tz-index: 3;\r\n}\r\n\r\n#revealedDeck {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\theight: 100%;\r\n\ttop: 120%;\r\n}\r\n\r\n.revealedDeckCard {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\theight: 10%;\r\n}"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img id=\"undo\" src=\"assets/back-arrow.png\" (click)=\"undo()\">\r\n\r\n<div class=\"flex-all\">\r\n\t<div id=\"side\">\r\n\t\t<img src=\"assets/deck.jpg\" id=\"deck\" (click)=\"draw()\">\r\n\t\t<img src=\"assets/scrap.jpg\" id=\"scrap\" (click)=\"untargetedOneOff()\" [ngClass]=\"{'validTarget': gs.selected &&  [1, 3, 4, 5, 6, 7].indexOf(gs.selected.rank) > -1}\">\r\n\t</div>\r\n\r\n\t<div class=\"flex-container\">\r\n\r\n\t\t<!-- <div class=\"flex-container flex1\"> -->\r\n\t\t<app-hand id=\"botHand\" [player]=\"game.players[0]\"></app-hand>\r\n\t\t<!-- </div> -->\r\n\r\n\r\n\t\t<div id=\"field\">\r\n\t\t\t<app-scrap-view *ngIf=\"gs.chooseScrap\"></app-scrap-view>\r\n\t\t\t<app-deck-view *ngIf=\"gs.chooseDeck\"></app-deck-view>\r\n\t\t\t<div id=\"botField\" class=\"field\">\r\n\t\t\t\t<div id=\"botPoints\" class=\"fieldArea\">\r\n\t\t\t\t\t<div *ngFor=\"let card of game.bot.points index as index\" class=\"yourPointCard\">\r\n\t\t\t\t\t\t<img src=\"assets/cards/{{card.img}}\" [ngClass]=\"{'validTarget': gameService.validTargets.indexOf(card) > -1}\"\r\n\t\t\t\t\t\t (click)=\"targetPoint(card, index)\" class=\"pointCardImg\">\r\n\t\t\t\t\t\t<img *ngFor=\"let jack of card.jacks index as jackIndex\" src=\"assets/cards/{{jack.img}}\" class=\"jack\" [ngClass]=\"{'validTarget': gameService.validTargets.indexOf(jack) > -1}\" (click)=\"targetedOneOffJack(card, index)\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"botFaceCards\" class=\"fieldArea\">\r\n\t\t\t\t\t<img *ngFor=\"let card of game.bot.faceCards\" src=\"assets/cards/{{card.img}}\" class=\"pointCardImg\" [ngClass]=\"{'validTarget': gameService.validTargets.indexOf(card) > -1}\" (click)=\"targetedOneOffFaces(card, index)\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id=\"yourField\" class=\"field\" [ngClass]=\"{'legalMove': gs.legalMoves.indexOf('field') > -1}\" (click)='playToField()'>\r\n\t\t\t\t<div id=\"yourPoints\" class=\"fieldArea\">\r\n\r\n\t\t\t\t\t<div *ngFor=\"let card of game.player.points\" class=\"yourPointCard\">\r\n\t\t\t\t\t\t<img src=\"assets/cards/{{card.img}}\" class=\"pointCardImg\">\r\n\t\t\t\t\t\t<img *ngFor=\"let jack of card.jacks\" src=\"assets/cards/{{jack.img}}\" class=\"jack\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"yourPointsFace\" class=\"fieldArea\">\r\n\t\t\t\t\t<img *ngFor=\"let card of game.player.faceCards\" src=\"assets/cards/{{card.img}}\" class=\"pointCardImg\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<app-hand id=\"yourHand\" [player]=\"game.players[1]\"></app-hand>\r\n\t\t<div id=\"indicator\">Victory requirements: {{game.player.remainingPointsNeededToWin}} points</div>\r\n\t\t<button (click)=\"showDeck = !showDeck\">Toggle Deck</button>\r\n\t\t<div *ngIf=\"showDeck\" id=\"revealedDeck\">\r\n\t\t\t<img *ngFor=\"let card of game.deck index as index\" src=\"assets/cards/{{card.img}}\" class=\"revealedDeckCard\" (click)=\"stackDeck(index)\">\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = /** @class */ (function () {
    function BoardComponent(gameService) {
        this.gameService = gameService;
    }
    Object.defineProperty(BoardComponent.prototype, "gs", {
        get: function () {
            return this.gameService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "game", {
        get: function () {
            return this.gameService.game;
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.draw = function () {
        // Check if you're under the hand limit
        if (this.game.player.hand.length < 8) {
            var oldGame = this.game.copy();
            var gameCopy = this.game.copy();
            gameCopy.players[1].hand.push(gameCopy.deck.shift()); // add card to hand
            gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
            // Add change to history and update game
            this.gameService.update(oldGame, gameCopy);
            this.gameService.selected = null;
            this.gameService.selIndex = null;
        }
    };
    BoardComponent.prototype.playToField = function () {
        if (this.gameService.selected) {
            var oldGame = this.game.copy();
            var gameCopy = this.game.copy();
            // Playing card from your hand
            if (!this.gameService.chooseDeck) {
                if (this.gameService.selected.rank <= 10) {
                    // Move card to points
                    gameCopy.player.points.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                }
                else if (this.gameService.selected.rank == 12 || this.gameService.selected.rank == 13) {
                    // Play face card
                    gameCopy.player.faceCards.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                }
                // Playing card from deck using a 7
            }
            else {
                if (this.gameService.selected.rank <= 10) {
                    gameCopy.player.points.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
                }
                else if (this.gameService.selected.rank == 12 || this.gameService.selected.rank == 13) {
                    gameCopy.player.faceCards.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
                }
                this.gameService.chooseDeck = false;
                gameCopy.scrap.push(this.game.oneOff);
                gameCopy.oneOff = null;
            }
            // Delete selection
            this.gameService.selected = null;
            this.gameService.selIndex = null;
            // Update game
            gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
            this.gameService.update(oldGame, gameCopy);
        }
    };
    BoardComponent.prototype.targetPoint = function (card, index) {
        // Scuttle
        var gameCopy = this.game.copy();
        var oldGame = this.game.copy();
        // Playing card from hand
        if (!this.gameService.chooseDeck) {
            // Scuttling
            if (this.gameService.selected.rank <= 10 && this.gameService.selected.rank > card.rank || (this.gameService.selected.rank == card.rank && this.gameService.selected.suit > card.suit)) {
                gameCopy.scrap = gameCopy.scrap.concat(gameCopy.bot.points[index].jacks);
                gameCopy.bot.points[index].jacks = [];
                gameCopy.scrap.push(gameCopy.bot.points.splice(index, 1)[0]);
                gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                // Playing Jack
            }
            else if (this.gameService.selected.rank == 11 && this.gameService.game.bot.numQueens == 0) {
                gameCopy.bot.points[index].jacks.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                gameCopy.player.points.push(gameCopy.bot.points.splice(index, 1)[0]);
            }
            // playing card from deck with 7
        }
        else {
            // Scuttling
            if (this.gameService.selected.rank <= 10 && this.gameService.selected.rank > card.rank || (this.gameService.selected.rank == card.rank && this.gameService.selected.suit > card.suit)) {
                gameCopy.scrap = gameCopy.scrap.concat(gameCopy.bot.points[index].jacks);
                gameCopy.bot.points[index].jacks = [];
                gameCopy.scrap.push(gameCopy.bot.points.splice(index, 1)[0]);
                gameCopy.scrap.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
                // Playing Jack
            }
            else if (this.gameService.selected.rank == 11 && this.gameService.game.bot.numQueens == 0) {
                gameCopy.bot.points[index].jacks.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
                gameCopy.player.points.push(gameCopy.bot.points.splice(index, 1)[0]);
            }
            gameCopy.scrap.push(gameCopy.oneOff);
            gameCopy.oneOff = null;
            gameCopy.selIndex = null;
            this.gameService.chooseDeck = false;
        }
        gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
        // Update game
        this.gameService.update(oldGame, gameCopy);
        // Delete selection
        this.gameService.selected = null;
        this.gameService.selIndex = null;
    };
    BoardComponent.prototype.targetedOneOffFaces = function (card, index) {
        // not including eights yet
        var gameCopy = this.game.copy();
        var oldGame = this.game.copy();
        if (this.gameService.selected && [2, 9].indexOf(this.gameService.selected.rank) > -1) {
            switch (this.gameService.selected.rank) {
                case 2:
                    gameCopy.scrap.push(gameCopy.bot.faceCards.splice(index, 1)[0]);
                    if (this.gameService.chooseDeck) {
                        gameCopy.scrap.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
                        this.gameService.chooseDeck = false;
                    }
                    else {
                        gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                    }
                    break;
                case 9:
                    break;
            }
        }
        gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
        this.gameService.update(oldGame, gameCopy);
        // Delete selection
        this.gameService.selected = null;
        this.gameService.selIndex = null;
    };
    BoardComponent.prototype.targetedOneOffJack = function (card, index) {
        var gameCopy = this.game.copy();
        var oldGame = this.game.copy();
        if (this.gameService.selected && [2, 9].indexOf(this.gameService.selected.rank) > -1 && card.jacks.length >= 1) {
            switch (this.gameService.selected.rank) {
                case 2:
                    gameCopy.scrap.push(gameCopy.bot.points[index].jacks.shift());
                    gameCopy.player.points.push(gameCopy.bot.points[index]);
                    gameCopy.bot.points.splice(index, 1);
                    if (this.gameService.chooseDeck) {
                        gameCopy.scrap.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
                        gameCopy.scrap.push(gameCopy.oneOff);
                        gameCopy.oneOff = null;
                        this.gameService.chooseDeck = false;
                    }
                    else {
                        gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                    }
                    break;
                case 9:
                    break;
            }
            gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
        }
        this.gameService.update(oldGame, gameCopy);
        // Delete selection
        this.gameService.selected = null;
        this.gameService.selIndex = null;
    };
    BoardComponent.prototype.untargetedOneOff = function () {
        if (this.gameService.selected && [1, 3, 4, 5, 6, 7].indexOf(this.gameService.selected.rank) > -1) {
            var gameCopy = this.game.copy();
            var oldGame = this.game.copy();
            var done = true;
            var previouslyPlayedSeven = false;
            this.gameService.chooseDeck = false;
            if (gameCopy.oneOff && gameCopy.oneOff.rank == 7)
                previouslyPlayedSeven = true;
            switch (this.gameService.selected.rank) {
                // Destroy all Points and attached jacks
                case 1:
                    gameCopy.player.points.forEach(function (point) {
                        console.log("scrapping: your" + point.name + ". Removed jacks:");
                        gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
                        console.log(gameCopy.scrap);
                        point.jacks = [];
                        gameCopy.scrap.push(point);
                    });
                    gameCopy.player.points = [];
                    gameCopy.bot.points.forEach(function (point) {
                        console.log("scrapping bot's: " + point.name + ". Removed jacks:");
                        gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
                        console.log(gameCopy.scrap);
                        point.jacks = [];
                        gameCopy.scrap.push(point);
                    });
                    gameCopy.bot.points = [];
                    break;
                // Fetch one card from scrap pile
                case 3:
                    this.gs.chooseScrap = true;
                    done = false;
                    break;
                case 4:
                    gameCopy.scrap.push(gameCopy.bot.hand.pop());
                    gameCopy.scrap.push(gameCopy.bot.hand.pop());
                    console.log(gameCopy.scrap);
                    var firstDiscard = gameCopy.scrap[gameCopy.scrap.length - 2].name;
                    var secondDiscard = gameCopy.scrap[gameCopy.scrap.length - 1].name;
                    alert("Cuttle Bot discards the " + firstDiscard + " and the " + secondDiscard);
                    break;
                case 5:
                    // gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                    gameCopy.player.hand.push(gameCopy.deck.shift());
                    if (gameCopy.player.hand.length < 8) {
                        gameCopy.player.hand.push(gameCopy.deck.shift());
                    }
                    break;
                case 6:
                    gameCopy.player.faceCards.forEach(function (faceCard) {
                        gameCopy.scrap.push(faceCard);
                    });
                    gameCopy.player.faceCards = [];
                    gameCopy.bot.faceCards.forEach(function (faceCard) {
                        gameCopy.scrap.push(faceCard);
                    });
                    gameCopy.bot.faceCards = [];
                    // Remove jacks and determine which point cards must be exchanged
                    var indicesToMove_1 = [];
                    gameCopy.player.points.forEach(function (point, index) {
                        if (point.jacks.length % 2 != 0) {
                            indicesToMove_1.push(index);
                        }
                        gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
                        point.jacks = [];
                    });
                    // Switch any points from player to bot
                    while (indicesToMove_1.length > 0) {
                        var index = indicesToMove_1.pop();
                        gameCopy.bot.points.push(gameCopy.player.points.splice(index, 1)[0]);
                    }
                    gameCopy.bot.points.forEach(function (point, index) {
                        if (point.jacks.length % 2 != 0) {
                            indicesToMove_1.push(index);
                        }
                        gameCopy.scrap = gameCopy.scrap.concat(point.jacks);
                        point.jacks = [];
                    });
                    // Switch any points from bot to player
                    while (indicesToMove_1.length > 0) {
                        var index = indicesToMove_1.pop();
                        gameCopy.player.points.push(gameCopy.bot.points.splice(index, 1)[0]);
                    }
                    break;
                case 7:
                    this.gs.chooseDeck = true;
                    done = false;
                    break;
                default:
                    // code...
                    break;
            }
            if (done) {
                if (!this.gameService.chooseDeck) {
                    // Move played card from hand to scrap
                    gameCopy.scrap.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
                }
                else {
                    gameCopy.scrap.push(gameCopy.deck.splice(this.gameService.selIndex, 1)[0]);
                    gameCopy.oneOff = null;
                    this.gameService.chooseDeck = false;
                }
                // Bot move
                gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
            }
            else {
                if (!previouslyPlayedSeven) {
                    gameCopy.oneOff = gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0];
                }
                else {
                    gameCopy.scrap.push(gameCopy.oneOff);
                    gameCopy.oneOff = gameCopy.deck.splice(this.gameService.selIndex, 1)[0];
                }
                this.gameService.gameCopy = gameCopy;
                this.gameService.oldGameCopy = oldGame;
            }
            // Update game
            this.gameService.update(oldGame, gameCopy);
            // Delete selection
            this.gameService.selected = null;
            this.gameService.selIndex = null;
        }
    };
    BoardComponent.prototype.undo = function () {
        this.gameService.undo();
    };
    BoardComponent.prototype.stackDeck = function (index) {
        this.game.deck.unshift(this.game.deck.splice(index, 1)[0]);
    };
    BoardComponent.prototype.ngOnInit = function () {
        this.showDeck = false;
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/bot.ts":
/*!************************!*\
  !*** ./src/app/bot.ts ***!
  \************************/
/*! exports provided: Bot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bot", function() { return Bot; });
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move */ "./src/app/move.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


// import { Game } from './game';
var Bot = /** @class */ (function () {
    function Bot() {
    }
    // looking one step ahead
    Bot.prototype.decideLegalMoves = function (game) {
        var possibleMoves = [];
        // Draw
        if (game.bot.hand.length < 8 && game.deck.length > 0) {
            var game_copy = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(game);
            game_copy.bot.hand.push(game_copy.deck.shift());
            possibleMoves.push(new _move__WEBPACK_IMPORTED_MODULE_0__["Move"]("draw", game_copy));
        }
        // Play cards to field
        game.bot.hand.forEach(function (card, index) {
            // Number cards
            if (card.rank <= 10) {
                // Playing the card as points
                var play_points_game_copy = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(game);
                play_points_game_copy.bot.points.push(play_points_game_copy.bot.hand.splice(index, 1)[0]);
                possibleMoves.push(new _move__WEBPACK_IMPORTED_MODULE_0__["Move"]("points", play_points_game_copy, card, index));
                // Check possible scuttles
                game.player.points.forEach(function (target, targetIndex) {
                    if (card.rank > target.rank || (card.rank == target.rank && card.suit > target.suit)) {
                        var scuttle_copy = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(game);
                        scuttle_copy.scrap = scuttle_copy.scrap.concat(target.jacks);
                        scuttle_copy.player.points[targetIndex].jacks = [];
                        scuttle_copy.scrap.push(scuttle_copy.player.points.splice(targetIndex, 1)[0]); // Scrap player's point card
                        scuttle_copy.scrap.push(scuttle_copy.bot.hand.splice(index, 1)[0]); // Scrap bot's scuttling card
                        possibleMoves.push(new _move__WEBPACK_IMPORTED_MODULE_0__["Move"]("scuttle", scuttle_copy, card, index, target, targetIndex));
                    }
                });
            }
            else if (card.rank == 12 || card.rank == 13) {
                var play_face_copy = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(game);
                play_face_copy.bot.faceCards.push(play_face_copy.bot.hand.splice(index, 1)[0]);
                possibleMoves.push(new _move__WEBPACK_IMPORTED_MODULE_0__["Move"]("faceCard", play_face_copy, card, index));
            }
            else if (card.rank == 11) {
                if (game.player.numQueens == 0) {
                    game.player.points.forEach(function (target, targetIndex) {
                        var play_jack_copy = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(game);
                        play_jack_copy.player.points[targetIndex].jacks.push(play_jack_copy.bot.hand.splice(index, 1)[0]);
                        play_jack_copy.bot.points.push(play_jack_copy.player.points.splice(targetIndex, 1)[0]);
                        possibleMoves.push(new _move__WEBPACK_IMPORTED_MODULE_0__["Move"]("jack", play_jack_copy, card, index, target, targetIndex));
                    });
                }
            }
        });
        var gameAfterBotMove = this.chooseMove(possibleMoves, game);
        return gameAfterBotMove;
    };
    // evaluating score of one game
    Bot.prototype.evaluateGame = function (game) {
        var score = game.bot.hand.length + game.bot.pointTotal % 10 + game.bot.pointTotal / 10 + game.bot.faceCards.length
            - (game.player.hand.length + game.player.pointTotal % 10 + game.player.pointTotal / 10 + game.player.faceCards.length);
        if (game.playerWins) {
            score = -100;
            console.log("PLAYER COULD WIN");
        }
        if (game.botWins)
            score = 100;
        return score;
    };
    Bot.prototype.evaluateMove = function (move) {
        var _this = this;
        var score = null;
        move.results.forEach(function (game) {
            var game_score = _this.evaluateGame(game);
            if (score == null || game_score < score) {
                score = game_score;
            }
        });
        return score;
    };
    Bot.prototype.chooseMove = function (moves, game) {
        var _this = this;
        var highest_score = null;
        var high_index = null;
        moves.forEach(function (move, index) {
            var move_score = _this.evaluateMove(move);
            if (highest_score == null || highest_score < move_score) {
                highest_score = move_score;
                high_index = index;
            }
        });
        var best_move = moves[high_index];
        // let gameAfterBotMove = this.makeMove(best_move, game);
        // Alert player of bot's move
        var moveName = best_move.name;
        var announcement = "";
        switch (moveName) {
            case "draw":
                announcement = "Cuttle Bot Draws.";
                break;
            case "points":
                announcement = "Cuttle Bot plays the " + best_move.card.name + " for points";
                break;
            case "faceCard":
                announcement = "Cuttle Bot plays the " + best_move.card.name;
                break;
            case "scuttle":
                announcement = "Cuttle Bot scuttles your " + best_move.target.name + " with its " + best_move.card.name;
                break;
            case "jack":
                announcement = "Cuttle Bot steals your " + best_move.target.name + " with its " + best_move.card.name;
                break;
            case "oneOff":
                announcement = "Cuttle Bot plays the " + best_move.card.name + " for one-off effects";
                break;
            default:
                // code...
                break;
        }
        alert(announcement);
        var gameAfterBotMove = best_move.game;
        return gameAfterBotMove;
    };
    Bot.prototype.makeMove = function (move, game) {
        switch (move.name) {
            case "draw":
                game.bot.hand.push(game.deck.shift());
                break;
            case "points":
                game.bot.points.push(game.bot.hand.splice(move.index, 1)[0]);
                break;
            case "scuttle":
                console.log("Bot is scuttling");
                game.scrap.push(game.bot.hand.splice(move.index)[0]);
                console.log("Bot's card scrapped");
                console.log(game.scrap);
                game.scrap.push(game.player.hand.splice(move.target_index)[0]);
                console.log("your card scrapped");
                console.log(game.scrap);
                break;
            case "oneOff":
                // A LOT!
                // How do I implement one-off here???
                break;
            case "faceCard":
                game.bot.faceCards.push(game.bot.hand.splice(move.index, 1)[0]);
                break;
        }
        return game;
    };
    Bot.prototype.suggestMove = function (initialGame, gameAfterPlayerMove) {
        var res = null;
        // Only consider suggesting move if player didn't win
        if (!gameAfterPlayerMove.player.isWinner) {
            var betterMovePriority_1 = 0;
            // Check for better defensive moves if player lost
            if (gameAfterPlayerMove.bot.isWinner) {
                // Assume player didn't have a better move unless we find a way to stop the bot
                res = "Dang, you lost! Nice try. There was actually nothing you could have done better on that last turn. Try rewinding a few turns back if you want to see how the game could have gone, or just refresh the page to start over.";
                initialGame.player.hand.forEach(function (card) {
                    // Check for potential scuttles and jack steals
                    initialGame.bot.points.forEach(function (target) {
                        if ((card.rank <= 10 && card.rank > target.rank || (card.rank == target.rank && card.suit > target.suit)) && betterMovePriority_1 == 0) {
                            res = "Dang, you lost! You might have been able to stop the bot if you scuttled last turn. Try rewinding and playing that turn over!";
                            betterMovePriority_1 = 1;
                        }
                        else if (card.rank == 11 && initialGame.bot.numQueens == 0 && betterMovePriority_1 <= 1) {
                            res = "Dang, you lost! You might have been able to stop the bot if you stole its points with a jack last turn. Try rewinding and playing that turn over!";
                            betterMovePriority_1 = 2;
                        }
                    });
                });
            }
            // Check for better offensive moves
            initialGame.player.hand.forEach(function (card, index) {
                if (card.rank <= 10) {
                    if (initialGame.player.remainingPointsNeededToWin < card.rank && betterMovePriority_1 == 0) {
                        res = "Psst! You actually could have won on that turn if you played differently. Consider rewinding and playing points";
                        betterMovePriority_1 = 1;
                    }
                }
                else if (card.rank == 13) {
                    if (initialGame.player.couldWinWithKing && betterMovePriority_1 <= 1) {
                        res = "Psst! You actually could have won on that last turn if you played differently. Consider rewinding and playing a king";
                        betterMovePriority_1 = 2;
                    }
                }
                else if (card.rank == 11 && initialGame.bot.numQueens == 0 && betterMovePriority_1 <= 2) {
                    initialGame.bot.points.forEach(function (card) {
                        if (card.rank >= initialGame.player.remainingPointsNeededToWin) {
                            res = "Psst! You actually could have won on that last turn if you played differently. Considering rewinding and playing a jack";
                            betterMovePriority_1 = 3;
                        }
                    });
                }
            });
        }
        return res;
    };
    return Bot;
}());

// switch (move.name) {
//     case 1:
//         break;
//     case 3:
//         break;
//     case 4:
//         break;  
//     case 5:
//         break;
//     case 6:
//     case 7:
//         moves.push("field");
//         moves.push("scrap");
//         // Determine legal scuttles
//         this.game.bot.points.forEach(card => {
//             // if (card.rank < this.gameService.selected.rank || (card.rank == this.gameService.selected.rank && card.suit <= this.gameService.selected.suit) ) {
//             // 	// Add point to list of scuttles
//             // }
//         });
//         break;
//     case 2:
//     case 9:
//         moves.push("field");
//         break;
//     case 8:
//         moves.push("field");
//         break;
//     case 10:
//         moves.push("field");
//         break;
//     case 11:
//         break;
//     case 12:
//     case 13:
//         break;


/***/ }),

/***/ "./src/app/card.ts":
/*!*************************!*\
  !*** ./src/app/card.ts ***!
  \*************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.jacks = new Array();
    }
    Object.defineProperty(Card.prototype, "img", {
        get: function () {
            return "card_" + this.suit + "_" + this.rank + ".png";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            switch (this.suit) {
                case 0:
                    return this.rank + " of Clubs";
                // break;
                case 1:
                    return this.rank + " of Diamonds";
                // break;
                case 2:
                    return this.rank + " of Hearts";
                // break;
                default:
                    return this.rank + " of Spades";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());



/***/ }),

/***/ "./src/app/deck-view/deck-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/deck-view/deck-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n\ttext-align: center;\r\n}\r\nimg {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\theight: 40%;\r\n\tmargin-top: 3%;\r\n\tmargin-left: 1%;\r\n}\r\n#topCard {\r\n\tmargin-left: 34%;\r\n}\r\n.selected {\r\n\tborder: 2px solid green;\r\n}"

/***/ }),

/***/ "./src/app/deck-view/deck-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/deck-view/deck-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Choose one of the top two cards from the deck to play</h1>\r\n<img src=\"assets/cards/{{gameService.game.deck[0].img}}\" id=\"topCard\" (click)=\"clickDeckCard(0)\" [ngClass]=\"{'selected': gameService.game.deck[0] == selected}\">\r\n<img src=\"assets/cards/{{gameService.game.deck[1].img}}\" (click)=\"clickDeckCard(1)\" [ngClass]=\"{'selected': gameService.game.deck[1] == selected}\">"

/***/ }),

/***/ "./src/app/deck-view/deck-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/deck-view/deck-view.component.ts ***!
  \**************************************************/
/*! exports provided: DeckViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckViewComponent", function() { return DeckViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeckViewComponent = /** @class */ (function () {
    function DeckViewComponent(gameService) {
        this.gameService = gameService;
    }
    Object.defineProperty(DeckViewComponent.prototype, "selected", {
        get: function () {
            return this.gameService.selected;
        },
        enumerable: true,
        configurable: true
    });
    DeckViewComponent.prototype.clickDeckCard = function (index) {
        if (this.selected == this.gameService.game.deck[index]) {
            this.gameService.selected = null;
            this.gameService.selIndex = null;
        }
        else {
            this.gameService.selected = this.gameService.game.deck[index];
            this.gameService.selIndex = index;
        }
    };
    DeckViewComponent.prototype.ngOnInit = function () {
    };
    DeckViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deck-view',
            template: __webpack_require__(/*! ./deck-view.component.html */ "./src/app/deck-view/deck-view.component.html"),
            styles: [__webpack_require__(/*! ./deck-view.component.css */ "./src/app/deck-view/deck-view.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], DeckViewComponent);
    return DeckViewComponent;
}());



/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot */ "./src/app/bot.ts");
/* harmony import */ var _mock_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock_game */ "./src/app/mock_game.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameService = /** @class */ (function () {
    function GameService() {
        this.history = new Array();
        this.validTargets = new Array();
        this.history.push(_mock_game__WEBPACK_IMPORTED_MODULE_2__["game"]);
        this.selIndex = null;
        this.selected = null;
        this.botBrain = new _bot__WEBPACK_IMPORTED_MODULE_1__["Bot"]();
        this.chooseScrap = false;
        this.chooseDeck = false;
    }
    Object.defineProperty(GameService.prototype, "legalMoves", {
        get: function () {
            var _this = this;
            var moves = [];
            this.validTargets = [];
            if (this.selected) {
                switch (this.selected.rank) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        moves.push("field");
                        moves.push("scrap");
                        // Determine legal scuttles
                        this.game.bot.points.forEach(function (card) {
                            if (card.rank < _this.selected.rank || (card.rank == _this.selected.rank && card.suit <= _this.selected.suit)) {
                                // Add point to list of scuttles
                                _this.validTargets.push(card);
                            }
                        });
                        break;
                    case 2:
                        moves.push("field");
                        this.game.bot.points.forEach(function (card) {
                            if (card.jacks.length >= 1) {
                                _this.validTargets.push(card.jacks[card.jacks.length - 1]);
                            }
                        });
                        this.game.bot.faceCards.forEach(function (card) {
                            _this.validTargets.push(card);
                        });
                        break;
                    case 9:
                        // Determine legal scuttles
                        this.game.bot.points.forEach(function (card) {
                            if (card.rank < _this.selected.rank || (card.rank == _this.selected.rank && card.suit <= _this.selected.suit)) {
                                // Add point to list of scuttles
                                _this.validTargets.push(card);
                            }
                        });
                        moves.push("field");
                        break;
                    case 8:
                        // Determine legal scuttles
                        this.game.bot.points.forEach(function (card) {
                            if (card.rank < _this.selected.rank || (card.rank == _this.selected.rank && card.suit <= _this.selected.suit)) {
                                // Add point to list of scuttles
                                _this.validTargets.push(card);
                            }
                        });
                        moves.push("field");
                        break;
                    case 10:
                        // Determine legal scuttles
                        this.game.bot.points.forEach(function (card) {
                            if (card.rank < _this.selected.rank || (card.rank == _this.selected.rank && card.suit <= _this.selected.suit)) {
                                // Add point to list of scuttles
                                _this.validTargets.push(card);
                            }
                        });
                        moves.push("field");
                        break;
                    case 11:
                        if (this.game.bot.numQueens < 1) {
                            this.game.bot.points.forEach(function (card) {
                                _this.validTargets.push(card);
                            });
                        }
                        break;
                    case 12:
                    case 13:
                        moves.push("field");
                        break;
                }
            }
            return moves;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "game", {
        // Current game is the last in the history
        get: function () {
            return this.history[this.history.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.update = function (oldGame, newGame) {
        console.log(newGame);
        this.history.push(newGame);
        if (this.game.player.isWinner) {
            alert("You won! Way to go!");
        }
        else {
            var suggestion = this.botBrain.suggestMove(oldGame, newGame);
            if (suggestion)
                alert(suggestion);
        }
        if (this.game.bot.isWinner) {
            // alert("Aww, you lost! Nice try.");
        }
    };
    GameService.prototype.undo = function () {
        if (this.history.length > 1) {
            this.history.pop();
        }
        else {
            alert("We are back at the beginning of the game! Try making a move");
        }
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/game.ts":
/*!*************************!*\
  !*** ./src/app/game.ts ***!
  \*************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/app/card.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/app/player.ts");



var Game = /** @class */ (function () {
    function Game() {
        this.deck = new Array();
        this.scrap = new Array();
        this.players = new Array();
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](true)); //Bot goes first
        this.players.push(new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](false)); //Human player second
        // Create deck
        for (var suit = 0; suit < 4; suit++) {
            for (var rank = 1; rank < 14; rank++) {
                this.deck.push(new _card__WEBPACK_IMPORTED_MODULE_1__["Card"](suit, rank));
            }
        }
        this.shuffle(); // Shuffle deck
        // Deal
        this.bot.hand.push(this.deck.shift()); //Extra card to player
        // Player gets 5 and goes first, Bot gets 6
        for (var i = 0; i < 5; i++) {
            this.players[0].hand.push(this.deck.shift());
            this.players[1].hand.push(this.deck.shift());
        }
    }
    Object.defineProperty(Game.prototype, "bot", {
        // turn: number;
        ////////////
        // Getters//
        ////////////
        get: function () {
            return this.players[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "player", {
        get: function () {
            return this.players[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "botWins", {
        get: function () {
            return this.bot.isWinner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "playerWins", {
        get: function () {
            return this.player.isWinner;
        },
        enumerable: true,
        configurable: true
    });
    /////////////
    // Methods //
    /////////////
    // Shuffles deck
    Game.prototype.shuffle = function () {
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.deck[j], this.deck[i]], this.deck[i] = _a[0], this.deck[j] = _a[1];
        }
        var _a;
    };
    Game.prototype.copy = function () {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this);
    };
    return Game;
}());



/***/ }),

/***/ "./src/app/hand/hand.component.css":
/*!*****************************************!*\
  !*** ./src/app/hand/hand.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\t/* height: 100%; */\r\n\tmargin-left: 2%;\r\n}\r\nimg {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\t/* height: 100%; */\r\n\tmax-height: 200px;\r\n}\r\n.selected {\r\n\tborder: 2px solid green;\r\n}"

/***/ }),

/***/ "./src/app/hand/hand.component.html":
/*!******************************************!*\
  !*** ./src/app/hand/hand.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let card of player.hand index as i\">\r\n\t<img *ngIf=\"player.isBot\" src=\"assets/cardBack.png\" class=\"card\">\r\n\t<img *ngIf=\"!player.isBot\" src=\"assets/cards/{{card.img}}\" class=\"card\" (click)=clickCard(i) [ngClass]=\"{'selected': card == selected}\">\r\n</div>"

/***/ }),

/***/ "./src/app/hand/hand.component.ts":
/*!****************************************!*\
  !*** ./src/app/hand/hand.component.ts ***!
  \****************************************/
/*! exports provided: HandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandComponent", function() { return HandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandComponent = /** @class */ (function () {
    function HandComponent(gameService) {
        this.gameService = gameService;
    }
    Object.defineProperty(HandComponent.prototype, "selected", {
        get: function () {
            return this.gameService.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HandComponent.prototype, "select", {
        set: function (card) {
            this.gameService.selected = card;
        },
        enumerable: true,
        configurable: true
    });
    HandComponent.prototype.clickCard = function (index) {
        // alert(index);
        if (this.player.hand[index] != this.selected) {
            this.select = this.player.hand[index];
            this.gameService.selIndex = index;
        }
        else {
            this.select = null;
            this.gameService.selIndex = null;
        }
    };
    HandComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _player__WEBPACK_IMPORTED_MODULE_1__["Player"])
    ], HandComponent.prototype, "player", void 0);
    HandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hand',
            template: __webpack_require__(/*! ./hand.component.html */ "./src/app/hand/hand.component.html"),
            styles: [__webpack_require__(/*! ./hand.component.css */ "./src/app/hand/hand.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], HandComponent);
    return HandComponent;
}());



/***/ }),

/***/ "./src/app/mock_game.ts":
/*!******************************!*\
  !*** ./src/app/mock_game.ts ***!
  \******************************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/app/game.ts");

var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
// console.log(game);



/***/ }),

/***/ "./src/app/move.ts":
/*!*************************!*\
  !*** ./src/app/move.ts ***!
  \*************************/
/*! exports provided: Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/app/card.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var Move = /** @class */ (function () {
    function Move(name, game, card, index, target, target_index) {
        this.name = name;
        this.game = game;
        this.card = card;
        this.index = index;
        this.target = target;
        this.target_index = target_index;
        this.results = this.findResults(this.game);
    }
    Move.prototype.findResults = function (game) {
        var resulting_games = [];
        if (game.player.hand.length < 8 && game.deck.length > 0) {
            var game_copy = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(game);
            game_copy.player.hand.push(game_copy.deck.shift());
            resulting_games.push(game_copy);
        }
        // Assume player plays the ten of spades to evaluate player's offense
        var player_plays_ten = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(game);
        player_plays_ten.player.points.push(new _card__WEBPACK_IMPORTED_MODULE_0__["Card"](3, 10));
        player_plays_ten.player.hand.shift();
        resulting_games.push(player_plays_ten);
        return resulting_games;
    };
    return Move;
}());



/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(isBot) {
        this.isBot = isBot;
        this.hand = new Array();
        this.points = new Array();
        this.faceCards = new Array();
    }
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            var res = 0;
            this.points.forEach(function (card) {
                res += card.rank;
            });
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "numKings", {
        get: function () {
            var res = 0;
            this.faceCards.forEach(function (card) {
                if (card.rank == 13)
                    res++;
            });
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "numQueens", {
        get: function () {
            var res = 0;
            this.faceCards.forEach(function (card) {
                if (card.rank == 12)
                    res++;
            });
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "pointTotal", {
        get: function () {
            var res = 0;
            this.points.forEach(function (card) {
                res += card.rank;
            });
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "remainingPointsNeededToWin", {
        get: function () {
            var res = 21;
            switch (this.numKings) {
                case 0:
                    res = 21;
                    break;
                case 1:
                    res = 14;
                    break;
                case 2:
                    res = 10;
                    break;
                case 3:
                    res = 7;
                    break;
                case 4:
                    res = 5;
                    break;
            }
            res -= this.pointTotal;
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "couldWinWithKing", {
        get: function () {
            var res = false;
            switch (this.numKings) {
                case 0:
                    if (this.pointTotal >= 14)
                        res = true;
                    break;
                case 1:
                    if (this.pointTotal >= 10)
                        res = true;
                    break;
                case 2:
                    if (this.pointTotal >= 7)
                        res = true;
                    break;
                case 3:
                    if (this.pointTotal >= 5)
                        res = true;
                    break;
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "isWinner", {
        get: function () {
            var res = false;
            var score = this.score;
            var numKings = this.numKings;
            switch (numKings) {
                case 0:
                    if (score >= 21)
                        res = true;
                    break;
                case 1:
                    if (score >= 14)
                        res = true;
                    break;
                case 2:
                    if (score >= 10)
                        res = true;
                    break;
                case 3:
                    if (score >= 7)
                        res = true;
                    break;
                case 4:
                    if (score >= 5)
                        res = true;
                    break;
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());



/***/ }),

/***/ "./src/app/scrap-view/scrap-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/scrap-view/scrap-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n\ttext-align: center;\r\n}\r\nimg {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\theight: 40%;\r\n\tmargin-top: 3%;\r\n\tmargin-left: 1%;\r\n}"

/***/ }),

/***/ "./src/app/scrap-view/scrap-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/scrap-view/scrap-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Choose a card from the scrap pile</h1>\r\n<img *ngFor=\"let card of gameService.game.scrap index as index\" src=\"assets/cards/{{card.img}}\" (click)=\"chooseCard(index)\">"

/***/ }),

/***/ "./src/app/scrap-view/scrap-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/scrap-view/scrap-view.component.ts ***!
  \****************************************************/
/*! exports provided: ScrapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapViewComponent", function() { return ScrapViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrapViewComponent = /** @class */ (function () {
    function ScrapViewComponent(gameService) {
        this.gameService = gameService;
    }
    ScrapViewComponent.prototype.chooseCard = function (index) {
        var gameCopy = this.gameService.gameCopy.copy();
        var oldGame = this.gameService.oldGameCopy.copy();
        // Move chosen card to player's hand
        gameCopy.player.hand.push(gameCopy.scrap.splice(index, 1)[0]);
        gameCopy.scrap.push(gameCopy.oneOff);
        // Clear out temp data
        gameCopy.oneOff = null;
        this.gameService.gameCopy = null;
        this.gameService.oldGameCopy = null;
        this.gameService.chooseScrap = false;
        // Make bot move
        gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
        // Update game
        this.gameService.update(oldGame, gameCopy);
    };
    ScrapViewComponent.prototype.ngOnInit = function () {
    };
    ScrapViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrap-view',
            template: __webpack_require__(/*! ./scrap-view.component.html */ "./src/app/scrap-view/scrap-view.component.html"),
            styles: [__webpack_require__(/*! ./scrap-view.component.css */ "./src/app/scrap-view/scrap-view.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], ScrapViewComponent);
    return ScrapViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Metals\Sem 1\Human-AI Interaction\Final Project\cuttle-angular-ai\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map