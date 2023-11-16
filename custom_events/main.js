const inputComponent = {
  emits: ["add-note"],
  template: `<input :placeholder="placeholder" v-model="input" @keyup.enter="monitorEnterKey" class="input is-small" type="text" />`,
  props: ["placeholder"],
  data() {
    return {
      input: "",
    };
  },
  methods: {
    monitorEnterKey() {
      this.$emit("add-note", {
        note: this.input,
        timestamps: new Date().toLocaleString(),
      });
      this.input = "";
    },
  },
};

const app = {
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
    };
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamps);
    },
  },
  components: {
    "input-component": inputComponent,
  },
};

Vue.createApp(app).mount("#app");
