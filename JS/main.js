const { createApp } = Vue;

createApp({
	data() {
		return {
			mail: "",
		};
	},

	methods: {
		getRandomMail() {
			for (let i = 0; i < 10; i++) {
				axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
					const randomMail = response.data.response;
					this.mail = randomMail;
				});
			}
		},
	},

	mounted() {
		this.getRandomMail();
	},
}).mount("#app");
