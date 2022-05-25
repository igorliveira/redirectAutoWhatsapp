const { Router } = require('express');
const router = Router();

const tcf = require('./app/controller/controller')

router.get('/tcf/whatsapp', tcf.redirectWhatsapp);
router.get('/tcf/contacts', tcf.getAllContacts);
router.post('/tcf/addContact', tcf.addContact)
router.delete('/tcf/deleteContact', tcf.deleteContact)

module.exports = router;
