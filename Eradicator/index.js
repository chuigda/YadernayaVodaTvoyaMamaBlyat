const axios = require('axios')
const readline = require('readline')

const CONSOLE = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const readLine = (query) => {
    return new Promise((resolve, reject) => {
        CONSOLE.question(query, (answer) => {
            resolve(answer)
        })
    })
}

let sessionData = null
let csrf = null

const setCsrf = async (parts) => {
    if (parts.length != 2) {
        throw "csrf 需要一个参数"
    }
    csrf = parts[1]
}

const setSession = async (parts) => {
    if (parts.length != 2) {
        throw "session 需要一个参数"
    }
    sessionData = parts[1]
}

const censor = async (parts) => {
    if (parts.length != 2) {
        throw "censor 需要一个参数"
    }

    const result = await axios({
        method: 'get',
        url: 'https://http://api.bilibili.com/x/v2/reply',
        headers: {

        },
        params: {
            type: 1,
            oid: parts[1],
            sort: 1,
            nohot: 1,
            pn: 1,
            ps: 49
        }
    })
    console.log(result)
}

const application_start = async () => {
    while (true) {
        const line = await readLine("> ")
        const parts = line.split(' ')
        switch (parts[0]) {
            case 'csrf':
                try {
                    await setCsrf(parts)
                } catch (e) {
                    console.log('设置 csrf 失败: ', e)
                }
                break
            case 'session':
                try {
                    await setSession(parts)
                } catch (e) {
                    console.log('设置 session 失败: ', e)
                }
                break
            case 'censor':
                try {
                    await censor(parts)
                } catch (e) {
                    console.log('审查失败: ', e)
                }
                break
            case 'eradicate':
                try {
                    await eradicate(parts)
                } catch (e) {
                    console.log('肃清失败: ', e)
                }
                break
            default:
                console.log(`“${parts[0]}” 不是内部或外部命令，也不是可运行的程序\n或批处理文件`)
        }
    }
    return 0
}

application_start().then(() => {})
