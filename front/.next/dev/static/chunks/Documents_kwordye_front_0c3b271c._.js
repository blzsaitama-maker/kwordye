(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/kwordye/front/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/check-circle.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/loader-2.mjs [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client'; // <--- ESTA LINHA CORRIGE O ERRO
;
;
function App() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Simulação da chamada ao Backend Python
    const testEndpoint = ()=>{
        setLoading(true);
        setResponse(null);
        // Num cenário real, aqui você faria: fetch('http://localhost:8000/api/v1/status')
        setTimeout(()=>{
            setLoading(false);
            setResponse({
                message: "Bem-vindo à API de mangá Kwordye!",
                timestamp: new Date().toISOString(),
                server: "kwordye-python-backend",
                status: 200
            });
        }, 800);
    };
    // Função para colorir o JSON (Syntax Highlighting simples)
    const renderJson = (json)=>{
        if (!json) return null;
        const jsonString = JSON.stringify(json, null, 2);
        return jsonString.split('\n').map((line, i)=>{
            const parts = line.split(':');
            if (parts.length > 1) {
                // Tenta colorir chave e valor
                const key = parts[0];
                const val = parts.slice(1).join(':');
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-violet-400",
                            children: [
                                key,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-400",
                            children: val
                        }, void 0, false, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                    lineNumber: 38,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-yellow-300",
                children: line
            }, i, false, {
                fileName: "[project]/Documents/kwordye/front/app/page.js",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-[#0f172a] text-slate-200 font-sans selection:bg-violet-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        className: "text-violet-400 w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-xl tracking-tight text-white",
                                        children: [
                                            "Kwordye",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-violet-400",
                                                children: "API"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 59,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline space-x-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-violet-400 font-medium hover:text-violet-300 transition-colors",
                                            children: "Início"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#docs",
                                            className: "text-slate-300 hover:text-white transition-colors",
                                            children: "Documentação"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#status",
                                            className: "text-slate-300 hover:text-white transition-colors",
                                            children: "Estado do Sistema"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium shadow-lg shadow-violet-900/20",
                                            children: "Obter Chave API"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/kwordye/front/app/page.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8 animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative flex h-2 w-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 85,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative inline-flex rounded-full h-2 w-2 bg-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 86,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                "API Online v1.0.0"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl md:text-6xl font-bold leading-tight text-white",
                                            children: [
                                                "Acesso ilimitado ao mundo do ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 92,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent",
                                                    children: "Mangá Digital"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-lg max-w-xl leading-relaxed",
                                            children: "A API Kwordye fornece dados rápidos e fiáveis sobre milhares de títulos, capítulos e autores. Construída com Python e Google Cloud Platform para máxima performance."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: testEndpoint,
                                                    className: "px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2 active:scale-95 transform duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            className: "w-5 h-5 fill-current"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Testar Endpoint"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transform duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 110,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Ler Docs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl border border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-900/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-3 h-3 rounded-full bg-red-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 121,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-3 h-3 rounded-full bg-yellow-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 122,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-3 h-3 rounded-full bg-green-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 123,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 120,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-500 font-mono",
                                                            children: "GET /api/v1/status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 font-mono text-sm overflow-x-auto min-h-[200px] flex flex-col justify-center",
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-400 flex items-center justify-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "animate-spin w-5 h-5 text-violet-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 131,
                                                                columnNumber: 23
                                                            }, this),
                                                            "A conectar ao Python backend..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this) : response ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-sm",
                                                        children: renderJson(response)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-600",
                                                                children: '// Clica em "Testar Endpoint" para simular o request'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 140,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 141,
                                                                columnNumber: 23
                                                            }, this),
                                                            `{`,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this),
                                                            "  ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-violet-400",
                                                                children: '"status"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 144,
                                                                columnNumber: 35
                                                            }, this),
                                                            ": ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-300",
                                                                children: '"waiting"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 144,
                                                                columnNumber: 86
                                                            }, this),
                                                            ",",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 145,
                                                                columnNumber: 23
                                                            }, this),
                                                            "  ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-violet-400",
                                                                children: '"message"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 146,
                                                                columnNumber: 35
                                                            }, this),
                                                            ": ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-300",
                                                                children: '"À espera de pedido..."'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 146,
                                                                columnNumber: 87
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this),
                                                            `}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce",
                                            style: {
                                                animationDuration: '3s'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                                                    className: "w-8 h-8",
                                                    alt: "GCP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Powered by"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-sm text-white",
                                                            children: "Google Cloud"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 159,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "status",
                        className: "bg-slate-900/50 border-y border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4 text-violet-400 group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-2 text-white",
                                                children: "Mangás Indexados"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-mono font-bold text-white",
                                                children: "12,405"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 mt-2",
                                                children: "+125 adicionados hoje"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-2 text-white",
                                                children: "Latência Média"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-mono font-bold text-white",
                                                children: "45ms"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 mt-2",
                                                children: "Otimizado globalmente"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-2 text-white",
                                                children: "Uptime"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-mono font-bold text-white",
                                                children: "99.9%"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 mt-2",
                                                children: "Últimos 30 dias"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/kwordye/front/app/page.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-slate-900 border-t border-slate-800 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2025 Kwordye Manga API. Todos os direitos reservados."
                        }, void 0, false, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mt-2",
                            children: "Projeto: WhatKindOfReadingDoYouEnjoy"
                        }, void 0, false, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/kwordye/front/app/page.js",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/kwordye/front/app/page.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(App, "m9xrKMILSrtIbkWJVODwnBWlyOI=");
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/kwordye/front/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/kwordye/front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/kwordye/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/kwordye/front/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon$1,
    "toKebabCase",
    ()=>toKebabCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-client] (ecmascript)");
;
;
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
            ref,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: `lucide lucide-${toKebabCase(iconName)}`,
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
            ...(Array.isArray(children) ? children : [
                children
            ]) || []
        ]));
    Component.displayName = `${iconName}`;
    return Component;
};
var createLucideIcon$1 = createLucideIcon;
;
 //# sourceMappingURL=createLucideIcon.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Play
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Play", [
    [
        "polygon",
        {
            points: "5 3 19 12 5 21 5 3",
            key: "191637"
        }
    ]
]);
;
 //# sourceMappingURL=play.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>FileCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const FileCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("FileCode", [
    [
        "path",
        {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "m10 13-2 2 2 2",
            key: "17smn8"
        }
    ],
    [
        "path",
        {
            d: "m14 17 2-2-2-2",
            key: "14mezr"
        }
    ]
]);
;
 //# sourceMappingURL=file-code.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript) <export default as FileCode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Database
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const Database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Database", [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }
    ],
    [
        "path",
        {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }
    ]
]);
;
 //# sourceMappingURL=database.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript) <export default as Database>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Database",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Zap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Zap", [
    [
        "polygon",
        {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }
    ]
]);
;
 //# sourceMappingURL=zap.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/check-circle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>CheckCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const CheckCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CheckCircle", [
    [
        "path",
        {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
            key: "g774vq"
        }
    ],
    [
        "polyline",
        {
            points: "22 4 12 14.01 9 11.01",
            key: "6xbx8j"
        }
    ]
]);
;
 //# sourceMappingURL=check-circle.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/check-circle.mjs [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/check-circle.mjs [app-client] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/loader-2.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Loader2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const Loader2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Loader2", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
;
 //# sourceMappingURL=loader-2.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/loader-2.mjs [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/loader-2.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_kwordye_front_0c3b271c._.js.map