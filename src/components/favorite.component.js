import { Component } from "../core/component";
import { apiService } from "../sevices/api.service";
import { renderWord } from "../core/templates/word.template"
export class FavoriteComponent extends Component {
   constructor(id, options) {
      super(id);
      this.loader = options.loader;
   }
   init() {
      this.$el.addEventListener('click', linkClickHandler.bind(this))
   }
   onShow() {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      const html = renderList(favorites);
      this.$el.insertAdjacentHTML('afterbegin',html);
   }
   onHide() {
      this.$el.innerHTML = "";
   }
}
function renderList(list = []) {

   if(list && list.length) {

      return `
      <ul>
         ${list.map( i => `<li><a href="#" class="js-link" data-id="${i.id}">${i.title}</a></li>`).join("")}
      </ul>
      `;
   } 
      return '<p class="center">Вы пока ничего не добавили</p>';
  
}

async function linkClickHandler(event) {
   event.preventDefault();
   if(event.target.classList.contains('js-link')) {
      this.$el.innerHTML = '';
      this.loader.show();
      const wordId = event.target.dataset.id;
      const word = await apiService.fetchPostsById(wordId);
      console.log(word);
      this.loader.hide();
      this.$el.insertAdjacentHTML('afterbegin',renderWord(word, {withButton : false}));
   }


}