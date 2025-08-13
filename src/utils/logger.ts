// Log config
const SHOW_DEBUGLOG = true;       // Enable/disable all debug message
const SHOW_LOGINFO = true;        // For informational message
const SHOW_LOGWARNING = false;    // For warning about a process
const SHOW_LOGERROR = true;       // For error message only
const SHOW_LOGDEBUG = true;       // For dummy debug
const SHOW_LOGNOCAT = false;      // For message with non specific category
const SHOW_LOGPROFILER = true;    // For profiling messages

export enum LogCategory {
    INFO,
    WARNING,
    ERROR,
    DEBUG,
    PROFILER
}

// ANSI Colors
class LogColors {
    static HEADER = '\u001b[95m';
    static INFO = '\u001b[94m';      // Blue
    static WARNING = '\u001b[93m';   // Yellow
    static ERROR = '\u001b[91m';     // Red
    static DEBUG = '\u001b[92m';     // Green
    static PROFILER = '\u001b[96m';  // Cyan
    static ENDC = '\u001b[0m';       // End of color
    static BOLD = '\u001b[1m';
    static UNDERLINE = '\u001b[4m';
}

// Log function
export function ERK_LOG(category: LogCategory, message: string, ...args: any[]): void {
    if (!SHOW_DEBUGLOG) {
        return;
    }

    let categoryStr = "";
    let shouldLog = false;
    let colorCode = "";

    switch (category) {
        case LogCategory.INFO:
            categoryStr = "INFO";
            shouldLog = SHOW_LOGINFO;
            colorCode = LogColors.INFO;
            break;
        case LogCategory.WARNING:
            categoryStr = "WARNING";
            shouldLog = SHOW_LOGWARNING;
            colorCode = LogColors.WARNING;
            break;
        case LogCategory.ERROR:
            categoryStr = "ERROR";
            shouldLog = SHOW_LOGERROR;
            colorCode = LogColors.ERROR;
            break;
        case LogCategory.DEBUG:
            categoryStr = "DEBUG";
            shouldLog = SHOW_LOGDEBUG;
            colorCode = LogColors.DEBUG;
            break;
        case LogCategory.PROFILER:
            categoryStr = "PROFILER";
            shouldLog = SHOW_LOGPROFILER;
            colorCode = LogColors.PROFILER;
            break;
        default:
            categoryStr = "UNKNOWN";
            shouldLog = SHOW_LOGNOCAT;
            colorCode = LogColors.ENDC;
    }

    if (shouldLog) {
        const formattedMsg = args.length > 0 ? sprintf(message, ...args) : message;
        const coloredCategory = `${colorCode}[${categoryStr}]${LogColors.ENDC}`;
        console.log(`${coloredCategory} ${formattedMsg}`);
    }
}

// Simple sprintf implementation for TypeScript
function sprintf(format: string, ...args: any[]): string {
    let i = 0;
    return format.replace(/%[sd]/g, () => args[i++].toString());
}

// Example use

/*
ERK_LOG(LogCategory.INFO, "This is an information message");
ERK_LOG(LogCategory.WARNING, "This is a warning message");
ERK_LOG(LogCategory.ERROR, "%s", "Something went wrong");
ERK_LOG(LogCategory.DEBUG, "Debug value: %d", 42);
*/