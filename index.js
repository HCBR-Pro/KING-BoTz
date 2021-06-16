console.log('Iniciando bot...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('HCBR-PRo\nWhatsBoT', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`INSCREVA-SE HACKERS _BR, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
function start(file) {
  let args = [path.join(file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
   
        // listening on Incoming Call
        ahmad.onIncomingCall(( async (call) => {
            await ahmad.sendText(call.remoteJid, 'Desculpe, não consigo receber chamadas. call = block!\nSe você quiser abrir um bloco, por favor, converse com Proprietário!')
            .then(() => ahmad.contactBlock(call.peerJid))
        }))    
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
  // console.log(p)
}
start('mrking.js')
