import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mixin(
    {
        data() {
            return {
                cards: [
                    {
                        id: "432984728397",
                        holder: "Bitcoin bandit",
                        vendor: "bitcoin",
                        number: "XXXXYYYYZZZZFFFF",
                        validMonth: "12",
                        validYear: "5"
                    },
                    {
                        id: "434556454765",
                        holder: "Pelle Svanslos",
                        vendor: "evil",
                        number: "XXXXYYYYZZZZFFFF",
                        validMonth: "10",
                        validYear: "6"
                    },
                    {
                        id: "756294622974",
                        holder: "Mickey Mouse",
                        vendor: "ninja",
                        number: "XXXXYYYYZZZZFFFF",
                        validMonth: "01",
                        validYear: "4"
                    },
                    {
                        id: "622344427894",
                        holder: "Donald Duck",
                        vendor: "blockchain",
                        number: "XXXXYYYYZZZZFFFF",
                        validMonth: "07",
                        validYear: "2"
                    },
                    
                ]
            }
        }
    }).mount('#app')
