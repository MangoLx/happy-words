import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';

const Home = () => {
  const { name } = useSelector((state: RootState) => state.user);
  return (
    <div>
      Home content: {name}
    </div>
  );
};

export default Home;
