const cdn = "https://cdn.jsdelivr.net/npm/sudu-editor-tmp@0.0.8-beta19"
const editorJs = "/src/editor.js";
const workerJS = "/src/worker.js"

const ep = import(cdn + editorJs)
const wp = fetch(cdn + workerJS).then(r => r.blob());

const editorApi = await ep;
const workerBlob = await wp;

export async function setEditorText(elementId, text, language) {
    let workerUrl = URL.createObjectURL(workerBlob);
    const editor = await editorApi.newEditor({containerId: elementId, workerUrl: workerUrl});
    URL.revokeObjectURL(workerUrl);
    const model = editorApi.newTextModel(text, language);
    editor.setModel(model)
}
