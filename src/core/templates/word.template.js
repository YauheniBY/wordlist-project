export function renderWord(word, options = {}) {

   const tag = word.type === "words"
     ? '<li class="tag tag-blue tag-rounded">Слово</li>'
     : '<li class="tag tag-rounded">Выражение</li>';
     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
     const condidate = favorites.find(w => w.id === word.id);
     const button = condidate
     ? `<button class="button-round button-small button-danger " data-id = "${word.id}" data-title="${word.title}">Убрать из избранных</button>`
     :`<button class="button-round button-small button-primary " data-id = "${word.id}" data-title="${word.title}">Добавить в избранные</button>`;
     return `
        <div class="panel">
           <div class="panel-head">
              <p class="panel-title">${word.title}</p>
              <ul class="tags">
                 ${tag}
              </ul>
           </div>
           <div class="panel-body">
              <p class="multi-line">${word.translate}</p>
           </div>
           <div class="panel-footer w-panel-footer">
              <small>${word.date}</small>
              ${options.withButton ? button : ""}              
           </div>
           
        </div>
     `
}