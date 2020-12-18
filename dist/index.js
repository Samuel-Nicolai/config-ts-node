"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = (function () {
    function User(id, email, password, username) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
    }
    User.prototype.printUser = function () {
        return "\n        id: " + this.id + "\n        email: " + this.email + " \n        username: " + (this.username ? this.username : null) + " \n        ";
    };
    User.prototype.strongPassword = function () {
        var regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
        return regex.test(this.password);
    };
    return User;
}());
exports.User = User;
