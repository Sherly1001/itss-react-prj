import { useStore } from '../store';

import './Header.scss';

const Header = ({ className }) => {
  window['sher'] = useStore();

  return <div className={'header ' + className}>
    <div class =" topic"><b class="font">ユーアールエルを省略するウェブサイト</b></div>
  </div>;
};

export default Header;
