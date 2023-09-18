const cdn = "https://cdn.jsdelivr.net/npm/sudu-editor-tmp@0.0.8-beta20"
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

export async function setEditorDiffText(elementId, text1, text2, language) {
    let workerUrl = URL.createObjectURL(workerBlob);
    const diff = await editorApi.newCodeDiff({containerId: elementId, workerUrl: workerUrl});
    URL.revokeObjectURL(workerUrl);
    const model1 = editorApi.newTextModel(text1, language);
    const model2 = editorApi.newTextModel(text2, language);
    diff.setLeftModel(model1);
    diff.setRightModel(model2);
    diff.setReadonly(false)
}
