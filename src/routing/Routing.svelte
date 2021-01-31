<script>
    import { Router, Link, Route } from "svelte-routing";
    import App from "../App.svelte";
    import Login from "../pages/login/Login.svelte";
    import Clients from "../pages/Clients.svelte";

    export let url = "";
</script>

<Router {url}>
    <!-- <nav>
        <Link to="/">Home</Link>
        <Link to="chat">Chat</Link>
    </nav> -->
    <div>
        <Route path="/"><Login /></Route>
        <Route path="/home"><App /></Route>
        <Route path="/chat"><Clients /></Route>
    </div>
</Router>
