document.addEventListener("DOMContentLoaded", function(){
    //evento acionado quando  DOM é totalmente carregado
    const contactForm = document.getElementById("contact-form");
    const contactList = document.getElementById("contact-list");
    const filterInput = document.getElementById("filter");
    const contacts = [];

    contactForm.addEventListener("submit", function (e){
        e.preventDefault();
        //impede o carregamento padrão de recarregar a página após o envio do formulário.

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        // valores dos campos de entrada do formulário
        const contact = {name, email, phone };

        contacts.push(contact);

        updateContactList();
        contactForm.reset();
    });

    filterInput.addEventListener("input", function(){
        updateContactList();
        // Quando houver entrada no campo de filtro, atualizamos a lista de contatos com base no termo de pesquisa.
    });

    function updateContactList(){
        const searchTerm = filterInput.value.toLowerCase();
        // Obtemos o valor do campo de filtro e o convertemos para minúsculas para facilitar a comparação.

        contactList.innerHTML = "";

        contacts.forEach((contact)=> {
            if (contact.name.toLowerCase().includes(searchTerm)){
                //verificamos se o nome de contato contém o termo de pesquisa
                const li = document.createElement("li");

                li.innerHTML = `
                    <strong>${contact.name}</strong><br>
                    Email: ${contact.email}<br>
                    Telefone: ${contact.phone}
                `;
                // Preenchemos o <li> com as informações do contato.

                contactList.appendChild(li);
            }
        });
    }
});
