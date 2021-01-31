<script>
    const connection = new WebSocket("ws://localhost:8080");

    connection.onmessage = (event) => {
        let data = JSON.parse(event.data);
        if (data.idPenerima == 1) {
            let li = document.createElement("li");
            li.innerText = data.message;
            li.id = data.message;
            document.querySelector("#chat").append(li);
        }
    };

    function handleSubmit() {
        let message = document.querySelector("#message").value;
        let pesan = {
            idPengirim: 1,
            idPenerima: 2,
            message: message,
        };
        connection.send(JSON.stringify(pesan));
        document.querySelector("#message").value = "";
    }

    const clearChat = () => {
        var list = document.querySelector("#chat");
        if (list.childNodes.length > 0) {
            list.removeChild(list.childNodes[0]);
        }
    };
</script>

<main>
    <ul id="chat" />

    <form>
        <textarea rows="8" cols="80" id="message" />
        <br />
        <button type="button" on:click={handleSubmit}>Send</button>
        <button type="button" on:click={() => clearChat()}>Delete Chat</button>
    </form>
</main>
