/*jslint vars: true , nomen: true, devel: true, plusplus:true*/
/*global $, jQuery*/
var EC = EC || {};
EC.InputTypes = EC.InputTypes || {};
EC.InputTypes = (function (module) {
    'use strict';

    module.location = function (the_value, the_input) {

        //to cache dom lookups
        var location = {};
        var span_label = $('span.label');
        var value = the_value;
        var input = the_input;
        var attempts = 10;
        var requests = [];
        var geolocation_request;
        var is_first_attempt = true;

        //update label text
        span_label.text(input.label);

        //Localise
        if (window.localStorage.DEVICE_LANGUAGE !== EC.Const.ENGLISH) {
            EC.Localise.applyToHTML(window.localStorage.DEVICE_LANGUAGE);
        }

        var set_location_btn = $('div#location div#input-location div#set-location');
        var set_location_result = $('textarea#set-location-result');
        var accuracy_result = $('div#location  div#input-location div.current-accuracy-result');
        var accuracy_tip = $('div#location  div#input-location div.location-accuracy-tip');

        //hide feedback when showing the view the first time
        $(accuracy_result).addClass('not-shown');
        $(accuracy_tip).addClass('not-shown');

        //set previous location value if any
        set_location_result.val(value);

        function _showAcquiredLocation() {

            //clearAllRequests();

            $(accuracy_result).find('span').text(Math.floor(location.accuracy));
            $(accuracy_result).removeClass('not-shown');
            $(accuracy_tip).removeClass('not-shown');

            EC.Notification.hideProgressDialog();

            set_location_result.val(//
                'Latitude: ' + location.latitude + ',\n' + //
                'Longitude: ' + location.longitude + ',\n' + //
                'Altitude: ' + location.altitude + ',\n' + //
                'Accuracy: ' + location.accuracy + ',\n' + //
                'Altitude Accuracy: ' + location.altitude_accuracy + ',\n' + //
                'Bearing: ' + location.heading + '\n');
            //

            if (!EC.Utils.isChrome()) {
                EC.Notification.showToast(EC.Localise.getTranslation('location_acquired'), 'short');
            }
            set_location_btn.one('vclick', _getLocation);


        }

        //request position
        //todo this can be improved firing watchPosition when starting the form with a location so the first location is already accurate enough
        function requestPosition() {

            console.log('requestPosition called');

            //on first attempt, get a quick and rough location just to get started
            //We do not use getCurrentPosition as it tends to give back a cached position when is it called, not looking for a new one each time
            if (is_first_attempt) {
                geolocation_request = navigator.geolocation.watchPosition(onGCPSuccess, onGCPError, {
                    maximumAge: 0,
                    timeout: 30000,
                    enableHighAccuracy: true
                });
            }
            else {

              /*
               on subsequent calls, check position for 3 secs and return.
               this will improve cases when watchPositionretunr immediately with the same value, as it might return more than once during the 3 secs period
               */
                window.setTimeout(function () {
                        //be safe in case after 3 secs we still do not have a location
                        window.navigator.geolocation.clearWatch(geolocation_request);
                        _showAcquiredLocation();
                        console.log('setTimeout called with location');
                    },
                    3000 //stop checking after 3 seconds (value is milliseconds)
                );

                //get location using watchPosition for more accurate results, It is called automatically when movement is detected,
                //not only when requesting it. Do thjis when user wants to improve location
                geolocation_request = navigator.geolocation.watchPosition(onGCPSuccess, onGCPError, {
                    maximumAge: 0,
                    timeout: 30000,
                    enableHighAccuracy: true
                });
            }
        }

        var _getLocation = function () {

            set_location_btn.off('vclick');
            requests = [];
            attempts = 10;

            //check id GPS is enabled on the device
            $.when(EC.Utils.isGPSEnabled()).then(function () {

                //gps is on
                EC.Notification.showProgressDialog(EC.Localise.getTranslation('locating'), EC.Localise.getTranslation('wait'));

                //On Android, mostly on old devices, halt the execution to solve loader spinner not hiding after a gps lock
                if (window.device.platform === EC.Const.ANDROID) {

                    //if the device is older than KitKat I assume it is slow to hide the spinning loader and I need the execution halt to clear race conditions
                    if (!(EC.Const.KITKAT_REGEX.test(window.device.version) || EC.Const.LOLLIPOP_REGEX)) {
                        EC.Utils.sleep(2000);
                    }
                }

                requestPosition();

            }, function () {
                console.log('gps NOT enabled');

                //no gps...do we have at least an internet connection?
                //TODO: replace with location services network
                //if (!EC.Utils.hasConnection()) {

                //console.log('No internet connection');

                EC.Notification.showAlert(EC.Localise.getTranslation('error'), EC.Localise.getTranslation('gps_disabled'));

                //  }
            });

        };

        var onGCPSuccess = function (position) {

            console.log('onGCPSuccess called, accuracy: ' + position.coords.accuracy);

            //get HTML5 geolocation component values replacing null with '' for not available components
            location.latitude = (position.coords.latitude === null) ? '' : position.coords.latitude;
            location.longitude = (position.coords.longitude === null) ? '' : position.coords.longitude;
            location.altitude = (position.coords.altitude === null) ? '' : position.coords.altitude;
            location.accuracy = (position.coords.accuracy === null) ? '' : position.coords.accuracy;
            location.altitude_accuracy = (position.coords.altitudeAccuracy === null) ? '' : position.coords.altitudeAccuracy;
            location.heading = (position.coords.heading === null) ? '' : position.coords.heading;


            if (is_first_attempt) {
                is_first_attempt = !is_first_attempt;
                window.navigator.geolocation.clearWatch(geolocation_request);
                _showAcquiredLocation();
            }
        };

        // onError Callback receives a PositionError object
        var onGCPError = function (error) {

            var empty = '';

            window.navigator.geolocation.clearWatch(geolocation_request);

            EC.Notification.hideProgressDialog();

            console.log(JSON.stringify(error));

            if (error.code === 3) {
                EC.Notification.showAlert(EC.Localise.getTranslation('error'), error.message + EC.Localise.getTranslation('location_fail'));

            } else if (error.code === 1) {

                if (window.device.platform === EC.Const.IOS) {
                    EC.Notification.showAlert(EC.Localise.getTranslation('error'), EC.Localise.getTranslation('location_service_fail'));
                }
            } else {
                EC.Notification.showAlert(EC.Localise.getTranslation('error'), EC.Localise.getTranslation('unknow_error'));
            }

            //set location object to empty values
            set_location_result.val(//
                'Latitude: ' + empty + ',\n' + //
                'Longitude: ' + empty + ',\n' + //
                'Altitude: ' + empty + ',\n' + //
                'Accuracy: ' + empty + ',\n' + //
                'Altitude Accuracy: ' + empty + ',\n' + //
                'Bearing: ' + empty + '\n');
            //

            set_location_btn.one('vclick', _getLocation);

        };

        //bind set location button
        set_location_btn.off().one('vclick', _getLocation);

    };

    return module;

}(EC.InputTypes)
)
;
