import { Component } from "../core/component";
import { apiService } from "../sevices/api.service";
import { TransformService } from "../sevices/transform.service";
import { renderWord } from "../core/templates/word.template";

export class WordsComponent extends Component{
   constructor(id, {loader}){
      super(id);
      this.loader = loader;
   }

   init() {
      this.$el.addEventListener('click', buttonHandler.bind(this))
   }
   
   async onShow() {
      this.loader.show();
      const fbData = await apiService.fetchPosts();
      const words = TransformService.fbObjectToArray(fbData);
      const html = words.map(word => renderWord(word,{withButton : true} ));
      this.$el.insertAdjacentHTML('afterbegin', html.join(' '));
      this.loader.hide();

   } 
   onHide(){
      this.$el.innerHTML = " ";
   }
 
}



function buttonHandler(event) {
   const $el = event.target;
   const id = $el.dataset.id;
   const title = $el.dataset.title;
   if(id) {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []
      const candidate = favorites.find(w => w.id === id)
      if(candidate) {
         $el.textContent = "Добавить в Избранные";
         $el.classList.add('button-primary')
         $el.classList.remove('button-danger')
         favorites = favorites.filter(w => w.id !== id)

      } else {
         $el.textContent = "Убрать из избранных";
         $el.classList.add('button-danger')
         $el.classList.remove('button-primary')
         favorites.push({id, title})
      }

      localStorage.setItem('favorites', JSON.stringify(favorites))

   }
}