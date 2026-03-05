/* tslint:disable */
/* eslint-disable */

export class Renderer {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    add_card(canvas: HTMLCanvasElement): Promise<void>;
    /**
     * Route an inference request through Genius to the best-suited model.
     */
    classify_intent(prompt: string): string;
    /**
     * Connect to the backend WebSocket server.
     */
    connect(url: string): boolean;
    static create(): Promise<Renderer>;
    /**
     * Check if WebSocket is connected.
     */
    is_connected(): boolean;
    /**
     * Query the superorganism: routes through skill router / inference.
     *
     * Routing decision flow:
     * 1. Check skill router for deterministic pattern match
     * 2. If no skill match, use complexity judge to decide local vs remote
     * 3. Send to appropriate target
     */
    query(prompt: string): string;
    render_frame(): void;
    /**
     * Swap the center card (index 1) to a new card intent.
     */
    swap_card(intent_str: string): void;
    tick(dt_ms: number): void;
    /**
     * Update the center card's string table with workspace data.
     */
    update_card_data(data_json: string): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_renderer_free: (a: number, b: number) => void;
    readonly renderer_add_card: (a: number, b: any) => any;
    readonly renderer_classify_intent: (a: number, b: number, c: number) => [number, number];
    readonly renderer_connect: (a: number, b: number, c: number) => number;
    readonly renderer_create: () => any;
    readonly renderer_is_connected: (a: number) => number;
    readonly renderer_query: (a: number, b: number, c: number) => [number, number];
    readonly renderer_render_frame: (a: number) => void;
    readonly renderer_swap_card: (a: number, b: number, c: number) => void;
    readonly renderer_tick: (a: number, b: number) => void;
    readonly renderer_update_card_data: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__closure__destroy__he4ab2d5a70e59846: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h557b2781242d56e4: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1922ab0c4ae00fa0: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hfeac75565d13acc9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h22935774d5e558f4: (a: number, b: number, c: any) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
