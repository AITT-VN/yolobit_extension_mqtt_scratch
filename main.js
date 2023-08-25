const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzZweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMzZweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xOCAxNi4wOGMtLjc2IDAtMS40NC4zLTEuOTYuNzdMOC45MSAxMi43Yy4wNS0uMjMuMDktLjQ2LjA5LS43cy0uMDQtLjQ3LS4wOS0uN2w3LjA1LTQuMTFjLjU0LjUgMS4yNS44MSAyLjA0LjgxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDNjMCAuMjQuMDQuNDcuMDkuN0w4LjA0IDkuODFDNy41IDkuMzEgNi43OSA5IDYgOWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM2MuNzkgMCAxLjUtLjMxIDIuMDQtLjgxbDcuMTIgNC4xNmMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjYxIDEuMzEgMi45MiAyLjkyIDIuOTIgMS42MSAwIDIuOTItMS4zMSAyLjkyLTIuOTJzLTEuMzEtMi45Mi0yLjkyLTIuOTJ6Ii8+PC9zdmc+';

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
                aiot_ir_event: 1
            },
            color1: '#44cbc6',
            color2: '#44cbc6',
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
                        code:'mqtt.connect_broker(server=/*{SERVER}*/, port=1883, username=/*{USERNAME}*/, password=/*{PASSWORD}*/)\n'
                    },
                    text: [
                        {
                            default: 'kết nối đến server [SERVER] với username[USERNAME] mật khẩu [PASSWORD]',
                            id: "gui.externalExtension.YoloBitMqttExtension.mqtt_connect_server"
                        }
                    ],
                    arguments: {
                        USERNAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'tài khoản'
                        },
                        PASSWORD: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'mật khẩu'
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
                        imports: 'from mqtt import *\n\n',
                        code:'mqtt.check_message()'
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
                        imports: 'from mqtt import *\n',
                        function: 'def on_mqtt_message_receive_callback__topic_(th_C3_B4ng_tin):\n' +
                                '/*{DO}*/' +
                                '    pass\n',
                        setup: '',
                        code: 'mqtt.on_receive_message(/*{TOPIC}*/, on_mqtt_message_receive_callback__/*{TOPIC}*/_)',
                        loop: ''
                    },
                    text: [
                        {
                            default: 'khi nhận được thông tin từ chủ đề [TOPIC] ',
                            id: 'gui.extension.YoloBitMqttExtension.mqtt_receie_topic'
                        },
                        '[DO]'
                    ],
                    arguments: {    
                        TOPIC: {
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