type LogLevel = "debug" | "info" | "warn" | "error"

const logMessage = (level: LogLevel, ...args: any[]) => {
    if (import.meta.env.DEV){
        const timestamp = new Date().toISOString()
        const prefix = `${timestamp} [${level.toUpperCase()}]:`
    
        const methods: Record<LogLevel, (...args: any[]) => void> = {
            error: console.error,
            warn: console.warn,
            info: console.info,
            debug: console.debug || console.log,
        }
        methods[level](prefix, ...args)
    }
}

const log = {
    debug: (...args: any[]) => logMessage('debug', ...args),
    info: (...args: any[]) => logMessage('info', ...args),
    warn: (...args: any[]) => logMessage('warn', ...args),
    error: (...args: any[]) => logMessage('error', ...args),
}

export default log