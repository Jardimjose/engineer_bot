const { MessageEmbed } = require("discord.js");
const upperCase = require("../upperCase.js")
module.exports = {
    name: 'setup',
    description: 'Australia setup',
    execute(message, args) {
        let weatherTypes = ["dry", "wet"];
        let trackTypes = ["australia", "bahrain", "vietnam"];

        let tracks = {
            dry: {
                australia: {
                    aerodynamics: "Front Wing Aero: 5 \nRear Wing Aero: 4",
                    transmission: "Differential Adjustment On Throttle: 50%  \nDifferential Adjustment Off throttle: 50%",
                    suspensionGeometry: "Front Camber: -3.10 \nRear Camber: -1.40 \nFront Toe: 0.11 \nRear Toe: 0.39",
                    suspension: "Font Suspension: 4 Rear Suspension: 3 \nFront Anti-Roll Bar: 5 \nRear Anti-Roll Bar: 5 \nFront Ride Height: 5 \nRear Ride Height: 6",
                    brakes: "Brake Pressure: 100% \nFront Brake Bias: 53%",
                    tyrePressure: "Front Right Tyre Pressure: 22.2psi \nFront Left Tyre Pressure: 22.6psi \nRear Right Pressure: 21.9psi \nRear Left Tyre Pressure: 21.9psi"
                },
                bahrain: {
                    aerodynamics: "Front Wing Aero: 4 \nRear Wing Aero: 4",
                    transmission: "Differential Adjustment On Throttle: 60%  \nDifferential Adjustment Off throttle: 60%",
                    suspensionGeometry: "Front Camber: -2.80 \nRear Camber: -1.30 \nFront Toe: 0.08 \nRear Toe: 0.29",
                    suspension: "Font Suspension: 4 Rear Suspension: 5 \nFront Anti-Roll Bar: 3 \nRear Anti-Roll Bar: 4 \nFront Ride Height: 3 \nRear Ride Height: 3",
                    brakes: "Brake Pressure: 100% \nFront Brake Bias: 58%",
                    tyrePressure: "Front Right Tyre Pressure: 23.0psi \nFront Left Tyre Pressure: 23.0psi \nRear Right Pressure: 21.5psi \nRear Left Tyre Pressure: 21.5psi"
                },
                vietnam:{
                    aerodynamics: "Front Wing Aero: 4 \nRear Wing Aero: 4",
                    transmission: "Differential Adjustment On Throttle: 60%  \nDifferential Adjustment Off throttle: 60%",
                    suspensionGeometry: "Front Camber: -2.80 \nRear Camber: -1.30 \nFront Toe: 0.08 \nRear Toe: 0.29",
                    suspension: "Font Suspension: 4 Rear Suspension: 5 \nFront Anti-Roll Bar: 3 \nRear Anti-Roll Bar: 4 \nFront Ride Height: 3 \nRear Ride Height: 3",
                    brakes: "Brake Pressure: 100% \nFront Brake Bias: 58%",
                    tyrePressure: "Front Right Tyre Pressure: 23.0psi \nFront Left Tyre Pressure: 23.0psi \nRear Right Pressure: 21.5psi \nRear Left Tyre Pressure: 21.5psi"
                },

            },
            wet: {
                australia: {
                    aerodynamics: "Front Wing Aero: 6 \nRear Wing Aero: 6",
                    transmission: "Differential Adjustment On Throttle: 70%  \nDifferential Adjustment Off throttle: 65%",
                    suspensionGeometry: "Front Camber: -3.00 \nRear Camber: -1.50 \nFront Toe: 0.10 \nRear Toe: 0.35",
                    suspension: "Font Suspension: 5 Rear Suspension: 3 \nFront Anti-Roll Bar: 6 \nRear Anti-Roll Bar: 5 \nFront Ride Height: 5 \nRear Ride Height: 7",
                    brakes: "Brake Pressure: 100% \nFront Brake Bias: 50%",
                    tyrePressure: "Front Right Tyre Pressure: 23.0psi \nFront Left Tyre Pressure: 23.0psi \nRear Right Pressure: 19.5psi \nRear Left Tyre Pressure: 19.5psi"
                },
                bahrain: {
                    aerodynamics: "Front Wing Aero: 4 \nRear Wing Aero: 5",
                    transmission: "Differential Adjustment On Throttle: 60%  \nDifferential Adjustment Off throttle: 65%",
                    suspensionGeometry: "Front Camber: -3.00 \nRear Camber: -1.50 \nFront Toe: 0.05 \nRear Toe: 0.20",
                    suspension: "Font Suspension: 5 Rear Suspension: 3 \nFront Anti-Roll Bar: 6 \nRear Anti-Roll Bar: 10 \nFront Ride Height: 4 \nRear Ride Height: 5",
                    brakes: "Brake Pressure: 100% \nFront Brake Bias: 52%",
                    tyrePressure: "Front Right Tyre Pressure: 24.2psi \nFront Left Tyre Pressure: 24.2psi \nRear Right Pressure: 20.3psi \nRear Left Tyre Pressure: 20.3psi"
                },
                vietnam:{
                    aerodynamics: "Front Wing Aero: 4 \nRear Wing Aero: 4",
                    transmission: "Differential Adjustment On Throttle: 60%  \nDifferential Adjustment Off throttle: 60%",
                    suspensionGeometry: "Front Camber: -2.80 \nRear Camber: -1.30 \nFront Toe: 0.08 \nRear Toe: 0.29",
                    suspension: "Font Suspension: 4 Rear Suspension: 5 \nFront Anti-Roll Bar: 3 \nRear Anti-Roll Bar: 4 \nFront Ride Height: 3 \nRear Ride Height: 3",
                    brakes: "Brake Pressure: 100% \nFront Brake Bias: 58%",
                    tyrePressure: "Front Right Tyre Pressure: 23.0psi \nFront Left Tyre Pressure: 23.0psi \nRear Right Pressure: 21.5psi \nRear Left Tyre Pressure: 21.5psi"
                },
            },
        }
        const track = args[0];
        const weather = args[1];

        if (!trackTypes.includes(track)) return message.channel.send(`Unknown track type. Choose one from: ${trackTypes.join(", ")}`);
        if (!weatherTypes.includes(weather)) return message.channel.send(`Unknown weather type. Choose one from: ${weatherTypes.join(", ")}`);
        if (!track || !weather) return message.channel.send("No track or weather has been provided.");

        let _ = new MessageEmbed();
        _.setColor('#F71D00');
        _.setTitle(`Setup for ${upperCase(track)}`);
        _.addField(`Aerodynamics`, `${tracks[weather][track].aerodynamics}`);
        _.addField(`Transmission`, `${tracks[weather][track].transmission}`);
        _.addField(`Suspension Geometry`, `${tracks[weather][track].suspensionGeometry}`);
        _.addField(`Suspension`, `${tracks[weather][track].suspension}`);
        _.addField(`Brakes`, `${tracks[weather][track].brakes}`);
        _.addField(`Tyre Pressure`, `${tracks[weather][track].tyrePressure}`);
        _.setTimestamp()

        message.channel.send(_);
    },
};
