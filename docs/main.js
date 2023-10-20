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

module.exports = ".flex-all {\n\tdisplay: flex;\n\tflex-direction: row;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.flex-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n  width: 100%;\n  margin-right: 5%;\n}\n\n#side {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n  margin: 220px 2%;\n  width:15%;\n  min-width: 125px;\n}\n\n#undo {\n\tdisplay: inline-block;\n\theight: 8%;\n  max-height: 64px;\n}\n\n#botHand, #yourHand {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 80%;\n}\n\n#indicator {\n\tfont-family: Arial, Helvetica, sans-serif;\n\tfont-size: 2em;\n}\n\n#deck {\n\theight: 160px;\n}\n\n#scrap {\n\theight: 160px;\n\tmargin-top: 10%;\n}\n\n#field {\n\tposition: relative;\n\tjustify-content: center;\n\tborder: 2px solid black;\n\twidth: 100%;\n\tmin-height: 360px;\n\tmax-height: 600px;\n}\n\n.field {\n\tposition: relative;\n}\n\n.fieldArea {\n\tdisplay: inline-block;\n\tposition: relative;\n\tmin-height: 180px;\n\n}\n\n#yourField {\n  min-height: 180px;\n  height: 180px;\n  display: flex;\n  flex-direction: row;\n}\n\n#botField {\n\tmin-height: 180px;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.yourPointCard {\n\tdisplay: inline-block;\n}\n\n.pointCardImg {\n\tdisplay: inline-block;\n\tmax-height: 180px;\n}\n\n.jack {\n\tmax-height: 180px;\n\tposition: relative;\n\tmargin-left: -90px;\n\tmargin-right: 10px;\n}\n\n.legalMove {\n\tbackground-color: rgb(91, 194, 69);\n}\n\n.validTarget {\n\tborder: 3px solid rgb(91, 194, 69);\n}\n\n/*Scrap view overlaying field*/\n\napp-scrap-view {\n\tposition: absolute;\n\tdisplay: block;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: #FFF;\n\tz-index: 3;\n}\n\napp-deck-view {\n\tposition: absolute;\n\tdisplay: block;\n\theight: 100%;\n\twidth: 50%;\n\tmargin-left: 50%;\n\tbackground-color: #FFF;\n\tz-index: 3;\n}\n\n#revealedDeck {\n\tdisplay: block;\n\ttop: 120%;\n}\n\n.revealedDeckCard {\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 160px;\n}\n\n/* Landscape */\n\n@media only screen\nand (min-device-width: 320px)\nand (max-device-width: 812px)\n/* and (-webkit-min-device-pixel-ratio: 2) */\nand (orientation: landscape) {\n  .flex-all {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin: 0 auto;\n  }\n\n  .flex-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin-right: 5%;\n  }\n\n  #side {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 65vh;\n    margin: 15% 2% 0 0;\n    width: 10%;\n    max-width: 75px;\n    min-width: 50px;\n  }\n\n  #undo {\n    display: inline-block;\n    position: absolute;\n    height: 8%;\n    max-height: 24px;\n  }\n\n  #botHand, #yourHand {\n    display: flex;\n    justify-content: center;\n    width: 80%;\n    margin-right: 5%;\n  }\n\n  #indicator {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 2em;\n  }\n\n\n  #deck {\n    height: 20%;\n  }\n\n  #scrap {\n    height: 20%;\n    margin-top: 10%;\n  }\n\n\n\n  #field {\n    position: relative;\n    justify-content: center;\n    border: 2px solid black;\n    width: 100%;\n    min-height: 140px;\n    max-height: 150px;\n  }\n\n\n  .field {\n    position: relative;\n  }\n  .fieldArea {\n    display: inline-block;\n    position: relative;\n    min-height: 90px;\n\n  }\n  #yourField {\n    min-height: 75px;\n    height: 75px;\n    display: flex;\n    flex-direction: row;\n  }\n  #botField {\n    min-height: 75px;\n    height: 75px;\n    display: flex;\n    flex-direction: row;\n  }\n\n  .yourPointCard {\n    display: inline-block;\n  }\n  .pointCardImg {\n    display: inline-block;\n    max-height: 75px;\n  }\n\n  .jack {\n    max-height: 75px;\n    position: relative;\n    margin-left: -40px;\n    margin-right: 10px;\n  }\n\n  .legalMove {\n    background-color: rgb(91, 194, 69);\n  }\n  .validTarget {\n    border: 3px solid rgb(91, 194, 69);\n  }\n\n  /*Scrap view overlaying field*/\n  app-scrap-view {\n    position: absolute;\n    display: block;\n    height: 100%;\n    width: 100%;\n    background-color: #FFF;\n    z-index: 3;\n  }\n\n  app-deck-view {\n    position: absolute;\n    display: block;\n    height: 100%;\n    width: 50%;\n    margin-left: 50%;\n    background-color: #FFF;\n    z-index: 3;\n  }\n\n  #revealedDeck {\n    display: block;\n    position: absolute;\n    height: 100%;\n    top: 120%;\n  }\n\n  .revealedDeckCard {\n    display: inline-block;\n    position: relative;\n    height: 10%;\n  }\n\n  #indicator {\n    font-size: 12px;\n  }\n\n\n  #toggle {\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img id=\"undo\" src=\"assets/back-arrow.png\" (click)=\"undo()\">\n\n<div class=\"flex-all\">\n\t<div id=\"side\">\n\t\t<img src=\"assets/deck.jpg\" id=\"deck\" (click)=\"draw()\">\n\t\t<img src=\"assets/scrap.jpg\" id=\"scrap\" (click)=\"untargetedOneOff()\" [ngClass]=\"{'validTarget': gs.selected &&  [1, 3, 4, 5, 6, 7].indexOf(gs.selected.rank) > -1}\">\n\t</div>\n\n\t<div class=\"flex-container\">\n\n\t\t<!-- <div class=\"flex-container flex1\"> -->\n\t\t<app-hand id=\"botHand\" [player]=\"game.players[0]\" [ngClass]=\"{'legalMove': gs.selected && gs.selected.rank == 8}\" (click)=\"playGlasses()\"></app-hand>\n\t\t<!-- </div> -->\n\n\n\t\t<div id=\"field\">\n\t\t\t<app-scrap-view *ngIf=\"gs.chooseScrap\"></app-scrap-view>\n\t\t\t<app-deck-view *ngIf=\"gs.chooseDeck\"></app-deck-view>\n\t\t\t<div id=\"botField\" class=\"field\">\n\t\t\t\t<div id=\"botPoints\" class=\"fieldArea\">\n\t\t\t\t\t<div *ngFor=\"let card of game.bot.points index as index\" class=\"yourPointCard\">\n\t\t\t\t\t\t<img src=\"assets/cards/{{card.img}}\" [ngClass]=\"{'validTarget': gameService.validTargets.indexOf(card) > -1}\"\n\t\t\t\t\t\t (click)=\"targetPoint(card, index)\" class=\"pointCardImg\">\n\t\t\t\t\t\t<img *ngFor=\"let jack of card.jacks index as jackIndex\" src=\"assets/cards/{{jack.img}}\" class=\"jack\" [ngClass]=\"{'validTarget': gameService.validTargets.indexOf(jack) > -1}\" (click)=\"targetedOneOffJack(card, index)\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"botFaceCards\" class=\"fieldArea\">\n\t\t\t\t\t<img *ngFor=\"let card of game.bot.faceCards\" src=\"assets/cards/{{card.img}}\" class=\"pointCardImg\" [ngClass]=\"{'validTarget': gameService.validTargets.indexOf(card) > -1}\" (click)=\"targetedOneOffFaces(card, index)\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id=\"yourField\" class=\"field\" [ngClass]=\"{'legalMove': gs.legalMoves.indexOf('field') > -1}\" (click)='playToField()'>\n\t\t\t\t<div id=\"yourPoints\" class=\"fieldArea\">\n\n\t\t\t\t\t<div *ngFor=\"let card of game.player.points\" class=\"yourPointCard\">\n\t\t\t\t\t\t<img src=\"assets/cards/{{card.img}}\" class=\"pointCardImg\">\n\t\t\t\t\t\t<img *ngFor=\"let jack of card.jacks\" src=\"assets/cards/{{jack.img}}\" class=\"jack\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"yourPointsFace\" class=\"fieldArea\">\n\t\t\t\t\t<img *ngFor=\"let card of game.player.faceCards\" src=\"assets/cards/{{card.faceImg}}\" class=\"pointCardImg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-hand id=\"yourHand\" [player]=\"game.players[1]\"></app-hand>\n\t\t<div id=\"indicator\">Victory requirements: {{game.player.remainingPointsNeededToWin}} points</div>\n    <div *ngIf=\"NODE_ENV === 'development'\">\n\t\t  <button id=\"toggle\" (click)=\"showDeck = !showDeck\">Toggle Deck</button>\n\t\t  <div *ngIf=\"showDeck\" id=\"revealedDeck\">\n\t\t\t  <img *ngFor=\"let card of game.deck index as index\" src=\"assets/cards/{{card.img}}\" class=\"revealedDeckCard\" (click)=\"stackDeck(index)\">\n\t\t  </div>\n    </div>\n\t</div>\n\n</div>\n"

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
        // not including eights as face cards yet
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
    BoardComponent.prototype.playGlasses = function () {
        if (this.gameService.selected && this.gameService.selected.rank == 8) {
            var gameCopy = this.game.copy();
            var oldGame = this.game.copy();
            gameCopy.player.faceCards.push(gameCopy.player.hand.splice(this.gameService.selIndex, 1)[0]);
            // Delete selection
            this.gameService.selected = null;
            this.gameService.selIndex = null;
            // Update game
            gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
            this.gameService.update(oldGame, gameCopy);
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
    Object.defineProperty(Card.prototype, "faceImg", {
        get: function () {
            if (this.rank == 8) {
                switch (this.suit) {
                    case 0:
                        return 'Glasses_Clubs.jpg';
                    case 1:
                        return 'Glasses_Diamonds.jpg';
                    case 2:
                        return 'Glasses_Hearts.jpg';
                    case 3:
                        return 'Glasses_Spades.jpg';
                }
            }
            else {
                return "card_" + this.suit + "_" + this.rank + ".png";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            switch (this.suit) {
                case 0:
                    return this.rank_name + " of Clubs";
                // break;
                case 1:
                    return this.rank_name + " of Diamonds";
                // break;
                case 2:
                    return this.rank_name + " of Hearts";
                // break;
                default:
                    return this.rank_name + " of Spades";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "rank_name", {
        get: function () {
            switch (this.rank) {
                case 1:
                    return 'Ace';
                case 11:
                    return 'Jack';
                case 12:
                    return 'Queen';
                case 13:
                    return 'King';
                default:
                    return this.rank.toString();
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

module.exports = "h1 {\n\ttext-align: center;\n}\nimg {\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 40%;\n\tmargin-top: 3%;\n\tmargin-left: 1%;\n}\n#topCard {\n\tmargin-left: 34%;\n}\n.selected {\n\tborder: 2px solid green;\n}"

/***/ }),

/***/ "./src/app/deck-view/deck-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/deck-view/deck-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Choose one of the top two cards from the deck to play</h1>\n<img src=\"assets/cards/{{gameService.game.deck[0].img}}\" id=\"topCard\" (click)=\"clickDeckCard(0)\" [ngClass]=\"{'selected': gameService.game.deck[0] == selected}\">\n<img src=\"assets/cards/{{gameService.game.deck[1].img}}\" (click)=\"clickDeckCard(1)\" [ngClass]=\"{'selected': gameService.game.deck[1] == selected}\">"

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

module.exports = "div {\n\tposition: relative;\n\tdisplay: inline-block;\n\t/* height: 100%; */\n\tmargin-left: 2%;\n\tmargin-top: 2%;\n\tmargin-bottom: 2%;\n}\nimg {\n\tposition: relative;\n\tdisplay: inline-block;\n\t/* height: 100%; */\n\tmax-height: 160px;\n}\n.selected {\n\tborder: 2px solid green;\n}\np {\n\tdisplay: block;\n\tposition: absolute;\n\tz-index: 4;\n\tborder-radius: 5px;\n\twidth: 130px;\n\tmargin-top: -75px;\n\tpadding: 5px 10px;\n\tfont-size: 1em;\n\tcolor: #039be5;\n\tbackground-color: #CFD8DC;\n}\n/* Landscape */\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 812px)\n  and (-webkit-min-device-pixel-ratio: 2)\n  and (orientation: landscape) {\n\n\timg {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\t/* height: 100%; */\n\t\tmax-height: 75px;\n\t}\n\n\tp {\n\t\tdisplay: flex;\n\t\tz-index: 4;\n\t\tborder-radius: 5px;\n\t\twidth: 75px;\n\t\tmargin-top: -25px;\n\t\tpadding: 5px 10px;\n\t\tfont-size: 0.3em;\n\t\tcolor: #039be5;\n\t\tbackground-color: #CFD8DC;\n\t}\n\n\t\n}"

/***/ }),

/***/ "./src/app/hand/hand.component.html":
/*!******************************************!*\
  !*** ./src/app/hand/hand.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let card of player.hand index as i\">\n\t<img *ngIf=\"player.isBot && !hasGlasses\" src=\"assets/cardBack.png\" class=\"card\">\n\t<img *ngIf=\"!player.isBot || hasGlasses\" src=\"assets/cards/{{card.img}}\" class=\"card\" (click)=clickCard(i) [ngClass]=\"{'selected': card == selected}\" (mouseover)=\"displayTooltip(i)\" (mouseout)=\"hideTooltip()\" (mouseleave)=\"hideTooltip()\">\n  \t<p *ngIf=\"showTooltip[i]\">{{tooltip}}</p>\n</div>"

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
        this.tooltip = '';
        this.showTooltip = [];
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
    Object.defineProperty(HandComponent.prototype, "hasGlasses", {
        get: function () {
            var res = false;
            this.gameService.game.player.faceCards.forEach(function (card) {
                if (card.rank == 8)
                    res = true;
            });
            return res;
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
    HandComponent.prototype.displayTooltip = function (index) {
        var tooltips = {
            "1": "Destroy all Point Cards in play.",
            "2": "On Turn: Destroy any non-point card. On Opponent’s Turn: Cancels the action of a card your opponent plays; cannot be used on Point Cards.",
            "3": "Look through the Scrap Pile and pick a card to add to your hand. You must show your opponent the card.",
            "4": "Make your opponent discard two cards of their choosing. If your opponent only has one card, you can still use a 4 on them.",
            "5": "Draw two cards.",
            "6": "Destroy all Face Cards in play.",
            "7": "Reveal the top two cards of the deck and choose one to play. The other card is put back on top of the deck.",
            "8": "(Not available) Place an 8 sideways and choose one opponent. The opponent must reveal their hand to you whenever you ask. The 8 is considered a Face Card when played in this fashion.",
            "9": "Return any card in play back to the owner’s hand. The player with the returned card cannot play it for their following turn.",
            "10": "Used for points.",
            "11": "Steal a Point Card or opposing Jack in play.",
            "12": "Your other cards cannot be affected by 2’s, 9’s, or Jack’s. Queens do not protect against scuttling. Having 2 Queens means you cannot be Jokered.",
            "13": "Reduces the amount of points you need to win. 1 King = 14 Points; 2 Kings = 10 Points; 3 Kings = 7 Points; 4 Kings = 5 Points",
            "14": ""
        };
        this.tooltip = tooltips[this.player.hand[index].rank.toString()];
        for (var i = 0; i < this.player.hand.length; i++) {
            this.showTooltip[i] = i === index ? true : false;
        }
    };
    HandComponent.prototype.hideTooltip = function () {
        console.log("hiding tooltip");
        this.showTooltip = [];
        this.tooltip = '';
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

module.exports = "h1 {\n\ttext-align: center;\n}\nimg {\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 40%;\n\tmargin-top: 3%;\n\tmargin-left: 1%;\n}"

/***/ }),

/***/ "./src/app/scrap-view/scrap-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/scrap-view/scrap-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Choose a card from the scrap pile</h1>\n<img *ngFor=\"let card of gameService.game.scrap index as index\" src=\"assets/cards/{{card.img}}\" (click)=\"chooseCard(index)\">"

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

module.exports = __webpack_require__(/*! /Users/ryanemberling/Code/cuttle/cuttle-bot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map