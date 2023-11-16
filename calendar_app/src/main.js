import { createApp } from "vue";
import App from "../src/app/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrash, faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPencil, faCheck);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
