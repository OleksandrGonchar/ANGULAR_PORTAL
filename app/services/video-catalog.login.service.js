(function () {
    "use strict";

    angular.module("video-catalog.login.service", [])
        .service("loginService", [loginService]);

    function loginService() {
        //locals
        var currentUser,
            currentUserPassword,
            logined = false;

        //API
        return {
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            isLogined: isLogined,
            setLogined: setLogined,
            logout: logout
        };

        //implementation
        function getCurrentUser() {
            return currentUser;
        }

        function setCurrentUser(user, password) {
            currentUser = user;
            currentUserPassword = password;
            return this;
        }

        function setLogined(login, pass) {
            if(login === 'test' && pass === 'test') {
                logined = true;
                currentUser = login;
                currentUserPassword = pass;
                return this;
            }
        }

        function logout() {
            logined = false;
            currentUser = "No user - no problem";
            return this;
        }

        function isLogined() {
            return logined;
        }
    }
})();