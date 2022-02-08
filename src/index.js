import {HeaderComponent} from './components/header.component';
import {NavigationComponent} from './components/navigation.component';
import { CreateComponent } from './components/create.component';
import { FavoriteComponent } from './components/favorite.component';
import { WordsComponent } from './components/words.component';
import { LoaderComponent } from './components/loader.component';

new HeaderComponent('header');
const loader = new LoaderComponent('loader');
const navigation = new NavigationComponent('navigation');
const create = new CreateComponent('create');
const words = new WordsComponent('words',{loader});
const favorite = new FavoriteComponent ('favorite',{loader});

 navigation.registerTabs([
    { name: 'create', component: create },
    { name: 'words', component: words },
    { name: 'favorite', component: favorite },
 ]);

