<script context="module">
    const setStorage = async (data) => {
        await localStorage.setItem("@sess", JSON.stringify(data));
        return true;
    };

    const cekStorage = async () => {
        const storage = await localStorage.getItem("@sess");
        if (storage) {
            return storage;
        } else {
            return false;
        }
    };

    const removeStorage = async () => {
        await localStorage.removeItem("@sess");
        return true;
    };

    export { cekStorage, setStorage, removeStorage };
</script>
