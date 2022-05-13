// CONSEGNA: Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue (
    {
        el: '#root',
        data: {
            email: '',
            mailArray: [],
        },
        created() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail',{
            }) 
            .then((resp) => {
            this.email = resp.data.response;
            })
        },
        methods: {
            generateMail(resp) {
                for(let i = 0; mailArray.length = 10; i++) {
                    this.mailArray.push(this.email)
                }
            }
        }
    }
)

//EXAMPLE
// const app = new Vue(
    // {
        // el: '#root',
        // data: {
            // number: null
        // },
        // created() {
            // this.generateNumber();
        // },
        // methods: {
            // generateNumber() {
                // axios
                // .get('https://ﬂynn.boolean.careers/exercises/api/random/int')
                // .then((resp) => {
                    // this.number = resp.data.response;
                // });
            // }
        // }
    // }
// ) 