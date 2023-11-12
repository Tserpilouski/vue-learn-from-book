const submissionComponent = {};

const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  methods: {
    upvote(submissionID) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionID
      );
      submission.votes++;
    },
  },
};

Vue.createApp(upvoteApp).mount("#app");
