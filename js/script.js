/**
 * ===================== PRINCIPAIS OBJETOS  =======================
 */

 let addNote = document.querySelector('#add-note');//Botão de para adicionar nota
 let closeModal = document.querySelector('#close-modal'); //fechar janela modal com os detalhes da nota.
 let modal = document.querySelector('#modal'); //Modal para edição das notas
 let modalView = document.querySelector('#modal-view'); //Modal para exibição dos detalhes da nota
 let notes = document.querySelector('#notes');//Lista divs com dados das notas
 let btnSaveNote = document.querySelector("#btn-save-note"); //icone para salvar nota
 let btnCloseNote = document.querySelector("#btn-close-note");//icone para fechar modal de edição de nota.

 /**
  * =================== EVENTOS ====================
  */
 addNote.addEventListener("click", (evt)=>{
   evt.preventDefault();
   console.log("oi");
   notes.style.display = "none";
   modal.style.display = "block";
   addNote.style.display = "none";
 })

 btnCloseNote.addEventListener("click", (evt)=>{
   evt.preventDefault();
   notes.style.display = "flex";
   modal.style.display = "none";
   addNote.style.display = "block";
 })

 btnSaveNote.addEventListener("click", (evt)=>{
   evt.preventDefault();
   let data = { 
      id:document.querySelector("#input-id").value,
      title:document.querySelector("#input-title").value,
      content:document.querySelector("#input-content").value, //nessas tres linhas, estamos criando tres atributos para nosso objeto "data", o titulo, o texto dentro e a ID.
   }

   saveNote (data);

 })

 /**
  * ===========================FUNÇÕES============================
  */

 const saveNote = (note) =>{

   let notes = loadNotes(); 
   note.lasTime = new Date().getTime(); //aqui estamos pegando o tempo (com base em um sistema que vai contando os segundos ano após ano) para usar mais tarde

   if(note.id.length > 0){ //aqui estamos verificando se o id esta vazio ou não

   }
   else{ //aqui se o id estiver vazio, iremos dar um id para ele com base no tempo
      note.id = new Date().getTime();
   }

   notes.push(note); //coloca no fim do vetor, lembrando esse vetor esta conosco em forma de atributo de um objeto
   notes = JSON.stringify(notes); //aqui, transformamos em string (era um objeto) para podermos usar de fato no site
   console.log(note.lasTimes); 
   localStorage.setItem('notes', notes) //aqui, após transformarmos em string, iremos enviar para o localStorage o veto cujo acabamos de adicionar um item

 };

const loadNotes = () => {
   let notes = localStorage.getItem('notes'); //aqui estamos puxando do localstorage e colocando na variavel notes
   console.log(notes);
   if(!notes){ //aqui estamos verificando se esta nulo, caso esteja, vamos criar um novo vetor vazio na variavel notes, se não estiver nulo, vamos para o passo abaixo
      notes = [];
   }
   else{
      notes=JSON.parse(notes); //aqui estamos tranformando o item que estava como string no localStorage em objeto
   }
   return notes;
}


