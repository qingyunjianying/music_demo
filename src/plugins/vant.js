import Vue from 'vue'
import { NavBar, Button } from "vant";
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Col, Row } from 'vant';
import { Icon } from 'vant';
import { Lazyload } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Image as VanImage } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(VanImage);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Lazyload);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);