import { useStore } from '../store';

const Header = ({ className }) => {
  window['sher'] = useStore();

  return <div className={'header ' + className}>Header</div>;
};

export default Header;
