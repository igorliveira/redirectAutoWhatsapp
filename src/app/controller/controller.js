const repository = require('../repositories/repository');

class tcfController {
    async redirectWhatsapp (req, res) {
        const contacts = await repository.findAll();
        console.log(contacts)
        const rand = Math.floor(Math.random()*contacts.length);
        const sortContact = contacts[rand];
        console.log(sortContact.contato);
        res.redirect('https://wa.me/' + sortContact.contato + '?text=Olá%21+Gostaria+de+me+consultar+com+uma+advogada');
    }

    async getAllContacts (req, res) {
        const contacts = await repository.findAll();
        return res.status(200).json(contacts);
    }

    async addContact (req, res) {
        const { contato } = req.body;
        const contactExist = await repository.findContact(contato);
        console.log(contactExist)
        if (contactExist == "") {
            const contacts = await repository.addContact(contato);
            return res.status(200).send("Contato adicionado com sucesso")
        }
        return res.status(400).send("Contato já existe!")
    }

    async deleteContact (req, res) {
        const { contato } = req.body;
        const contactExist = await repository.findContact(contato);
        if (contactExist != "") {
            const contacts = await repository.deleteContact(contato);
            return res.status(200).send("Contato excluído com sucesso")
        }
        return res.status(400).send("Contato não existe!")
    }
}

module.exports = new tcfController();
