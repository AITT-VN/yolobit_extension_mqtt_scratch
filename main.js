const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzZweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMzZweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xOCAxNi4wOGMtLjc2IDAtMS40NC4zLTEuOTYuNzdMOC45MSAxMi43Yy4wNS0uMjMuMDktLjQ2LjA5LS43cy0uMDQtLjQ3LS4wOS0uN2w3LjA1LTQuMTFjLjU0LjUgMS4yNS44MSAyLjA0LjgxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDNjMCAuMjQuMDQuNDcuMDkuN0w4LjA0IDkuODFDNy41IDkuMzEgNi43OSA5IDYgOWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM2MuNzkgMCAxLjUtLjMxIDIuMDQtLjgxbDcuMTIgNC4xNmMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjYxIDEuMzEgMi45MiAyLjkyIDIuOTIgMS42MSAwIDIuOTItMS4zMSAyLjkyLTIuOTJzLTEuMzEtMi45Mi0yLjkyLTIuOTJ6Ii8+PC9zdmc+';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitAIoT {

    getInfo () {
        return {
            id: 'YoloBitAIoTExtension',
            parentMode: 'yoloBit',
            name: 'AIoT KIT',
            blockIconURI: iconURL,
            allowBlockTypes: {
                aiot_ir_event: 1
            },
            color1: '#44cbc6',
            color2: '#44cbc6',
            blocks: [
                {
                    opcode: 'dht20_update',
                    rawCode: {
                        imports: 'from aiot_dht20 import DHT20\naiot_dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))\n',
                        code:'aiot_dht20.read_dht20()\n'
                    },
                    text: [
                        {
                            default: 'cập nhật cảm biến nhiệt độ & độ ẩm DHT20',
                            id: "gui.externalExtension.YoloBitAIoTExtension.dht20_update"
                        }
                    ],
                    arguments: {
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'dht20_read_value',
                    rawCode: {
                        imports: 'from aiot_dht20 import DHT20\naiot_dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))\n',
                        code:'aiot_dht20.dht20_/*{VALUE}*/'
                    },
                    text: [
                        {
                            default: '[VALUE] từ cảm biến DHT20',
                            id: "gui.externalExtension.YoloBitAIoTExtension.dht20_read_value"
                        }
                    ],
                    arguments: {
                        VALUE: {
                            menu: 'dht20_value'
                        }
                    },
                    disableMonitor: true,
                    blockType: Scratch.BlockType.NUMBER
                },
                {
                    opcode: 'pir_detected',
                    rawCode: {
                        code:'/*{PIN}*/.read_digital() == 1'
                    },
                    text: [
                        {
                            default: 'cảm biến PIR [PIN] phát hiện có người',
                            id: "gui.externalExtension.YoloBitAIoTExtension.pir_detected"
                        }
                    ],
                    arguments: {
                        PIN: {
                            menu: 'yolobit_pins'
                        }
                    },
                    blockType: Scratch.BlockType.BOOLEAN
                },
                {
                    opcode: 'light_sensor',
                    rawCode: {
                        code:'round(translate((/*{PIN}*/.read_analog()), 0, 4095, 0, 100))'
                    },
                    text: [
                        {
                            default: 'đọc cảm biến ánh sáng (%) chân [PIN]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.light_sensor"
                        }
                    ],
                    arguments: {
                        PIN: {
                            menu: 'yolobit_pins'
                        }
                    },
                    disableMonitor: true,
                    blockType: Scratch.BlockType.NUMBER
                },
                {
                    opcode: 'moisture_sensor',
                    rawCode: {
                        code:'round(translate((/*{PIN}*/.read_analog()), 0, 4095, 0, 100))'
                    },
                    text: [
                        {
                            default: 'đọc độ ẩm đất (%) chân [PIN]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.moisture_sensor"
                        }
                    ],
                    arguments: {
                        PIN: {
                            menu: 'yolobit_pins'
                        }
                    },
                    disableMonitor: true,
                    blockType: Scratch.BlockType.NUMBER
                },
                {
                    opcode: 'init_ultrasonic',
                    rawCode: {
                        imports: 'from aiot_hcsr04 import HCSR04\n',
                        code:'aiot_ultrasonic = HCSR04(trigger_pin=/*{TRI_PIN}*/.pin, echo_pin=/*{EC_PIN}*/.pin)\n'
                    },
                    text: [
                        {
                            default: 'khởi tạo cảm biến khoảng cách với chân trigger [TRI_PIN] chân echo [EC_PIN]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.init_ultrasonic"
                        }
                    ],
                    arguments: {
                        TRI_PIN: {
                            menu: 'yolobit_pins'
                        },
                        EC_PIN: {
                            menu: 'yolobit_pins'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'ultrasonic_read',
                    rawCode: {
                        imports: 'from aiot_hcsr04 import HCSR04\n',
                        code:'aiot_ultrasonic./*{VALUE}*/'
                    },
                    text: [
                        {
                            default: 'đọc cảm biến khoảng cách theo [VALUE]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.ultrasonic_read"
                        }
                    ],
                    arguments: {
                        VALUE: {
                            menu: 'ultrasonic_value'
                        }
                    },
                    disableMonitor: true,
                    blockType: Scratch.BlockType.NUMBER
                },
                {
                    opcode: 'compare_value_ultrasonic',
                    rawCode: {
                        imports: 'from aiot_hcsr04 import HCSR04\n',
                        code:'aiot_ultrasonic.distance_cm() < /*{VALUE}*/'
                    },
                    text: [
                        {
                            default: 'cảm biến khoảng cách đọc được < [VALUE] cm',
                            id: "gui.externalExtension.YoloBitAIoTExtension.compare_value_ultrasonic"
                        }
                    ],
                    arguments: {
                        VALUE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    },                    
                    blockType: Scratch.BlockType.BOOLEAN
                },
                {
                    opcode: 'lcd_backlight',
                    rawCode: {
                        imports: 'from aiot_lcd1602 import LCD1602\naiot_lcd1602 = LCD1602()\n',
                        code:'aiot_lcd1602.backlight_/*{ACTION}*/'
                    },
                    text: [
                        {
                            default: '[ACTION] đèn màn hình LCD1602',
                            id: "gui.externalExtension.YoloBitAIoTExtension.lcd_backlight"
                        }
                    ],
                    arguments: {
                        ACTION: {
                            menu: 'action_backlight'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'lcd_print',
                    rawCode: {
                        imports: 'from aiot_lcd1602 import LCD1602\naiot_lcd1602 = LCD1602()\n',
                        code:"aiot_lcd1602.move_to(/*{X}*/, /*{Y}*/)\naiot_lcd1602.putstr('/*{TEXT}*/')\n"
                    },
                    text: [
                        {
                            default: 'hiện lên LCD1602 [TEXT] tại x[X] y[Y]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.rover_compare_distance"
                        }
                    ],
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'XIN CHAO'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'clear_lcd',
                    rawCode: {
                        code:'aiot_lcd1602.clear()\n'
                    },
                    text: [
                        {
                            default: 'xóa màn hình LCD',
                            id: "gui.externalExtension.YoloBitAIoTExtension.clear_lcd"
                        }
                    ],
                    arguments: {
                       
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'fan_control',
                    rawCode: {
                        code:"/*{PIN}*/.write_analog(round(translate(/*{VALUE}*/, 0, 100, 0, 1023)))\n"
                    },
                    text: [
                        {
                            default: 'bật quạt chân [PIN] với tốc độ (0-100) [VALUE]%',
                            id: "gui.externalExtension.YoloBitAIoTExtension.fan_control"
                        }
                    ],
                    arguments: {                        
                        PIN: {
                            menu: 'yolobit_pins'
                        },
                        VALUE:{
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 70
                        }                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'usb_control',
                    rawCode: {
                        code:"/*{PIN}*/.write_analog(round(translate(/*{VALUE}*/, 0, 100, 0, 1023)))\n"
                    },
                    text: [
                        {
                            default: 'bật cổng USB chân [PIN] mức (0-100) [VALUE]%',
                            id: "gui.externalExtension.YoloBitAIoTExtension.usb_control"
                        }
                    ],
                    arguments: {                        
                        PIN: {
                            menu: 'yolobit_pins'
                        },
                        VALUE:{
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 70
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'relay_control',
                    rawCode: {
                        code:"/*{PIN}*/.write_digital(/*{ACTION}*/)\n"
                    },
                    text: [
                        {
                            default: '[ACTION] relay chân [PIN]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.relay_control"
                        }
                    ],
                    arguments: {                        
                        ACTION: {
                            menu: 'action'
                        },
                        PIN: {
                            menu: 'yolobit_pins'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rgb_led',
                    rawCode: {
                        imports: 'from aiot_rgbled import RGBLed\n tiny_rgb = RGBLed(/*{PIN}*/.pin, 4)',
                        code:"tiny_rgb.show(/*{LED_NUM}*/, hex_to_rgb('/*{COLOR}*/'))"
                    },
                    text: [
                        {
                            default: 'LED RGB chân [PIN] đổi màu led [LED_NUM] thành [COLOR]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.rgb_led"
                        }
                    ],
                    arguments: {                        
                        PIN: {
                            menu: 'yolobit_pins'
                        },
                        LED_NUM: {
                            menu: 'led_num'
                        },
                        COLOR: {
                            menu: 'pick_colors'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'aiot_ir_event',
                    rawCode: {
                        imports: 'from aiot_ir_receiver import *\naiot_ir_rx = IR_RX(Pin(/*{PIN}*/.pin, Pin.IN)); aiot_ir_rx.start();\n',
                        function: 'def on_ir_receive_callback(t_C3_ADn_hi_E1_BB_87u, addr, ext):\n' +
                                '/*{DO}*/' +
                                '    pass\n',
                        setup: 'rover_ir_rx.on_received(on_ir_receive_callback)\n',
                        code: '',
                        loop: ''
                    },
                    text: [
                        {
                            default: 'nếu cảm biến IR [PIN] nhận được tín hiệu từ remote',
                            id: 'gui.extension.YoloBitAIoTExtension.aiot_ir_event'
                        },
                        '[DO]'
                    ],
                    arguments: {    
                        PIN: {
                            menu: 'yolobit_pins'
                        },                    
                        DO: {
                            type: Scratch.ArgumentType.STATEMENT
                        }
                    },
                    disablePreviousStatement: true,
                    disableNextStatement: true,
                    blockType: Scratch.BlockType.CUSTOM
                },
                {
                    opcode: 'aiot_key',
                    rawCode: {
                        code:"IR_REMOTE_/*{KEYS}*/"
                    },
                    text: [
                        {
                            default: 'nút [KEYS]',
                            id: "gui.externalExtension.YoloBitAIoTExtension.aiot_key"
                        }
                    ],
                    arguments: {                        
                        KEYS: {
                            menu: 'pick_keys'
                        }
                    },
                    blockType: Scratch.BlockType.BOOLEAN
                },
                {
                    opcode: 'aiot_press_key',
                    rawCode: {
                        imports: 'from aiot_ir_receiver import *\naiot_ir_rx = IR_RX(Pin(/*{PIN}*/.pin, Pin.IN)); aiot_ir_rx.start();\n',
                        code:"aiot_ir_rx.get_code() == IR_REMOTE_/*{KEYS}*/"
                    },
                    text: [
                        {
                            default: 'cảm biến IR[PIN] đọc được nútnút [KEYS] trên remote',
                            id: "gui.externalExtension.YoloBitAIoTExtension.aiot_press_key"
                        }
                    ],
                    arguments: {                        
                        KEYS: {
                            menu: 'pick_keys'
                        },
                        PIN: {
                            menu: 'yolobit_pins'
                        }
                    },
                    blockType: Scratch.BlockType.BOOLEAN
                },
                {
                    opcode: 'aot_clear_key',
                    rawCode: {
                        code:"aiot_ir_rx.clear_code()\n"
                    },
                    text: [
                        {
                            default: 'xóa tín hiệu đã thu được',
                            id: "gui.externalExtension.YoloBitAIoTExtension.aot_clear_key"
                        }
                    ],
                    arguments: {                        
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                }                
            ],
            menus:{                
                action_backlight: [
                    {
                        text: {
                            default: 'bật',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.onbl'
                        },
                        value: 'on()'
                    },
                    {
                        text: {
                            default:'tắt',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.offbl'
                        },
                        value: 'off()'
                    }
                ],
                dht20_value: [
                    {
                        text: {
                            default: 'nhiệt độ',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.temperature'
                        },
                        value: 'temperature()'
                    },
                    {
                        text: {
                            default:'độ ẩm',
                            id: 'gui.externalExtension.YoloBitRoverExtension.humidity'
                        },
                        value: 'humidity()'
                    }
                ],
                action: [
                    {
                        text: {
                            default: 'bật',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.on'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default:'tắt',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.off'
                        },
                        value: '0'
                    }
                ],
                led_num: [
                    {
                        text: {
                            default: 'tất cả',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.all'
                        },
                        value: '0'
                    },
                    {
                        text: {
                            default:'1',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.one'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default: '2',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.two'
                        },
                        value: '2'
                    },
                    {
                        text: {
                            default:'3',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.three'
                        },
                        value: '3'
                    },
                    {
                        text: {
                            default: '4',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.four'
                        },
                        value: '4'
                    }
                ],
                pick_colors: [
                    {
                        text: {
                            default:'đỏ',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.red'
                        },
                        value: "#ff0000"
                    },
                    {
                        text: {
                            default:'cam',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.orange'
                        },
                        value: "#ffa500"
                    },
                    {
                        text: {
                            default:'vàng',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.yellow'
                        },
                        value: "#ffff00"
                    },
                    {
                        text: {
                            default:'lục',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.green'
                        },
                        value: "#00ff00"
                    },
                    {
                        text: {
                            default:'lam',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.blue'
                        },
                        value: "#0000ff"
                    },
                    {
                        text: {
                            default:'chàm',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.cyan'
                        },
                        value: "#4b0082"
                    },
                    {
                        text: {
                            default:'tím',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.violet'
                        },
                        value: "#800080"
                    },
                    {
                        text: {
                            default:'trắng',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.white'
                        },
                        value: "#ffffff"
                    },
                    {
                        text: {
                            default:'đen',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.black'
                        },
                        value: "#000000"
                    }
                ],
                pick_keys: [
                    {
                        text: {
                            default:'A',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.keyA'
                        },
                        value: "A"
                    },
                    {
                        text: {
                            default:'B',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.keyB'
                        },
                        value: "B"
                    },
                    {
                        text: {
                            default:'C',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.keyC'
                        },
                        value: "C"
                    },
                    {
                        text: {
                            default:'D',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.keyD'
                        },
                        value: "D"
                    },
                    {
                        text: {
                            default:'E',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.keyE'
                        },
                        value: "E"
                    },
                    {
                        text: {
                            default:'F',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.keyF'
                        },
                        value: "F"
                    },
                    {
                        text: {
                            default:'tới',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key_up'
                        },
                        value: "UP"
                    },
                    {
                        text: {
                            default:'lui',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key_down'
                        },
                        value: "DOWN"
                    },
                    {
                        text: {
                            default:'trái',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key_left'
                        },
                        value: "LEFT"
                    },
                    {
                        text: {
                            default:'phải',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key_right'
                        },
                        value: "RIGHT"
                    },
                    {
                        text: {
                            default:'setup',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key_setup'
                        },
                        value: "SETUP"
                    },
                    {
                        text: {
                            default:'0',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key0'
                        },
                        value: "0"
                    },
                    {
                        text: {
                            default:'1',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key1'
                        },
                        value: "1"
                    },
                    {
                        text: {
                            default:'2',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key2'
                        },
                        value: "2"
                    },
                    {
                        text: {
                            default:'3',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key3'
                        },
                        value: "3"
                    },
                    {
                        text: {
                            default:'4',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key4'
                        },
                        value: "4"
                    },
                    {
                        text: {
                            default:'5',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key5'
                        },
                        value: "5"
                    },
                    {
                        text: {
                            default:'6',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key6'
                        },
                        value: "6"
                    },
                    {
                        text: {
                            default:'7',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key7'
                        },
                        value: "7"
                    },
                    {
                        text: {
                            default:'8',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key8'
                        },
                        value: "8"
                    },
                    {
                        text: {
                            default:'9',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.key9'
                        },
                        value: "9"
                    }
                ],
                yolobit_pins: [
                    {
                        text: {
                            default: 'P0',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P0'
                        },
                        value: 'pin0'
                    },
                    {
                        text: {
                            default:'P1',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P1'
                        },
                        value: 'pin1'
                    },
                    {
                        text: {
                            default:'P2',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P2'
                        },
                        value: 'pin2'
                    },
                    {
                        text: {
                            default: 'P3',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P3'
                        },
                        value: 'pin3'
                    },
                    {
                        text: {
                            default:'P4',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P4'
                        },
                        value: 'pin4'
                    },
                    {
                        text: {
                            default:'P5',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P5'
                        },
                        value: 'pin5'
                    },
                    {
                        text: {
                            default: 'P6',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P6'
                        },
                        value: 'pin6'
                    },
                    {
                        text: {
                            default:'P7',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P7'
                        },
                        value: 'pin7'
                    },
                    {
                        text: {
                            default:'P8',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P8'
                        },
                        value: 'pin8'
                    },
                    {
                        text: {
                            default: 'P9',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P9'
                        },
                        value: 'pin9'
                    },
                    {
                        text: {
                            default:'P10',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P10'
                        },
                        value: 'pin10'
                    },
                    {
                        text: {
                            default:'P11',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P11'
                        },
                        value: 'pin11'
                    },
                    {
                        text: {
                            default: 'P12',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P12'
                        },
                        value: 'pin12'
                    },
                    {
                        text: {
                            default:'P13',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P13'
                        },
                        value: 'pin13'
                    },
                    {
                        text: {
                            default: 'P14',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P14'
                        },
                        value: 'pin14'
                    },
                    {
                        text: {
                            default:'P15',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P15'
                        },
                        value: 'pin15'
                    },
                    {
                        text: {
                            default:'P16',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P16'
                        },
                        value: 'pin16'
                    },
                    {
                        text: {
                            default: 'P19',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P19'
                        },
                        value: 'pin19'
                    },
                    {
                        text: {
                            default: 'P20',
                            id: 'gui.externalExtension.YoloBitAIoTExtension.P20'
                        },
                        value: 'pin20'
                    }
                ]
            }
        };
    }
}

Scratch.extensions.register(new Scratch3YoloBitAIoT());