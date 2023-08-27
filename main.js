const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYuMjEgMTk0LjciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmZmZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEzNywwYzM3LjYyLjU3LDc3LjY5LDE2LjcyLDExMSw0OS4xMSwxMC40NCwxMC4xNCwxMC44LDI0LjM5LDEuMjQsMzQuMzdzLTIzLjkzLDEwLTM0LjM3LS4wOWMtMTQuMzktMTMuOTEtMzAuNzgtMjQuNTQtNTAtMzAtNDUuNjItMTMtODYuMTUtMy41Ny0xMjEuNjQsMjguMDYtNC4yMSwzLjc1LTkuNDEsNy4yLTE0LjczLDguN0MxOC40NCw5Myw4LjQ4LDg3Ljc4LDMuMiw3OC41Mi0xLjg2LDY5LjY3LTEsNTguNzYsNi4zMiw1MS4xOUExNjUuODksMTY1Ljg5LDAsMCwxLDI1LDM0LjYyQzU0Ljg0LDExLjgyLDkwLjYyLDAsMTM3LDBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI4LjEyLDczLjRjMjYuMTIuNjUsNDguNjksOS40Miw2Ny41MiwyNy4zNCwxMC43MSwxMC4yLDExLjM3LDI0LjU2LDEuNzUsMzQuNjgtOS40MSw5Ljg4LTIzLjY3LDEwLTM0LjM3LjE3LTIxLTE5LjIzLTQ4Ljc2LTE5LjI0LTY5Ljc2LDAtMTAuNzEsOS44LTI0LjkzLDkuNzMtMzQuMzgtLjE1LTkuNjQtMTAuMDktOS0yNC40NSwxLjczLTM0LjY2Qzc5LjU3LDgyLjcyLDEwMi4zMiw3NCwxMjguMTIsNzMuNFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjguMTYsMTk0LjdBMjMuNzUsMjMuNzUsMCwxLDEsMTUyLDE3MC44OCwyMy43NCwyMy43NCwwLDAsMSwxMjguMTYsMTk0LjdaIi8+PC9nPjwvZz48L3N2Zz4=';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitMqtt {

    getInfo () {
        return {
            id: 'YoloBitMqttExtension',
            parentMode: 'yoloBit',
            name: 'MQTT',
            blockIconURI: iconURL,
            allowBlockTypes: {
            },
            color1: '#e65722',
            color2: '#e65722',
            blocks: [
                {
                    opcode: 'mqtt_connect_wifi',
                    rawCode: {
                        imports: 'from mqtt import *\n',
                        code:'mqtt.connect_wifi(/*{SSID}*/, /*{PASSWORD}*/)\n'
                    },
                    text: [
                        {
                            default: 'kết nối Wifi [SSID] mật khẩu [PASSWORD]',
                            id: "gui.externalExtension.YoloBitMqttExtension.mqtt_connect_wifi"
                        }
                    ],
                    arguments: {
                        SSID: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'tài khoản'
                        },
                        PASSWORD: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'mật khẩu'
                        }
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'mqtt_connect_server',
                    rawCode: {
                        imports: 'from mqtt import *\n',
                        code:"mqtt.connect_broker(server='/*{SERVER}*/', port=1883, username=/*{USERNAME}*/, password=/*{KEY}*/)\n"
                    },
                    text: [
                        {
                            default: 'kết nối đến server [SERVER] với username[USERNAME] key [KEY]',
                            id: "gui.externalExtension.YoloBitMqttExtension.mqtt_connect_server"
                        }
                    ],
                    arguments: {
                        USERNAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'tài khoản'
                        },
                        KEY: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'key'
                        },
                        SERVER: {
                            menu: 'servers'
                        }
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'mqtt_publish',
                    rawCode: {
                        imports: 'from mqtt import *\n',
                        code:'mqtt.publish(/*{TOPIC}*/, /*{VALUE}*/)\n'
                    },
                    text: [
                        {
                            default: 'gửi [VALUE] đến chủ đề [TOPIC]',
                            id: "gui.externalExtension.YoloBitMqttExtension.mqtt_publish"
                        }
                    ],
                    arguments: {
                        VALUE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'hello'
                        },
                        TOPIC: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'V1'
                        }
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'mqtt_update',
                    rawCode: {
                        imports: 'from mqtt import *\n',
                        code:'mqtt.check_message()\n'
                    },
                    text: [
                        {
                            default: 'cập nhật thông tin từ server',
                            id: "gui.externalExtension.YoloBitMqttExtension.mqtt_update"
                        }
                    ],
                    arguments: {
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'mqtt_receie_topic',
                    rawCode: {
                        imports: 'from mqtt import *\n'
                    },
                    customGenerator: "const noQuoteTopic = args.FEEDS.slice(1,-1);\n"
                        + "return {"
                        + "'function': `def on_mqtt_message_receive_callback__${noQuoteTopic}:\\n${args.DO}`+ '    pass\\n',"
                        + "'code': `mqtt.on_receive_message('${noQuoteTopic}', on_mqtt_message_receive_callback__${noQuoteTopic})`"
                        + "}",
                    text: [
                        {
                            default: 'khi nhận được thông tin từ chủ đề [FEEDS] ',
                            id: 'gui.extension.YoloBitMqttExtension.mqtt_receie_topic'
                        },
                        '[DO]'
                    ],
                    arguments: {    
                        FEEDS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'V1'
                        },                    
                        DO: {
                            type: Scratch.ArgumentType.STATEMENT
                        }
                    },
                    disablePreviousStatement: false,
                    disableNextStatement: false,
                    blockType: Scratch.BlockType.CUSTOM
                },
                {
                    opcode: 'mqtt_message',
                    rawCode: {
                        code:'th_C3_B4ng_tin'
                    },
                    text: [
                        {
                            default: 'thông tin từ server',
                            id: "gui.externalExtension.YoloBitMqttExtension.mqtt_message"
                        }
                    ],
                    arguments: {
                        
                    },
                    blockType: Scratch.BlockType.STRING
                }

            ],
            menus:{                
                servers: [
                    {
                        text: {
                            default: 'OhStem',
                            id: 'gui.externalExtension.YoloBitMqttExtension.ohstem'
                        },
                        value: 'mqtt.ohstem.vn'
                    },
                    {
                        text: {
                            default:'Adafruit.io',
                            id: 'gui.externalExtension.YoloBitMqttExtension.adafruit'
                        },
                        value: 'io.adafruit.com'
                    }
                ]
            }
        };
    }
}

Scratch.extensions.register(new Scratch3YoloBitMqtt());