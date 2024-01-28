let config = {
    address: "localhost",
    port: 8080,
    basePath: "/",
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",

    language: "en",
    locale: "en-US",
    logLevel: [
        // "DEBUG",
        // "INFO",
        // "LOG",
        "WARN",
        "ERROR",
    ],
    timeFormat: 12,
    units: "imperial",
    zoom: 2,

    modules: [{
        module: "clock",
        position: "top_bar",
        config: {
            displaySeconds: false,
            dateFormat: "dddd, MMMM Do",
        },
    }, {
        module: "calendar",
        header: "Calendar",
        position: "top_left",
        config: {
            maximumNumberOfDays: 2,
            limitDays: 2,
            timeFormat: "dateheaders",
            calendars: [{
                fetchInterval: 5 * 60 * 1000,
                symbol: "calendar-check",
                url: "https://calendar.google.com/calendar/ical/c_5a2f9c7739dc5a8e6f01ea70476efab35856764631f141ee20ca654019d79a2f%40group.calendar.google.com/private-29af58715f58759b1dddda1f11568098/basic.ics"
            }, {
                fetchInterval: 7 * 24 * 60 * 60 * 1000,
                symbol: "star",
                url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
            }]
        }
    }, {
        module: "weather",
        header: "Weather",
        position: "bottom_left",
        config: {
            weatherProvider: "weathergov",
            type: "current",
            onlyTemp: true,
            apiBase: "https://api.weather.gov/points/",
            lat: 40.90492,
            lon: -111.87477,

            // type: "current",
            // weatherEndpoint: "onecall",
            // lat: 40.90492,
            // lon: -111.87477,
            // apiKey: "1685e7034b5f50c57fc0ab96c53d57c2",
        }
    }]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
