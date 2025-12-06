module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/kwordye/front/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play-circle.mjs [app-ssr] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/list.mjs [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/keyboard.mjs [app-ssr] (ecmascript) <export default as Keyboard>");
(()=>{
    const e = new Error("Cannot find module '@/lib/data'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/AdSpace'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/Footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
;
;
function App() {
    const [currentManga, setCurrentManga] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MOCK_MANGAS[0]);
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [is18Plus, setIs18Plus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animationClass, setAnimationClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Estado para o histórico de leitura
    const [readingHistory, setReadingHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 3,
            title: "One Piece",
            genre: "Adventure",
            color: "from-yellow-400 to-red-500",
            rating: 4.8,
            lastRead: "2m ago"
        },
        {
            id: 7,
            title: "Blue Lock",
            genre: "Sports",
            color: "from-blue-400 to-cyan-500",
            rating: 4.6,
            lastRead: "1h ago"
        },
        {
            id: 2,
            title: "Berserk",
            genre: "Horror",
            color: "from-red-900 to-black",
            rating: 5.0,
            lastRead: "1d ago"
        }
    ]);
    // Filtra os mangás baseados no genero
    const getFilteredMangas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedGenre === 'All') return MOCK_MANGAS;
        return MOCK_MANGAS.filter((m)=>m.genre === selectedGenre);
    }, [
        selectedGenre
    ]);
    // Função para pegar um mangá aleatório
    const randomizeManga = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((direction)=>{
        const filtered = getFilteredMangas();
        let newManga;
        // Evita repetir o mesmo imediatamente se houver opções
        do {
            const randomIndex = Math.floor(Math.random() * filtered.length);
            newManga = filtered[randomIndex];
        }while (filtered.length > 1 && newManga.id === currentManga.id)
        // Animação simples
        setAnimationClass(direction === 'next' ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0');
        setTimeout(()=>{
            setCurrentManga(newManga);
            setAnimationClass(direction === 'next' ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0');
            requestAnimationFrame(()=>{
                setAnimationClass('translate-x-0 opacity-100');
            });
        }, 150);
    }, [
        currentManga,
        getFilteredMangas
    ]);
    // Função chamada ao clicar em "Read Now"
    const handleReadNow = ()=>{
        setReadingHistory((prev)=>{
            const filtered = prev.filter((m)=>m.id !== currentManga.id);
            return [
                {
                    ...currentManga,
                    lastRead: "Just now"
                },
                ...filtered
            ];
        });
        alert(`Starting ${currentManga.title}...`);
    };
    // Hook para Teclado
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'ArrowRight') randomizeManga('next');
            if (e.key === 'ArrowLeft') randomizeManga('prev');
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        randomizeManga
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#09090b] text-white flex flex-col font-sans overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#09090b] to-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSpace, {
                    position: "left"
                }, void 0, false, {
                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col relative w-full max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                            is18Plus: is18Plus,
                            setIs18Plus: setIs18Plus
                        }, void 0, false, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col lg:flex-row justify-center items-start gap-6 p-4",
                            children: [
                                "import HistorySidebar from '@/components/HistorySidebar';",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HistorySidebar, {
                                    readingHistory: readingHistory
                                }, void 0, false, {
                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center max-w-md w-full shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 bg-amber-950/30 border border-amber-600/30 p-1.5 rounded-xl flex items-center shadow-[0_0_15px_rgba(217,119,6,0.1)] backdrop-blur-md relative z-20 hover:border-amber-500/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-amber-900/40 p-1.5 rounded-lg mr-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                        size: 14,
                                                        className: "text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-amber-200 uppercase tracking-widest font-bold mr-2",
                                                    children: "Filter Genre:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedGenre,
                                                            onChange: (e)=>setSelectedGenre(e.target.value),
                                                            className: "appearance-none bg-[#1c1c26] text-amber-100 text-xs px-4 py-1.5 rounded-lg border border-amber-700/50 outline-none focus:border-amber-500 cursor-pointer font-bold pr-8 hover:bg-[#252532] transition-colors shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "All",
                                                                    children: "All Genres"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 119,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Action",
                                                                    children: "Action"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 120,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Romance",
                                                                    children: "Romance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 121,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Horror",
                                                                    children: "Horror"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 122,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Adventure",
                                                                    children: "Adventure"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 123,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Sports",
                                                                    children: "Sports"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 124,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-amber-500 group-hover:text-amber-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "fill-current h-3 w-3",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 127,
                                                                    columnNumber: 114
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                lineNumber: 127,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6 w-full justify-center relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>randomizeManga('prev'),
                                                    className: "p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition backdrop-blur-sm lg:hidden z-10",
                                                    "aria-label": "Previous Manga",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        size: 32
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-64 md:w-80 aspect-[2/3] transition-all duration-300 transform ${animationClass} z-0`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `absolute -inset-6 bg-gradient-to-br ${currentManga.color} opacity-30 blur-3xl rounded-[3rem]`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-full w-full bg-[#12121a] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer hover:scale-[1.02] transition-transform duration-300 flex flex-col ring-1 ring-white/5 hover:ring-blue-500/30",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `h-[62%] w-full bg-gradient-to-br ${currentManga.color} flex items-center justify-center relative p-6 overflow-hidden`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3W3.org/2000/svgIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgNCA0Ij48cGF0aCBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4xIiBkPSJNMSAzaDF2MUgxVjN6bTItMmgxdjFIM1YxeiIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                            lineNumber: 154,
                                                                            columnNumber: 24
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-full h-full border-4 border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-white/30 text-5xl font-black -rotate-12 select-none drop-shadow-lg",
                                                                                children: "COVER"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                                lineNumber: 156,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                            lineNumber: 155,
                                                                            columnNumber: 24
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-4 right-4 bg-black/70 backdrop-blur-xl text-yellow-400 px-3 py-1.5 rounded-lg flex items-center gap-1 font-extrabold text-sm shadow-lg border border-yellow-500/20",
                                                                            children: [
                                                                                "★ ",
                                                                                currentManga.rating
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                            lineNumber: 160,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 152,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-[38%] p-5 flex flex-col justify-between bg-[#0e0e14] relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                            lineNumber: 167,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                    className: "text-2xl md:text-3xl font-black text-white mb-2 truncate leading-tight drop-shadow-sm",
                                                                                    children: currentManga.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                                    lineNumber: 170,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] font-bold px-2.5 py-1 bg-gray-800/80 rounded-md text-gray-300 uppercase tracking-wider border border-gray-700/50 shadow-sm",
                                                                                            children: currentManga.genre
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                                            lineNumber: 172,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] font-bold px-2.5 py-1 bg-blue-900/30 rounded-md text-blue-300 uppercase tracking-wider border border-blue-700/30 shadow-sm",
                                                                                            children: "Vol. 1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                                            lineNumber: 175,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                                    lineNumber: 171,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                            lineNumber: 169,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: handleReadNow,
                                                                            className: "w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white py-3 rounded-xl font-bold text-base transition flex items-center justify-center gap-2 mt-3 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                                                    size: 18,
                                                                                    className: "text-black fill-black"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                                    lineNumber: 185,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "Read Now"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                            lineNumber: 181,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 166,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 150,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>randomizeManga('next'),
                                                    className: "p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition backdrop-blur-sm lg:hidden z-10",
                                                    "aria-label": "Next Manga",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 32
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex flex-col w-48 shrink-0 bg-[#13131f] border border-[#2a2a40] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] relative overflow-hidden h-fit mt-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-purple-500/50 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 207,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-purple-300 mb-4 pb-2 border-b border-purple-900/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-extrabold uppercase tracking-widest",
                                                    children: "Controls"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 209,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#1a1a25] p-3 rounded-xl border border-purple-500/20 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 mb-2 font-bold uppercase",
                                                            children: "Shuffle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                    className: "bg-[#2a2a35] px-2 py-1 rounded-md border-b-2 border-gray-700 text-gray-200 font-mono text-sm shadow-sm",
                                                                    children: "←"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 218,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "or"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 219,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                    className: "bg-[#2a2a35] px-2 py-1 rounded-md border-b-2 border-gray-700 text-gray-200 font-mono text-sm shadow-sm",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                                    lineNumber: 220,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#1a1a25] p-3 rounded-xl border border-purple-500/20 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 font-bold uppercase",
                                                            children: "Pro Tip"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 224,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500 mt-1 leading-tight",
                                                            children: "Use arrow keys for instant randomized discovery."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                            lineNumber: 225,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                                    lineNumber: 223,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                                            lineNumber: 214,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                            fileName: "[project]/Documents/kwordye/front/app/page.js",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSpace, {
                    position: "right"
                }, void 0, false, {
                    fileName: "[project]/Documents/kwordye/front/app/page.js",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/kwordye/front/app/page.js",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/kwordye/front/app/page.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon$1,
    "toKebabCase",
    ()=>toKebabCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-ssr] (ecmascript)");
;
;
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
            ref,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: `lucide lucide-${toKebabCase(iconName)}`,
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
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
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play-circle.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>PlayCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const PlayCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("PlayCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polygon",
        {
            points: "10 8 16 12 10 16 10 8",
            key: "1cimsy"
        }
    ]
]);
;
 //# sourceMappingURL=play-circle.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play-circle.mjs [app-ssr] (ecmascript) <export default as PlayCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/play-circle.mjs [app-ssr] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-left.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/list.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>List
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const List = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("List", [
    [
        "line",
        {
            x1: "8",
            x2: "21",
            y1: "6",
            y2: "6",
            key: "7ey8pc"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "21",
            y1: "12",
            y2: "12",
            key: "rjfblc"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "21",
            y1: "18",
            y2: "18",
            key: "c3b1m8"
        }
    ],
    [
        "line",
        {
            x1: "3",
            x2: "3.01",
            y1: "6",
            y2: "6",
            key: "1g7gq3"
        }
    ],
    [
        "line",
        {
            x1: "3",
            x2: "3.01",
            y1: "12",
            y2: "12",
            key: "1pjlvk"
        }
    ],
    [
        "line",
        {
            x1: "3",
            x2: "3.01",
            y1: "18",
            y2: "18",
            key: "28t2mc"
        }
    ]
]);
;
 //# sourceMappingURL=list.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/list.mjs [app-ssr] (ecmascript) <export default as List>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/list.mjs [app-ssr] (ecmascript)");
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/keyboard.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * lucide-react v0.0.1 - ISC
 */ __turbopack_context__.s([
    "default",
    ()=>Keyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const Keyboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Keyboard", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            ry: "2",
            key: "15u882"
        }
    ],
    [
        "path",
        {
            d: "M6 8h.001",
            key: "1ej0i3"
        }
    ],
    [
        "path",
        {
            d: "M10 8h.001",
            key: "1x2st2"
        }
    ],
    [
        "path",
        {
            d: "M14 8h.001",
            key: "1vkmyp"
        }
    ],
    [
        "path",
        {
            d: "M18 8h.001",
            key: "kfsenl"
        }
    ],
    [
        "path",
        {
            d: "M8 12h.001",
            key: "1sjpby"
        }
    ],
    [
        "path",
        {
            d: "M12 12h.001",
            key: "al75ts"
        }
    ],
    [
        "path",
        {
            d: "M16 12h.001",
            key: "931bgk"
        }
    ],
    [
        "path",
        {
            d: "M7 16h10",
            key: "wp8him"
        }
    ]
]);
;
 //# sourceMappingURL=keyboard.mjs.map
}),
"[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/keyboard.mjs [app-ssr] (ecmascript) <export default as Keyboard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keyboard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$kwordye$2f$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/kwordye/front/node_modules/lucide-react/dist/esm/icons/keyboard.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f90bdec7._.js.map