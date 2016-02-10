(function () {
    "use strict";

    angular.module("video-catalog.videoStore.Service", [])
        .factory("videoStore", videoStore);

    function videoStore() {

        //locals
        var nameVideoStore = "videoPortal",
            videoCollection = JSON.parse(window.localStorage.getItem(nameVideoStore)) || [];

        //API
        return {
            setVideo: setVideo,
            getVideo: getVideo,
            getVideoItem: getVideoItem,
            saveVideo: saveVideo,
            removeVideo: removeVideo,
            searchVideo: searchVideo
        };

        //implementation
        function setVideo(video, index) {
            if (index) {
                videoCollection[index] = video;
            } else {
                videoCollection.push(video);
            }
            return this;
        }

        function getVideo() {
            return videoCollection;
        }

        function removeVideo(index) {
            videoCollection.splice(index, 1);
        }

        function searchVideo(text) {
            for (var i = 0, len = videoCollection.length; i < len; i++) {
                for (var e in videoCollection[i]) {
                    if ((videoCollection[i])[e] === text) {
                        return videoCollection[i];
                    }
                }
            }
        }

        function saveVideo() {
            var videoCollectionInString = JSON.stringify(videoCollection);
            window.localStorage.setItem(nameVideoStore, videoCollectionInString);
        }

        function getVideoItem(index) {
            return videoCollection[index];
        }
    }
})();