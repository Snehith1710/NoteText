const TextArea = document.getElementById("content");
const openfile = document.getElementById("open");
const savefile = document.getElementById("save");
let fileHandle;

const open = async () => {
  [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getfile();
  const contents = await file.text();
  TextArea.value = contents;
};

const save = async () => {
  try {
    const handle = await window.showSaveFilePicker({
      types: [{ accept: { "text/plain": [".txt"] } }],
    });
    const writable = await handle.createwritable();
    await writable.write(content);
    await writable.close();
    return handle;
  } catch (err) {
    console.error(err.name);
  }
};

openfile.addEventListener("click", () => open());
savefile.addEventListener("click", () => save(TextArea.value));
